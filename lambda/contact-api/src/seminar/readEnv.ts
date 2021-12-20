import { Env } from './types'

class ReadEnv {
  public env: Env = {
    SLACK_HOOK_URL: '',
    CAPTCHA_SITE_SECRET: ''
  }

  public constructor() {
    this.validEnv()
  }

  private validEnv = (): void => {
    if (!process.env.SLACK_HOOK_URL) throw new Error('env not set')
    this.env.SLACK_HOOK_URL = process.env.SLACK_HOOK_URL

    if (!process.env.CAPTCHA_SITE_SECRET) throw new Error('env not set')
    this.env.CAPTCHA_SITE_SECRET = process.env.CAPTCHA_SITE_SECRET
  }
}

export const readEnv = () =>  new ReadEnv().env
