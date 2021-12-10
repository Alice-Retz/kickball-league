import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamList from './TeamList';

it('displays a list of teams', async () => {
	const { container } = render(
		<MemoryRouter initialEntries={['/teams']}>
			<Route path='/teams'>
				<TeamList />
			</Route>
		</MemoryRouter>
	);

	const playerName = await screen.findByText('Big Easy Tigers', {
		exact: false,
	});

	expect(playerName).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
