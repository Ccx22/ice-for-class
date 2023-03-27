## 业务组件（antd@3.26.19，react-class）
antd: https://3x.ant.design/components/radio-cn/
### Template：模块包裹

```jsx
import Template from './Template'

<Template title='标题'>
  内容
</Template>
```

|参数|说明|类型|默认值|
|--|--|--|--|
|title|标题|string|-|
|height|高度|string|100%|
|width|宽度|string|100%|
|background|背景|string|#FFF|
|back|返回上一级|boolean|false|
|backTitle|返回标题|string|返回|
|onHandleBack|点击返回的回调|function(e)|-|

<br/>

### BaseTable：基础表格,一般情况下只需要关注 拿到dataSource 和 修改colums ;其他情况修改表格配置

```jsx
import BaseTable from './BaseTable'

this.state = {
  dataSource: [
    {
      index: '1',
      name: '小红',
      address: '北京'
    },
    {
      index: '2',
      name: '小岚',
      address: '上海'
    },
    {
      index: '3',
      name: '小黑',
      address: '天津'
    }
  ],
  loading: false
}
this.columns = [
    {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        width: 80
    },
    {
        title: '名称',
        dataIndex: 'name',
        align: 'center',
        width: 150
    },
    {
        title: '地址',
        dataIndex: 'address',
        align: 'center',
        width: 150
    }
]

<BaseTable
  dataSource={this.state.dataSource}
  columns={this.columns}
  loading={this.state.loading}
/>
```

|参数	|说明|类型|默认值|
|--|--|--|--|
|dataSource|数据数组|any[ ]|[ ]|
|columns|表格列的配置描述|ColumnProps[ ]|[ ]|
|loading|加载动画|boolean|true|
|pagination|分页|boolean|false|
|rowSelection|表格行是否可选择|boolean|false|
||表格大小( large , default , small )|string |default|

<br/>

### SearchForm：搜索表单

```jsx
import SearchForm from './SearchForm'
this.formSet = [
  {
    key: '1',
    type: 'input',
    label: '姓名',
    fieldValue: 'name',
    placeholder: '请输入',
    initialValue: '初始值',
    col_span: 6,
    rules: [
      {
        required: true,
        message: '输入点什么呗!',
      }
    ]
  },
]
<SearchForm
  searchPosition={1}
  searchTitle='查询'
  searchIcon='search'
  resetTitle='重置'
  formSet={this.formSet}
/>
```

|参数	|说明|类型|默认值|
|--|--|--|--|
|searchPosition|搜索按钮位置 |number（0，1）|-|
|searchTitle|搜索按钮标题		|string|搜索|
|searchIcon|搜索按钮图标|string|-|
|resetTitle|清空按钮标题|string|清空|
|formSet|搜索条件配置列表|any[ ]|[ ]|

##### formSet配置

##### 一 . input 输入框

|输入框 - 配置参数|说明|必输|类型|默认值|
|--|--|--|--|--|
|key|索引值key|true|string|-|
|type：'input'|输入框|true|string|-|
|label|label 标签的文本|false|string|`label-${item.key}`|
|fieldValue|输出key值|false|string|`field${item.key}`|
|initialValue|初始值|false|string|-|
|col_span|组件宽度（1-24）|false	|number|6|
|rules|是否进行验证|false|any[ ]|-|

```jsx
{
  key:'',
  type: 'input',
  label: '姓名',
  fieldValue: 'name',
  placeholder: '请输入',
  initialValue: '初始值',
  col_span: 6,
  rules: [
    {
      required: true,
      message: '输入点什么呗!',
    }
  ]
},
```

##### 二 . select 选择框

|选择框 - 配置参数|说明|必输|类型|默认值|
|--|--|--|--|--|
|key|索引值key|true|string|-|
|type：'select'|选择框|true|string|-|
|label|label 标签的文本|false|string|`label-${item.key}`|
|fieldValue|输出key值|false|string|`field${item.key}`|
|initialValue|默认选择的option|false|string|-|
|col_span|组件宽度（1-24）|false|number|6|
|select_width|选择框宽度|false|string|150px|
|rules|是否进行验证|false|any[ ]|-|
|selectList|选择框配置列表|true|any[ ]|-|
|selectList -- key|列表key|true|string|-|
|selectList -- value|选择框值|true|string|-|
|selectList -- label|选择框显示内容|true|string|-|

```jsx
{
  key: '2',
  type: 'select',
  label: '性别',
  fieldValue: 'sex',
  placeholder: '请选择',
  initialValue: 'lucy',
  col_span: 6,
  select_width: '120px',
  rules: [
    {
      required: true,
      message: '总得选一个吧!',
    }
  ],
  selectList: [
    {
      key: '1',
      value: 'jack',
      label: '夹克'
    },
    {
      key: '2',
      value: 'lucy',
      label: '路丝'
    }
  ],
},
```

##### 3. 自定义

|自定义 - 配置参数|说明|必输|类型|默认值|
|--|--|--|--|--|
|key|索引值key|true|string|-|
|label|label 标签的文本|false|string|`label-${item.key}`|
|fieldValue|输出key值|false|string|`field${item.key}`|
|initialValue|默认值|false|string|-|
|col_span|组件宽度（1-24）|false|number|6|
|rules|是否进行验证|false|any[ ]|-|
|custom|是否自定义|false|boolean|-                           |
|customJsx|自定义组件jsx片段|true|jsx|-|

```jsx
{
  key: '3',
  custom:true,
  label:'自定义',
  fieldValue: 'custom',
  initialValue:'自定义初始值',
  col_span: 6,
  rules: [
    {
      required: true,
      message: '输入点什么呗!',
    }
  ],
  customJsx: (
    <Input placeholder='请大哥输入点内容吧！' />
  )
}
```

