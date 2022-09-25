import axios from 'axios'
import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res)

  const accessToken = cookies.get('access-token') ?? ''

  cookies.set('access-token', undefined, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 0,
  })
  cookies.set('refresh-token', undefined, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 0,
  })

  await axios.post(
    process.env.API_URL + '/token/logout',
    {},
    {
      headers: {
        Authorization: accessToken,
      },
    }
  )

  res.redirect('/')
}
