import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const Contact = (props) => {

	return (
  <Layout uri={props.uri}>
    <Seo url={props.uri} description="contact here - escort services" title="Contact Mumbai Escort Service | Photos & Details | Book Mumbai Escorts" />
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
    <div className="pad60 contact">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-6">
    				<p className="paira1">Please fill out the form below and we will get back to you as soon as possible.</p>
					<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
					    <Form.Label>Name</Form.Label>
					    <Form.Control type="text" placeholder="Enter Your Name" />
					  </Form.Group>
					  <Form.Group controlId="exampleForm.ControlInput1">
					    <Form.Label>Email</Form.Label>
					    <Form.Control type="email" placeholder="name@example.com" />
					  </Form.Group>
					  <Form.Group controlId="exampleForm.ControlTextarea1">
					    <Form.Label>Phone</Form.Label>
					    <Form.Control type="tel" placeholder="Enter Phone Number" />
					  </Form.Group>
					  <Form.Group controlId="exampleForm.ControlTextarea1">
					    <Form.Label>City Name</Form.Label>
					    <Form.Control type="text" placeholder="Enter City Name" />
					  </Form.Group>
					  <Button variant="primary" type="submit">
					    Submit
					  </Button>  
					</Form>
    			</div>
    			<div className="col-md-6">
    				<div className="contact-details">
    					<h3><i className="fa fa-map-marker"></i> LOCATION</h3>		
    					<p>4th Floor BB Plaza Bd Mumbai,India</p>
    					<h3><i className="fa fa-envelope"></i> E-MAIL</h3>		
    					<p><a href="mailto:info@bookmumbaiescorts.com">info@bookmumbaiescorts.com</a></p>
    					<h3><i className="fa fa-phone"></i> CONTACT</h3>		
    					<p><a href="tel:+919654764781">+91 9654764781</a></p>    					    					
    				</div>
    				<div className="flat-download">
    					<div className="content"> <div className="text-content"> <h2>24x7 service</h2> <p>You can contact any time for book our service</p> </div> <a href="tel:+91 9654764781" className="button">Call</a> </div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  </Layout>
)
}

export default Contact
