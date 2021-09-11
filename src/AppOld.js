import { Layout, Tabs, Skeleton } from 'antd'
import './App.less'
import { getMusicList } from './api'
import React from 'react'
import { CustomHeader } from './components/header'
import FooterCom from './components/footer'
import {
  LocalDownloadCom,
  DefaultListCom,
  MusicPanCom,
  Home,
  MyCollectionCom,
  MyTVCom,
  RecentlyPlayCom,
  ExploreCom,
} from './components/main'
// LiveCom, DiscoveryCom, , MobilePlayCom, ExploreCom,
import { UserOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons'
import Sider from 'antd/lib/layout/Sider'
const { Content, Header, Footer } = Layout
const { TabPane } = Tabs

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: ['我的音乐', '发现', '直播', '探索', '手机Play'],
      loadingFlag: true,
      opacityVallue: 0,
      rightContent: '',
      renderContent: '',
    }
  }

  async componentDidMount() {
    setTimeout(async () => {
      this.setState({
        loadingFlag: false,
      })
      let result = await getMusicList()
      console.log('获取播放列表---------------', result)
    }, 200)

    // 设置透明度
    if (localStorage.opacityVallue && localStorage.opacityVallue !== '0') {
      this.changeOpacity(localStorage.opacityVallue * 1)
    }
    this.callback(0)
    this.chooseItem(2)
  }

  changeOpacity = (value) => {
    console.log('opacity value---0~1-------', value)
    document.body.style.background = `rgba(46,103,156, ${value})`
    localStorage.opacityVallue = value
  }
  chooseItem = (index) => {
    console.log(index)
    switch (index) {
      case 0:
        this.setState({
          rightContent: <MyCollectionCom />,
        })
        break
      case 1:
        this.setState({
          rightContent: <MyTVCom />,
        })
        break
      case 3:
        this.setState({
          rightContent: <MusicPanCom />,
        })
        break
      case 4:
        this.setState({
          rightContent: <RecentlyPlayCom />,
        })
        break
      case 5:
        this.setState({
          rightContent: <DefaultListCom />,
        })
        break
      default:
        this.setState({
          rightContent: <LocalDownloadCom />,
        })
        break
    }
  }
  playMusic = (index) => {
    console.log('music index------------', index)
  }
  callback = (params) => {
    switch (params) {
      case 0:
        this.setState({
          renderContent: (
            <div className="flex-type full">
              <Home onClick={(e, index) => this.chooseItem(index)} />
              {this.state.rightContent}
            </div>
          ),
        })
        break
      case 1:
        this.setState({
          renderContent: (
            <div className="flex-type full">
              <ExploreCom onClick={(e, index) => this.chooseItem(index)} />
              {this.state.rightContent}
            </div>
          ),
        })
        break
      default:
        break
    }
  }
  render() {
    let renderDom = this.state.tabs.map((item, index) => {
      let nodeItem
      // rendertab;
      switch (index) {
        case 0:
          nodeItem = <UserOutlined />
          // rendertab = <div className="flex-type full">
          //   <Home onClick={(e, index) => this.chooseItem(index)} />
          //   {this.state.rightContent}
          // </div>

          break
        case 1:
          nodeItem = <SearchOutlined />
          // rendertab = <DiscoveryCom />
          break
        case 2:
          nodeItem = <StarOutlined />
          // rendertab = <LiveCom />
          break
        case 3:
          nodeItem = ''
          // rendertab = <ExploreCom />
          break
        case 4:
          nodeItem = ''
          // rendertab = <MobilePlayCom />
          break
        default:
          nodeItem = <UserOutlined />
          // rendertab = <Home />
          break
      }
      return (
        <TabPane
          tab={
            <span>
              {nodeItem}
              {item}
            </span>
          }
          key={index}
          onClick={clickTab}
        ></TabPane>
      )
    })

    return (
      <Skeleton active loading={this.state.loadingFlag} rows={20}>
        <Layout className="main-content">
          <Header className="header webkit-no-drag" style={{ position: 'fixed', zIndex: 10, width: '100%' }}>
            <CustomHeader
              defaultValue={localStorage.opacityVallue * 1}
              changeOpacity={(value) => {
                this.changeOpacity(value)
              }}
            />
            <Tabs
              defaultActiveKey="0"
              animated={{ tabPane: true }}
              centered
              onChange={(params) => this.callback(params)}
            >
              {renderDom}
            </Tabs>
          </Header>
          <Layout style={{ paddingBottom: '72px' }}>
            <Content>
              <Layout>
                <Sider
                  className="site-layout-background"
                  width={200}
                  style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                  }}
                >
                  {this.state.renderContent}
                </Sider>
                <Content style={{ padding: '0 24px 0 200px', minHeight: 280 }}>
                  <Layout>{this.state.rightContent}</Layout>
                </Content>
              </Layout>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center', lineHeight: '72px', position: 'fixed', bottom: 0, width: '100%' }}>
            <FooterCom playMusic={(i) => this.playMusic(i)} />
          </Footer>
        </Layout>
      </Skeleton>
    )
  }
}

function clickTab(e) {
  console.log('e', e)
}
