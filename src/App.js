import { Route } from "react-router";
import Characters from "./component/Characters";
import {Routes } from "react-router-dom"


function App(){
    return(
        <div className="App">
        <Routes>
            <Route path="/" element={<Characters/>}/>

        </Routes>

        

        </div>
    )
}

export default App;