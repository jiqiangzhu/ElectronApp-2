import { List, Drawer, Layout, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './index.scss';

const { Content } = Layout;
/**
 * music list popup
 * @param {*} props
 * @returns react dom
 */
function MusicList(props) {
  const { currentIndex } = props;
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
    console.log('fileNameArray', props.musicList);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Drawer title="Music List" placement="right" closable={false} onClose={() => props.onClose()} visible={props.visible} headerStyle={{ color: '#FFFFFF' }} className="webkit-no-drag cannotselect">
        <div ref={popupRef} className="my-content music-popup">
          <Content>
            <List
              dataSource={props.musicDom}
              renderItem={(item, index) => {
                return (
                  <List.Item key={index} className={index === currentIndex && item.props.children.byteLength() >= 24 ? 'list-item' : ''}>
                    <Tooltip title={item} placement="left">
                      {item}
                      <p className="music-active" style={{ display: props.musicList[index].byteLength() >= 24 ? 'inline-block' : 'none' }}>
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
  };
};

const MusicListPopup = connect(mapStateToProps)(MusicList);

export default MusicListPopup;
