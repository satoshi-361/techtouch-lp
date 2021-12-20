import { Env } from '../types/contact'

class ReadEnv {
  public env: Env = {
    HEADLINE_TEXT: '',
    SLACK_HOOK_URL: '',
    MAIL_TITLE: '',
    SF_CATEGORY: '',
    CAPTCHA_SITE_SECRET: ''
  }

  public constructor() {
    this.validEnv()
  }

  private validEnv = (): void => {
    if (!process.env.SLACK_HOOK_URL) throw new Error('env not set')
    this.env.SLACK_HOOK_URL = process.env.SLACK_HOOK_URL

    if (!process.env.HEADLINE_TEXT) throw new Error('env not set')
    this.env.HEADLINE_TEXT = process.env.HEADLINE_TEXT

    if (!process.env.MAIL_TITLE) throw new Error('env not set')
    this.env.MAIL_TITLE = process.env.MAIL_TITLE

    if (!process.env.SF_CATEGORY) throw new Error('env not set')
    this.env.SF_CATEGORY = process.env.SF_CATEGORY

    if (!process.env.CAPTCHA_SITE_SECRET) throw new Error('env not set')
    this.env.CAPTCHA_SITE_SECRET = process.env.CAPTCHA_SITE_SECRET
  }
}

export const readEnv = () =>  new ReadEnv().env
