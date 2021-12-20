const rp = require('request-promise')

export const isValidRecaptcha = async (
  captchaResponse: string,
  captchaSiteSecret: string
): Promise<boolean> => {
  const requestOptions = {
    method: 'POST',
    url: 'https://www.google.com/recaptcha/api/siteverify',
    form: {
      response: captchaResponse,
      secret: captchaSiteSecret
    },
    json: true
  }

  const response = await rp(requestOptions)

  return response.success
}
