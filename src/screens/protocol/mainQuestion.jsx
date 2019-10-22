import React, { Component } from 'react';
import axios from 'axios';
import { message } from 'antd';
import MainQuestionComponent from '../../components/protocol/mainQuestionComponent';

class MainQuestion extends Component {
  constructor() {
    super();
    this.state = {
      disableFields: false,
      idMainQuestion: '',
      initialValues: {
        description: '',
        population: '',
        intervation: '',
        control: '',
        results: '',
        context: '',
        design: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleSubmit(values) {
    let { description, population, intervation, control, results, context, design } = values;
    const ProjectId = this.props.project.id;
    if (this.state.idMainQuestion === '') {
      axios
        .post('http://localhost:5000/mainQuestion', {
          description,
          population,
          intervation,
          control,
          results,
          context,
          design,
          ProjectId
        })
        .then(res => {
          message.success('Main Question was successfully registered');
          this.getData();
        })
        .catch(error => {
          message.error('Ops... Server error, please contact the administrator');
        });
    } else {
      if (this.state.disableFields === false) {
        population = '';
        intervation = '';
        control = '';
        results = '';
        context = '';
        design = '';
      }
      axios
        .put(`http://localhost:5000/mainQuestion/updateMainQuestion/${this.state.idMainQuestion}`, {
          description,
          population,
          intervation,
          control,
          results,
          context,
          design
        })
        .then(res => {
          message.success('Main Question was successfully updated');
        })
        .catch(error => {
          message.error('Ops... Server error, please contact the administrator');
        });
    }
  }

  handleChange() {
    this.setState({ disableFields: !this.state.disableFields });
  }

  getData() {
    axios.get(`http://localhost:5000/mainQuestion/${this.props.project.id}`).then(res => {
      const { description, population, intervation, control, results, context, design } = res.data;
      if (
        population !== '' ||
        intervation !== '' ||
        control !== '' ||
        results !== '' ||
        context !== '' ||
        design !== ''
      ) {
        this.setState({ disableFields: true });
      }
      this.setState({
        initialValues: {
          description,
          population,
          intervation,
          control,
          results,
          context,
          design
        }
      });
      this.setState({
        idMainQuestion: res.data.id
      });
    });
  }

  render() {
    return (
      <MainQuestionComponent
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default MainQuestion;
