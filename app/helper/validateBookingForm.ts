import type { BookingDataType } from "~/data/static-data";

type ValidationErrorsTypes = {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  doctorSpeciality: string;
  doctorName: string;
  appointmentDate: string;
}

export default function validateBookingForm(data: BookingDataType) {
  // initialize an errors object with empty strings for each field
  const errors: ValidationErrorsTypes = {
    customerEmail: '',
    customerName: '',
    customerPhone: '',
    doctorName: '',
    doctorSpeciality: '',
    appointmentDate: '',
  };

  // extract and clean up form inputs (convert to string and trim spaces)
  const customerNameInput = data["customer-name"]?.toString().trim();
  const customerEmailInput = data["customer-email"]?.toString().trim();
  const customerPhoneInput = data["customer-phone"]?.toString().trim();
  const doctorSpecialityInput = data["doctor-speciality"]?.toString().trim();
  const doctorNameInput = data["doctor-name"]?.toString().trim();
  const appointmentDateInput = data["appointment-date"]?.toString().trim();

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
  if (!doctorSpecialityInput || doctorSpecialityInput === "all") {
    // "all" means no specific speciality was chosen
    errors.doctorSpeciality = "Doctor speciality must be selected!";
  }
  if (!doctorNameInput || doctorNameInput === "select-doctor") {
    // "select-doctor" means no doctor was chosen
    errors.doctorName = "Doctor name must be selected!";
  }
  if (!appointmentDateInput) {
    errors.appointmentDate = "Appointment date empty!";
  }
  
  // return the errors object so the form can display messages
  return { errors };
}
