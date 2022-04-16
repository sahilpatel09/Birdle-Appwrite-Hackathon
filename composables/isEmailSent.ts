export const isEmailSent = () => {
  return useState('emailsent', () => true)
}