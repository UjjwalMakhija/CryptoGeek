import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cryptodetails from "./components/pages/Cryptodetail";
import Naavbar from "./components/Naavbar";
import Cryptohome from "./components/pages/Cryptohome";

function First(){
    return (
       <BrowserRouter>
       <div className="bg-[#121212] w-full">    
          <Naavbar />
        <Routes>
            <Route path="/" element={<Cryptohome/>}   />
            <Route path="/coin/:id"  element={<Cryptodetails/>} />
        </Routes>
        </div>
       </BrowserRouter> 
    )

}
export default First