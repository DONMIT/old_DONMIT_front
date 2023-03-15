const { default: Footer } = require("@/components/include/Footer")
const { default: Header } = require("@/components/include/Header")

const Layout = ({children}) => {
  return(
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout;