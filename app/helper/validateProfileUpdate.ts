import { type ProfileUpdateErrorType, type ProfileUpdateType } from "~/data/static-data"

type validateProfileUpdateProps = {
    data: ProfileUpdateType;
}

export default function validateProfileUpdate({data}: validateProfileUpdateProps) {

    // Initialize error messages for username and phone
    const errors: ProfileUpdateErrorType = {
        name: '',
        phone: '',
    }
 
    const nameInput = data.name?.trim();
    const phoneInput = data.phone;

    // Validate Name
    if(!nameInput) errors.name = "Name Empty!";

    // Validate Phone number
    if(phoneInput){
        if(phoneInput <= 0) {
            errors.phone = "Please provide a valid phone number!"
        }else if(phoneInput.toString().length < 10 || phoneInput.toString().length > 10){
            errors.phone = "Phone number must be 10 digit"
        }
    } else {
        errors.phone = "Phone number is Empty!"
    }

    return { errors };
}