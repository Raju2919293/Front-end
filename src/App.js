import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import One from "./hooks/one";
import Three from "./hooks/three";
import Two from "./hooks/two";

import LoginReg from "./Auth/LoginReg";
import ResetPassword from "./Auth/ResetPassword";
import SendPasswordResetEmail from "./Auth/SendPasswordResetEmail";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Layout from "./Layout";

import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Todo from "./Todo";
import Counter from "./counter";

function App() {
  
  const initialValues = {
    name: "",
    address: ""
  }
  const [formValues, setFormVlues] = useState(initialValues)
  const [todo, setTodo] = useState([])
  const handleChange = (e) => {
    setFormVlues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const add = () => {
    setTodo([...todo, formValues])
  }
 
  return (
    < >
      <Counter/>
      {/* <input name="name"value={formValues.name} onChange={handleChange}/>
     <input name="address"value={formValues.address}onChange={handleChange}/>

     <button onClick={add}>add</button> */}

      {todo.map((d) => {
        return <p>{d.name}</p>
      })}
      <One/>
      {/* <Three/> */}
      {/* <Two/> */}
      {/* <Layout/> */}



      {/* <Todo /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}






export default App;
