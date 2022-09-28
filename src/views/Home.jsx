import Navbar from "../components/Navbar";
import { Fragment} from "react";
import BlogCard from "../components/BlogCard";



const Home = () => {  

    return (
        <Fragment>
            <Navbar />            
            <BlogCard />                      
        </Fragment>        
    )
}

export default Home