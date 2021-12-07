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
				</header>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/teams' component={TeamList} />
					<Route path='/teams/:teamId' component={TeamDetail} />
				</Switch>
				<footer>Footer</footer>
			</Router>
		</div>
	);
}

export default App;
