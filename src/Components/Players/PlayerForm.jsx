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
				onChange={(e) => setName(e.target.value)}
			/>

			<label htmlFor='teamId'>Team ID:</label>
			<input
				id='team Id'
				name='team Id'
				type='number'
				value={teamId}
				onChange={(e) => setTeamId(e.target.value)}
			/>

			<label htmlFor='teamId'>Position:</label>
			<input
				id='position'
				name='position'
				type='text'
				value={position}
				onChange={(e) => setPosition(e.target.value)}
			/>
			<button type='submit' aria-label='Add a player'>
				Add
			</button>
		</form>
	);
}
