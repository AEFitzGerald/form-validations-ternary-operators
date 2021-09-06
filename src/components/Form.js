import React, { useState } from 'react'; 



const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);



    const createGuest = (e) => {
        e.preventDefault();
        const newGuest = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newGuest);
        setHasBeenSubmitted( true )
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
	// } else {
    //     return "Welcome, please complete the form";
	// }
    // };

    // const onChange = e => {
    //     setInputs({
    //     //inputs represents all the inputs of the form state object
    //     ...inputs,
    //     //go inside of the event and bring out the target value that was captured
    //     [e.target.name]: e.targetValue
    //     });
    // }

    return (
        <div className="container-sm mt-5">
            <form className="col-sm-6" onSubmit={ createGuest }> 
            {/* <h5 className="display mb-3">{ formMessage() }</h5> */}
            { hasBeenSubmitted ? 
                <h5>Thank you for submitting the form!</h5> :
                <h5>Welcome, please complete the form.</h5> 
            }
                <div className="form-group">
                    <label className="mb-3" htmlFor="firstName">First Name:</label>
                    <input className="mb-3 form-control" onChange={ (e) => setFirstName(e.target.value) } type="text" name="firstName"/>
                    {
                    firstName.length < 3 || firstName.length > 20?
                    <p className="text-primary">First Name must be between 3-20 characters</p>:
                    ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input className="mb-3 form-control" onChange={ (e) => setLastName(e.target.value) } type="text" name="lastName"/>
                    {
                    lastName.length < 3 || lastName.length > 20?
                    <p className="text-primary">Last Name must be between 3-20 characters</p>:
                    ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input className="mb-3 form-control" onChange={ (e) => setEmail(e.target.value) } type="email" name="email"/>
                    {
                    email.length < 5 || email.length > 200?
                    <p className="text-primary">Email must be between 5-200 characters</p>:
                    ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="mb-3 form-control" onChange={ (e) => setPassword(e.target.value) } type="password" name="password"/>
                    { 
                    password.length < 8 || password.length > 20? 
                    <p className="text-primary">Password must be greater than 8 characters</p>:
                    ""
                    }
                </div>


                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="mb-3 form-control" onChange={ (e) => setConfirmPassword(e.target.value) } type="password" name="confirmPassword"/>
                    {
                    password !== confirmPassword?
                    <p className="text-primary">Password must match confirm password</p>:
                    ""
                    }
                </div>
            

                <div className="form-group">
                    <input className = "mb-3 btn btn-success" type="submit" value="Submit"/>
                </div>
            </form>
            
            <div className="container-sm mt-5">
            <div className="card bg-light my-3 col-sm-6">
                <div className="card-header">Guest</div>
                    <div className="card-body">
                        <p className="card-text">First Name: {firstName}</p>
                        <p className="card-text">Last Name: {lastName}</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">Password: {password}</p>
                        <p className="card-text">Confirm Password: {confirmPassword}</p>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Form;