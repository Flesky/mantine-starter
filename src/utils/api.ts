import ky from 'ky'

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,

  // hooks: {
  //   beforeRequest: [
  //     (request) => {
  //       const token = getUser()?.access_token
  //       request.headers.set('Authorization', `Bearer ${token}`)
  //     },
  //   ],
  // },
})

export default api
