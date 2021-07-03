import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navi = (props) => {


  return (
    <Layout uri={props.uri}>
    <Seo url={props.uri} title="Navi Mumbai Call Girls" />
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
                  src="../images/37.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                />    
          </div>
          <div className="col-md-4">
              <StaticImage
                  src="../images/38.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                /> 
          </div>
          <div className="col-md-4">
              <StaticImage
                  src="../images/39.jpg"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Logo"
                  style={{ marginBottom: `0` }}
                /> 
          </div>
          <div className="col-md-12 flat-text-content">
            <h2 className="title">WHY WE DO IT BETTER</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>      
    </section>  
    <section className="pad60 flat-bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link className="homeinfo" to="/navi-mumbai-call-girls"><h5 className="hederinfo1">Navi Mumbai Call Girls</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/andheri-call-girls"><h5 className="hederinfo1">Andheri Call Girls</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/thane-escorts"><h5 className="hederinfo1">Thane Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/goregaon-call-girls"><h5 className="hederinfo1">Goregaon Call Girls</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/malad-escorts"><h5 className="hederinfo1">Malad Escorts</h5></Link>
          </div>
          <div className="col-md-4">
            <Link className="homeinfo" to="/panvel-escorts"><h5 className="hederinfo1">Panvel Escorts</h5></Link>
          </div>                                                                                                   
        </div>        
      </div>
    </section>     
  </Layout>
)
}

export default Navi