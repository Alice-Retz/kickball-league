import { useState } from 'react';
import { useHistory } from 'react-router';
import TeamForm from '../../Compnents/Teams/TeamForm';
import { createTeam } from '../../Services/teams';

export default function TeamAdd() {
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await createTeam({ name, city, state });
		history.push(`/teams/${response[0].id}`);
	};

	return (
		<>
			<fieldset>
				<TeamForm
					name={name}
					city={city}
					state={state}
					handleSubmit={handleSubmit}
					setName={setName}
					setCity={setCity}
					setState={setState}
				/>
			</fieldset>
		</>
	);
}
