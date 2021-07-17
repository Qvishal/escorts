/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect, useRef, useState } from 'react';
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children , uri ,props}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);


  return (
    <>
      <div style={{
        background: `#f4f4f4`
      }}>
      <div className="container top-header">
      <div><a className="callback" href="https://wa.me/+919654764781?text=I'm%20interested%20"><i className="fa fa-whatsapp" aria-hidden="true"></i> +91 9654764781</a></div>
      <div><div className="marquee">Book Our Mumbai Escorts 24/7 For Any Location in India</div></div>
      <div><a className="callback" href="tel:+919654764781"><i className="fa fa-phone" aria-hidden="true"></i> +91 9654764781</a></div>
      </div>
       <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
          
     
      <div>
        <main>{children}</main>
        <Footer />
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout