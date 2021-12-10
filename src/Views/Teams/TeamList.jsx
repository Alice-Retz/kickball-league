import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../Services/teams';

export default function TeamList() {
	const [loading, setLoading] = useState(true);
	const [teams, setTeams] = useState([]);

	const loadTeams = async () => {
		setLoading(true);
		const resp = await getTeams();
		setTeams(resp);
		setLoading(false);
	};

	useEffect(() => {
		loadTeams();
	}, []);

	const handleDelete = async ({ id, name }) => {
		const shouldDeleteTeam = window.confirm(
			`Are you sure you want to delete ${name}? This action can't be reversed.`
		);

		if (shouldDeleteTeam) {
			await deleteTeamById(id);
			await loadTeams();
		}
	};

	if (loading) return <p>Loading Teams...</p>;

	return (
		<>
			<h1>Teams:</h1>
			<Link to='/teams/add' className='App-link'>
				Add a Team
			</Link>
			<ul>
				{teams.map((team) => {
					return (
						<li key={team.id}>
							<Link to={`/teams/${team.id}`}>{team.name}</Link>{' '}
							<button
								type='button'
								aria-label={`Delete the ${team.name}`}
								onClick={() => handleDelete({ id: team.id, name: team.name })}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}
