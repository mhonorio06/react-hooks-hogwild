import React, { useState }from "react";
import Nav from "./Nav";
import HogList from './HogList';
import hogs from "../porkers_data";
import HogForm from './HogForm';



function App() {
	
	const [piggies, setPiggies] = useState(hogs)
	
	function handleSubmit(newHog) {
		setPiggies([...piggies, newHog])
	}
	return (
		<div className="App">
			<Nav />
			<HogForm onFormSubmit={handleSubmit}/>
			<HogList hogs={hogs} />

		</div>
	);
}

export default App;
