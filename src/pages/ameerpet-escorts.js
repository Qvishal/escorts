import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = (props) => {


  return (
    <Layout uri={props.uri}>
    <Seo url={props.uri} title="Ameerpet Escorts: VIP Call Girls in Ameerpet | Ameerpet Escort" />
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
                  src="../images/41.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                />    
          </div>
          <div className="col-md-4">
              <StaticImage
                  src="../images/45.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                /> 
          </div>
          <div className="col-md-4">
              <StaticImage
                  src="../images/47.jpg"
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
            <Link className="homeinfo" to="/banjara-hills-escorts"><h5 className="hederinfo1">Banjara Hills Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/jubilee-hills-escorts"><h5 className="hederinfo1">Jubilee Hills Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/visakhapatnam-escorts"><h5 className="hederinfo1">Visakhapatnam Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/secunderabad-escorts"><h5 className="hederinfo1">Secunderabad Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/somajiguda-escorts"><h5 className="hederinfo1">Somajiguda Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/ameerpet-escorts"><h5 className="hederinfo1">Ameerpet Escorts</h5></Link>
          </div>                                                                                                   
        </div>        
      </div>
    </section>         
  </Layout>
)
}

export default IndexPage