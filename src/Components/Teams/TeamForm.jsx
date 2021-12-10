export default function TeamForm({
	name,
	city,
	state,
	handleSubmit,
	setName,
	setCity,
	setState,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='name'>Name:</label>{' '}
			<input
				id='name'
				name='name'
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>{' '}
			<label htmlFor='city'>City:</label>{' '}
			<input
				id='city'
				name='city'
				type='text'
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>{' '}
			<label htmlFor='state'>State:</label>{' '}
			<input
				id='state'
				name='state'
				type='text'
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>{' '}
			<button type='submit' aria-label='Add a team'>
				Add
			</button>
		</form>
	);
}
