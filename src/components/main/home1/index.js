import React from 'react'
import './index.less'
import { Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN()

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memuItem: ['我的收藏', '我的电台', '本地与下载', '音乐云盘', '最近播放', '默认列表'],
    }
  }

  render() {
    const menuItemList = this.state.memuItem.map((item, index) => {
      let iconItem
      switch (index) {
        case 0:
          iconItem = <IconFont type="icon-ziyuan" />
          break
        case 1:
          iconItem = <IconFont type="icon-diantai" />
          break
        case 2:
          iconItem = <IconFont type="icon-icon_huabanfuben" />
          break
        case 3:
          iconItem = <IconFont type="icon-yunpan" />
          break
        case 4:
          iconItem = <IconFont type="icon-zuijinchangyong" />
          break
        case 5:
          iconItem = <IconFont type="icon-yinleliebiao-" />
          break
        default:
          iconItem = <IconFont type="con-youxiang" />
          break
      }
      return (
        <Menu.Item
          key={index}
          onClick={(e) => {
            this.props.onClick(e, index)
          }}
          icon={iconItem}
        >
          {item}
        </Menu.Item>
      )
    })
    return (
      <>
        <Menu style={{ width: 173 }} defaultSelectedKeys={['2']}>
          {menuItemList}
        </Menu>
      </>
    )
  }
}
