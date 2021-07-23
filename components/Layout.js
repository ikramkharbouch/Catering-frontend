import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
    return ( 
        <>
        <div>
            {children}
        </div>
        <Footer />
        </>
     );
}
 
export default Layout;