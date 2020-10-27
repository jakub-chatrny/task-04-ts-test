// TODO: Fetch data and return Stats object created from it
// Make sure to correctly type this function, there should be no `any` type in your whole solution
import {Stats, Course, CourseCode, Student, Teacher, Person, PersonType} from "./types";

export const getPersonsStats = (): Promise<Stats> => (
    fetch('http://localhost:8080/persons')
        .then((response) => response.json())
        .then((persons) => persons.reduce((acc: Stats, person: Person) => {
            if (person.type === PersonType.STUDENT) {
                (<Student>person)?.attends?.forEach((courseCode: CourseCode) => {
                    if (acc[courseCode].students === undefined) {
                        acc[courseCode].students = []
                    }
                    acc[courseCode]?.students?.push(person.name);
                })
            }
            if (person.type === PersonType.TEACHER) {
                (<Teacher>person)?.teaches?.forEach((courseCode: CourseCode) => {
                    if(acc[courseCode].teachers === undefined) {
                        acc[courseCode].teachers = []
                    }
                    acc[courseCode]?.teachers?.push(person.name);
                })
            }
            return acc;
        }, {
            'A': {} as Course,
            'B': {} as Course,
            'C': {} as Course,
            'D': {} as Course,
        }))
);
