import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it('should render the details of a designated player', async () => {
	const { container } = render(
		<MemoryRouter>
			<PlayerDetail match={{ params: { playerId: '3' } }} />
		</MemoryRouter>
	);

	screen.getByText('Loading player...');

	const playerName = await screen.findByText('Mike Comeaux', { exact: false });

	expect(playerName).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
