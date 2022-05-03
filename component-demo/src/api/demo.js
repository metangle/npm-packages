import { get } from './axios'

class Test {
    async getList(url, params = {}) {
        const res = await get(url, params)
        return res
    }
}
export default new Test()