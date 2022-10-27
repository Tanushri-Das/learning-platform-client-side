import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import '../Login/Login.css';

const Login = () => {

    const {signIn,providerLogin} = useContext(AuthContext);
    const [passwordError,setPasswordError] = useState('');
    const [success,setSuccess] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e =>{
        e.preventDefault();
        setSuccess(false);
        setPasswordError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
            navigate(from,{replace:true})
        })
        .catch(error =>{
          if(error.message == 'Firebase: Error (auth/wrong-password).'){
            setPasswordError('please provide a valid password')
          }
      })
    }
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from,{replace:true})
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
        
    }
    const handleGithubSignIn = () =>{
      providerLogin(githubProvider)
      .then(result =>{
        const user = result.user;
        navigate(from,{replace:true})
        console.log(user)
      })
      .catch(error =>{
        console.error(error)
    })
    }
  return (
    <div className="w-50 mx-auto mt-5">
        <h3 className="text-success heading">Please Login !!! </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>

        <p className="text-danger">{passwordError}</p>
        {success && <p className="text-success">Successfully login in your account</p>}

        <Button variant="primary" type="submit" className="d-block mb-3">
          Login
        </Button>
        
      </Form>
       <div>
       <Button variant="outline-success" onClick={handleGoogleSignIn} className="me-5">Login with Google</Button>
      <Button variant="outline-info" onClick={handleGithubSignIn} className="github">Login with Github</Button>
       </div>
     
      <p className="mt-3">
       <small>New to this Website ? <Link to="/register">Please Register First </Link></small> 
      </p>

      {/* <Form.Text>
      <small>New to this Website ? <Link to="/register">Please Register first </Link></small> 
      </Form.Text> */}
      
    </div>
  );
};

export default Login;
