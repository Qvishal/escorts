import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = (props) => {


  return (
    <Layout uri={props.uri}>
    <Seo url={props.uri} title="Indira Nagar Escorts Service" />
    <div className="parallax">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="page-title-heading"> <h1 className="title">{props.uri.substring(1).replace(/-/g," ")}</h1> </div>
                  <div className="breadcrumbs"> <ul> <li><a href="https://www.bookmumbaiescorts.com">Home</a></li> <li className="active">{props.uri.substring(1).replace(/-/g," ")}</li> </ul> </div>
              </div>
            </div>
          </div>
    </div>

    <section className="pad60 serv">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <StaticImage
                  src="../images/14.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                />    
          </div>
          <div className="col-md-4">
              <StaticImage
                  src="../images/17.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                /> 
          </div>
          <div className="col-md-4">
              <StaticImage
                  src="../images/26.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                /> 
          </div>        
          <div className="col-md-12 flat-text-content">
            <h2 className="title">WHY WE DO IT BETTER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde alias doloribus hic dignissimos iusto vero magni molestias totam, dolorum iste odit fugit nostrum beatae delectus officiis atque esse quaerat!</p>
          </div>
        </div>
      </div>      
    </section> 
    <section className="pad60 flat-bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link className="homeinfo" to="/indira-nagar-escort-service"><h5 className="hederinfo1">Indira Nagar Escort Service</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/mg-road-escorts"><h5 className="hederinfo1">MG Road Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/jaya-nagar-escorts"><h5 className="hederinfo1">Jaya Nagar Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/jp-nagar-escorts"><h5 className="hederinfo1">JP Nagar Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/banaswadi-escorts"><h5 className="hederinfo1">Banaswadi Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/hsr-layout-escorts"><h5 className="hederinfo1">HSR Layout Escorts</h5></Link>
          </div>                                                                                                   
        </div>        
      </div>
    </section>           
  </Layout>
)
}

export default IndexPage