## baseui（antd@3.26.19，react-class）
antd: https://3x.ant.design/components/radio-cn/
@引入方法：找到webpack.config.js 下alias添加 “@”：path.resolve('src')

### BaseTemplet：模块包裹

```jsx
import {BaseTemplet} from '@/baseui'

<BaseTemplet title='标题'>
  内容
</BaseTemplet>
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
|marginLeft|左边距|string|0px|

<br/>

### BaseTable：基础表格

```jsx
import {BaseTable} from '@/baseui'

this.state = {
  pageParams:{
    current:1,
    size:10,
    pageCount:null
  },
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
        editable:true,//可编辑
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
handleSave=(newData)=>{
  this.setState({dataSource:newData})
}
changePage=(current)=>{
  console.log('当前页码-->',current)
}
<BaseTable
  dataSource={this.state.dataSource}
  columns={this.columns}
  loading={this.state.loading}
  handleSave={this.handleSave}
  pagination
  pageParams={this.state.pageParams}
  changePage={this.changePage}
/>
```

|参数	|说明|类型|默认值|
|--|--|--|--|
|dataSource|数据数组|any[ ]|[ ]|
|columns|表格列的配置描述|ColumnProps[ ]|[ ]|
|loading|加载动画|boolean|true|
|rowSelection|表格行是否可选择|boolean|false|
|selectRow|选择表格行回调函数|function(key,row)|-|
|size|表格大小( default , middle, small )|string |default|
|handleSave|编辑单元格成功后回调函数，需设置dataSource|function(newData)|-|
|pagination|是否打开分页|boolean|false|
|pageParams|分页参数{current,size,pageCount}|object|-|
|changePage|点击分页按钮回调函数，设置pageParams|function(current)||

### 表单

### BaseSearch：搜索

```jsx
import BaseSearch from '@/baseui'
this.formSet = []
<BaseSearch
  searchPosition={1}
  searchTitle='查询'
  resetTitle='重置'
  labelAlign='left'
  formSet={this.formSet}
  handleSearch={this.handleSearch}
/>
```

|参数	|说明|类型|默认值|
|--|--|--|--|
|searchPosition|搜索按钮位置 |number（0，1）|-|
|searchTitle|搜索按钮标题		|string|搜索|
|resetTitle|清空按钮标题|string|清空|
|labelAlign|label对齐方式|string|right|
|formSet|搜索条件配置列表|any[ ]|[ ]|
|handleSearch|搜索按钮回调|function(value)|-|

### BaseSubmit：提交表单

```jsx
import BaseSubmit from '@/baseui'
this.formSet = []
<BaseSubmit
  onRef={ref=>this.submit = ref}
  submitTitle="下一步"
  labelAlign='left'
  formSet={this.formSet}
  handleSubmit={this.handleSubmit}
  addButton={
    <>
      <Button>重置</Button>
    </>
  }
/>
```

|参数|说明|类型|默认值|
|--|--|--|--|
|onRef={ref=>this.submit=ref}|必填|-|-|
|submitTitle|提交按钮标题|string|提交|
|labelAlign|label对齐方式|string|right|
|formSet|表单配置列表|any[]|[]|
|handleSubmit|提交按钮回调|funtion(value)|-|
|addButton|新增按钮|jsx|-|
|hiddenSubmitBtn|是否隐藏提交按钮|boolean|false|
|function=()=>this.submit.getPropsForm()|获取form方法|-|-|
|getPropsForm().resetFields()|重置form表单|-|-|
|getPropsForm().getFieldsValue()|获取form表单|-|-|
|getPropsForm().setFieldsValue()|设置form表单|-|-|
|getPropsForm().validateFields()|验证form表单|-|-|

#### formSet配置（input,select,自定义）

##### 一 . input 输入框

|输入框 - 配置参数|说明|必输|类型|默认值|
|--|--|--|--|--|
|key|索引值key|true|string|-|
|type：'input'|输入框|true|string|-|
|label|label 标签的文本|false|string|`label-${item.key}`|
|fieldValue|输出key值|false|string|`field${item.key}`|
|initialValue|初始值|false|string|-|
|col_span|组件宽度（1-24）|false	|number|BaseSearc：6 BaseSubmit：24|
|labelCol|label宽度（labelCol+wrapperCol = 24）|false|number|4|
|wrapperCol|组件宽度（labelCol+wrapperCol = 24）|false|number|20|
|input_width|输入框宽度|false|string|100%|
|rules|是否进行验证|false|any[ ]|-|

```jsx
{
  key:'1',
  type: 'input',
  label: '姓名',
  fieldValue: 'name',
  placeholder: '请输入',
  initialValue: '初始值',
  labelCol:3,
  wrapperCol:21,
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
|col_span|组件宽度（1-24）|false|number|BaseSearc：6 BaseSubmit：24|
|labelCol|label宽度（labelCol + wrapperCol = 24）|false|number|4|
|wrapperCol|组件宽度（labelCol + wrapperCol = 24）|false|number|20|
|select_width|选择框宽度|false|string|100%|
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
  labelCol:3,
  wrapperCol:21,
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
|col_span|组件宽度（1-24）|false|number|BaseSearc：6 BaseSubmit：24|
|labeCol|label宽度（labelCol + wrapperCol = 24）|false|number|4|
|wrapperCol|组件宽度（labelCol + wrapperCol = 24）|false|number|20|
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
  labelCol:5,
  wrapperCol:19,
  rules: [
    {
      required: true,
      message: '输入点什么呗!',
    }
  ],
  customJsx: (
    <Input style={{width:'100%'}} placeholder='请大哥输入点内容吧！' />
  )
}
```

