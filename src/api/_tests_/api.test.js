// API测试
import api from '../index'

it('getExample is success', () => {
    var arr =  api.getExample()
    expect(arr).toBeDefined()
})

it('login is success', () => {
    return api.login({ uname: 'ziv', passwd: '123456' }).then((res) => {
        expect(res.code).toEqual(200)
    })
})
