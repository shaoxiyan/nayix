export default {
  user: {
    role: 'superAdmin',
    username: 'xiyan128',
    password: '43127949',
    email: 'xiyan128@gmail.com',
    nickname: 'xiyan',
    motto: 'Never too old to learn',
    avatar: 'avatar.png'
  },
  jwt: {
    secret: 'vueblog'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'nayix',
    port: 27017,
    username: '',
    password: ''
  },
  // 发布环境下的baseURL
  production: {
    host: '140.82.22.235',
    domain: 'http://xiyan.space'
  },
  app: {
    host: '0.0.0.0',
    port: 8080,
    apiPort: 3000,
    routerBaseApi: 'api'
  }
}
