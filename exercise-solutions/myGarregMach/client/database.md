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
    "password": string,
    "role": string,
    "faculty": string,
    "education": string[],
    "teaching": string[],
    "user_type": "STAFF",
    "profileUrl": string
}
```

## Bulletin Boards
```js
{
    "title": string,
    "body": string
}
```

extra students
```js
{
    gID: "5426991",
    degree: "Doctorate of Sorcery",
    name: "Dorian Wytte",
    password: "friendlywytte",
    profileUrl: "https://64.media.tumblr.com/91bd30d36f3ebf278b21c49e6d46dba6/eac563dfe0fa5e81-67/s1280x1920/b0b280a9f4421bddaa0a2a8aa806c852115ce206.jpg",
    house: "blue_lions"
}
```


```js
{
    gID: "5423231",
    degree: "Bachelor of Potion Brewery",
    name: "Monica",
    password: "potionprincess",
    profileUrl: "https://64.media.tumblr.com/215f7ed7cbe1cd6d29bdb9be5e61a51d/0d6974ec6e0ba5a8-51/s640x960/47796f696571a0f5ded4cc0969527177f0e01a99.pnj",
    house: "blue_lions"
}
```