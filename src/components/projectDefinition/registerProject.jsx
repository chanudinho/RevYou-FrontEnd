import React from 'react';
import { Card, Form, Col, Button, Row, Input } from 'antd';
import { Formik, Form as FormikForm, Field as FormikField } from 'formik';
import { createProject } from '../../util/validationSchema';

const FormItem = Form.Item;
const { TextArea } = Input;

const registerProject = ({ initialValues, handleSubmit }) => (
  <Card title={<h1>Create Project</h1>}>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={createProject}>
      {({ errors, touched }) => (
        <FormikForm>
          <Row>
            <Col span={12}>
              <FormItem
                label="Project Name (Title)"
                help={errors.title && touched.title ? errors.title : null}
                validateStatus={errors.title && touched.title ? 'error' : ''}
              >
                <FormikField
                  name="title"
                  render={({ field }) => (
                    <Input {...field} name="title" placeholder="Project Name" />
                  )}
                />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <FormItem label="Description">
                <FormikField
                  name="description"
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      name="description"
                      placeholder="Description..."
                      autosize={{ minRows: 2, maxRows: 6 }}
                    />
                  )}
                />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Objective">
                <FormikField
                  name="objective"
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      name="objective"
                      placeholder="Objective..."
                      autosize={{ minRows: 2, maxRows: 6 }}
                    />
                  )}
                />
              </FormItem>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col span={1}>
              <Button type="danger" href="/#/user/listprojects" htmlType="button">
                Cancel
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit">Create Project</Button>
            </Col>
          </Row>
        </FormikForm>
      )}
    </Formik>
  </Card>
);

export default registerProject;
