## Student Model

```js
{
    "gID": string,
    "name": string,
    "degree": string,
    "house": "black_eagles" | "blue_lions" | "golden_deer",
    "profileUrl": string,
    "password": string,
    "user_type": "STUDENT",
    "subjects": [
        {
            "courseCode": string,
            "courseTitle": string,
            "mark": number
        },
        ...
    ],
}
```

## Staff Model
```js
{
    "gId": string,
    "name": string,
    "role": string,
    "faculty": string,
    "education": string[],
    "teaching": string[],
    "user_type": "STAFF" 
}
```

## Bulletin Boards
```js
{
    "title": string,
    "body": string
}
```