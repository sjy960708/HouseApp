// 引入axios
import axios from 'axios'
import qs from 'qs'

export const IP = 'http://127.0.0.1:1111'

const req = axios.create({
    baseURL: IP,
    timeout: 5000
})

//export default全局暴露一次，如果出现多行export default，后面暴露的会覆盖前面的
//export 可以暴露多次，同时import时候需要解构{ xx } 才能拿到暴露的数据

//PHP后台必须把post参数使用qs转换一次才可以接收到！！！否则接收不到参数
//登录接口函数： 参数acc：用户名  pwd：密码
export function login(acc, pwd) {
    return req.post('/login.php', qs.stringify({ acc, pwd }))
}
// 注册

export function regs(acc, pwd) {
    return req.post('/reg.php', qs.stringify({ acc, pwd }))
}
// 获取验证码
export function getverifys() {
    return req.get('/valitecode.php')
}


// http://127.0.0.1:111/gethouselist.php  
// 猜你喜欢
export function getlist() {
    return req.get('/gethouselist.php')
}

// 