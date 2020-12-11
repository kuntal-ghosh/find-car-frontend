import React, { useState,useEffect } from 'react'
import { Card, Button } from "react-bootstrap";
import {useHistory,useParams} from 'react-router-dom';

export default function SearchResult() {

 let {name}=useParams();
 let history=useHistory();
      const [cars,setCars]=useState([]);

 useEffect(() => {
  async   function getCars(){
      try {
        let result =await(await fetch(
          `http://localhost:8000/api/cars/${name}`,
        )).json() ;
            
        if (result.length > 0) {
          console.log("success");
          console.log(result);
          setCars(result);
        }
        
      } catch (error) {
        console.log("error");
        console.log(error);
      }
     }
     getCars();
 },[])

 
 function handleClick(id)
 {
history.push(`/car-details/${id}`);
 }
  return (
    <div className="row">
      {cars.length>0 && cars.map((car, index) => (
        <div key={index}>
         <div className="col-md-4">
         <Card style={{ width: '18rem' ,cursor:"pointer"}}
         onClick={(car)=>{handleClick(car._id)}}>
           
  <Card.Img variant="top" src={`data:image/png;base64,${car.car_image.img}`}  style={{height:"200px"}}/>
  <Card.Body>
      <Card.Title>{car.name}</Card.Title>
    <Card.Text>
      {car.details}
    </Card.Text>
  </Card.Body>
</Card>
         </div>
        </div>
        
      ))}
    </div>
  )
}
