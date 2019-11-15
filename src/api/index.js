/*
 * @Author: your name
 * @Date: 2019-11-14 21:49:17
 * @LastEditTime: 2019-11-15 00:22:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \waimai\src\api\index.js
 */
import ajax from './ajax'
// eslint-disable-next-line no-template-curly-in-string
export const reqAdress = (geohash) => ajax(`/position/${geohash}`)
export const reqFoodType = () => ajax('/index_category')
export const reqShows = (latitude, longitude) => ajax(`/shops`, {latitude, longitude})
export const reqShowList = (geohash, keyword) => ajax('/search_shops', {geohash, keyword})
export const reqCaptcha = () => ajax('/captcha')
export const reqLoginPwd = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
export const reqSendcode = (phone) => ajax('/sendcode', {phone})
export const reqLoginSms = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
export const reqUserInfo = () => ajax('/userinfo')
export const reqLogout = () => ajax('/logout')
