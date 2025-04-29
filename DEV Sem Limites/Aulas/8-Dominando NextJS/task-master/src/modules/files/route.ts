import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { S3Client } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'

import { sessionMiddleware } from '../auth/sessionMiddleware'

import { fileUploadSchema } from './schemas/file-upload'

const app = new Hono()
.post('/upload',
    sessionMiddleware,
    zValidator('json', fileUploadSchema),
    async (c)=> {
        const { contentType } = c.req.valid('json')

        try {
          const client = new S3Client({ region: process.env.AWS_REGION })

          const { url, fields } = await createPresignedPost(client, {
            Bucket: process.env.AWS_BUCKET_NAME as string,
            Key: uuidv4(),
            Conditions: [
              ['content-length-range', 0, 10485760], // up to 10 MB
              ['starts-with', '$Content-Type', contentType],
            ],
            Fields: {
              acl: 'public-read',
              'Content-Type': contentType,
            },
            Expires: 600, // Seconds before the presigned post expires. 3600 by default.
          })
      
          return c.json({ url, fields })
        } catch  {
          return c.json({ error: 'Unable to upload file' }, 500)
        }
    }
)

export default app