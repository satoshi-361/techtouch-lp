import { APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import { FormRequest, Response } from './types'
import { sendEmail } from './sendEmail'
import { postSalesforce } from './postSFDC'
import { isValidRecaptcha } from '../isValidRecaptcha'
import { readEnv } from './readEnv'
import { sendSlack } from './sendSlack'

const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
}

const StatusCode = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500
}

const RESPONSE = {
  OK: { statusCode: StatusCode.OK, headers: responseHeaders, body: '' },
  BAD_REQUEST: {
    statusCode: StatusCode.BAD_REQUEST,
    headers: responseHeaders,
    body: ''
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: StatusCode.INTERNAL_SERVER_ERROR,
    headers: responseHeaders,
    body: ''
  }
}

export const seminar: APIGatewayProxyHandler = async (
  event,
  _context
): Promise<Response> => {
  const env = readEnv()

  if (!event.body) {
    return RESPONSE.INTERNAL_SERVER_ERROR
  }

  const formRequest: FormRequest = JSON.parse(event.body)

  if (
    await isValidRecaptcha(formRequest.captchaResponse, env.CAPTCHA_SITE_SECRET)
  ) {
    await sendEmail(formRequest)
    await sendSlack(formRequest, env.SLACK_HOOK_URL)
    await postSalesforce(formRequest)

    return RESPONSE.OK
  }

  return RESPONSE.BAD_REQUEST
}
