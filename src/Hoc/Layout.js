import React from 'react'
// import NavBar from '../Components/Common/Navbar/NavBar';

const Layout = (props) => {

    document.title = "Global IT"
    return ( 
        <>
                {/* <NavBar/> */}

        <div className="container mt-5">
        {props.children}

        </div>

        {/* <footer>
            this is a footer
        </footer> */}
        </>
     );
}
 
export default Layout;