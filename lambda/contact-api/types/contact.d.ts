export type Payload = {
  purpose: string
  consider: string
  system: string
  browser: string
  userAmount: string
  startDate: string
  companyName: string
  divisionName: string
  contactName: string
  email: string
  phoneNumber: string
  numberOfEmployees: string
  content?: string
  urlParam?: string
}

export type FormRequest = Payload & {
  captchaResponse: string
}

export type MailContext = Payload & {
  title: string
}

export type SFDCContext = Payload & {
  category: string
}

export type Env = {
  SLACK_HOOK_URL: string
  HEADLINE_TEXT: string
  MAIL_TITLE: string
  SF_CATEGORY: string
  CAPTCHA_SITE_SECRET: string
}

export type Response = {
  statusCode: number
  body: string
}
