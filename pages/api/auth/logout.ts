import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = new Cookies(req, res)
  cookies.set('access-token', 'deleted', {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 0,
  })
  cookies.set('refresh-token', 'deleted', {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 0,
  })

  res.redirect('/')
}
