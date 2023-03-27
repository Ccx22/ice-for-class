import React from 'react';
import { Form, Row, Col, Input, Button, Select } from 'antd';
const { Option } = Select;
class SearchForm extends React.Component {

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };
    render() {
        const { searchPosition, searchTitle, resetTitle, formSet } = this.props
        const searchBtn = (
            <>
                <Button type="primary" htmlType="submit">
                    {searchTitle ? searchTitle : '搜索'}
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                    {resetTitle ? resetTitle : '清空'}
                </Button>
            </>
        )
        const fnFormType = (item) => {
            const { placeholder, selectList, select_width } = item
            return {
                input:
                    <Input placeholder={placeholder ? placeholder : ''} />,
                select:
                    <Select
                        style={{ width: typeof select_width === 'undefined' ? '150px' : select_width }}
                        placeholder="Tags Mode"
                    >
                        {typeof selectList === 'undefined' ? null :
                            (selectList.map(item => (
                                <Option value={item.value} key={item.key}>
                                    {item.label}
                                </Option>
                            )))
                        }
                    </Select>,
            }
        }
        const getFields = () => {
            const { getFieldDecorator } = this.props.form;
            if (typeof formSet !== 'undefined') {
                return formSet.map(item => (
                    <Col span={item.col_span ? item.col_span : 6} key={item.key} >
                        <Form.Item label={item.label ? item.label : `label-${item.key}`}>
                            {getFieldDecorator(item.fieldValue ? item.fieldValue : `field${item.key}`, {
                                rules: item.rules ? item.rules : [],
                                initialValue: item.initialValue ? item.initialValue : null,
                            })(
                                item.custom ? item.customJsx : fnFormType(item)[item.type]
                            )}
                        </Form.Item>
                    </Col >
                ))
            }

        }
        return (
            <Form layout='inline' className="ant-advanced-search-form" onSubmit={this.handleSearch} >
                <Row gutter={24}>
                    {getFields()}
                    {
                        !searchPosition ? null : <Col span={6} >{searchBtn}</Col>
                    }
                </Row>
                {searchPosition ? null :
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            {searchBtn}
                        </Col>
                    </Row >
                }
            </Form >

        );
    }
}

export default Form.create({ name: 'search-form' })(SearchForm);
