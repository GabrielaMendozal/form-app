
const Form = (props) =>{

    const {inputs, setInputs} = props;
    const onChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
     
    }

    

    return (
        <form >
            <div class="mb-3">
              <label htmlFor="firstName" class="form-label">
                First Name: 
              </label>
              <input type="text" name="firstName" id="firstName" 
                            onChange={onChange} />
              {
              (inputs.firstName.length>0 && inputs.firstName.length<2) ? 
              <p>First Name must be at least 2 characters</p> : ""
                }
            </div>
            <div class="mb-3">
              <label htmlFor="lastName" class="form-label">
                Last Name: 
              </label>
              <input type="text" name="lastName" 
                      onChange={onChange} />
              {
              (inputs.lastName.length>0 && inputs.lastName.length<2) ? 
              <p>Last Name must be at least 2 characters</p> : ""
                }
            </div>
            <div class="mb-3">
              <label htmlFor="email" class="form-label">
                Email: 
              </label>
              <input type="text" name="email" 
                      onChange={onChange}/>
              {
              (inputs.email.length>0 && inputs.email.length<5) ? 
              <p>Email must be at least 5 characters</p> : ""
                }
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label">
                Password: 
              </label>
              <input type="password" name="password"  
                      onChange={onChange}/>
              {
              (inputs.password.length>0 && inputs.password.length<8) ? 
              <p>Password must be at least 8 characters</p> : ""
                }
            </div>
            <div class="mb-3">
              <label htmlFor="confirmPassword" class="form-label">
                Confirm Password: 
              </label>
              <input type="password" name="confirmPassword" 
                      onChange={onChange}/>
              {
              (inputs.confirmPassword.length>0 && 
                (inputs.password !== inputs.confirmPassword)) ? 
              <p>Passwords must match</p> : ""
                }
            </div>
            <button type="submit" class="btn btn-primary">
              Agregar 
            </button>
        </form>
    )

}

export default Form;