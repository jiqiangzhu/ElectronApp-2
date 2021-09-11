import axios from 'axios';
import store from 'src/redux';
import { setShowLoaingRedux } from 'src/redux/actions/play-actions';

//  url = `https://interface.sina.cn/news/wap/fymap2020_data.d.json`

// 拦截器
axios.interceptors.request.use((config) => {
  // open loading popup
  store.dispatch(setShowLoaingRedux(true));
  return config;
});
// 拦截器
axios.interceptors.response.use((config) => {
  // close loading popup
  store.dispatch(setShowLoaingRedux(false));
  return config;
});

const Api = {
  get: async (url, netValid = true) => {
    try {
      // open loading popup
      store.dispatch(setShowLoaingRedux(true));
      // ajax
      let result = await axios.get(url);
      console.log('result', result);
      if (!result || !result.data) {
        throw new Error('fetch data error');
      }
      // close loading popup
      store.dispatch(setShowLoaingRedux(false));
      return result;
    } catch (e) {
      store.dispatch(setShowLoaingRedux(true));
      console.log('e----------', e);
    }
  },
};

export default Api;
