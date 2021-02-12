import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMessage from "../utilities/AlertMessage";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Form.css";

const SignupForm = ({ register }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let res = await register(formData);

    res.success ? history.push("/companies") : setErrors(res.err);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(creds => ({ ...creds, [name]: value }));
  }


  return (
    <div className="SignupForm mt-5">
      <h3 className="mb-5">Please fill out all fields to register</h3>
      <Form className="SignupForm-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            className="SignupForm-input"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange} 
          />
        </FormGroup>        
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            className="SignupForm-input"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange} 
          />
        </FormGroup>        
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            className="SignupForm-input"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange} 
          />
        </FormGroup>        
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            className="SignupForm-input"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange} 
          />
        </FormGroup>        
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            className="SignupForm-input"
            name="password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange} 
          />
        </FormGroup>

        {errors.length
          ? <AlertMessage type="danger" messages={errors} />
          : null}

        <Button className="SignupForm-btn mb-5" color="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default SignupForm;