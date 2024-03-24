
# EnoteBook Project 

Create a feature-rich electronic notebook platform, integrating intuitive note-taking, advanced organization tools, real-time collaboration capabilities, cross-device synchronization, robust security measures, and a user-friendly interface, to streamline productivity and enhance user experience across diverse work environments.


## Authors

- Piyush Gupta


## Folder Structure

- Backend 
    
   - controllers

   - database

   - models

   - middlewares

   - routes

   - .env

   - .gitignore

   - index.js

- Frontend 
    
   - src
        - assets
        - components
        - context
        - pages 
        - App.jsx
        - index.jsx
        - index.css

    - .env

   - .gitignore

   - index.js

## API Reference

#### All User Api

```http
  POST /api/auth/register
```

```http
  POST /api/auth/login
```
```http
  GET /api/auth/getuser - This api use to user Profile data
```
```http
  POST /api/auth/forgetpassword - This api use to user ForgetPassword 
```

#### All User Notes Api

```http
  POST /api/notes/addnote - This api use to user new notes create
```
```http
  DELETE /api/notes/deletenote/:id - This api use to user notes delete
```

```http
  PUT /api/notes/updatenote/:id - This api use to user notes update
```

```http
  GET /api/notes/fetchallnotes - This api use to user all notes find data
```

```http
  GET /api/notes/fetchnote/:id - This api use to user single note find data
```


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Nodejs, Expressjs

**Database:** MongoDb

**Authenticate**: JWT

**Password Hashing**: Bcryptjs


## Deployment

To deploy this project Link

-
  ```
   enote-book-project-mern-hazel.vercel.app

  ```
