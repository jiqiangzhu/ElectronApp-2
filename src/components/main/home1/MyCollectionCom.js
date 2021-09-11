import React from 'react'
import { Layout, Button, Table, Tag } from 'antd'
import './index.less'
import { CaretRightOutlined, createFromIconfontCN } from '@ant-design/icons'
import { Row, Col, Space } from 'antd'

const IconFont = createFromIconfontCN()
const { Content, Header } = Layout

export default class MyCollectionCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [],
      data: [],
    }
  }
  render() {
    return (
      <Layout>
        <Header className="local-download-header">我的收藏</Header>
        <Content>
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
                  <Button icon={<IconFont type="icon-yunpan" />}>本地导入</Button>
                </Col>
              </Space>
            </Row>
            <Table columns={columns} dataSource={data} />
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
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '专辑',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '时长',
    key: 'tags',
    dataIndex: 'tags',
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

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
