import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';  
import { toast } from 'react-toastify';
import './ResetPassword.css'

const ResetPassword = () => {
    
    const [passwordError, setPasswordError] = useState('');
    const [confirmpasswordError, setconfirmPasswordError] = useState('');
    const [isValid, setValid] = useState(false);
    const [userDetails, setUserDetails] = useState(
        {
            password: '',
            confirmpassword: ''
        }
    );

    const navigate = useNavigate();

    
    const handlePasswordChange = (e) => {
        setUserDetails({ ...userDetails, password: e.target.value });
        if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
            setPasswordError('Password must have at least 6 characters, 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character');
        } else {
            setPasswordError('');
           
            setValid(confirmpasswordError === '');
        }

    };

    const handleConfirmPasswordChange = (e) => {
        setUserDetails({ ...userDetails, confirmpassword: e.target.value });
        if (userDetails.password !== e.target.value) {
            setconfirmPasswordError('Confirm Password must must be equal to entered password.');

        } else {
            setconfirmPasswordError('');
           setValid(passwordError==='');
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (isValid) {
                toast.success(`Password changed successfully`);
                navigate("/login");

        }
    };

    return (
        <>
  
         <div>
            <div>
                <h1 className='form_header'>Change Password</h1>
                <form onSubmit={handleSubmit}>
                    <br>
                    </br>
                    <div>

                        <label >Password:</label>
                        <input className='input_box' type="password" value={userDetails.password} onChange={handlePasswordChange} required />
                        <div> <span>{passwordError}</span></div>
                    </div>
                    <br>
                    </br>

                    <br></br>
                    <div>
                        <label>Confirm Password:</label>
                        <input  className='input_box' type="password" value={userDetails.confirmpassword} onChange={handleConfirmPasswordChange} required />
                        <div> <span>{confirmpasswordError}</span></div>
                    </div>
                    <br>
                    </br>
                    <button className='btn'> Submit</button>             

                     </form>
                {/* <Link to="/Login">login</Link> */}
       </div>
                    
    </div> 


   



</>
    )
}

export default ResetPassword;