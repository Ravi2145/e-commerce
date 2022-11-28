import "./LogIn.css";
function LognIn(){
    // const [user setUser] = 

    function handleLogin(event){
       
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    
                    username:'johnd',
                    password:'m38rmF$',
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    return(
        <div className="LogIn-form">
            <h4>Login</h4>
            <hr></hr>
            <form onSubmit={handleLogin} action="">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Username
                    </label>
                    <input className="form-control" name="username" placeholder="email/Phone" type="text"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Password
                    </label>
                    <input className="form-control" name="password" placeholder="password" type="password"></input>
                </div>
                
                <button type="submit" className="float-end btn btn-success">LogIn</button>
            </form>
        </div>     
    )
}
export default LognIn;