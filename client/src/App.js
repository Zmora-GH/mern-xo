import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './main/Main';
import Game from './game/Game';
import AuthPage from './auth/AuthPage';

import Header from './common/Header';

function App() {
    if (true){
        return (
            <Router>
                <div className="container bg-light h-100">
                    <Header/>
                    <Switch>
                        <Route path="/main" exact> <Main /> </Route>
                        <Route path="/game" exact> <Game /> </Route>
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
