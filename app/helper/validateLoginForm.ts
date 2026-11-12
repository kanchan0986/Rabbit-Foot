import { type Administrator, type Customer, type Doctor, type LoginDataType } from "~/data/static-data";

type validateLoginFormProps = {
    data: LoginDataType;
    customerArr: Customer[];
    doctorArray: Doctor[]
    adminArray: Administrator[]
}

export const validateLoginForm = ({data, customerArr, doctorArray, adminArray}: validateLoginFormProps) => { 
    // Initialize error messages for username and password as empty string
    const errors: LoginDataType = {
        username: '',
        password: ''
    }

    // Variable to store the matched user (either Customer or Doctor)
    let user: Customer | Doctor | Administrator | undefined

    // Trim whitespace from input values
    const usernameInput = data.username.trim();
    const passwordInput = data.password.trim();

    // Check for user validity, if the entered credentials (email & password) match a customer, or doctor, or admin account
    const validUser = customerArr.some(customer => customer.email === usernameInput && customer.password === passwordInput) || 
    doctorArray.some(doctor => doctor.email === usernameInput && doctor.password === passwordInput) || 
    adminArray.some(admin => admin.email === usernameInput && admin.password === passwordInput);

    // Validate username
    if(!usernameInput){
        // If username is empty, set error
        errors.username = 'Username empty!';
    }else{
        // Check if username does not exists in either customer or doctor or admin arrays, set error
        const userName = customerArr.some(customer => customer.email === usernameInput) || doctorArray.some(doctor => doctor.email === usernameInput) || adminArray.some(admin => admin.email === usernameInput);

        // If provided username doesn't exists in database, set error
        if(!userName){
            errors.username = 'Invalid username!';
        }
    }
    
    // Validate password
    if(!passwordInput){
        // If password is empty, set error
        errors.password = 'Password empty!'
    }else if(!validUser){
        // If provided password dosen't matches with provided username, set error
        errors.password = "Invalid password!"
    }else{
        // Return user whose provided email matches with the valid username / email from the database
        user = customerArr.find(item => item.email === usernameInput) || doctorArray.find(item => item.email === usernameInput) || adminArray.find(item => item.email === usernameInput)
    }

    // Return both errors and the matched user (if any)
    return { errors, user }
 }