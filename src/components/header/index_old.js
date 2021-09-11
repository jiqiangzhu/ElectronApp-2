import { Row, Col, Input, Space, Tooltip, Image, Slider, Dropdown } from 'antd';
import React from 'react';
import './index.less';
import '../../App.less';
import { getUserInfor } from '../../api/index';
import {
  MinusOutlined,
  ExpandOutlined,
  CloseOutlined,
  ReloadOutlined,
  BorderOutlined,
  PushpinOutlined,
  HourglassOutlined,
  AudioOutlined,
  SkinOutlined,
  LeftOutlined,
} from '@ant-design/icons';

import imgPath from '../../assets/img/avatar.jpg';
const { Search } = Input;

const onSearch = (value) => {
  console.log(value);
};

const { ipcRenderer } = window.require('electron');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMinOrMax: 'normal',
      fixedTopFlag: 'fixedOnTop',
      nickname: '',
      value: 0,
      imgPath: '',
    };
  }
  async componentDidMount() {
    let result = await getUserInfor();
    console.log('获取用户个人信息-------------', result);
    this.setState({
      nickname: result.data.profile.nickname,
      imgPath: result.data.profile.avatarUrl,
    });
  }
  changeWindowSize = (e, todo) => {
    if (todo) {
      ipcRenderer.send('changeWinSize', todo);
      if (todo === 'cancelOnTop') {
        this.setState({
          fixedTopFlag: 'fixedOnTop',
        });
      } else if (todo === 'fixedOnTop') {
        this.setState({
          fixedTopFlag: 'cancelOnTop',
        });
      } else if (todo === 'normal') {
        this.setState({
          showMinOrMax: 'maximize',
        });
      } else if (todo === 'maximize') {
        this.setState({
          showMinOrMax: 'normal',
        });
      }
    }
  };
  render() {
    return (
      <>
        <Row className="site-page-header" align="middle">
          <Col span={7} className="flex-type flex-justify-evenly">
            <Space className="flex-type webkit-no-drag flex-justify-start flex-align-mid">
              <Image width={40} src={imgPath} className="padding-top5 border-radius-5" />
              <label className="my-font">{this.state.nickname}</label>
            </Space>
            <Space className="flex-type flex-justify-end" size={10}>
              {/* <Tooltip title="刷新" autoAdjustOverflow={false} defaultVisible={false} placement="left" color="transparent"> */}
              <ReloadOutlined className="webkit-no-drag" />
              {/* </Tooltip> */}
              {/* <Tooltip title="返回" defaultVisible={false} placement="bottom" color="transparent"> */}
              <LeftOutlined className="webkit-no-drag" />
              {/* </Tooltip> */}
              {/* <Tooltip title="听歌识曲" defaultVisible={false} color="transparent"> */}
              <AudioOutlined className="webkit-no-drag" />
              {/* </Tooltip> */}
            </Space>
          </Col>
          <Col offset={1} span={8} className="flex-type">
            <Search
              className="flex-align-mid webkit-no-drag all-screen"
              placeholder="请输入..."
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Col>
          <Col span={8}>
            <Space className="flex-type flex-justify-end">
              <SetOpacityCom
                defaultValue={this.props.defaultValue}
                changeOpacity={(value) => this.props.changeOpacity(value)}
              />
              {/* <SkinOutlined onClick={(e) => { this.changeOpacity(e) }} className="webkit-no-drag" /> */}
              <TopByPropsCom
                renderCom={this.state.fixedTopFlag}
                onClick={(e) => {
                  this.changeWindowSize(e, this.state.fixedTopFlag);
                }}
              />
              {/* <Tooltip title="最小化" defaultVisible={false} color="transparent"> */}
              <MinusOutlined onClick={(e) => this.changeWindowSize(e, 'minimize')} className="webkit-no-drag" />
              {/* </Tooltip> */}
              <ShowMaxOrMinCom
                showWhat={this.state.showMinOrMax}
                onClick={(e) => this.changeWindowSize(e, this.state.showMinOrMax)}
              />
              {/* <Tooltip title="退出" defaultVisible={false} color="transparent"> */}
              <CloseOutlined onClick={(e) => this.changeWindowSize(e, 'close')} className="webkit-no-drag" />
              {/* </Tooltip> */}
            </Space>
          </Col>
        </Row>
      </>
    );
  }
}

/**
 * 设置窗口透明度
 * @param {*} props
 * @returns
 */
function SetOpacityCom(props) {
  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };
  const menu = (
    <div style={style}>
      <Slider
        vertical
        max={1}
        step={0.1}
        className="mySliderStyle"
        defaultValue={props.defaultValue}
        onChange={(value) => props.changeOpacity(value)}
      />
    </div>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']} placement="topCenter">
      <SkinOutlined className="webkit-no-drag" />
    </Dropdown>
  );
}

/**
 * 设置窗口最大最小化
 * @param {*} props
 * @returns
 */
function ShowMaxOrMinCom(props) {
  if (props.showWhat === 'maximize') {
    return <ExpandOutlined onClick={props.onClick} className="webkit-no-drag" />;
  } else if (props.showWhat === 'normal') {
    return <BorderOutlined onClick={props.onClick} className="webkit-no-drag" />;
  }
}

/**
 * 设置是否固定在最上方
 * @param {*} props
 * @returns
 */
function TopByPropsCom(props) {
  if (props.renderCom === 'cancelOnTop') {
    return (
      <Tooltip title="取消置顶" trigger="hover" color="transparent">
        <HourglassOutlined onClick={props.onClick} className="webkit-no-drag" />
      </Tooltip>
    );
  } else if (props.renderCom === 'fixedOnTop') {
    return (
      <Tooltip title="置顶" trigger="hover" color="transparent">
        <PushpinOutlined onClick={props.onClick} className="webkit-no-drag" />
      </Tooltip>
    );
  }
}

export { Header as CustomHeader };
