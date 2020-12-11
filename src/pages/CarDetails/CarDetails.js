import React from 'react'
import {Button,Card} from "@material-ui/core/";
export default function CarDetails() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                <Card style={{ width: '18rem' ,cursor:"pointer"}}>

                <Card.Img variant="top" src="/bmw.jpg"/>
  <Card.Body>
      <Card.Title>
          {/* {car.name} */}
      </Card.Title>
    <Card.Text>
      {/* {car.details} */}
    </Card.Text>
  </Card.Body>
</Card>
                </div>

            </div>

        </div>
    )
}
