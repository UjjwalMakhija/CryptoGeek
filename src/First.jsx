import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cryptodetails from "./components/pages/Cryptodetails";
import Naavbar from "./components/Naavbar";
import Cryptohome from "./components/pages/Cryptohome";

function First(){
    return (
       <BrowserRouter>
          <Naavbar />
        <Routes>
            <Route path="/" element={<Cryptohome/>}   />
            <Route path="/coin/:id"  element={<Cryptodetails/>} />
        </Routes>
       </BrowserRouter> 
    )

}
export default First