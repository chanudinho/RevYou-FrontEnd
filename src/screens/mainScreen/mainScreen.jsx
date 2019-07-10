import React from 'react';
import { HashRouter as Router} from "react-router-dom";
import Layouts from '../../menu/Layout';
import LoginRouter from '../../router/loginRouter';

const MainScreen = ({login}) => (
    <Router>
        {!login && <LoginRouter/>}
        {login && <Layouts/>}
    </Router>
)

export default MainScreen;