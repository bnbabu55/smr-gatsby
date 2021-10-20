// const validateEmail = email => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// export default (fields) => {
const validate = fields => {
  let errors = {}

  for (let field in fields) {
    const currentField = fields[field]

    if (currentField.required && currentField.value === "") {
      errors[field] = "This field is required!"
    }

    if (
      field === "zip" &&
      !RegExp(/^\d{5}(?:[-\s]\d{4})?$/).test(currentField.value)
    ) {
      errors[field] = "Invalid Zip Code"
    }

    if (field === "cvv" && !RegExp(/^\d{3}\d?$/).test(currentField.value)) {
      errors[field] = "Invalid CVV Code"
    }

    if (
      field === "ccnumber" &&
      !RegExp(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/
      ).test(currentField.value)
    ) {
      errors[field] = "Invalid Credit Card number"
    }

    if (
      field === "expiry" &&
      !RegExp(/^\d\d\/\d\d$/).test(currentField.value)
    ) {
      errors[field] = "Invalid Expiry date"
    }

    // if(currentField.required && currentField.file && !currentField.value.name) {
    //   errors[field] = 'This field is required!';
    // }

    // if(!errors[field] && currentField.email && !validateEmail(currentField.value)) {
    //   errors[field] = 'Invalid email address';
    // }

    // if(!errors[field] && currentField.minLength && currentField.value.trim().length < currentField.minLength) {
    //   errors[field] = `This field must have at least ${currentField.minLength} characters`;
    // }

    // if(!errors[field] && currentField.file && currentField.allowedTypes && !currentField.allowedTypes.includes(currentField.value.type.split('/')[1])) {
    //   errors[field] = 'Invalid file type!';
    // }

    // if(!errors[field] && currentField.file && currentField.maxFileSize && (currentField.maxFileSize * 1024) < Math.round(currentField.value.size)) {
    //   errors[field] = `File is too large(${Math.round(currentField.value.size / 1024)}KB), it cannot be larger than ${currentField.maxFileSize}KB`;
    // }
  }

  return errors
}

export default validate
