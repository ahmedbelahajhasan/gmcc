import { Error } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user,setUser]=useState({})
  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch,user,navigate);// 1:31 w9eft houni//1:34 mochkla user
  };
  const{error}=useSelector((state)=>state.user);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" name="name" onChange={handleChange}/>
          <Input placeholder="last name" name="lastname" onChange={handleChange}/>
          <Input placeholder="username" name="username" onChange={handleChange}/>
          <Input placeholder="email" name="email" onChange={handleChange}/>
          <Input placeholder="password" name="password" onChange={handleChange}/>
          <Input placeholder="confirm password" name="confirmpassword"  onChange={handleChange}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {error&&<Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;