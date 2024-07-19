import { Container } from "@mui/material"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Container>
        <Outlet/>
      </Container>  
    </>
  )
}

export default AppLayout
