import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true, // todas URLs de frontend podem acessar o backend
})
app.register(jwt, {
  secret: 'spacetime', // diferencia os JWTs gerados por diferentes backends
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🔥 HTTP server running on http://localhost:3333')
  })
