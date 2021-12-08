import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayerById } from '../../Services/players';

export default function PlayerDetail({ match }) {
	const { playerId } = match.params;
	const [player, setPlayer] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPlayerById(playerId)
			.then((resp) => setPlayer(resp))
			.finally(() => setLoading(false));
	}, [playerId]);

	if (loading) return <h1>Loading player...</h1>;

	return (
		<>
			<Link to='/players' className='App-link'>
				Back to Players
			</Link>
			<p>
				<h1>{player.name}</h1>
			</p>
			<ul>
				<Link to={`/teams/${player.team_id}`} className='App-link'>
					<li>{player.teams.name}</li>
				</Link>
				<li>{player.position}</li>
			</ul>
		</>
	);
}
