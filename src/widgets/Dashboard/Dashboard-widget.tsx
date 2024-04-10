import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Box from '@mui/material/Box'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import Chart from './Chart'
import Deposits from './Deposits'
import Orders from './Orders'
import { PieChart } from '@mui/x-charts'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function DashboardWidget() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<Box
					component='main'
					sx={{
						backgroundColor: theme =>
							theme.palette.mode === 'light'
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<h1 style={{ paddingLeft: 20 }}>Dashboard</h1>
					<Container maxWidth='xl'>
						<Grid container spacing={1}>
							<Grid item xs={6} md={6} lg={4}>
								<Paper>
									<PieChart
										series={[
											{
												data: [
													{ id: 0, value: 10, label: 'Avaio' },
													{ id: 1, value: 15, label: 'Unify' },
													{ id: 2, value: 20, label: 'Cisco' },
												],
												innerRadius: 0,
												outerRadius: 60,
												paddingAngle: 5,
												cornerRadius: 5,
												startAngle: -90,
											},
										]}
										width={280}
										height={200}
									/>
								</Paper>
							</Grid>
							{/* Chart */}
							<Grid item xs={6} md={6} lg={6}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: 240,
									}}
								>
									<Chart />
								</Paper>
							</Grid>
							{/* Recent Deposits */}
							<Grid item xs={6} md={4} lg={2}>
								<Paper
									sx={{
										p: 2,
										display: 'flex',
										flexDirection: 'column',
										height: 240,
									}}
								>
									<Deposits />
								</Paper>
							</Grid>
							{/* Recent Orders */}
							<Grid item xs={12}>
								<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
									<Orders />
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	)
}
