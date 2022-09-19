import axios from 'axios'
export default {
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    // 轮询获取权限
    polling () {
      this.getAuth()
      setInterval(() => {
        this.getAuth()
      }, 1000 * 60 * 8)
    },
    async getAuth () {
      const url =
        'https://www.fastmock.site/mock/003e6703669b7e59c74e8460e6fc0100/tools/scoreboard/auth'
      const { data } = await axios.post(url)
      this.disabled = data.disabled
    }
  }
}
