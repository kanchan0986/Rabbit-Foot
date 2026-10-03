import type { BookingDataType } from "~/data/static-data";

export type ValidationAdvancedErrorsTypes = {
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
    doctorSpeciality?: string;
    appointmentDate?: string;
    appointmentSlot?: string;
}

// Advanced booking form validation: includes appointment slot check
export const validateBookingFormAdvanced = (inputData: BookingDataType) => { 
  // initialize an errors object with empty strings for each field
  const errors: ValidationAdvancedErrorsTypes = {
    customerEmail: '',
    customerName: '',
    customerPhone: '',
    doctorSpeciality: '',
    appointmentDate: '',
    appointmentSlot: '',
  };

  // extract and clean up form inputs (convert to string and trim spaces)
  const customerNameInput = inputData["customer-name"]?.toString().trim();
  const customerEmailInput = inputData["customer-email"]?.toString().trim();
  const customerPhoneInput = inputData["customer-phone"]?.toString().trim();
  const doctorSpecialityInput = inputData["doctor-speciality"]?.toString().trim();
  const appointmentDateInput = inputData["appointment-date"]?.toString().trim();
  const appointmentSlotInput = inputData["appointment-slot"]?.toString().trim();

  // validate each field and set error messages if invalid/missing
  if (!customerNameInput) {
    errors.customerName = "Customer name empty!";
  }
  if (!customerEmailInput) {
    errors.customerEmail = "Customer email empty!";
  }
  if (!customerPhoneInput) {
    errors.customerPhone = "Customer phone empty!";
  }
  if (!doctorSpecialityInput) {
    errors.doctorSpeciality = "Doctor speciality must be selected!";
  }
  if (!appointmentDateInput) {
    errors.appointmentDate = "Appointment date must be selected!";
  }
  if (!appointmentSlotInput) {
    errors.appointmentSlot = "Appointment slot must be selected!";
  }
  
  // return the errors object so the form can display messages
  return { errors }
 }