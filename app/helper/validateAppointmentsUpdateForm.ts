import type { UpdateDataType } from "~/data/static-data";

export type ValidationAppointmentUpdateTypes = {
    appointmentDate?: string;
    appointmentSlot?: string;
}

// Appointment update validation: checks both date and slot fields
export const validateAppointmentsUpdateForm = (inputData: UpdateDataType) => { 
  // initialize an errors object with empty strings for each field
  const errors: ValidationAppointmentUpdateTypes = {
    appointmentDate: '',
    appointmentSlot: '',
  };

  // Extract form inputs safely, convert to string, and trim whitespace
  const appointmentDateInput = inputData["appointment-date"]?.toString().trim();
  const appointmentSlotInput = inputData["appointment-slot"]?.toString().trim();

  // Validate appointment date: must not be empty
  if (!appointmentDateInput) {
    errors.appointmentDate = "Appointment date must be selected!";
  }
  
  // Validate appointment slot: must not be empty
  if (!appointmentSlotInput) {
    errors.appointmentSlot = "Appointment slot must be selected!";
  }
  
  // return the errors object so the form can display messages
  return { errors }
 }