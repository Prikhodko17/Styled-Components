import { Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
            </Routes>
        </div>
    );
}

export default App;