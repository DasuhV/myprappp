
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../../pages/Users'
import Dashboard from '../../pages/Dashboard'
import Devices from '../../pages/Devices'
import Login from '../../pages/Login'


const AppRouter = () => {
	return (
		<Suspense fallback={'loading...'}>
			<Routes>
				<Route path='/*' element={<Dashboard />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/auth' element={<Login />} />
				<Route path='/devices' element={<Devices />} />
				<Route path='/users' element={<Users />} />
			</Routes>
		</Suspense>
	)
}

export default AppRouter
