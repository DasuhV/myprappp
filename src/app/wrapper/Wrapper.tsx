import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { CSSObject, Theme, styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import AppRouter from '../AppRouter/AppRouter'
import { Routes } from '../../shared/utils/routes/routes'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { ArrowForwardIos } from '@mui/icons-material'
import { Slide, Zoom } from '@mui/material'
const drawerWidth = 180

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.standard,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

export default function MiniDrawer() {
	const navigate = useNavigate()
	const [open, setOpen] = useState(true)

	const handleDrawerToggle = () => {
		setOpen(prev => !prev)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Drawer variant='permanent' open={open}>
				<Divider />
				<List>
					{Routes.map(({ icon, name, path }) => (
						<ListItem
							key={name}
							disablePadding
							sx={{
								display: 'block',
							}}
							onClick={() => navigate(path)}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{icon}
								</ListItemIcon>
								<ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />

				<ListItem
					onClick={() => handleDrawerToggle()}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: open ? 'end' : 'start',
						mt: 30,
					}}
		
				>
					<ListItemIcon
						sx={{
							minWidth: 0,
							mr: open ? 3 : 'auto',
							justifyContent: 'center'
						}}
					>
						{open ? <ArrowBackIosIcon /> : <ArrowForwardIos />}
					</ListItemIcon>
				</ListItem>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, pl: 2, }}>
				<AppRouter />
			</Box>
		</Box>
	)
}
