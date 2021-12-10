import { useState } from 'react';
import { useHistory } from 'react-router';
import PlayerForm from '../../Components/Players/PlayerForm';
import { createPlayer } from '../../Services/players';

export default function PlayerAdd() {
	const [name, setName] = useState('');
	const [teamId, setTeamId] = useState('');
	const [position, setPosition] = useState('');
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await createPlayer({ name, teamId, position });
		history.push(`/players/${response[0].id}`);
	};

	return (
		<>
			<fieldset>
				<legend>Add a Player</legend>
				<PlayerForm
					name={name}
					teamId={teamId}
					position={position}
					handleSubmit={handleSubmit}
					setName={setName}
					setTeamId={setTeamId}
					setPosition={setPosition}
				/>
			</fieldset>
		</>
	);
}
