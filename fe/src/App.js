import "./App.css";
import react-responsive-pagination/themes/classic.css;
import axios from "axios";
import LastestPost from "./components/LastestPost";

function App() {
	return (
		<div className="fluid-container">
			<LastestPost />
		</div>
	);
}

export default App;
