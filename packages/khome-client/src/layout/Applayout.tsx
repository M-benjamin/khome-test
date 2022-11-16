import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header.component"
import Footer from "../components/Footer.component"
import { Center } from "@mantine/core"

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Applayout
