import { Space, Row, Col, Progress } from 'antd';
import React from 'react';
import './index.less';
import '@/App.less';
import commonUtils from '@localUtils/common-util';
import windowUtils from '@localUtils/window-util';
import fsUtils from '@localUtils/fs-util';
import { StepBackwardOutlined, StepForwardOutlined, createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN();
export default class FooterCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginTime: 0,
      loopFlag: false,
      currentIndex: 0,
      playFlag: 'pause',
      duration: 0,
      percent: 0,
      filePathArray: [],
    };
    this.audioRef = React.createRef();
    this.progressRef = React.createRef();
  }

  updateTime = () => {
    let temPercent = (this.audioRef.current.currentTime / this.state.duration) * 100;
    this.setState({
      percent: temPercent,
      beginTime: this.audioRef.current.currentTime,
    });
  };

  setPlayMode = () => {
    this.setState({
      loopFlag: !this.state.loopFlag,
    });
    console.log('play mode if true single cycle else false----->>>>', this.state.loopFlag);
  };

  setCurrentPlayTime = (event) => {
    //205
    console.log('event---------', event.pageX);
    console.log('progressRef.current.offsetLeft--------', this.progressRef.current.offsetLeft + 205);
    console.log('progressRef.current.width--------', this.progressRef.current.offsetWidth + 205);
    let currentProgress = event.pageX - (this.progressRef.current.offsetLeft + 205);
    let currentRate = parseInt((currentProgress / this.progressRef.current.offsetWidth) * 100);
    let setCurrentTime = (this.state.duration * currentRate) / 100;
    this.audioRef.current.currentTime = setCurrentTime;
    this.audioRef.current.play();
  };

  playNext = (value) => {
    try {
      if (value === 1) {
        if (this.state.currentIndex + 1 >= this.state.filePathArray.length) {
          this.setState({
            currentIndex: 0,
          });
        } else {
          this.setState({
            currentIndex: this.state.currentIndex + 1,
          });
        }
      } else if (value === -1) {
        if (this.state.currentIndex - 1 < 0) {
          this.setState({
            currentIndex: this.state.filePathArray.length - 1,
          });
        } else {
          this.setState({
            currentIndex: this.state.currentIndex - 1,
          });
        }
      }
    } catch (e) {
      console.error('切换歌曲出错');
    }
  };

  playMusic = (flag) => {
    this.setState({
      playFlag: flag,
    });
    console.log('this.audioRef>>>>>>>>', this.audioRef.current);
    if (this.state.playFlag === 'pause') {
      this.audioRef.current.play();
    } else if (this.state.playFlag === 'play') {
      this.audioRef.current.pause();
    }
  };

  importLocal = async (e, dirPath = 'D:/') => {
    console.log('dirPath------->>>>', dirPath);
    localStorage.dirPath = dirPath;
    await windowUtils.openFolder(dirPath, this.readDir);
  };

  getDuration = () => {
    this.setState({
      duration: this.audioRef.current.duration,
    });
  };

  readDir = async (event, arg) => {
    let musicPathList = [];
    let path;
    if (typeof arg === 'string') {
      path = arg;
    } else if (typeof arg === 'object') {
      path = arg.filePaths[0];
    }
    await fsUtils.readMusicDir(path, (err, files) => {
      console.log(`list of files from ${path}------->>>>>>>`, files);
      if (files.length > 0) {
        let list = [];
        files.filter((item, index) => {
          if (item.indexOf('.mp3') !== -1) {
            list.push(item.substr(0, item.indexOf('.mp3')));
            musicPathList.push(path + '\\' + item);
            return true;
          }
          return false;
        });
        this.props.getMusicListFromFooterCom(list);
        this.setState({
          filePathArray: musicPathList,
        });
      }
    });
  };
  componentDidUpdate = async () => {
    if (this.state.playFlag === 'play') {
      this.audioRef.current.play();
    }
  };
  render() {
    return (
      <>
        <audio
          onTimeUpdate={this.updateTime}
          ref={this.audioRef}
          loop={this.state.loopFlag}
          controls={false}
          src={this.state.filePathArray[this.state.currentIndex]}
          onCanPlay={this.getDuration}
        ></audio>
        <Row align="middle" style={{ width: '100%' }}>
          <Col span={3}>
            <Space size={10}>
              <StepBackwardOutlined onClick={() => this.playNext(-1)} style={{ fontSize: '24px', cursor: 'pointer' }} />
              <PlayStatusCom playStatus={this.state.playFlag} onClick={(flag) => this.playMusic(flag)} />
              <StepForwardOutlined onClick={() => this.playNext(1)} style={{ fontSize: '24px', cursor: 'pointer' }} />
            </Space>
          </Col>
          <Col span={1} style={{ paddingBottom: '10px', paddingRight: '10px' }} className="flex-type flex-justify-end">
            {commonUtils.secondsFormat(parseInt(this.state.beginTime))}
          </Col>
          <Col span={12}>
            <div ref={this.progressRef}>
              <Progress
                percent={this.state.percent}
                onClick={this.setCurrentPlayTime}
                className="audio-process"
                showInfo={false}
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
              />
            </div>
          </Col>
          <Col style={{ paddingBottom: '10px', paddingLeft: '10px' }} span={1}>
            {commonUtils.secondsFormat(parseInt(this.state.duration) ? parseInt(this.state.duration) : 0)}
          </Col>
          <Col span={2} className="flex-type flex-justify-end">
            <Space style={{ paddingBottom: '10px' }}>
              <IconFont
                style={{ fontSize: '16px' }}
                type="icon-hanhan-01-011"
                onClick={this.setPlayMode}
                className="webkit-no-drag"
              />
              <IconFont
                style={{ fontSize: '16px' }}
                type="icon-jia"
                onClick={this.importLocal}
                className="webkit-no-drag"
              />
            </Space>
          </Col>
        </Row>
      </>
    );
  }
}
/**
 * set play or pause
 * @param {*} props
 * @returns
 */
function PlayStatusCom(props) {
  if (props.playStatus === 'pause') {
    return (
      <IconFont
        type="icon-bofang"
        style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }}
        onClick={() => props.onClick('play')}
        className="webkit-no-drag"
      />
    );
  } else {
    return (
      <IconFont
        type="icon-zanting-xianxingyuankuang"
        style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }}
        onClick={() => props.onClick('pause')}
        className="webkit-no-drag"
      />
    );
  }
}
