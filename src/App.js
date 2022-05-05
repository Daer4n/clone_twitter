import './App.scss';
import { LeftMenu } from './Components/LeftMenu';
import { MainMenu } from './Components/MainContent';
import { Footer } from './Components/Footer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlw01SvoIcbMm3QsmP8CZ2D3B-JLL8Cjk",
  authDomain: "touitter-daer4n.firebaseapp.com",
  projectId: "touitter-daer4n",
  storageBucket: "touitter-daer4n.appspot.com",
  messagingSenderId: "631515521548",
  appId: "1:631515521548:web:6a418b1163f03e5022c429"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

function App() {
	return (
		<div className="page">
			<LeftMenu />
			<MainMenu />
			<Footer />
		</div>
	);
}

export default App;
