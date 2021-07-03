import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Gallery = (props) => { 

  return(
  <Layout uri={props.uri}>
    <Seo url={props.uri} description="Select Our Top Ranked Call Girls in Mumbai" title="Mumbai Call Girls Gallery | Photos & Details " />
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
    <div className="pad60 gallery">
      <div className="container">
        <div className="title-section">
          <h2 className="title">Photo Gallery of Call Girls</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
                <StaticImage
                  src="../images/delhi-1.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"
                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/delhi-2.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"
                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/delhi-3.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/bengaluru-1.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/bengaluru-2.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/bengaluru-3.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/chennai-1.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>
          <div className="col-md-4">
                <StaticImage
                  src="../images/chennai-2.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>  
          <div className="col-md-4">
                <StaticImage
                  src="../images/chennai-3.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>  
          <div className="col-md-4">
                <StaticImage
                  src="../images/kolkata-1.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>  
          <div className="col-md-4">
                <StaticImage
                  src="../images/kolkata-2.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>  
          <div className="col-md-4">
                <StaticImage
                  src="../images/kolkata-3.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>  
          <div className="col-md-4">
                <StaticImage
                  src="../images/mumbai-3.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>  
          <div className="col-md-4">
                <StaticImage
                  src="../images/mumbai-1.jpg"
                  height={250}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Gallery"                 
                />
          </div>                                                                      
        </div>
      </div>
    </div>
  </Layout>
)
}
export default Gallery
