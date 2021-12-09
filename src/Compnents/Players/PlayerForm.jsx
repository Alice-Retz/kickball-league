export default function PlayerForm({
	name,
	teamId,
	position,
	handleSubmit,
	setName,
	setTeamId,
	setPosition,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='name'>Name:</label>
			<input
				id='name'
				name='name'
				type='text'
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>

			<label htmlFor='teamId'>Team ID:</label>
			<input
				id='team Id'
				name='team Id'
				type='number'
				value={teamId}
				onChange={(target) => setTeamId(target.value)}
			/>

			<label htmlFor='teamId'>Position:</label>
			<input
				id='position'
				name='position'
				type='text'
				value={position}
				onChange={(target) => setPosition(target.value)}
			/>
			<button type='submit' aria-label='Add a player'>
				Add
			</button>
		</form>
	);
}
