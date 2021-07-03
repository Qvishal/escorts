import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Ghaziabad = (props) => {


  return (
    <Layout uri={props.uri}>
    <Seo url={props.uri} title="Call Girls in Ghaziabad" />
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
    <section className="pad60">
      <div className="container">
        <div className="row serv">
          <div className="col-md-4">
              <StaticImage
                  src="../images/25.jpeg"
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
          <div className="col-md-4">
              <StaticImage
                  src="../images/27.jpg"
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
            <Link className="homeinfo" to="/noida-call-girl"><h5 className="hederinfo1">Noida Call girl</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/karol-bagh-escorts"><h5 className="hederinfo1">Karol Bagh Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/call-girl-in-ghaziabad"><h5 className="hederinfo1">Call Girl in Ghaziabad</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/escorts-serivce-in-gurgaon"><h5 className="hederinfo1">Escort Service In Gurgaon</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/rohini-escorts"><h5 className="hederinfo1">Rohini Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/paschim-vihar-escorts"><h5 className="hederinfo1">Paschim Vihar Escorts</h5></Link>
          </div>                                                  
        </div>        
      </div>
    </section>
  </Layout>
)
}

export default Ghaziabad