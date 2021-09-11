import echarts from 'echarts';
import { getFYDataFromSina } from '@/api';
import fsUtils from '@/utils/fs-util';

const LuoheMap = {
  initalECharts: async (EchartDom, netValid, acctCode) => {
    let result = false;
    echarts.registerMap('henan', henanJson);
    const myChart = echarts.init(EchartDom, 'dark');
    try {
      result = LuoheMap.fetchData(netValid, myChart);
      return result;
    } catch (err) {
      console.error('initalECharts err', err);
      return false;
    }
  },
  fetchData: async (netValid, myChart) => {
    try {
      let fydata, option, isFileExist;
      try {
        await fsUtils.fileStat('src/static/fydata.json');
        isFileExist = true;
      } catch (err) {
        isFileExist = false;
      }
      console.log('fydata.json exits?---', isFileExist);
      if (localStorage.lastFetchFyDate === new Date().toDateString() && isFileExist) {
        fydata = await getFYDataFromSina(false);
      } else {
        fydata = await getFYDataFromSina(netValid);
        localStorage.lastFetchFyDate = new Date().toDateString();
        if (fydata) {
          fsUtils.writeFile('src/static/fydata.json', JSON.stringify(fydata));
        }
      }
      console.log('fydata', fydata);
      let dataList = fydata.data.data.list[4];
      let addDaily = fydata.data.data.add_daily;
      console.log('addDaily>>>>>>>>>>>', addDaily);
      option = {
        backgroundColor: 'transparent',
        title: {
          text: 'COVID-19 map in china',
          x: 'center',
          textStyle: {
            color: '#efefef',
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: function (datas) {
            let res = datas.name + '<br/>';
            res += '累计确诊人数：' + datas.value;
            return res;
          },
        },
        toolbox: {
          show: true,
          left: 'center',
          bottom: '30',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true, title: 'Data View' },
            restore: { show: true, title: 'Restore' },
            saveAsImage: { show: true, backgroundColor: '#3B3B4D', title: 'Save as Image' },
          },
        },
        visualMap: {
          min: 1,
          max: 3000,
          left: '30',
          top: '30',
          text: ['max', 'min'],
          calculable: false,
          textStyle: {
            color: '#efefef',
            fontSize: 15,
          },
        },
        // set map data
        series: [
          {
            data: dataList,
            type: 'map',
            mapType: 'henan',
            roam: true,
          },
        ],
      };
      myChart.setOption(option);
      return true;
    } catch (err) {
      console.error('err in fetch data', err);
      return false;
    }
  },
};

export { LuoheMap };
