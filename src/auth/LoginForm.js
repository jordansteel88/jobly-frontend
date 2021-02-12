import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AlertMessage from "../utilities/AlertMessage";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Form.css";

const LoginForm = ({ login }) => {
  const history = useHistory();
  const [formErrors, setFormErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let res = await login(formData);

    res.success ? history.push("/companies") : setFormErrors(res.err);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(creds => ({ ...creds, [name]: value }));
  }

  return (
    <div className="LoginForm mt-5">
      <h3 className="mb-5">Enter your username and password to proceed.</h3>
      <Form className="LoginForm-form mt-5" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            className="LoginForm-input"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange} 
            required
          />
        </FormGroup>        
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            className="LoginForm-input"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange} 
            required
          />
        </FormGroup>

        {formErrors.length
          ? <AlertMessage type="danger" messages={formErrors} />
          : null}

        <Button className="LoginForm-btn mb-5" color="primary">Login</Button>
      </Form>
    </div>
  );
}

export default LoginForm;