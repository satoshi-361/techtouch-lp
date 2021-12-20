import { Payload } from './types'
import { IncomingWebhook } from '@slack/webhook'

export const sendSlack = async (
  payload: Payload,
  webhookUrl: string,
): Promise<void> => {
  const webhook = new IncomingWebhook(webhookUrl)
  const headLineText = "LPから新着のセミナーの申し込みが届きました"

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
            text: '*従業員数:*\n' + payload.numberOfEmployees
          },
          {
            type: 'mrkdwn',
            text: '*部署名:*\n' + payload.divisionName
          },
          {
            type: 'mrkdwn',
            text: '*役職:*\n' + payload.position
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
            text: `*申し込み内容:*\n${payload.purpose}`
          },
          {
            type: 'mrkdwn',
            text: `*チャネル:*\n${payload.channel}`
          },
          {
            type: 'mrkdwn',
            text: `*パートナー名:*\n${payload.partner}`
          },
        ]
      },
      {
        type: 'divider'
      }
    ]
  })
}
