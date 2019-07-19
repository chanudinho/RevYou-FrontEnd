import React, {Component} from 'react';
import InviteResearchers from '../../components/projectDefinition/inviteResearchers'
import axios from 'axios'

class inviteResearchers extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        this.getData();
    }

    handleSubmit (e) {
        const email =  e.target.value || document.getElementById('invite').value;
        axios.post(`http://localhost:5000/invitation`, {
            email,
            ProjectId: '03f72672-d294-4c59-8f18-9ab8b9467365'
        })
    }

    getData () {
        axios.get(`http://localhost:5000/project/inviteds/03f72672-d294-4c59-8f18-9ab8b9467365`).then(res => {
            let data = res.data.map(data => {
                return {
                    email: data.email,
                    situation: data.situation,
                    key: data.id
                }
            })
            this.setState({data});
        });
    }

    render(){
        return(
            <InviteResearchers {...this.state}
            handleSubmit = {this.handleSubmit}
            />
        )
    }
}

export default inviteResearchers;