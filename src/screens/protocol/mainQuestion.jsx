import React, {Component} from 'react';
import MainQuestionComponent from '../../components/protocol/mainQuestionComponent'

class MainQuestion extends Component{

    constructor(){
        super();
        this.state ={
            disableFields: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange () {
        this.setState({disableFields: !this.state.disableFields});
    }

    render() {
        return(
            <MainQuestionComponent
            {...this.state}
            handleChange={this.handleChange}
            />
        )
    }
}

export default MainQuestion;