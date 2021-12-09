import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayerList from './PlayerList';

it('displays a list of players', async () => {
	const { container } = render(
		<MemoryRouter initialEntries={['/players']}>
			<Route path='/players'>
				<PlayerList />
			</Route>
		</MemoryRouter>
	);

	const playerName = await screen.findByText('Mike Comeaux', { exact: false });

	expect(playerName).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
