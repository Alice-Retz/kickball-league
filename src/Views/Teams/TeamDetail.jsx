import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetail({ label, match }) {
	const { teamId } = match.params;
	const [team, setTeam] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTeamById(teamId)
			.then((resp) => setTeam(resp))
			.finally(() => setLoading(false));
	}, [teamId]);

	if (loading) return <h1>Loading team...</h1>;

	return (
		<>
			<p>
				<Link to='/teams' className='App-link'>
					Back to Teams
				</Link>
			</p>
			<p>
				<h1>{team.name}</h1>
			</p>
			<p>Team Detail: {teamId}</p>
			<p>
				From {team.city}, {team.state}
			</p>
			<ul>
				{team.players.map((player) => {
					return (
						<li key={player.id}>
							{player.position} - {player.name}
						</li>
					);
				})}
			</ul>
		</>
	);
}
