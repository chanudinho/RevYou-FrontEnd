import React, {Component} from 'react';
import {Collapse, Table, Divider, Button} from 'antd';
import {Link} from 'react-router-dom'

const Panel = Collapse.Panel;

const columns = [
    {
        title: 'Project Name' ,
        dataIndex: 'name' ,
        key: 'name' ,
        render: text => <Link to="/project/inviteresearchers">{text}</Link>,
    },
    {
        title: 'Cordinator' ,
        dataIndex: 'cordinator' ,
        key: 'cordinator' ,
    },
    {
        title: 'Instituion' ,
        dataIndex: 'instituion' ,
        key: 'instituion' ,
    },
    {
        title: 'Action' ,
        key: 'action' ,
        render: () => (
            <span>
                <Button type="link" htmlType="submit" icon="edit"/>
                <Divider type="vertical" />
                <Button type="link" htmlType="submit" icon="delete"/>
            </span>
        ),
    }
];

const data = [
    {
        key: '1',
        name: 'RevYou',
        cordinator: 'Debora',
        instituion: 'UFS',
    },
    {
        key: '2',
        name: 'Mapeamento Sistematico',
        cordinator: 'Antonio',
        instituion: 'USP',
    },
    {
        key: '3',
        name: 'Revisao Sistematica',
        cordinator: 'Edmo',
        instituion: 'UFSCAR',
    },
]

class listProject extends Component {
    render(){
        return(
            <div>
                <Collapse defaultActiveKey={['1', '2']} marginBottom="20">
                    <Panel
                        marginBottom={20}
                        showArrow={false}
                        accordion={false}
                        header={<h3>Projects</h3>}
                        key="1"
                    >
                        <Table columns={columns} dataSource={data}>

                        </Table>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default listProject;