import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { CourseRoutes } from './app/modules/course/course.route'
import { CategoryRoutes } from './app/modules/category/category.route'
import { ReviewRoutes } from './app/modules/review/review.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()



//parsers
app.use(express.json())
app.use(cors())


//application route
app.use('/api/v1', CourseRoutes)
app.use('/api',CategoryRoutes)
app.use('/api',ReviewRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler);

// console.log(process.cwd());


export default app;