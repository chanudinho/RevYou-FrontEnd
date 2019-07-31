import React, {Component} from 'react';
import MainQuestion from './mainQuestion';
import SecondaryQuestion from './secondaryQuestion';
import StandardQuery from './standardQuery';
import Language from './language'
import SearchEngine from './searchEngine'
import SearchKeyword from './searchKeyword'
import SelectionCriteria from './selectionCriteria'

class Protocol extends Component{
    render() {
        return(
            <div>
                <MainQuestion/>
                <SecondaryQuestion/>
                <StandardQuery/>
                <SearchKeyword/>
                <Language/>
                <SearchEngine/>
                <SelectionCriteria/>
            </div>
        )
    }
}

export default Protocol;