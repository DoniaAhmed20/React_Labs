import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Routing/Users";
import Header from "./Routing/Header";
import UserDetails from "./Routing/UserDetails";
import Profile from "./Routing/Profile";
import Error from "./Routing/Error";
import Footer from "./Routing/Footer";



function App(){

    return (
        <div>
            <div className="allComp">
                <BrowserRouter>
                     <div className="header">
                         <Header/>
                     </div>
                    <Routes>
                        <Route path="/" element={<Users/>}/>
                        <Route path="/users/:id" element={<UserDetails/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes><br></br>
                    <div className="header">
                         <Footer/>
                     </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;




