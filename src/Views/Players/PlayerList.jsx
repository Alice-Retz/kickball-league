import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../Services/players';

export default function PlayerList() {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		getPlayers().then((res) => setPlayers(res));
	}, []);

	return (
		<>
			<h1>Players:</h1>
			<ul>
				{players.map((player) => {
					return (
						<li key={player.id}>
							<Link to={`/players/${player.id}`}>{player.name}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
