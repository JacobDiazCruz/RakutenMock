const required = (value) => !!value || ''

const requiredList = (value) => {
  return value.length > 0 || ''
}

const requiredObject = (value) => {
  return Object.keys(value).length > 0 || ''
}

const email = (value) => {
  const pattern = /^(([^<>()[\]\\.,;:# \s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/
  return pattern.test(value) || 'Invalid email format'
}

const min = (min, v) => {
  return (v || '').length > min || `Must be at least ${min} digits long.`;
}

const max = (maxVal, v) => {
  return (v || '').length < maxVal || `Maximum of ${maxVal} characters allowed have been reached.`;
}

const agreement = (value) =>
  !!value || 'Please indicate that you accept the Terms and Conditions'

const mobile = (value) =>
  (value && value.length === 10) || 'Invalid mobile number'

const telephone = (value) =>
  (value && value.length === 10) || 'Invalid telphone number'

export { required, requiredList, email, agreement, mobile, telephone, min, max, requiredObject }