import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const IndexPage = (props) => {


  return (
    <Layout uri={props.uri}>
    <Seo description="our Mumbai escort service knows well about your fantasy and what you expect from them, the call girl be with you like as your girlfriend and fulfills all your desires" url={props.uri} title="About Us | Book Mumbai Escorts India" />
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
      <p>Book Mumbai Escorts is one of the first escort agencies that captured the market and established the escort agency to help lonely people around the cities who often live their life hiding their sexual fantasies.</p>
      <p>Book Mumbai Escorts bridges the gap between needy call girls and high-profile clients who require one-night partners to fulfill their fantasies in bed. Call girls in Mumbai Escort Service belong to normal middle-class families. These girls are in constant need of money to maintain their luxurious lifestyle.</p>
      <p>Our call girls have gained good reviews for their nighttime service. Many clients have asked for escorts by their name. We regularly update our website with the recent photograph of the escort girls so that clients will always see the most recent photos of the call girls. </p>
      <p>Clients can also check the various other details and call girls' WhatsApp numbers below their photo on the Book Mumbai Escorts website so that they can contact and have a little chat before they face each other in the closed room.</p>
      <p>Our escort service is an ideal realization of your dreams to indulge in passionate sex and playful romance with the most sizzling ladies of your town. They steal away your senses and make you enjoy the intangible experiences of lustful erotic engagement with their figures and seductive personalities. </p>
      <p>They can be availed round-the-clock as per your wishes and we promise to make every second of your sensual involvement worthy and memorable. With everything Around, Book Mumbai Escorts gives you the best pleasures of all time.</p>
      <p>Book Mumbai Escorts has started its reliable escort services in various other cities providing a long list of services for the clients who are passionate about their erotic moments when they go to bed.</p>
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
