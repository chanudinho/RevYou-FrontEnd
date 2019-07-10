import React, { Component } from 'react';
import axios from 'axios';
import { message, Skeleton } from 'antd';
import ExtractionSettingForm from '../../components/extraction/ExtractionStepForm';
import { Formik } from 'formik';
import {extractionStepValidation} from '../../util/validationSchema';
import moment from 'moment';
import 'moment/locale/pt-br';



class ExtractionSetting extends Component {
  state = {
    extractionStep: {},
    isLoading: false
  };

  componentDidMount() {
    // this.setState({ id: this.props.match.params.id },
    const param = this.props.match.params.id || { id: 20 };
    console.log(`did I? ${JSON.stringify(param.id)}`);
    console.log(JSON.stringify(this.props.match));

    if (param.id !== 0) {
      this.setState({ isLoading: true });
      axios
        .get(`http://localhost:5000/extractionStep/${param.id}`)
        .then(
          res => {
            const extractionStep = res.data;
            this.setState({ extractionStep }, () => console.log(JSON.stringify(extractionStep)));
          },
          error => {
            message.error(`Houston we have a problem! Try again soon!`);
            console.log(`SSS ${error} REQ ${JSON.stringify(error.request)}`);
          }
        )
        .finally(this.setState({ isLoading: false }));
    }
  }

  render() {
    const {
      id,
      startDate,
      endDate,
      dateExtractor,
      dateConflicts,
      decisors,
      extractors,
      method,
      numExtractorStudy,
      scoreBoard
    } = this.state.extractionStep;

    const initialValues = {
      startDate: moment.utc(startDate) || moment(),
      endDate: moment.utc(endDate) || moment(),
      dateExtractor: moment.utc(dateExtractor) || moment(),
      dateConflicts: moment.utc(dateConflicts) || moment(),
      decisors: decisors || [],
      extractors: extractors || [],
      method: method || undefined,
      numExtractorStudy: numExtractorStudy || 0,
      scoreBoard: scoreBoard || 0
    };
    return this.state.isLoading ? (
      <Skeleton active size="large" paragraph rows="10" />
    ) : (
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={extractionStepValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log({ values });
          if (id) {
            axios
              .put(`http://localhost:5000/extractionStep/${id}`, {
                startDate: values.startDate,
                endDate: values.endDate,
                dateExtractor: values.dateExtractor,
                dateConflicts: values.dateConflicts,
                decisors: values.decisors,
                extractors: values.extractors,
                method: values.method,
                numExtractorStudy: values.numExtractorStudy,
                scoreBoard: values.scoreBoard
              })
              .then(
                res => {
                  if (res.status < 300) message.success(res.data);
                  else message.warning(res.data);
                },
                error => {
                  console.log(error);
                }
              )
              .finally(setSubmitting(false));
          } else {
            axios
              .post(`http://localhost:5000/extractionStep`, {
                startDate: values.startDate,
                endDate: values.endDate,
                dateExtractor: values.dateExtractor,
                dateConflicts: values.dateConflicts,
                decisors: values.decisors,
                extractors: values.extractors,
                method: values.method,
                numExtractorStudy: values.numExtractorStudy,
                scoreBoard: values.scoreBoard
              })
              .then(
                res => {
                  if (res.status < 200) message.success(res.data);
                  else message.warning(res.data);
                },
                error => {
                  console.log(error);
                }
              )
              .finally(setSubmitting(false));
          }
          this.setState({ isSubmitting: false });
          console.log(`fim? ${setSubmitting}`);
        }}
        render={formikProps => <ExtractionSettingForm {...formikProps} />}
      />
    );
  }
}

export default ExtractionSetting;
