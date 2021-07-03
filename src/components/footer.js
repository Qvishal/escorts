import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
	const handleClick = (e) =>{
		window.scrollTo(0,0)
	}
    return (
        <footer style={{background:` #191e28`,color:`#ccc`,fontSize:`14px`,position:`relative`}}>
		<div className="footer-widgets">
			<div className="container">
				<div className="row">
					<div className="col-md-6" id="text01">
						    <div className="footer-about">            
						<StaticImage
			                  src="../images/logon1.png"
			                  height={70}
			                  quality={95}
			                  formats={["AUTO", "WEBP", "AVIF"]}
			                  alt="Logo"
			                  style={{ marginBottom: `0` }}
			                />
                		</div>
                		<p>We offer a commitment to personalized service for our clients. If you have further questions or need help with a case, please complete our quick form below. A team member will return your message as soon as possible</p>
						<div className="two-columns row">
						 <div className="object"> 
						 <i className="fa fa-map-marker"></i>
						  <strong> 4th Floor.BB Plaza Bd Mumbai,India</strong> 
						  <br /> 
						  <i className="fa fa-phone"></i> 
						  <strong>Tel:</strong> +91 9654764781 </div> 
						  <div className="object ft-phone"> 
						  <i className="fa fa-tablet"></i>
						   <strong>Mobile: </strong> +91 9654764781 <br />
						    <i className="fa fa-envelope"></i> 
						    <strong>E-mail:</strong> <a href="/"> info@bookmumbaiescorts.com</a> </div>
						     </div>
					</div>
					<div className="col-md-3">
						<h3 className="widget-title">Quick Links</h3>
						<div className="widget-container">
							<ul className="menu"> 
								<li><a href="/">Home</a></li> 
								<li><a href="/about">about</a></li>
								<li><a href="/gallery">Gallery</a></li> 
								<li><a href="/contact">Contact</a></li> 
								<li><a href="/privacy-policy" target="_blank">privacy policy</a></li> 
								<li><a href="/terms-conditions" target="_blank">terms conditions</a></li> 
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<h3 className="widget-title">SERVICES CITY</h3>
						<div className="widget-container">
						<ul className="menu"> 
							<li><a href="/escort-service-in-delhi">Escort Service in Delhi</a></li> 
							<li><a href="/mumbai-escort-service">Mumbai Escort Service</a></li> 
							<li><a href="/call-girl-in-chandigarh">Call Girl in Chandigarh</a></li> 
							<li><a href="/call-girls-in-chennai">Call Girls in Chennai</a></li> 
							<li><a href="/call-girls-in-bangalore">Call Girls in Bangalore</a></li> 
							<li><a href="/call-girls-in-hyderabad">Call Girls in Hyderabad</a></li> 
						</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="footer-content">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="copyright-content"> Copyright © {new Date().getFullYear()}, By Escort Service. </div>
					</div>
					<div className="col-md-6">
					</div>
				</div>
			</div>
		</div>
		<div className="go-top show" onClick={handleClick} aria-hidden="true" > </div>
		<div className="fwp">
			<div className="container">
				<a href="https://wa.me/+919654764781?text=I'm%20interested%20"><i className="fa fa-whatsapp" aria-hidden="true"></i> +91 9654764781</a>
			</div>
		</div>
	</footer>
    )
}

export default Footer