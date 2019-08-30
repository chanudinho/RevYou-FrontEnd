import React, { Component } from 'react';
import { connect } from 'react-redux';
import InviteResearchers from './inviteResearchers';
import SetReseartcherBase from './setResearcherBase';

class ManageResearchers extends Component {
  render() {
    return (
      <div>
        <InviteResearchers {...this.props}/>
        <SetReseartcherBase {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    project: state.project
});

export default connect(mapStateToProps)(ManageResearchers);
