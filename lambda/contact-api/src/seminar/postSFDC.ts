import { SFDCContext } from './types'

const rp = require('request-promise')

export const postSalesforce = async (context: SFDCContext): Promise<void> => {
  const requestOptions = {
    method: 'POST',
    url:
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    form: {
      oid: '00D7F000006kEmS',
      '00N7F00000StXjX': context.purpose,
      company: context.companyName,
      '00N7F00000StXjw': context.divisionName,
      '00N7F00000StXk1': context.position,
      last_name: context.contactName,
      email: context.email,
      phone: context.phoneNumber,
      '00N7F00000StXjm': context.numberOfEmployees,
      '00N7F00000StZS6': context.type,
      '00N7F00000Su1bL': context.channel,
      '00N7F00000Su38u': context.partner
    }
  }

  try {
    await rp(requestOptions)
  } catch (e) {
    console.error(e)
  }
}
