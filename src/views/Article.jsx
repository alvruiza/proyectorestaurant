import { Fragment } from "react"
import BlogArticle from "../components/BlogArticle"
import Navbar from '../components/Navbar'
import Jumbotron from "../components/Jumbotron"
import Footer from "../components/Footer"

const Article = () => {
    return(
        <Fragment>
            <Navbar />
            <Jumbotron />
            <BlogArticle /> 
            <Footer />
        </Fragment>
    )
}

export default Article