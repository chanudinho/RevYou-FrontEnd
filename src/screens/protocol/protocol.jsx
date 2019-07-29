import React, {Component} from 'react';
import MainQuestion from './mainQuestion'
import SecondaryQuestion from './secondaryQuestion'

class Protocol extends Component{
    render() {
        return(
            <div>
                <MainQuestion/>
                <SecondaryQuestion/>
            </div>
        )
    }
}

export default Protocol;