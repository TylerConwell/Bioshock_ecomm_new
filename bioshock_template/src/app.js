import "./Bioshock_ecomm_new/bioshock_template/src/App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// imports needed for react router dom to work, first time using it

function App() {
    return <div className="App">

        <Router>
            <Routes>
                {/* main page or shop of the products */}
                <Route path="/" />
                {/* cart page path */}
                <Route path="/cart" />
            </Routes>
        </Router>
        </div>;
}

export default App;