import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonPanel from './ButtonPanel';

function ElevatorLayout({ totalFloors, elevatorNumber }) {
	const [requests, addRequest] = useState([]);
	const [direction, setDirection] = useState(0);
  const [currentFloor, setCurrentFloor] = useState(1);
	const [arrived, setArrived] = useState(false);

	const currentFloorRef = useRef(1); // Create a ref to store the current floor

	useEffect(() => {
		setArrived(false);

		const move = () => {
			if (requests.length === 0) {
				return;
			}
			let request = requests.shift();

			let direction = 0; // Default to stop
			if (currentFloorRef.current < request) {
				direction = 1; // UP
        setDirection(1)
			} else if (currentFloorRef.current > request) {
				direction = -1; // DOWN
        setDirection(-1);
			}

			const moveInterval = setInterval(() => {
				if (currentFloorRef.current !== request) {
					currentFloorRef.current += direction;
          setCurrentFloor(currentFloorRef.current)
				} else {
					clearInterval(moveInterval);
          setDirection(0)
					setArrived(true)
					console.log(`We reached floor ${request}`);
					move();
				}
			}, 1000);
		};

		if (requests.length > 0) {
			move();
		}
	}, [requests]);

	return (
		<Container>
			<Container
				className='d-flex flex-column rounded p-5 my-5'
				style={{ backgroundColor: 'lightgray' }}>
				<Row className='m-3'>
					<h2>Elevator: {elevatorNumber}</h2>
				</Row>
				<Row className='my-4 text-center'>
					<Col className='d-flex justify-content-center' >
						{direction === 1 ? (
							<div id='up-arrow' style={{ borderBottom: '50px solid gold' }}></div>
						) : (
							<div id='up-arrow'></div>
						)}
					</Col>
					<Col>
						<h3>
							Current Floor: {currentFloorRef.current}
						</h3>
					</Col>
					<Col className='d-flex justify-content-center'>
						{direction === -1 ? (
							<div
								id='down-arrow'
								style={{ borderTop: '50px solid gold' }}></div>
						) : (
							<div id='down-arrow'></div>
						)}
					</Col>
				</Row>
				<Row className='my-2 p-3'>
					<Col></Col>
					<Col>
						<ButtonPanel
							totalFloors={totalFloors}
							requests={requests}
							addRequest={addRequest}
							arrived={arrived}
						/>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</Container>
	);
}

export default ElevatorLayout;
