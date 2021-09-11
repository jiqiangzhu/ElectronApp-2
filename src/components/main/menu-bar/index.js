import { Menu, Button } from 'antd';
import React, { useState } from 'react';
import './index.less';
import { MenuUnfoldOutlined, MenuFoldOutlined, createFromIconfontCN } from '@ant-design/icons';
import { SelectKeyRedux } from 'src/redux/actions/play-actions';
import { connect } from 'react-redux';

const { SubMenu } = Menu;
const IconFont = createFromIconfontCN();

function MenuBarCom(props) {
  const { selectedKeys, setSelectedKeys } = props;
  // 1 Unfold 2 collapsed
  const [collapsed, setCollapsed] = useState(localStorage.collapsed === '1' ? false : true);

  const toPage = (path, key) => {
    props.history.push('/' + path);
    setSelectedKeys(key);
  };
  return (
    <div className="menu-bar">
      <Button
        type="dashed"
        onClick={() => {
          setCollapsed(!collapsed);
          localStorage.collapsed = collapsed ? '1' : '2';
        }}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <div style={{ height: '90%' }}>
        <div className="scroll-bar cannotselect">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={collapsed ? [''] : ['sub1', 'sub2', 'sub3']}
            mode="inline"
            theme="dark"
            inlineIndent={12}
            inlineCollapsed={collapsed}
            selectedKeys={selectedKeys.currentKey}
          >
            <Menu.Item key="1" icon={<IconFont type="icon-tuijian" />} onClick={toPage.bind(this, 'home', '1')}>
              Recommend
            </Menu.Item>
            <Menu.Item key="2" icon={<IconFont type="icon-shipin" />} onClick={toPage.bind(this, 'movie', '2')}>
              Movie
            </Menu.Item>
            <Menu.Item key="3" icon={<IconFont type="icon-paihangbang" />} onClick={toPage.bind(this, 'rank', '3')}>
              Leaderboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<IconFont type="icon-bag-case-work-need-job-ecacdf" />} title="Toolbox">
              <Menu.Item key="5" onClick={toPage.bind(this, 'fymap', '5')}>
                {' '}
                Covid-19 map
              </Menu.Item>
              <Menu.Item key="6" onClick={toPage.bind(this, 'recordLog', '6')}>
                Record Log
              </Menu.Item>
              <Menu.Item key="7" onClick={toPage.bind(this, 'tear-clothe', '7')}>
                Tear Clothe
              </Menu.Item>
              <Menu.Item key="8" onClick={toPage.bind(this, 'clock', '8')}>
                Clock
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<IconFont type="icon-icon-test" />} title="Community">
              <Menu.Item key="9" onClick={toPage.bind(this, 'other', '9')}>
                Stay tuned
              </Menu.Item>
              <Menu.Item key="10" onClick={toPage.bind(this, 'other', '10')}>
                Stay tuned
              </Menu.Item>
              <SubMenu key="sub3" icon={<IconFont type="icon-shequ" />} title="Other">
                <Menu.Item key="11" onClick={toPage.bind(this, 'person', '11')}>
                  Person
                </Menu.Item>
                <Menu.Item key="12" onClick={toPage.bind(this, 'other', '12')}>
                  Stay tuned
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedKeys: state.playReducer.selectedKeys,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedKeys: (key) => {
      dispatch(SelectKeyRedux(key));
    },
  };
}

const MenuBar = connect(mapStateToProps, mapDispatchToProps)(MenuBarCom);

export default MenuBar;
