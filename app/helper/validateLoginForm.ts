import { adminArr, type Administrator, type Customer, type Doctor, type LoginDataType } from "~/data/static-data";

type validateLoginFormProps = {
    data: LoginDataType;
    customerArr: Customer[];
    doctorArray: Doctor[]
}

export const validateLoginForm = ({data, customerArr, doctorArray}: validateLoginFormProps) => { 
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

    // Validate username
    if(!usernameInput){
        // If username is empty, set error
        errors.username = 'Username empty!';
    }else{
        // Check if username does not exists in either customer or doctor or admin arrays, set error
        if(!customerArr.some(item => item.email === usernameInput) && !doctorArray.some(item => item.email === usernameInput) && !adminArr.some(item => item.email === usernameInput)) {
            errors.username = 'Invalid username!'
        }
    }

    // Validate password
    if(!passwordInput){
        // If password is empty, set error
        errors.password = 'Password empty!'
    }else{
        // Check if password does not exists in either customer or doctor or admin arrays, set error
        if(!customerArr.some(item => item.password === passwordInput) && !doctorArray.some(item => item.password === passwordInput)  && !adminArr.some(item => item.password === passwordInput)) {
            errors.password = 'Invalid password!'
        }
    }

    // If both username and password match in customer array, assign user
    if(customerArr.some(item => item.email === usernameInput) && customerArr.some(item => item.password === passwordInput)) {
        user = customerArr.find(item => item.email === usernameInput)
    }

    // If both username and password match in doctor array, assign user
    if(doctorArray.some(item => item.email === usernameInput) && doctorArray.some(item => item.password === passwordInput)) {
        user = doctorArray.find(item => item.email === usernameInput)
    }

    // If both username and password match in admin array, assign user
    if(adminArr.some(item => item.email === usernameInput) && adminArr.some(item => item.password === passwordInput)) {
        user = adminArr.find(item => item.email === usernameInput)
    }

    // Return both errors and the matched user (if any)
    return { errors, user }
 }