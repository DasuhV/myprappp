import DashboardIcon from '@mui/icons-material/Dashboard'
import DevicesIcon from '@mui/icons-material/Devices'
import LoginIcon from '@mui/icons-material/Login'
import PeopleIcon from '@mui/icons-material/People'

import { ComponentType } from 'react'
import Dashboard from '../../../pages/Dashboard'
import Login from '../../../pages/Login'
import Users from '../../../pages/Users'
import User from '../../../pages/User'
import Devices from '../../../pages/Devices'

export interface IRoute {
	path: string
	element: ComponentType
}
export enum RoutesName {
	DASHBOARD = '/dashboard',
	USERS = '/users',
	DEVICES = '/devices',
	LOGIN = '/login',
	USER = 'users/:id',
}

export const authorizedUserRoutes: IRoute[] = [
	{ path: '/', element: Dashboard },
	{ path: RoutesName.DASHBOARD, element: Dashboard },
	{ path: RoutesName.USERS, element: Users },
	{ path: RoutesName.USER, element: User },
	{ path: RoutesName.DEVICES, element: Devices },
]

export const notAuthorizedUserRoutes = [
	{ path: RoutesName.LOGIN, element: Login },
]

export const Routes = [
	{ name: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
	{ name: 'Devices', icon: <DevicesIcon />, path: '/users' },
	{ name: 'Users', icon: <PeopleIcon />, path: '/devices' },
	{ name: 'Auth', icon: <LoginIcon />, path: '/auth' },
]
