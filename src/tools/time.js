import dayjs from 'dayjs'

const tool = {}

tool.formatDict = {
  YMDHms: 'YYYY-MM-DD HH:mm:ss',
  YMDHm : 'YYYY-MM-DD HH:mm',
  YMD   : 'YYYY-MM-DD'
}

for (key in formatDict){
  tool[`timeTo${key}`] = (timestr) => {
    if (!timestr && typeof timestr !== 'string') return ''
    return dayjs(timestr).format(formatDict[key])
  }
}

export default tool