import { useState } from 'react';
import { createPlayer } from '../../Services/players';

export default function PlayerAdd() {
	const [name, setName] = useState('');
	const [teamId, setTeamId] = useState('');
	const [position, setPosition] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await createPlayer({ name, teamId, position });
		history.pushState(``);
	};
}
