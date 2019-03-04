import React from "react"
import Layout from "./src/components/layout/layoutWrapper"

export const wrapPageElement = ({ element, props }) => 
    <Layout {...props}>{element}</Layout>
