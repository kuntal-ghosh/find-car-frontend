import React,{useState,useEffect}from 'react'
import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Link, useHistory } from "react-router-dom";

const schema = Joi.object({
  name: Joi.string()
    .required()
});


export default function HomePage() {

  let history = useHistory();

  const { handleSubmit, errors, control } = useForm({
    mode: "all",
    resolver: joiResolver(schema),

    defaultValues: {
      name: "",
      password: "",
    },
    shouldFocusError: true,
  });

  const  onSubmit =  async (data) =>{
    

    // fetch("http://localhost:8000/api/cars")
    // .then((response) => response.json())
    // .then((cars) => {console.log(cars)})
    // try {
    //   let result =await(await fetch(
    //     `http://localhost:8000/api/cars/${data.name}`,
    //   )).json() ;

    //   if (result) {
    //     console.log("success");
    //     console.log(result);
    //     // let json = result.json();
    //     // console.log("json");
    //     // console.log(json);
    //   }
    // } catch (error) {
    //   console.log("error");
    //   console.log(error);
    // }

    history.push(`/search_result/${data.name}`);
    
    
  }

    return (
        
      <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label>Search Cars</Form.Label>
          <Controller
            as={
              <Form.Control
                type="name"
                placeholder="Enter Car Name"
                isInvalid={!!errors.name}
                autoFocus
              />
            }
            control={control}
            name="name"
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              {errors.name.message || "name is not valid"}
            </Form.Control.Feedback>
          )}
        </Form.Group>
       
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
        
    )
}
