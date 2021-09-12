import React from 'react'
import { Layout, Button, Table, Tag, Row, Col, Space } from 'antd'
import './index.less'
import { CaretRightOutlined, createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN()
const { Content, Header } = Layout
const { ipcRenderer } = window.require('electron')
const fs = window.require('fs-extra')

export default class LocalDownloadCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [],
      data: [],
      defaultMusicPath: localStorage.defaultMusicPath ? localStorage.defaultMusicPath : '',
    }
  }
  componentDidMount = async () => {
    if (this.state.defaultMusicPath) {
      this.readMusicDir(localStorage.defaultMusicPath)
    }
  }
  openDialog = async (path = 'D:\\programfile\\KuGou') => {
    await ipcRenderer.send('openFolder', path)
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg)
      this.readMusicDir(arg.filePaths[0])
      localStorage.defaultMusicPath = arg.filePaths[0]
    })
  }
  /**
   * 读取文件夹路径中的所有文件
   * @param {*} path
   */
  readMusicDir = async (path) => {
    if (!path) {
      return
    }
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err)
      } else {
        let dataarr = []
        files.filter((item, index) => {
          if (item.indexOf('.mp3') !== -1) {
            dataarr.push({
              key: index,
              name: item,
              singer: 32,
              album: 'New York No. 1 Lake Park',
              time: ['nice', 'developer'],
            })
            return true
          }
          return false
        })

        this.setState({
          data: dataarr,
        })
      }
    })
  }

  render() {
    return (
      <Layout style={{ overflow: 'hidden' }}>
        <Header style={{ position: 'fixed', zIndex: 10, width: '100%' }} className="local-download-header">
          本地与下载
        </Header>
        <Content style={{ paddingTop: '60px' }}>
          <>
            <Row align="middle">
              <Space size={16}>
                <Col span={12}>
                  <Button className="play-button" icon={<CaretRightOutlined />}>
                    全部播放
                  </Button>
                </Col>
                <Col span={12}>
                  <Button>批量选择</Button>
                </Col>
                <Col span={12}>
                  <Button onClick={() => this.openDialog()} icon={<IconFont type="icon-yunpan" />}>
                    本地导入
                  </Button>
                </Col>
              </Space>
            </Row>
            <Table columns={columns} dataSource={this.state.data} />
          </>
        </Content>
      </Layout>
    )
  }
}

const columns = [
  {
    title: '歌曲名',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (text) => <span>{text}</span>,
  },
  {
    title: '歌手',
    dataIndex: 'singer',
    key: 'singer',
  },
  {
    title: '专辑',
    dataIndex: 'album',
    key: 'album',
  },
  {
    title: '时长',
    key: 'time',
    dataIndex: 'time',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
]
