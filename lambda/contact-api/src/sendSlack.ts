import { Payload } from '../types/contact'
import { IncomingWebhook } from '@slack/webhook'

export const sendSlack = async (
  payload: Payload,
  webhookUrl: string,
  headLineText: string
): Promise<void> => {
  const webhook = new IncomingWebhook(webhookUrl)

  await webhook.send({
    text: headLineText,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: headLineText
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: '*企業名:*\n' + payload.companyName
          },
          {
            type: 'mrkdwn',
            text: '*部署名:*\n' + payload.divisionName
          },
          {
            type: 'mrkdwn',
            text: '*担当者氏名:*\n' + payload.contactName
          },
          {
            type: 'mrkdwn',
            text: '*メールアドレス:*\n' + payload.email
          },
          {
            type: 'mrkdwn',
            text: '*電話番号:*\n' + payload.phoneNumber
          },
          {
            type: 'mrkdwn',
            text: '*従業員数:*\n' + payload.numberOfEmployees
          }
        ]
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*問い合わせ内容:*\n${payload.purpose}`
          },
          {
            type: 'mrkdwn',
            text: `*検討内容:*\n${payload.consider}`
          },
          {
            type: 'mrkdwn',
            text: `*対象システム:*\n${payload.system}`
          },
          {
            type: 'mrkdwn',
            text: `*対象ブラウザ:*\n${payload.browser}`
          },
          {
            type: 'mrkdwn',
            text: `*想定利用ユーザー数:*\n${payload.userAmount}`
          },
          {
            type: 'mrkdwn',
            text: `*導入時期:*\n${payload.startDate}`
          },
          {
            type: 'mrkdwn',
            text: `*url-parameter:*\n${payload.urlParam}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: payload.content ? '*その他の質問:*\n' + payload.content : ' '
        }
      },
      {
        type: 'divider'
      }
    ]
  })
}
