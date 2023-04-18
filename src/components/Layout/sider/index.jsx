import React, { PureComponent } from 'react'
import { Menu, Icon } from 'antd'
import { menuConfig } from '../../../modules/control/router'
const SubMenu = Menu.SubMenu
export default class SiderContent extends PureComponent {
  constructor() {
    super()
    this.state = {
      menuConfig: menuConfig()
    }
  }
  selectMenuItem = (item, item1, item2) => {
    if (typeof item.path !== 'undefined') {
      this.props.setRoute(item.path, item)
    } else if (typeof item1.path !== 'undefined') {
      this.props.setRoute(item1.path, item1)
    } else {
      this.props.setRoute(item2.path, item2)
    }
  }
  render() {
    const { menuConfig } = this.state
    return (
      <div>
        <Menu
          defaultSelectedKeys={menuConfig.defaultSelectedKeys}
          defaultOpenKeys={menuConfig.defaultOpenKeys}
          mode="inline"
          theme='="light'
        >
          {
            menuConfig.menuList.map((item) => (
              item.isSub ?
                <SubMenu
                  disabled={item.disabled}
                  key={item.key}
                  title={
                    <span>
                      {item.icon ? <Icon type={item.icon} /> : null}
                      <span >{item.title}</span>
                    </span>
                  }
                >
                  {
                    item.children.map((item1) => (
                      item1.isSub ?
                        (
                          <SubMenu
                            key={item1.key}
                            title={
                              <span>
                                {item1.icon ? <Icon type={item1.icon} /> : null}
                                <span>{item1.title}</span>
                              </span>
                            }
                          >
                            {
                              item1.children.length > 0 ?
                                item1.children.map(item2 =>
                                (
                                  <Menu.Item
                                    disabled={item2.disabled}
                                    key={item2.key}
                                    onClick={() => {
                                      this.selectMenuItem(item, item1, item2)
                                    }}
                                  >
                                    {item2.icon ? <Icon type={item2.icon} /> : null}
                                    <span>{item2.title}</span>
                                  </Menu.Item>
                                )) : null
                            }
                          </SubMenu>
                        ) :
                        (
                          <Menu.Item
                            disabled={item1.disabled}
                            key={item1.key}
                            onClick={() => {
                              this.selectMenuItem(item, item1)
                            }}
                          >
                            {item1.icon ? <Icon type={item1.icon} /> : null}
                            <span>{item1.title}</span>
                          </Menu.Item>
                        )
                    ))
                  }
                </SubMenu> :
                <Menu.Item
                  disabled={item.disabled}
                  key={item.key}
                  onClick={() => {
                    this.selectMenuItem(item)
                  }}
                >
                  {item.icon ? <Icon type={item.icon} /> : null}
                  <span>{item.title}</span>
                </Menu.Item>
            ))
          }
        </Menu>
      </div>
    )
  }
}
