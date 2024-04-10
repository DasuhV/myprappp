import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Wrapper from './app/wrapper/Wrapper'
// import AppRouter from './components/AppRouter/AppRouter'
// import SideBar from './components/sideBar/SideBar'
function App() {
	return (
		<div className='app-container'>
			My App
			<BrowserRouter>
				{/* <SideBar />
				<AppRouter /> */}
				<Wrapper />
			</BrowserRouter>
		</div>
	)
}

export default App
