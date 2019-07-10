import React, {Component} from 'react';
import {Collapse, Form, Button, Input, Row, Col} from 'antd';
import { Formik, Form as FormikForm, Field as FormikField } from 'formik';

const FormItem = Form.Item
const Panel = Collapse.Panel;

class userPofile extends Component{
    render(){
        return(
            <div>
                <Collapse defaultActiveKey={['1', '2', '3']} marginBottom="20">
                    <Panel
                        marginBottom={20}
                        showArrow={false}
                        accordion={false}
                        header={<h3>Change Passoword</h3>}
                        key="1"
                    >
                        <Formik>
                            <FormikForm>
                                <Row gutter="40">
                                    <Col md={{span: 8}}>
                                        <FormItem label="Old Passoword">
                                            <FormikField name="oldPassword"
                                                render={({field}) =>(
                                                    <Input 
                                                    {...field}
                                                    name="oldPassword"
                                                    placeholder="Old Password" />
                                                )}
                                            />
                                        </FormItem>
                                    </Col>
                                    <Col md={{span: 8}}>
                                        <FormItem label="New Passoword">
                                            <FormikField name="newPassword"
                                                render={({field}) =>(
                                                    <Input 
                                                    {...field}
                                                    name="newPassword"
                                                    placeholder="New Password" />
                                                )}
                                            />
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{span: 2}}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            icon="save"                           
                                            >
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                            </FormikForm>
                        </Formik>
                    </Panel>

                    <Panel
                        marginBottom={20}
                        showArrow={false}
                        accordion={false}
                        header={<h3>Change Email</h3>}
                        key="2"
                    >
                        <Formik>
                            <FormikForm>
                                <Row>
                                    <FormItem label="Change E-mail">
                                        <FormikField name="email"
                                            render={({field}) =>(
                                                <Input 
                                                {...field}
                                                name="email"
                                                placeholder="New E-mail" />
                                            )}
                                        />
                                    </FormItem>
                                </Row>
                                <Row>
                                    <Col md={{span: 2}}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            icon="save"                           
                                            >
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                            </FormikForm>
                        </Formik>
                    </Panel>
                    <Panel
                        marginBottom={20}
                        showArrow={false}
                        accordion={false}
                        header={<h3>Change Name</h3>}
                        key="3"
                    >
                        <Formik>
                            <FormikForm>
                                <Row>
                                    <FormItem label="Change Name">
                                        <FormikField name="name"
                                            render={({field}) =>(
                                                <Input 
                                                {...field}
                                                name="name"
                                                placeholder="New Name" />
                                            )}
                                        />
                                    </FormItem>
                                </Row>
                                <Row>
                                    <Col md={{span: 2}}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            icon="save"                           
                                            >
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                            </FormikForm>
                        </Formik>

                    </Panel>
                </Collapse>

            </div>
        )
    }
}

export default userPofile;