import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import '../Register/Register.css'

const Register = () => {

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const [paswordError,setPaswordError] = useState('');
    const [success,setSuccess] = useState(false);
    const [accepted,setAccepted] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        setSuccess(false);
        const form = e.target;
        const name = form.name.value;
        const PhotoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name,PhotoURL,email,password,confirm);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setPaswordError("please provide at least two uppercase");
          return;
      }
      if(password.length < 6){
          setPaswordError("Please should be at least 6 characters");
          return;
      }
      if(!/(?=.*[!@#$%&*^])/.test(password)){
          setPaswordError("Please add at least one special character");
          return;
      }
      if(password !== confirm){
        setPaswordError("password and confirm password did not match");
        return;
      }
      setPaswordError("");

        createUser(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setSuccess(true);
          form.reset();
          handleUpdateUserProfile(name,PhotoURL);
        })
        .catch(error =>{
          setPaswordError(error.message)
      })
    }
    const handleUpdateUserProfile = (name,PhotoURL) =>{
      const profile ={
        displayName:name,
        photoURL:PhotoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error =>{console.error(error)});
    }

    const handleAccepted = e =>{
      setAccepted(e.target.checked);
    }

  return (
    <div className="w-50 mx-auto mt-5">
        <h3 className="text-warning mb-4 over">Please Register Now !!! </h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter FullName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="PhotoURL" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="confirm" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
         type="checkbox" onClick={handleAccepted}
         label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>
        <p className="text-danger">{paswordError}</p>
        {success && <p className="text-success">User created successfully</p>}
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
      <p className="mt-3">
        Already have an account ? <Link to="/login">Please Login </Link>
      </p>
    </div>
  )
}

export default Register