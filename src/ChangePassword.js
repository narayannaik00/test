import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Url = "http://restapi.adequateshop.com";

function ChangePassword() {
   
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
           
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (isValid) {
            axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
                toast.success(`Welcome`);
                navigate("/login")
            })
                .catch((error) => {
                    toast.error(error.message);
                })
        }
    };

    return (
        <div>
            <center>
                <div>
                    <h1>Change Password</h1>
                    <form onSubmit={handleSubmit}>


                        <br>
                        </br>
                        <div>
                            <label>Password:</label>
                            <input type="text" value={userDetails.password} onChange={handlePasswordChange} required />
                            <div> <span className="error">{passwordError}</span></div>
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                            <input type="text" value={userDetails.confirmpassword} onChange={handleConfirmPasswordChange} required />
                            <div> <span className="error">{confirmpasswordError}</span></div>
                        </div>
                        <br>
                        </br>
                        <button type="submit">Submit</button>
                    </form>
                    <Link to="/">login</Link>
                </div>
            </center>
        </div>
    );

}

export default ChangePassword;