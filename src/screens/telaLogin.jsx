import React, { PropTypes } from 'react'
import {Col, Row, Button, Form} from 'antd'
import { Formik , Form as FormikForm, Field as FormikField } from 'formik';
import { Image } from 'react-bootstrap';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

const telaLogin = ({handleSubmit}) => (
    <div className="login"> 
        <Formik>
          <FormikForm onSubmit={handleSubmit}>
            <Row type="flex" justify="center">
              <Col md={{span: 12}} lg={{span: 8}} >
                <div className="border-shadow">
                  <div>
                    <Image src="https://i.ibb.co/7rY1Ykv/Rev-U-font3.png" alt="logo revyou" fluid />
                  </div>
                  
                  <FormItem >
                    <FormikField className="input-login" name="email" placeholder="Email" type="email"/>
                  </FormItem>
                  
                  <FormItem>
                    <FormikField className="input-login" name="password" placeholder="Password" type="password"/>
                  </FormItem>

                  <div>
                    <Button
                      type="link"
                      htmlType="submit">
                      Esqueceu a senha?
                    </Button>
                  </div>
                  <div>
                    <Button className="btn-login"
                      type="primary"
                      htmlType="submit">
                      Login
                    </Button>
                  </div>
                  <div>
                    <Button className="btn-login"
                      htmlType="submit">
                      Sign in
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </FormikForm>
        </Formik>
      </div>
)

export default telaLogin;