import React from "react";
import "./home.css"
import Background from "./background.tsx";
import HomeTV from "./home_TV.tsx";
// import Background from "../background_animate/background.tsx";
const Home =() =>{
    return <section className="home">
        <HomeTV />
        <Background />
    </section>
}
export default Home
