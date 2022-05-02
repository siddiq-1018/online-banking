import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Newreg extends Component
{
    render()
    {
        return (
            <div className='newreg_bg container bg-opacity-25'>
                <div className='row text-center'> 
                    <h1>User Registration</h1>
                </div>
                <div className='row'>
                    <div className='d-none d-md-block col-md-3'></div>
                    <div className='col-12 col-md-6'>
                        <form>
                            <div className='form-group m-2'> 
                                <label for="FirstName">First Name</label>
                                <input className='form-control' id='FirstName' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="LastName">Last Name</label>
                                <input className='form-control' id='LastName' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label  for="Gaurdian">Father/Mother/Gaurdian Name</label>
                                <input className='form-control' id='Guardian' type="text"></input>
                            </div>
                            <div className='form-group m-2'>
                                <p className='label'>Gender:</p>
                                <input type="radio" id="male" name="gender" value="Male"></input>
                                <label for="male">Male</label><br/>
                                <input type="radio" id="female" name="gender" value="Female"></input>
                                <label for="female">Female</label><br/>
                            </div>
                            <div className='form-group m-2'>
                                <p className='label'>Marital Status:</p>
                                <input type="radio" id="married" name="Marital" value="Married"></input>
                                <label for="married">Married</label><br/>
                                <input type="radio" id="unmarried" name="Marital" value="Unmarried"></input>
                                <label for="unmarried">Unmarried</label><br/>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Mobile">Mobile number</label>
                                <input className='form-control' id='Mobile' type="tel" placeholder='1234567890'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="EmailId">Email Id</label>
                                <input className='form-control' id='EmailId' type="email" placeholder='abc@gmail.com'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Aadhar">Aadhar Number</label>
                                <input className='form-control' id='Aadhar' type="number" placeholder='XXXX-XXXX-XXXX'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Address">Address</label>
                                <input className='form-control' id='Address' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myFile">Upload your recent image{" "}</label>
                                <input className='form-control'type="file" id="myFile" name="filename"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myAadhar">Upload Aadhar {" "}</label>
                                <input className='form-control' type="file" id="myAadhar" name="myAadhar"></input>
                            </div>
                            <div className='text-center mb-2 mt-3'>
                                <button className='btn btn-info' type='submit'>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newreg;