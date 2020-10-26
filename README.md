# Task 4 - Typescript

_Created:_ **Adam Laurenčík**, **Maroš Beťko**

#### Prerequisites

1. Installed `yarn` (or `npm`, we won't judge)

#### Task 4.0

Your task for this week will be to define typings for the existing API, define the code for fetching the data and process the fetched data.
You should follow these steps:

1. Install all the dependencies by running the `yarn` command.
2. Run the following script:

    > `yarn server:start`

    This will start the node server, which you will be connecting to. The server is running on the port `8080` and has only one endpoint available. The endpoint will be accessible under following url: `http://localhost:8080/persons`. It will return a JSON array object, containing list of teachers and students. Students have defined the courses, which they are attending and teachers the courses which they are teaching.

3. The template was created using the CRA script so you can start the app development server using the following command:
    > `yarn start`

#### Task 4.1

Inspect the data that is returned by the api and based on that, create Typescript type definitions inside the file `src/api/types.ts`.

#### Task 4.2

Finish the definition and implementation of the `getPersonsStats` function inside the `src/api/api.ts` file. The function should do following things:

1. Fetch the data from the server
2. Process the data and return new `Stats` object, which will contain an array of students and teachers for each of the courses.

_Hint: you can use helper function `statsFromPerson` to transform one student/teacher to stats object_

#### Conditions & Points

-   **1pt** for correct Typescript type definitions
-   **1pt** for correctness of data returned from the `getPersonsStats` function

#### Hints

-   Feel free to install additional libraries that will help you with the processing of data (eg. Lodash - mergeWith function could be useful)
    - Many packages written in JavaScript with no official type support have a `@types/${name}` package containing type definitions maintained by [DefinitelyTyped](https://definitelytyped.org/) community
-   You do not need to modify any files outside `src/api/`. The `App` component will use the `getPersonsStats` function, and print it's output to the screen.
-   The resulting output should look like this:

```json
{
    "A": {
        "students": ["John", "Jimmy", "Laura", "Peter"],
        "teachers": ["Mr. Shady"]
    },
    "B": {
        "students": ["John", "Jimmy"],
        "teachers": ["Mr. Slim", "Mrs. Julie"]
    },
    "C": {
        "teachers": ["Mr. Slim"]
    },
    "D": {
        "students": ["John", "Jimmy", "Peter"],
        "teachers": ["Mr. Shady", "Mrs. Julie"]
    }
}
```
