import { useState } from 'react';
import { Container } from 'react-bootstrap';

import BuildingForm from './components/BuildingForm';
import BuildingLayout from './components/building/BuildingLayout';

import './App.css';

function App() {
	const [floors, setFloors] = useState(null);
	const [elevators, setElevators] = useState(null);
	const [buildings, setBuildings] = useState(null);

	const elevatorArray = Array.from(
		{ length: elevators },
		(_, index) => index + 1
	);
	const buildingsArray = Array.from(
		{ length: buildings },
		(_, index) => index + 1
	);

	return (
		<>
			{floors === null ? (
				<BuildingForm
					setFloors={setFloors}
					setElevators={setElevators}
					setBuildings={setBuildings}
				/>
			) : (
				<Container>
					{buildingsArray.map((buildingNumber) => {
						return (
							<BuildingLayout
								key={buildingNumber}
								buildingNumber={buildingNumber}
								floors={floors}
								elevatorArray={elevatorArray}
								setFloors={setFloors}
							/>
						);
					})}
				</Container>
			)}
		</>
	);
}

export default App;
