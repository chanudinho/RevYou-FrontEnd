import React, {Component} from 'react';
import {Collapse, Table, Divider, Button, Input, Row, Col} from 'antd';

const Panel = Collapse.Panel;

const columns = [
    {
        title: 'E-mail' ,
        dataIndex: 'email' ,
        key: 'email' ,
    },
    {
        title: 'Action' ,
        key: 'action' ,
        render: () => (
            <span>
                <Button type="link" htmlType="submit" icon="delete"/>
            </span>
        ),
    }
];

const data = [
    {
        email: 'antoniobj2@gmail.com'
    },
    {
        email: 'edmo@dcomp.ufs.br'
    },
    {
        email: 'simonedcomp@hotmail.com'
    }
]

class inviteResearchers extends Component{
    render(){
        return(
            <Collapse defaultActiveKey={['1', '2']} marginBottom="20">
                    <Panel
                        marginBottom={20}
                        showArrow={false}
                        accordion={false}
                        header={<h3>Researchers</h3>}
                        key="1"
                    >
                        <Row style={{marginBottom: 20}}>
                            <Col span={12}>
                                <Input placeholder="Researcher Email..." />
                            </Col>
                            <Col>
                                <Button type="primary" htmlType="submit">Send</Button>
                            </Col>
                        </Row>
                        <Table columns={columns} dataSource={data}>

                        </Table>
                    </Panel>
            </Collapse>
        )
    }
}

export default inviteResearchers;