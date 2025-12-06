import "./Bioshock_ecomm_new/bioshock_template/src/App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// imports needed for react router dom to work, first time using it
import {Navbar} from "./Bioshock_ecomm_new/bioshock_template/src/components/navbar.jsx"

function App() {
    return <div className="App">

        <Router>
            {/* adding the navbar above to its in all pages */}
            <Navbar />
            <Routes>
                {/* main page or shop of the products */}
                {/* also made it an empty tag */}
                <Route path="/" />
                {/* cart page path */}
                <Route path="/cart" />
            </Routes>
        </Router>
        </div>;
}

export default App;