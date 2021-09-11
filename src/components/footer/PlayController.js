import { Slider, Dropdown, Menu, Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { useState } from 'react';
import './index.less';

const IconFont = createFromIconfontCN();
const playModeArr = [
  {
    type: 'icon-hanhan-01-011',
    desc: 'List Loop',
    index: '1',
  },
  {
    type: 'icon-hanhan-01-01',
    desc: 'Single Circle',
    index: '2',
  },
  {
    type: 'icon-hanhan-01-012',
    desc: 'Random',
    index: '3',
  },
];
/**
 * set play or pause
 * @param {*} props
 * @returns
 */
function PlayStatusCom(props) {
  let type = props.playStatus === 'play' ? 'icon-zanting-xianxingyuankuang' : 'icon-bofang';
  return (
    <IconFont
      type={type}
      style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }}
      onClick={() => props.onClick()}
      className="webkit-no-drag"
    />
  );
}

/**
 * set media volume
 * @param {Object} props
 * @returns
 */
function SetVolumeCom(props) {
  const [currentVolume, setCurrentVolume] = useState(props.defaultValue * 10);
  const style = {
    display: 'inline-block',
    height: 80,
  };

  const setVolume = (value) => {
    if (value === 0) {
      if (currentVolume === 0) {
        props.setVolume(localStorage.defalutVolume);
        setCurrentVolume(localStorage.defalutVolume * 10);
      } else {
        props.setVolume(0);
        setCurrentVolume(0);
      }
      return;
    } else {
      localStorage.defalutVolume = value / 10;
    }
    props.setVolume(value / 10);
    setCurrentVolume(value);
  };

  const menu = (
    <div style={style}>
      <Slider
        vertical
        max={10}
        min={0}
        step={1}
        defaultValue={props.defaultValue * 10}
        value={currentVolume}
        onChange={(value) => setVolume(value)}
      />
    </div>
  );

  return (
    <Dropdown overlay={menu} trigger={['hover']} placement="topCenter">
      <Space className="webkit-no-drag">
        <IconFont
          style={{ fontSize: '16px' }}
          onClick={() => setVolume(0)}
          type={currentVolume === 0 ? 'icon-mute' : 'icon-yinliang'}
          className="webkit-no-drag"
        />
      </Space>
    </Dropdown>
  );
}

/**
 * set play mode
 * @param {Object} props
 * @returns
 */
function SetPlayModeCom(props) {
  const menu = (
    <Menu theme="dark" onClick={props.changePlayMode}>
      {playModeArr.map((item, index) => {
        return (
          <Menu.Item key={item.index}>
            <IconFont style={{ fontSize: '16px' }} type={item.type} className="webkit-no-drag" /> {item.desc}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  let playMode = props.playMode * 1;

  return (
    <Dropdown overlay={menu} trigger={['hover']} overlayStyle={{ backgroundColor: '#3B3B4D' }} placement="topCenter">
      <Space className="webkit-no-drag">
        <IconFont style={{ fontSize: '16px' }} type={playModeArr[playMode - 1].type} className="webkit-no-drag" />
      </Space>
    </Dropdown>
  );
}

export { PlayStatusCom, SetPlayModeCom, SetVolumeCom };
