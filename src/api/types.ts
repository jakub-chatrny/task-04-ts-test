// String literal type consisting of all the course codes
// Let's pretend this type is imported from our backend
export type CourseCode = "A" | "B" | "C" | "D";
export enum PersonType {
    TEACHER = "teacher",
    STUDENT = "student",
}

// TODO: Create Course interface object that contains optional arrays of teachers and students names
// interface Course { ...
export interface Course {
    teachers?: Array<string>,
    students?: Array<string>,
}
// TODO: Create Stats object type that keys of CourseCode will contain Course objects
export type Stats = {
    [key in CourseCode]: Course
}

// TODO: Create Student and Teacher interfaces (extending Person interface with common attributes)
// interface Student extends ...
// interface Teacher extends ...

export interface Person {
    id: string,
    name: string,
    type: PersonType,
}

export interface Student extends Person {
    type: PersonType.STUDENT,
    attends: Array<CourseCode>
    semester: number
}
export interface Teacher extends Person {
    type: PersonType.TEACHER,
    teaches: Array<CourseCode>,
}
// {"id":"a","name":"John","type":"student","attends":["A","B","D"],"semester":1}
// {"id":"4","name":"Mrs. Judy","type":"teacher","teaches":[]}

