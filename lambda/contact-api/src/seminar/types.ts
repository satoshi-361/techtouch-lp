export type Payload = {
  purpose: string
  companyName: string
  divisionName: string
  numberOfEmployees: string
  contactName: string
  position: string
  email: string
  phoneNumber: string
  type: string
  channel: string
  partner: string
}

export type FormRequest = Payload & {
  captchaResponse: string
}

export type MailContext = Payload

export type SFDCContext = Payload

export type Env = {
  SLACK_HOOK_URL: string
  CAPTCHA_SITE_SECRET: string
}

export type Response = {
  statusCode: number
  body: string
}
