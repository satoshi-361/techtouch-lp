import { MailContext } from '../types/contact'

const AWS = require('aws-sdk')
AWS.config = new AWS.Config()
AWS.config.accessKeyId = 'AKIAIBYQU362MDAS7IHQ'
AWS.config.secretAccessKey = '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'
AWS.config.region = 'us-west-2'

const ses = new AWS.SES()

const body = (context: MailContext): string => {
  return `
${context.contactName}様

この度はテックタッチへお問い合わせいただき、誠にありがとうございます。
下記の内容でお受けいたしました。

──────────────────────────

貴社名： ${context.companyName}
部署名： ${context.divisionName}
ご担当者氏名： ${context.contactName}
メールアドレス： ${context.email}
電話番号： ${context.phoneNumber}
従業員数： ${context.numberOfEmployees}
お問い合わせ内容： ${context.purpose}
${context.purpose === 'サービス内容を詳しく聞きたい'
  ?
`検討内容: ${context.consider}
対象システム: ${context.system}
対象ブラウザ: ${context.browser}
想定利用ユーザー数: ${context.userAmount}
導入時期: ${context.startDate}
` : ''}
${(context.content ? 'その他ご質問： ' + context.content : '')}

──────────────────────────

担当者より折り返しご連絡させていただきます。
なお、3営業日を過ぎても返答がない場合はメールの受信がうまく行えていない可能性がございますので、お手数ではございますが改めてお問い合わせください。
`
}

const sourceAddress = 'csm@techtouch.co.jp'

export const sendEmail = (context: MailContext): Promise<void> => {
  return new Promise((resolve, reject) => {
    const params = {
      Destination: {
        BccAddresses: [sourceAddress],
        ToAddresses: [context.email]
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: context.title
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: body(context)
          }
        }
      },
      Source: sourceAddress
    }

    ses.sendEmail(params, (err, data) => {
      if (err) {
        console.error(err)
        reject()
      }
      // eslint-disable-next-line no-console
      console.log(data)
      resolve()
    })
  })
}
