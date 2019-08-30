import React, { Component } from 'react';
import { Select } from 'antd';
import axios from 'axios';
import SetReseartcherBaseComponent from '../../components/projectDefinition/setReseartcherBase'

const {Option} = Select;

class SetReseartcherBase extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            researchers: ['Simone','Edmo','Antonio','Igor','Debora']
        }
        this.getData = this.getData.bind(this);
    }
    
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const ProjectId = this.props.project.id;
        console.log(ProjectId);
        axios.get(`http://localhost:5000/searchEngine/${ProjectId}`).then(async res => {
            let data = await res.data[0].SearchEngines.map(data => {
                let temp = {
                    base: data.name
                }
                return temp;
            })
            console.log("aqui = ", data);
            this.setState({data});
        })
        let researchers = await this.state.researchers.map(researcher => (
            (<Option key={researcher}>{researcher}</Option>)
        ))
        this.setState({researchers})
    }

    render() {
        return <SetReseartcherBaseComponent {...this.state}/>
    }

}

export default SetReseartcherBase;