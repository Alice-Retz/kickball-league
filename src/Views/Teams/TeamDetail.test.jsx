import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import TeamDetail from './TeamDetail';

it('should render a list of players on a designated team', async () => {
	render(
		<MemoryRouter>
			<TeamDetail
				label='The value of the label prop...'
				match={{ params: { teamId: '3' } }}
			/>
		</MemoryRouter>
	);

	screen.getByText('Loading team...');

	const teamName = await screen.findByText(`Cajun Country 'Gators`, {
		exact: false,
	});

	expect(teamName).toBeInTheDocument();
});
