import React from "react";
import Nav from '../Components/Navbar/Nav.jsx';
import Header from '../Components/Header/Header';
import Features from "../Components/Features/Features.jsx";
import Mail from '../Components/mail/mail.jsx';
import Footer from '../Components/footer/Footer';


function Home()
{
    return(
        
        <div className="home">
            <Nav />
            <Header/>
            <Features/>
            <Mail></Mail>
            <Footer/>
        </div>

    );
}


export default Home;