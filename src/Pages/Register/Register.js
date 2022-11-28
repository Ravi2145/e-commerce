import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register(){
    const [user, setUser] = useState({});

    const navigate = useNavigate();//it returns the method for changeing the location

    function handleFormSubmit(event){
        // console.log(event.target.email.value)
        // console.log(user)
        // console.log(user.name);
        // console.log(user.address);
        // console.log(user.username);
        // console.log(user.number);
        // fetch('https://fakestoreapi.com/users',{
        //     method:"POST",
        //     body:JSON.stringify(
        //         // {
        //         //     email:'John@gmail.com',
        //         //     username:'johnd',
        //         //     password:'m38rmF$',
        //         //     name:{
        //         //         firstname:'John',
        //         //         lastname:'Doe'
        //         //     },
        //         //     address:{
        //         //         city:'kilcoole',
        //         //         street:'7835 new road',
        //         //         number:3,
        //         //         zipcode:'12926-3874',
        //         //         geolocation:{
        //         //             lat:'-37.3159',
        //         //             long:'81.1496'
        //         //         }
        //         //     },
        //         //     phone:'1-570-236-7033'
        //         // }
        //     )
        // })
        //     .then(res=>res.json())//we recieveing the response and converting to json
        //     .then(json=>console.log(json))//print the result



        //redirect to Login
        navigate("/LogIn");

    }
    return(
        <div className="register-form">
            <h3>Plese Resister</h3>
            <hr></hr>
            <form onSubmit={handleFormSubmit} action="" >
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Email
                    </label>
                    <input onInput={(e)=>{
                        user.email = e.target.value;
                        setUser(user);

                    }} name="email" className="form-control" type="email"></input>
                </div>
                <div className='row'>
                    <div className="mb-3 col-6">
                    <label htmlFor="" className="form-label">
                       First Name
                    </label>
                    <input onInput={(e)=>{
                        if(!user.name) user.name={}
                        user.name.firstname = e.target.value;
                        setUser(user);

                    }} name="firstname" className="form-control" type="text"></input>
                    </div>
                <div className="mb-3 col-6">
                    <label htmlFor="" className="form-label">
                       Last Name
                    </label>
                    <input onInput={(e)=>{
                        if(!user.name) user.name={}
                        user.name.lastname = e.target.value;
                        setUser(user);

                    }} name="lastname" className="form-control" type="text"></input>
                </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Username
                    </label>
                    <input onInput={(e)=>{
                        user.username = e.target.value
                        setUser(user);
                    }} className="form-control" type="text"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                     Password
                    </label>
                    <input onInput={(e)=>{
                        user.password = e.target.value
                        setUser(user);
                    }} name="password" className="form-control" type="password"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                     Phone
                    </label>
                    <input onInput={(e)=>{
                        user.phone = e.target.value
                        setUser(user);
                    }} name="phone" className="form-control" type="tel"></input>
                </div>
                <h2>Address</h2>
                <div className='row'>
                    
                    <div className="mb-3 col-6">
                        <input onInput={(e)=>{
                            if(!user.address) user.address={}
                        user.address.city = e.target.value
                        setUser(user);
                    }} placeholder="City" className="form-control" type="text"></input>
                    </div>
                  
                    
                    <div className="mb-3 col-6">
                        <input onInput={(e)=>{
                            if(!user.address) user.address={}
                        user.address.street = e.target.value
                        setUser(user);
                    }} placeholder="Street" className="form-control" type="text"></input>
                    </div>
                   
                </div>
                <div className='row'>
                    
                    <div className="mb-3 col-6">
                        <input onInput={(e)=>{
                            if(!user.address) user.address={}
                        user.address.number = e.target.value
                        setUser(user);
                    }} placeholder="Flat no" className="form-control" type="number"></input>
                    </div>
                   
                   
                    <div className="mb-3 col-6">
                        <input onInput={(e)=>{
                            if(!user.address) user.address={}
                        user.address.zipcode = e.target.value
                        setUser(user);
                    }} placeholder="ZipCode" className="form-control" type="password"></input>
                    </div>  
                  
                </div>
                <button type="submit" className='float-end btn btn-success'>Submit</button>
            </form>
        </div>
    );
}
export default Register