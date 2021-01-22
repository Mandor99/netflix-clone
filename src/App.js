import './App.css';
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Home />
		</div>
	);
}

export default App;
