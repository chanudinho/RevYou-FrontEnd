import React, { Component } from 'react';
import axios from 'axios';
import { message, Skeleton, Radio, Form, Input, Button, Row, Col, Collapse, Select } from 'antd';
import FieldList from '../../components/extraction/FieldList';

class TemplateForm extends Component {
  state = {
    field: {},
    fields: [],
    isLoading: false,
    isSubmitting: false
  };

  componentDidMount() {
    // this.setState({ id: this.props.match.params.id },
    const param = this.props.match.params.id || { id: 0 };
    console.log(`did I? ${JSON.stringify(param.id)}`);
    console.log(JSON.stringify(this.props.match));

    //   if ( param.id !== 0 ){
    //     this.setState({ isLoading: true });
    //     axios
    //       .get(`http://localhost:5000/extractionStep/${param.id}`)
    //       .then(
    //         res => {
    //           const extractionStep = res.data;
    //           this.setState({ extractionStep }, () => console.log(JSON.stringify(extractionStep)));
    //         },
    //         error => {
    //           message.error(`Houston we have a problem! Try again soon!`);
    //           console.log(`SSS ${error} REQ ${JSON.stringify(error.request)}`);
    //         }
    //       )
    //       .finally(this.setState({ isLoading: false }));
    //       }
  }

  handlefieldType = e => {
    const num =Math.floor((Math.random() * 100) + 1);
    this.setState({
      field: {
        ...this.state.field,
        id: num,
        key:num,
        type: e.target.value,
        options: []
      }
    });
  };

  handlefieldDescription = e => {
    this.setState({
      field: {
        ...this.state.field,
        description: e.target.value
      }
    });
  };

  handleAddOptions = values => {
    this.setState(
      {
        field: {
          ...this.state.field,
          options: values
        }
      },
      console.log(JSON.stringify(this.state.field))
    );
  };

  handleSubmit = e => {
    // this.setState({ isSubmitting: true });
    e.preventDefault();
    console.log('Received values of form: ', JSON.stringify(this.state.field));
    this.setState({
      fields: this.state.fields.concat(this.state.field)
    }, this.setState({field:{}}))
    console.log(JSON.stringify(this.state.fields));
  };

  handleDeletefield = id => {
    console.log('delete: '+id);
    this.setState({
      fields: this.state.fields.filter(item => item.id !== id)
    })
  }

  handleEditfield = id => {
    console.log('edit: '+id);
    this.setState({
      field: this.state.fields.filter(item => item.id === id)
    },console.log(`edit mudou para ${JSON.stringify(this.state.field)}`))
  }

  render() {
    const Panel = Collapse.Panel;
    const FormItem = Form.Item;
    const { TextArea } = Input;
    const { isSubmitting, field, isLoading } = this.state;
    const showOptions = field.type === 'close';
    return isLoading ? (
      <Skeleton active size="large" paragraph rows="10" />
    ) : (
      <>
        <Collapse defaultActiveKey={['1', '2']} marginBottom="20">
          <Panel
            marginBottom={20}
            showArrow={false}
            accordion={false}
            header={<h3>Create field</h3>}
            key="1"
          >
            <Form onSubmit={this.handleSubmit}>
              <Row gutter={40}>
                <Col span={8} offset={4}>
                  <FormItem label="Field Type">
                    <Radio.Group onChange={this.handlefieldType} value={field.type}>
                      <Radio.Button value="open">Open field</Radio.Button>
                      <Radio.Button value="single">Single field</Radio.Button>
                      <Radio.Button value="multiple">Multiple fields</Radio.Button>
                    </Radio.Group>
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="Description" />
                  <TextArea
                    rows={4}
                    value={field.description}
                    onChange={this.handlefieldDescription}
                  />
                </Col>
              </Row>
              {showOptions && (
                <Row>
                  <Col span={16} offset={4}>
                    <FormItem label="Close field Options">
                      <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        value={field.options}
                        onChange={this.handleAddOptions}
                        tokenSeparators={[',']}
                        placeholder="Type the desired options separated by comma(,)."
                        notFoundContent={<span> </span>}
                      />
                    </FormItem>
                  </Col>
                </Row>
              )}
              <Row style={{ marginTop: 20 }}>
                {/* <Col span={6}>
                  <Button
                    htmlType="submit"
                    icon="arrow-left"
                    block
                    disabled={isSubmitting}
                    type="primary"
                    ghost
                  >
                    Cancel
                  </Button>
                </Col> */}
                <Col span={6} offset={18}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon="save"
                    size="large"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    block
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Panel>
        </Collapse>

          <FieldList 
          // delete={this.handleDeletefield} 
          edit={this.handleEditfield}
          data={this.state.fields}
          />
       
        
      </>
    );
  }
}
export default TemplateForm;
