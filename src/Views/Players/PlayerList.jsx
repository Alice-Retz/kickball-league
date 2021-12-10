import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePlayerById, getPlayers } from '../../Services/players';

export default function PlayerList() {
	const [loading, setLoading] = useState(true);
	const [players, setPlayers] = useState([]);

	const loadPlayers = async () => {
		setLoading(true);
		const resp = await getPlayers();
		setPlayers(resp);
		setLoading(false);
	};

	useEffect(() => {
		loadPlayers();
	}, []);

	const handleDelete = async ({ id, name }) => {
		const shouldDeletePlayer = window.confirm(
			`Are you sure you want to delete ${name}? This action can't be reversed.`
		);

		if (shouldDeletePlayer) {
			await deletePlayerById(id);
			await loadPlayers();
		}
	};

	if (loading) return <p>Loading Players...</p>;

	return (
		<>
			<h1>Players:</h1>
			<Link to='/players/add' className='App-link'>
				Add a Player
			</Link>
			<ul>
				{players.map((player) => {
					return (
						<li key={player.id}>
							<Link to={`/players/${player.id}`}>{player.name}</Link>{' '}
							<button
								type='button'
								aria-label={`Delete the ${player.name}`}
								onClick={() =>
									handleDelete({ id: player.id, name: player.name })
								}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}
