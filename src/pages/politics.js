import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const PoliticsPage = () => (
  <Layout>
    <SEO title="canadian_politics" />
    <div class="card-panel red accent-4">
      A Federal Election is scheduled Canada in 2019.
    </div>
    <div class="video-container">
      <iframe
        title="rock and roll Canada"
        width="853"
        height="480"
        src="//www.youtube.com/embed/am-1fnJAdLE?rel=0"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <p>Welcome to canadian_politics</p>

    <Menu />
  </Layout>
)

export default PoliticsPage
