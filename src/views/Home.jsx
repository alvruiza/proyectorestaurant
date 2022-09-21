import Navbar from "../components/Navbar";
import { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import BlogCard from "../components/BlogCard";
import Map from "../components/Map";

const MapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBaW1uJMiryWz_r4R_ZmLm3gQMr0bAxvyY"

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Jumbotron />
            <BlogCard />
            <Map 
            googleMapURL= {MapURL} 
            containerElement={<div style={{height: "300px"}} />}
            mapElement={<div style={{height: "100%"}} />}
            loadingElement= {<p>Cargando</p>}
            />         
        </Fragment>        
    )
}

export default Home