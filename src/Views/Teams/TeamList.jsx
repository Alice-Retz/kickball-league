import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../Services/teams';

export default function TeamList() {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		getTeams().then((res) => setTeams(res));
	}, []);

	return (
		<>
			<h1>Teams:</h1>
			<ul>
				{teams.map((team) => {
					return (
						<li key={team.id}>
							<Link to={`/teams/${team.id}`}>{team.name}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
