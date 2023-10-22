import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap'

function FloorNumButton({floorNumber, requests, addRequest, arrived}) {
  const [pressed, setPressed] = useState(false);

  useEffect(()=>{
    if(arrived === true){
      setPressed(false);
    }
  }, [arrived])

  // ADD FLOOR NUMBER TO REQUESTS WHEN BUTTON IS PRESSED
  const requestFloor = (floorNumber) => {
    // CHECK IF FLOOR IS IN THE SET
    if(!requests.includes(floorNumber)){
      addRequest([...requests, floorNumber])
      console.log(`Added floor number: ${floorNumber}`)
      setPressed(true)
    }
  }
  return (
		<Button className={`m-2 btn-circle ${pressed ? 'btn-warning' : 'btn-primary'}`} style={{borderRadius:"80px", height: "50px", width:"50px"}} onClick={() => requestFloor(floorNumber)} size='lg'>
			{floorNumber}
		</Button>
	);
}

export default FloorNumButton;
