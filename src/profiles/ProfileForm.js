import React, { useState, useContext } from "react";
import JoblyApi from "../api/api";
import UserContext from "../auth/UserContext";
import AlertMessage from "../utilities/AlertMessage";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../auth/Form.css"

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.updateUser(username, profileData);
    } catch (err) {
      setErrors(err);
      return;
    }

    setFormData(data => ({ ...data, password: "" }));
    setErrors([]);
    setSaveConfirmed(true);
    setCurrentUser(updatedUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({...data, [name]: value}));
    setErrors([]);
  }

  return (
      <div className="ProfileForm mt-5">
        <h3 className="mb-5">Edit your profile and click submit to save changes</h3>
            <Form className="ProfileForm-form" onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Username</Label>
                <h4 className="ProfileForm-username">{formData.username}</h4>
              </FormGroup>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    name="firstName"
                    id="firstName"
                    className="ProfileForm-input"
                    value={formData.firstName}
                    onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                    name="lastName"
                    id="lastName"
                    className="ProfileForm-input"
                    value={formData.lastName}
                    onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    name="email"
                    id="email"
                    className="ProfileForm-input"
                    value={formData.email}
                    onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Confirm password to save changes:</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    className="ProfileForm-input"
                    value={formData.password}
                    onChange={handleChange}
                />
              </FormGroup>

              {errors.length
                  ? <AlertMessage type="danger" messages={errors} />
                  : null}

              {saveConfirmed
                  ?
                  <AlertMessage type="success" messages={["Updated successfully."]} />
                  : null}

              <Button className="ProfileForm-btn mb-5" color="primary">Submit</Button>
            </Form>
      </div>
  );
}

export default ProfileForm;