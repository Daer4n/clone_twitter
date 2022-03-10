import './App.scss';
import { LeftMenu } from './Components/LeftMenu';
import { MainMenu } from './Components/MainContent';

function App() {
	return (
		<div className="page">
			<LeftMenu />
			<MainMenu />
		</div>
	);
}

export default App;
