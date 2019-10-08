import courses from '../courses'
export default class CourseService {
    static instance = null;

    static getInstance() {
        if (this.instance == null) {
            this.instance = new CourseService()
        }
        return this.instance
    }


    createCourses = course =>
        courses.push(course)

    findAllCourses = () =>
        courses;

    findCourseById = courseId =>
        courses.find(course => course.id === courseId)

    deleteCourse = courseId =>
        this.courses = courses.filter(
            course => course.id !== courseId
        )

}