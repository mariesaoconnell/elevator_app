import React, {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

function BuildingForm({setFloors, setElevators, setBuildings}) {
  const [floorInput, setFloorInput] = useState(1);
	const [elevatorInput, setElevatorInput] = useState(1);
	const [buildingsInput, setBuildingsInput] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFloors(floorInput);
		setElevators(elevatorInput)
		setBuildings(buildingsInput)
  };

  return (
		<Container className='my-5 text-center'>
			<h1>Building Builder</h1>
			<Form onSubmit={handleSubmit} className='p-5 my-5 rounded' style={{backgroundColor:"lightgray"}}>
				<Row className='d-flex inline-flex justify-content-center'>
					<Col>
						<Form.Group className='m-5'>
							<Form.Label>Number of Floors</Form.Label>
							<Form.Control
								type='number'
								min='1'
								name='floors'
								value={floorInput}
								onChange={(event) => setFloorInput(event.target.value)}
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='m-5'>
							<Form.Label>Number of Elevators</Form.Label>
							<Form.Control
								type='number'
								min='1'
								name='elevators'
								value={elevatorInput}
								onChange={(event)=> setElevatorInput(event.target.value)}
								/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className='m-5'>
							<Form.Label>Number of Buildings</Form.Label>
							<Form.Control
								type='number'
								min='1'
								name='buildings'
								value={buildingsInput}
								onChange={(event)=> setBuildingsInput(event.target.value)}
								/>
						</Form.Group>
					</Col>
					<Col>
						<Button type='submit' className='m-5' size='lg'>
							Build
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default BuildingForm;
