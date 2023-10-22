import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ElevatorLayout from '../elevator/ElevatorLayout';

function BuildingLayout({ floors, elevatorArray, setFloors, buildingNumber }) {
	return (
		<Container className="m-5 rounded" style={{background:'lightblue'}}>
			<Container className='d-flex justify-content-end'>
				<h2 className='m-5'>Building: {buildingNumber}</h2>
				<h2 className='m-5'>Total Floors: {floors}</h2>
				<Button className='m-5' onClick={() => setFloors(null)}>
					Reset
				</Button>
			</Container>
			<Container className='d-flex justify-content-center inline-flex flex-wrap '>
				{elevatorArray.map((elevatorNumber) => (
					<ElevatorLayout
						key={elevatorNumber}
						elevatorNumber={elevatorNumber}
						totalFloors={floors}
					/>
				))}
			</Container>
		</Container>
	);
}

export default BuildingLayout;
