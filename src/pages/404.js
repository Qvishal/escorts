import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = (props) => {
return(
  <Layout uri={props.uri}>
    <Seo url={props.uri} title="404: Not found" />
    <section className="pad60">
      <div className="container">    
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>  
  </Layout>
)
}
export default NotFoundPage
