export const validateForm = (email: string, firstName: string) => {
  // Validate email and firstname

  if (!firstName || firstName.trim() === '') {
    return {status: 420, message: 'Please enter your first name'};
  }

  if (!email || email.trim() === '') {
    return {status: 421, message: 'Please enter your email'};
  }

  //   Check email format using a regular expression
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return {status: 422, message: 'Please enter a valid email address'};
  }

  return {status: 200, message: 'Success'};
};
