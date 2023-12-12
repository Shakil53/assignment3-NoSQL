import { Router } from "express";
import { CourseRoutes } from "../app/modules/course/course.route";


const router = Router()


const moduleRoutes = [
    {
        path: '/create-courses',
        route: CourseRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))



export default router;