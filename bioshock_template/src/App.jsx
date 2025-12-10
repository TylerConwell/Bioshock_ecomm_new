import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// imports needed for react router dom to work, first time using it
import {Navbar} from "./components/navbar.jsx"
import {Shop} from "./pages/shop/shop"
import {Cart} from "./pages/cart/cart"


// imports for the pages for testing the vigors
import Vigors from "./pages/vigor_testing.jsx";
import Plasmids from "./pages/plasmid_test.jsx";
import { ShoppingBag } from "phosphor-react"
import { ShopContextProvider } from "./context/shop-context.jsx"


function App() {
    return (
        <div className="App">

            <ShopContextProvider>

                <Router>
                    {/* adding the navbar above to its in all pages */}
                    <Navbar />

                    <Routes>
                        {/* main page or shop of the products */}
                        {/* also made it an empty tag "/" */}
                        <Route path="/" element={<Shop />}  />

                        {/* cart page path */}
                        <Route path="/cart" element={<Cart />} />

                        {/* vigors test page path */}
                        <Route path="/Vigors_test" element={<Vigors />} />

                        {/* plasmids test page */}
                        <Route path="/plasmid_test" element={<Plasmids/>} />

                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;