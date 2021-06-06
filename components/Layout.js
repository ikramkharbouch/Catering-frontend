import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
    return ( 
        <>
        <NavBar />
        <div>
            {children}
        </div>
        </>
     );
}
 
export default Layout;