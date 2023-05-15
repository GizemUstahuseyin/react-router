import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./sayfalar/Layout";
import Home from "./sayfalar/Home";
import Blog from "./sayfalar/Blog";
import Contact from "./sayfalar/Contact";
import NoPage from "./sayfalar/NoPage";

function Header(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="Blog" element={<Blog/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
export default Header;