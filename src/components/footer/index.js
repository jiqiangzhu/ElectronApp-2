import { Space, Row, Col, Progress, message } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';
import '@/App.less';
import commonUtils from '@localUtils/common-util';
import windowUtils from '@localUtils/window-util';
import fsUtils from '@localUtils/fs-util';
import { StepBackwardOutlined, StepForwardOutlined, createFromIconfontCN } from '@ant-design/icons';
import store from '@redux';
import { playMusicRedux, currentIndexRedux, musicListRedux, audioRefRedux } from '@redux/actions/play-actions';
import { PlayStatusCom, SetPlayModeCom, SetVolumeCom } from './PlayController';
import MusicListPopup from '@/components/main/popup';

const IconFont = createFromIconfontCN();

/**
 * Footer Play Controller Component
 * @param {Object} props
 * @returns
 */
function FooterCom(props) {
  const [beginTime, setBeginTime] = useState(0);
  // 1 list loop 2 single circle 3 random default 1
  const [playMode, setPlayMode] = useState('1');
  const audioRef = React.createRef();
  const beginRef = React.createRef();
  const progressRef = React.createRef();
  const [duration, setDuration] = useState(0);
  const [percent, setPercent] = useState(0);
  const [currentSrc, setCurrentSrc] = useState('');
  const [fileNameArray, setFileNameArray] = useState([]);
  const [popupList, setPopupList] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [audioVolume, setAudioVolume] = useState(localStorage.defalutVolume ?? 1);
  useEffect(() => {
    function init() {
      if (localStorage.defaultMusicPath) {
        readDir('init', localStorage.defaultMusicPath);
      }
      audioRef.current.currentTime = localStorage.currentTime ? localStorage.currentTime : 0;
    }
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    function update() {
      setDuration(duration);
      try {
        if (audioRef.current) {
          audioRef.current.volume = audioVolume;
        }
      } catch (e) {
        console.error(`The program reported an error when playing song\n${e}`);
      }
      setPlayMode(localStorage.playMode ?? '1');
    }
    update();
  }, [duration, audioRef, audioVolume]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.currentTime = audioRef.current.currentTime;
  }, [audioRef]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateTime = () => {
    const currentTime = audioRef.current.currentTime;
    let temPercent = (currentTime / duration) * 100;
    setPercent(temPercent);
    setBeginTime(parseInt(currentTime));
  };

  const changePlayMode = (e) => {
    setPlayMode(e.key);
    localStorage.playMode = e.key;
  };

  const setCurrentPlayTime = (event) => {
    try {
      if (!audioRef.current.currentSrc) {
        message.error({
          content: 'url is unvalid',
          style: {
            marginTop: '40vh',
          },
        });
        return;
      }
      /*
        pageX 点击点相对于边框的横向距离 
        offsetWidth 当前时间对应的dom元素的宽度
        offsetLeft 当前时间对应dom元素相对于边框的横向距离
        pageX - (offsetWidth + offsetLeft)即为点击点相对于起点的长度
      */
      let currentProgress = event.pageX - (beginRef.current.offsetWidth + beginRef.current.offsetLeft);
      let currentRate = (currentProgress / progressRef.current.offsetWidth) * 100;
      let setCurrentTime = (duration * currentRate) / 100;

      audioRef.current.currentTime = setCurrentTime;
      store.dispatch(playMusicRedux('play'));
      store.dispatch(audioRefRedux(audioRef.current));
      store.getState().playReducer.currentAudio.play();
    } catch (e) {
      console.error(`The program reported an error on progress bar\n${e}`);
    }
  };

  const playNext = (value) => {
    let reducer = store.getState().playReducer;
    let listLen = store.getState().playReducer.musicList.length;
    let currIndex = store.getState().playReducer.currentIndex;
    console.log('currIndex============', currIndex);
    if (listLen <= 0) {
      message.error({
        content: 'music list is null',
        style: {
          marginTop: '40vh',
        },
      });
      return;
    }
    try {
      if (reducer.playFlag === 'play') {
        reducer.currentAudio.pause();
      }
      if (playMode !== '3') {
        if (value === 1) {
          if (currIndex + 1 >= listLen) {
            store.dispatch(currentIndexRedux(0, audioRef.current));
          } else {
            store.dispatch(currentIndexRedux(currIndex + 1, audioRef.current));
          }
        } else if (value === -1) {
          if (currIndex - 1 < 0) {
            store.dispatch(currentIndexRedux(listLen - 1, audioRef.current));
          } else {
            store.dispatch(currentIndexRedux(currIndex - 1, audioRef.current));
          }
        }
      } else {
        let tempIndex = commonUtils.randomInteger(currIndex, listLen);
        store.dispatch(currentIndexRedux(tempIndex, audioRef.current));
      }
      setPopupList(() =>
        fileNameArray.map((item, ind) => {
          return (
            <p onDoubleClick={() => playMusicByPopupList(ind)} key={ind}
              className={ind === store.getState().playReducer.currentIndex ? 'music-active' : ''}>
              {item.indexOf('.mp3') !== -1 ? item.substr(0, item.indexOf('.mp3')) : item}
            </p>
          );
        })
      );
      if (reducer.currentAudio && reducer.playFlag === 'play') {
        reducer.currentAudio.play();
      }
    } catch (e) {
      console.error(`The program reported an error when switching songs\n${e}`);
    }
  };
  /**
   * change play status
   * @param {*} flag play status
   * @returns
   */
  const playMusic = (flag) => {
    let reducer = store.getState().playReducer;
    try {
      if (flag) {
        store.dispatch(playMusicRedux('pause'));
        return;
      }
      store.dispatch(audioRefRedux(audioRef.current));
      if (!audioRef.current.currentSrc) {
        message.error({
          content: 'unvalid music url',
          style: {
            marginTop: '40vh',
          },
        });
        return;
      }
      if (reducer.playFlag === 'pause') {
        store.dispatch(playMusicRedux('play'));
        reducer.currentAudio.play();
      } else if (store.getState().playReducer.playFlag === 'play') {
        store.dispatch(playMusicRedux('pause'));
        reducer.currentAudio.pause();
      } else {
        throw new Error('music play error.\n redux error...');
      }
    } catch (e) {
      console.error(`The program reported an error when playing songs\n${e}`);
    }
  };

  const importLocal = async (e, dirPath = 'D:/') => {
    await windowUtils.openFolder(dirPath, readDir);
  };

  const getDuration = () => {
    setDuration(audioRef.current.duration);
    setPercent((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const readDir = async (event, arg) => {
    store.dispatch(audioRefRedux(audioRef.current));
    let musicList = fileNameArray;
    let fullPathList = store.getState().playReducer.musicList.musicList;
    let path;
    if (typeof arg === 'string') {
      path = arg;
    } else if (typeof arg === 'object') {
      path = arg.filePaths[0];
    }
    fsUtils.readMusicDir(path, (err, files) => {
      try {
        localStorage.defaultMusicPath = path;
        if (files.length > 0) {
          files.filter((item, index) => {
            if (item.indexOf('.mp3') !== -1) {
              musicList.push(item);
              return true;
            }
            return false;
          });
          musicList = Array.from(new Set(musicList)); //de-duplication
          fullPathList = musicList.map((item, index) => {
            return path + '\\' + item;
          });
          setFileNameArray(musicList);
          store.dispatch(musicListRedux(fullPathList));
          console.log('currentIndex', store.getState().playReducer);
          setCurrentSrc(store.getState().playReducer.musicList[store.getState().playReducer.currentIndex]);
          setPopupList(() =>
            musicList.map((item, index) => {
              return (
                <p onDoubleClick={() => playMusicByPopupList(index)} key={index}
                  className={index === store.getState().playReducer.currentIndex ? 'music-active' : ''}>
                  {item.indexOf('.mp3') !== -1 ? item.substr(0, item.indexOf('.mp3')) : item}
                </p>
              );
            })
          );
        }
      } catch (e) {
        console.error('err----------', err);
        console.error('e----------', e);
      }
    });
  };
  const playMusicByPopupList = (index) => {
    const reducer = store.getState().playReducer;
    try {
      if (reducer.playFlag === 'play') {
        reducer.currentAudio.pause();
      }
      store.dispatch(playMusicRedux('play'));
      if (reducer.currentAudio && reducer.currentAudio.paused) {
        if (index !== reducer.currentIndex) {
          store.dispatch(currentIndexRedux(index, reducer.currentAudio));
        }
        reducer.currentAudio.play();
      }
      setPopupList(() =>
        fileNameArray.map((item, ind) => {
          return (
            <p onDoubleClick={() => playMusicByPopupList(ind)} key={ind}
              className={ind === store.getState().playReducer.currentIndex ? 'music-active' : ''}>
              {item.indexOf('.mp3') !== -1 ? item.substr(0, item.indexOf('.mp3')) : item}
            </p>
          );
        })
      );
    } catch (e) {
      store.dispatch(playMusicRedux('pause'));
      console.error(e);
    }
  };
  const setVolume = (value) => {
    try {
      if (!isNaN(value)) {
        setAudioVolume(value);
      } else {
        throw new Error('value is not a number');
      }
    } catch (e) {
      console.log(`program reported an error when set volume \n ${e}`);
    }
  };
  return (
    <div className="footer">
      <audio onTimeUpdate={updateTime.bind(this)}
        onError={playMusic.bind(this, 'pause')}
        ref={audioRef} preload="true"
        loop={playMode === '2' ? true : false} controls={false}
        onEnded={playNext.bind(this, 1)} src={currentSrc} onCanPlay={getDuration.bind(this)}></audio>
      <Row align="middle" style={{ width: '100%' }}>
        <Col span={3}>
          <Space size={10}>
            <StepBackwardOutlined onClick={playNext.bind(this, -1)} style={{ fontSize: '24px', cursor: 'pointer' }} />
            <PlayStatusCom playStatus={store.getState().playReducer.playFlag} onClick={playMusic.bind(this)} />
            <StepForwardOutlined onClick={playNext.bind(this, 1)} style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Space>
        </Col>
        <span ref={beginRef} style={{ paddingBottom: '10px', paddingRight: '10px' }} className="cannotselect">
          {commonUtils.secondsFormat(beginTime)}
        </span>
        <Col span={12}>
          <div className="progress" ref={progressRef}>
            <Progress
              percent={percent}
              onClick={setCurrentPlayTime.bind(this)}
              className="audio-process"
              showInfo={false}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />
          </div>
        </Col>
        <span style={{ paddingBottom: '10px', paddingLeft: '10px' }} className="cannotselect">
          {commonUtils.secondsFormat(parseInt(duration) ? parseInt(duration) : 0)}
        </span>
        <Col span={4} className="flex-type flex-justify-end">
          <Space size="middle" style={{ paddingBottom: '10px' }}>
            <IconFont style={{ fontSize: '0.20rem', marginLeft: '0.1rem' }} type={showLyrics ? 'icon-geciweidianji' : 'icon-geciweidianji-copy'} onClick={() => setShowLyrics(!showLyrics)} className="webkit-no-drag" />
            <SetPlayModeCom changePlayMode={changePlayMode.bind(this)} playMode={playMode} />
            <IconFont style={{ fontSize: '16px' }} type="icon-jia" onClick={importLocal.bind(this)} className="webkit-no-drag" />
            <SetVolumeCom defaultValue={localStorage.defalutVolume ? localStorage.defalutVolume : 1} setVolume={setVolume.bind(this)} />
            <IconFont style={{ fontSize: '16px' }} type="icon-liebiao1" onClick={() => setPopupVisible(true)} className="webkit-no-drag" />
          </Space>
        </Col>
      </Row>

      <MusicListPopup musicList={fileNameArray} musicDom={popupList} visible={popupVisible} onClose={() => setPopupVisible(false)} />
    </div>
  );
}

export default FooterCom;
