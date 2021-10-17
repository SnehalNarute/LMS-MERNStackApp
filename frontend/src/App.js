import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './screens/LandingPage/LandingPage'
import MyNotes from './screens/MyNotes/MyNotes'
import SingleNote from './screens/SingleNote/SingleNote'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import CreateNote from './screens/SingleNote/CreateNote'
import { useState } from 'react'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import CoursesScreen from './screens/CoursesScreen'

const App = ({ course }) => {
	const [search, setSearch] = useState('')

	return (
		<Router>
			<Header setSearch={(s) => setSearch(s)} />
			<main className='App'>
				<Route path='/' component={LandingPage} exact course={course}/>
				<Route path='/login' component={LoginScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route
					path='/mynotes'
					component={({ history }) => (
						<MyNotes search={search} history={history} course={course}/>
					)}
				/>
				<Route path='/note/:id' component={SingleNote} course={course}/>
				<Route path='/createnote' component={CreateNote} course={course}/>;
				<Route path='/profile' component={ProfileScreen} />
				<Route path='/courses' component={CoursesScreen} course={course} />
			</main>
			<Footer />
		</Router>
	)
}

export default App
