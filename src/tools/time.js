import dayjs from 'dayjs'
import tools from '..'

const tool = {}

tool.formatDict = {
  YMDHms: 'YYYY-MM-DD HH:mm:ss',
  YMDHm : 'YYYY-MM-DD HH:mm',
  YMD   : 'YYYY-MM-DD',
  YMDHmsCN: 'YYYY年MM月DD日 HH时mm分ss秒',
  YMDHmCN: 'YYYY年MM月DD日 HH时mm分',
}

for (key in formatDict){
  tool[`timeTo${key}`] = (timestr) => {
    if (!timestr && typeof timestr !== 'string') return ''
    return dayjs(timestr).format(formatDict[key])
  }
}

tool.timeToFormat = (time, format) => {
  if (!time && typeof time !== 'string') return ''
  return dayjs(time).format(format)
}

tool.secondsToHMS = (seconds) => {
  if (!seconds && typeof seconds !== 'string') {
    seconds = 0
  }
  seconds = Math.floor(seconds / 1000)

  const day = Math.floor(seconds / (24 * 3600)) // Math.floor()向下取整
  const hour = Math.floor((seconds - day * 24 * 3600) / 3600)
  const minute = Math.floor((seconds - day * 24 * 3600 - hour * 3600) / 60)
  const second = seconds - day * 24 * 3600 - hour * 3600 - minute * 60

  return hour ? (hour + '时钟') : '' + minute + '分' + second + '秒'
}

export default tool