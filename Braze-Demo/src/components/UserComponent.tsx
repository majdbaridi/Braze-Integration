import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

interface BrazeLoginProps {
    onSubmit: (username: string) => void;
}
const UserComponent : React.FC<BrazeLoginProps> = ({ onSubmit }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigator =useNavigate();

    function handleFirstName(e: { target: { value: React.SetStateAction<string>; }; }){


        setFirstName(e.target.value)
    }



    function handleLastName(e: { target: { value: React.SetStateAction<string>; }; }){


        setLastName(e.target.value)
    }



    function handleEmail(e: { target: { value: React.SetStateAction<string>; }; }){


        setEmail(e.target.value)
    }

    const handleSubmit= () => {

        onSubmit(firstName);

        //braze.changeUser(username);
        alert(`Entered username sent to braze with external ID: ${firstName}`);
        // You can add further logic here, such as clearing the input field
        // setUsername('');

        navigator('/landing')

    }



    return (

        <div className='container'>
            <br></br>
            <div className='row'>


                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Login Page</h2>
                    <div className='card-body'>


                        <form>


                            <div className='form-group mb-2'>
                                <label className='form-label'> First Name:</label>
                                <input type='text'
                                    placeholder='Enter Your First Name'
                                    value={firstName}
                                    className='form-control'
                                    onChange={handleFirstName}>

                                </input>

                            </div>




                            <div className='form-group mb-2'>
                                <label className='form-label'> Last Name:</label>
                                <input type='text'
                                    placeholder='Enter Your Last Name'
                                    value={lastName}
                                    className='form-control'
                                    onChange={handleLastName}>

                                </input>



                            </div>


                            <div className='form-group mb-2'>
                                <label className='form-label'> Email:</label>
                                <input type='text'
                                    placeholder='Enter Your Email '
                                    value={email}
                                    className='form-control'
                                    onChange={handleEmail}>

                                </input>



                            </div>
                            <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default UserComponent;