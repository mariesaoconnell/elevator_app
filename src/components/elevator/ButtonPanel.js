import React from 'react';
import { Container } from 'react-bootstrap';

import FloorNumButton from './FloorNumButton';

function ButtonPanel({totalFloors, requests, addRequest, arrived}) {

  // TURN TOTAL FLOORS INTO AN ARRAY
  const floorNumbers = Array.from(
    { length: totalFloors },
    (_, index) => index + 1
  );

  return (
		<Container className='d-flex flex-wrap justify-content-center p-3 rounded' style={{backgroundColor:'darkgray'}}>
			{floorNumbers.map((floorNumber) => (
				<FloorNumButton
          key={floorNumber}
          floorNumber={floorNumber}
          requests={requests}
          addRequest={addRequest}
          arrived={arrived}
          />
			))}
		</Container>
	);
}

export default ButtonPanel;
