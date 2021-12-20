import { MailContext } from './types'

const AWS = require('aws-sdk')
AWS.config = new AWS.Config()
AWS.config.accessKeyId = 'AKIAIBYQU362MDAS7IHQ'
AWS.config.secretAccessKey = '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'
AWS.config.region = 'us-west-2'

const ses = new AWS.SES()

const body = (context: MailContext): string => {
  return `
${context.contactName}様

この度はテックタッチの${context.purpose}にお申し込みいただきありがとうございます。
下記の内容でお受けいたしました。

──────────────────────────

貴社名： ${context.companyName}
部署名： ${context.divisionName}
ご担当者氏名： ${context.contactName}
メールアドレス： ${context.email}
電話番号： ${context.phoneNumber}
従業員数： ${context.numberOfEmployees}
お申し込み内容： ${context.purpose}

──────────────────────────

担当者より折り返しご連絡させていただきます。
テックタッチ株式会社 | Techtouch, Inc.
〒100-6005 東京都千代田区霞ケ関3-2-5　霞が関ビル5F
サポート窓口：support@techtouch.co.jp
サポート時間：平日10時〜18時
※お急ぎのお問い合わせは、下記までお願いします。
Tel：080-4609-2630
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
          Data: "【Techtouch】ウェビナー/資料請求のお申し込みありがとうございます。"	
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
