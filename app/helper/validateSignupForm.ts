import { type Customer, type Doctor, type SignUpDataType } from "~/data/static-data"
import { generateDoctorId } from "./generateDoctorId";

type validateSignupFormProps = {
    data: SignUpDataType;
    customerArr: Customer[];
    doctorArray: Doctor[]
}

export default function validateSignupForm({data, customerArr, doctorArray}: validateSignupFormProps) {

    // Initialize error messages for username, email, phone and password
    const errors: Omit<SignUpDataType, "type"> = {
        name: '',
        email: '',
        phone: '',
        password: ''
    }

    // Variable to store the matched user (either Customer or Doctor)
    let user: Customer | Doctor | undefined

    // Trim whitespace from input values
    const nameInput = data.name.trim();
    const emailInput = data.email.trim();
    const phoneInput = data.phone.trim();
    const passwordInput = data.password.trim();

    // Validate username
    if(!nameInput){
        // If username is empty, set error
        errors.name = 'Name empty!';
    }

    // Validate email
    if(!emailInput){
        // If email is empty, set error
        errors.email = 'Email empty!';
    }else{
        // Check if email does exists in either customer or doctor arrays, set error
        if(customerArr.some(item => item.email === emailInput) || doctorArray.some(item => item.email === emailInput)) {
            errors.email = 'Email Already exists!'
        }
    }

    // Validate phone
    if(!phoneInput){
        // If phone is empty, set error
        errors.phone = 'Phone empty!';
    }else{
        // Check if phone does exists in either customer or doctor arrays, set error
        if(customerArr.some(item => item.phone.toString() === phoneInput) || doctorArray.some(item => item.phone?.toString() === phoneInput)) {
            errors.phone = 'Phone Already exists!'
        }
    }

    // Validate password
    if(!passwordInput){
        // If password is empty, set error
        errors.password = 'Password empty!';
    }

    // If type of data is doctor, assign user as a doctor
    if(data.type === 'doctor') {
        user = {
            id: generateDoctorId(nameInput),
            type: data.type,
            name: nameInput,
            email: emailInput,
            phone: Number(phoneInput),
            password: passwordInput,
            speciality: ['all'],
            isVerified: false
        }
    }

    // If type of data is customer, assign user as a customer
    if(data.type === 'customer') {
        user = {
            id: crypto.randomUUID(),
            type: data.type,
            name: nameInput,
            email: emailInput,
            phone: Number(phoneInput),
            password: passwordInput,
            subscriber: data.subscriber ? true : false
        }
    }

    // Return both errors and the matched user (if any)
    return { errors, user }
}