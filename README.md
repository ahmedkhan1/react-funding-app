# React Funding App

This project includes a React app which utilizes Nodejs API. It is made using Material UI. The CSS framework for this project is SASS, and Materail UIs CSS in Js. 
It includes:

- Branding
- Custom Theming based on brand design
- Typography
- Using the latest React, Typescript, hooks and reusable functional component structure.
- Redux with Redux thunk, and Redux toolkit.
- Complete Mobile, and tabs, and Desktop responsive.
- Test driven development using Jest and enzymes for each component and hooks.
- Chartjs for displaying Users data.
- Lazy Loading Routes
- React Hooks Forms

# Architecture of the project:

The architecture for this application is module based. 
```
● src
+---● index
|   +--● component (Reusable Components)
|   |  |--FormFields+---● index.tsx
|   |  |                |--index.test.tsx
|   |  |                |-- ....
|   |  |
|   |  ● router+------● index.jstsx
|   |  |              |--index.test.tsx
|   |  |
|   |  ● router+------● index.tsx
    |  |
|   |  ● utils+-------● common.methods.tsx
|   |  |              ● constants+---●
|   |  |              |              |--index.tsx
|   |  |              |              |--chart.constant.tsx
|   |  |              |              |--date.constant.tsx
|   |  |              |              |--image.constant.tsx
|   |  |              |              |--message.constant.tsx
|   |  |              |              
|   |  |              ● helpers+---●
|   |  |                           |--validation.helper.tsx
|   |  ● views+---
|   |            |-----● Dashboard
|   |            |-----● Etransaction
|   |            |-----● Feedback
|   |            |-----● LodgeComplaint
|   |            |-----● Login
|   |            |-----● NotFound
|   |            |-----● Portfolio
|   |            |-----● Profile
                 |-- ....
|   |  
|   |--gitignore
|
|---●Public+-------●index.html
```
