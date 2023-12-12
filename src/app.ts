import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { CourseRoutes } from './app/modules/course/course.route'

const app: Application = express()



//parsers
app.use(express.json())
app.use(cors())


//application route
app.use('/api/v1', CourseRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

console.log(process.cwd());


export default app;