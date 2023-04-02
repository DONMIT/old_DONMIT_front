import { useRouter } from "next/router";
const { default: Footer } = require("@/components/include/Footer")
const { default: Header } = require("@/components/include/Header")

const Layout = ({children}) => {
  const router = useRouter();
  const pathName = router.pathname;
  return(
    <>
      {pathName === "/404" || pathName === "/_error" ? null : <Header/>}
        {children}
      {pathName === "/404" || pathName === "/_error" ? null : <Footer/>}
    </>
  )
}

export default Layout;