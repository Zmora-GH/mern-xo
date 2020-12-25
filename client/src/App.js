import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AuthContext} from './common/context/AuthContext';

import Main from './main/Main';
import Game from './game/Game';
import AuthPage from './auth/AuthPage';
import Header from './common/Header';

function App() {
    let isAuthenticated = false
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data && data.token) {isAuthenticated = true }
    if (isAuthenticated){
        return (
            <Router>
                <div className="container bg-light h-100">
                    <Header/>
                    <Switch>
                        <Route path="/main/:tagId(\d+)?"> <Main /> </Route>
                        <Route path="/game/:gameId(\d+)"> <Game /> </Route>
                        <Redirect to="/main"/>
                    </Switch>
                </div>
            </Router>
        );
    } else {
        return (
            <Router>
                <div className="container bg-light h-100">
                    <Switch>
                        <Route path="/auth" exact> <AuthPage /> </Route>
                        <Redirect to="/auth"/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
