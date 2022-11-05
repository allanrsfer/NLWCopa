import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/users', async (request) => {
    const createUserBody = z.object({
      access_token: z.string(),
    })

    const { access_token } = createUserBody.parse(request.body)

    const userResponse = await fetch('http://www/googleapis.com/oauth2/v2/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    const userInfoData
  })

}