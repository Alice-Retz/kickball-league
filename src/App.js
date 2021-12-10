import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import TeamList from './Views/Teams/TeamList';
import TeamDetail from './Views/Teams/TeamDetail';
import PlayerDetail from './Views/Players/PlayerDetail';
import PlayerList from './Views/Players/PlayerList';
import TeamAdd from './Views/Teams/TeamAdd';
import PlayerAdd from './Views/Players/PlayerAdd';

function App() {
	return (
		<div className='App'>
			<Router>
				<header>
					Kickball!{' '}
					<NavLink to='/' className='App-Link' exact>
						Home
					</NavLink>{' '}
					<NavLink to='/teams' className='App-Link' exact>
						Teams
					</NavLink>{' '}
					<NavLink to='/players' className='App-Link' exact>
						Players
					</NavLink>{' '}
				</header>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/teams' component={TeamList} />
					<Route exact path='/teams/add' component={TeamAdd} />
					<Route exact path='/teams/:teamId' component={TeamDetail} />
					<Route exact path='/players' component={PlayerList} />
					<Route exact path='/players/add' component={PlayerAdd} />
					<Route exact path='/players/:playerId' component={PlayerDetail} />
				</Switch>
				<footer>Footer</footer>
			</Router>
		</div>
	);
}

export default App;
