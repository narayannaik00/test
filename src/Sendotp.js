import React from "react";
import Verifyotp from "./VerifyOtp";
import './ResetPassword.css'
function SentOtp(){
return(
<>
  
  <div>
     <div>
         <h1 className="form_header">Send OTP</h1>
         <form onSubmit>
             <br>
             </br>
             <div>

                 <label >Employee ID:</label>
                 <input className="input_box" type="text"  required />
                 
             </div>
             <br>
             </br>

             <button className="btn"> Submit</button>             
            <Verifyotp/>
              </form>
         
</div>
             
</div> 






</>
)
}

export default SentOtp;