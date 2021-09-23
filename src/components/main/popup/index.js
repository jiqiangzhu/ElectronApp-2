import { List, Drawer, Layout, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { musicListRedux, musicNameRedux } from 'src/redux/actions/play-actions';
import './index.scss';

const { Content } = Layout;
/**
 * music list popup
 * @param {*} props
 * @returns react dom
 */
function MusicList(props) {
  const { currentIndex, fileFullPath, setFileFullPath, musicNameList, setMusicNameList } = props;
  const popupRef = React.createRef();
  // useEffect(() => {
  //   function updateScroll() {
  //     try {
  //       console.log('props.visible', props.visible)
  //       if (popupRef.current && props.visible) {
  //         popupRef.current.scrollTo(0, 1000)
  //       }
  //     } catch {
  //       console.warn('自动滚动出错了')
  //     }
  //   }
  //   updateScroll()
  // }, [popupRef, props])

  useEffect(() => {
    console.log('fileNameArray=======', props.musicList);
  }, [props.musicNameList]); // eslint-disable-line react-hooks/exhaustive-deps
  const addNewFile = (e) => {
    try {
      e.preventDefault();
      console.log('musicNameList===========', musicNameList);
      const file = e.dataTransfer.files[0];
      setFileFullPath(fileFullPath.concat(file.path));
      const newList = musicNameList.concat(file.name);
      setMusicNameList(newList);
    } catch (err) {
      console.warn('error in music popup :\n', err);
    }
  }
  return (
    <>
      <Drawer title="Music List" placement="right" closable={false} onClose={() => props.onClose()}
        visible={props.visible} headerStyle={{ color: '#FFFFFF' }}
        className="webkit-no-drag cannotselect">
        <div ref={popupRef} className="my-content music-popup"
          onDragOver={(e) => {
            e.preventDefault();
            // console.log();
          }}
          onDrop={(e) => { addNewFile.call(this, e) }}>
          <Content>
            <List
              dataSource={props.musicDom}
              renderItem={(item, index) => {
                return (
                  <List.Item key={index} className={index === currentIndex && item.props.children.byteLength() >= 24
                    ? 'list-item' : ''}>
                    <Tooltip title={item} placement="left">
                      {item}
                      <p className="music-active"
                        style={{
                          display: props.musicList[index].byteLength() >= 24
                            ? 'inline-block'
                            : 'none'
                        }}>
                        {props.musicList[index]}
                      </p>
                    </Tooltip>
                  </List.Item>
                );
              }}
            />
          </Content>
        </div>
      </Drawer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.playReducer.currentIndex,
    musicNameList: state.playReducer.musicNameList,
    fileFullPath: state.playReducer.musicList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMusicNameList: (nameList) => {
      dispatch(musicNameRedux(nameList));
    },
    setFileFullPath: (musicList) => {
      dispatch(musicListRedux(musicList))
    }
  };
};

const MusicListPopup = connect(mapStateToProps, mapDispatchToProps)(MusicList);

export default MusicListPopup;
