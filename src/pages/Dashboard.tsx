import { Box, styled } from '@mui/material'
import DashboardWidget from '../widgets/Dashboard/Dashboard-widget'

const DashboardPage = styled(Box, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	color: 'green',
}))
const Dashboard = () => {
	return (
		<DashboardPage>
			<DashboardWidget />
		</DashboardPage>
	)
}

export default Dashboard
