type passwordErrors = {
  password?: string;
  reEnterPassword?: string;
  confirmPassword?: string;
}

type validatePasswordChangeProps = {
    data: Record<string, FormDataEntryValue>;
}

export default function validatePasswordChange({data}: validatePasswordChangeProps) {

  const password = data["password"]?.toString().trim();
  const confirmPassword = data["confirm-password"]?.toString().trim();

  let errors: passwordErrors = {};

  // Check if password is empty
  if(password === ""){
    errors.password = "Please enter your password!"
  }

  // Check if confirm password is empty
  if(confirmPassword === ""){
    errors.reEnterPassword = "Please re-enter your password!"
  }

  // Check if both are non-empty but do not match
  if((password && confirmPassword) && password !== confirmPassword) {
    errors.confirmPassword = "Please provide a matching password"   
  }

  return { errors };

}