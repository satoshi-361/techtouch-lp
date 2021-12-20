import { SFDCContext } from '../types/contact'

const rp = require('request-promise')

export const postSalesforce = async (context: SFDCContext): Promise<void> => {
  const requestOptions = {
    method: 'POST',
    url:
      'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    form: {
      oid: '00D7F000006kEmS',
      '00N7F00000Rdwcs': context.purpose,
      '00N7F00000SLnMF': context.consider,
      '00N7F00000SLnMK': context.system,
      '00N7F00000SLnMP': context.browser,
      '00N7F00000SLnMU': context.userAmount,
      '00N7F00000SLnMZ': context.startDate,
      company: context.companyName,
      '00N7F00000RdwcE': context.divisionName,
      last_name: context.contactName,
      email: context.email,
      phone: context.phoneNumber,
      '00N7F00000Rdwcn': context.numberOfEmployees,
      '00N7F00000RdxPk': context.content,
      'Campaign_ID': '7017F000001P0HnQAK',
      'member_status': 'Responded'
    }
  }

  try {
    await rp(requestOptions)
  } catch (e) {
    console.error(e)
  }
}
