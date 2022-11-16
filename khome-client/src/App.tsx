import React from "react"
import { MantineProvider } from "@mantine/core"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Applayout from "./layout/Applayout"
import Home from "./pages/home"
import NotFoundComponent from "./components/NotFound.component"
import useUsers from "./hooks/useUsers"

function App() {
  // console.log("USERS DATA", users)
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
