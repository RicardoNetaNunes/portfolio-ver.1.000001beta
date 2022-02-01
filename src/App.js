import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Landing from "./Components/landingPage";
import Edit from "./Components/edit";
import Create from "./Components/create";
 
const App = () => {
 return (
   <div>
     <SideBar /> 
     <Routes>
       <Route exact path="/" element={<Landing />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;