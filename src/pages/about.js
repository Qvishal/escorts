import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const IndexPage = (props) => {


  return (
    <Layout uri={props.uri}>
    <Seo description="our Mumbai escort service knows well about your fantasy and what you expect from them, the call girl be with you like as your girlfriend and fulfills all your desires" url={props.uri} title="About" />
    <div className="parallax">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="page-title-heading"> <h1 className="title">{props.uri.substring(1)}</h1> </div>
                  <div className="breadcrumbs"> <ul> <li><a href="https://www.bookmumbaiescorts.com">Home</a></li> <li className="active">{props.uri.substring(1)}</li> </ul> </div>
              </div>
            </div>
          </div>
    </div>

    <section className="pad60">
      <div className="container">
        <div className="title-section">
          <h2 className="title">About</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className="flat-tabs">
  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
    <Tab eventKey="home" title="History">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, aliquid magni maiores sint animi esse rem illo a natus nobis perferendis corrupti quisquam aliquam molestiae repellendus dolore. Perspiciatis, corrupti, repellat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, aliquid magni maiores sint animi esse rem illo a natus nobis perferendis corrupti quisquam aliquam molestiae repellendus dolore. Perspiciatis, corrupti, repellat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, aliquid magni</p>
    </Tab>
    <Tab eventKey="profile" title="Vision">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, aliquid magni maiores sint animi esse rem illo a natus nobis perferendis corrupti quisquam aliquam molestiae repellendus dolore. Perspiciatis, corrupti, repellat.</p> 
    </Tab>
    <Tab eventKey="contact" title="Our Mission">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, aliquid magni maiores sint animi esse rem illo a natus nobis perferendis corrupti quisquam aliquam molestiae repellendus dolore. Perspiciatis, corrupti, repellat.</p> 
    </Tab>
  </Tabs>  
              </div>
          </div>
        </div>
      </div>      
    </section>
    <section className="section-download"> 
      <div className="container"> 
        <div className="row"> 
          <div className="col-md-6"> 
            <div className="flat-download"> 
              <div className="content"> 
                <div className="text-content"> 
                  <h2>24x7 Service </h2> 
                  <p>You can contact any time for book our service </p> 
                  </div> 
                </div> 
              </div> 
            </div> 
          <div className="col-md-6"> 
            <div className="flat-download">
             <div className="content">
              <div className="text-content">
               <h2>Professional</h2> 
               <p>We have 5000+ professional Call Girl</p> 
              </div>
             </div> 
            </div> 
          </div> 
        </div> 
      </div>
    </section>    
  </Layout>
)
}

export default IndexPage