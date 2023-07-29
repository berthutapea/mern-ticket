<H1 align ="center" >Tikons (MERN TICKET)  </h1>
<h5  align ="center"> 
Fullstack open source ticket application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
      - [API](#api)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * [License](#license)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the frontend on one terminal and the server on the other terminal)

In the first terminal

```
$ cd frontend
$ npm install (to install frontend-side dependencies)
$ npm run start (to start the frontend)

```

In the second terminal

- cd backend and Set environment variables in .env
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
#  --- .env  ---

NODE_ENV =
PORT =5000
MONGO_URI =
JWT_SECRET =

```

```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)

```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Buy Ticket
- View My Ticket
- Search Ticket Buy
- Add Note Buy Ticket
- Close Buy Ticket
- 404 Page and many more
- Skeleton loading effect
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React JS ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [Axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Tailwind CSS](https://tailwindcss.com/) - For User Interface
- [Daisy UI](https://daisyui.com/docs/changelog/) - For User Interface
- [Email JS](https://www.emailjs.com/) - For User Interface
- [React Icons](https://react-icons.github.io/react-icons/) - Small library that helps you add icons  to your react apps
- [Framer Motion](https://www.framer.com/motion/) - For User Interface
- [React Redux](https://react-redux.js.org/) - manage application state efficiently and provide a more structured mechanism for managing data
- [React Modal](https://www.npmjs.com/package/react-modal) - For User Interface
- [React Toastify](https://www.npmjs.com/package/react-toastify) - To display interactive and responsive notifications (toasts) in web applications

####  Backend 

- [Node JS](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express JS](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [Bcrypt JS](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Nodemon](https://nodemon.io/) - Development utility for Node.js applications. Node.js is a runtime platform that allows you to run JavaScript on the server side.

####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots 
 
![img-1](https://github.com/berthutapea/mern-ticket/assets/111676859/0faeefcb-d55d-4be3-a954-fec973dc8599)
---- -
![img-2](https://github.com/berthutapea/mern-ticket/assets/111676859/e94efd6b-5c82-4e54-af16-feaf5b9aee7d)
--- - 
![img-3](https://github.com/berthutapea/mern-ticket/assets/111676859/35da1ca1-ec0e-4099-9f2f-28e1ffaf2fd2)
--- - 
![img-4](https://github.com/berthutapea/mern-ticket/assets/111676859/b73bec23-6ddf-484a-9dcb-09e9b2e8ec65)
--- - 
![img-5](https://github.com/berthutapea/mern-ticket/assets/111676859/2d4f71c4-9945-47b1-8d6a-6c00eca67f16)
--- - 
![img-6](https://github.com/berthutapea/mern-ticket/assets/111676859/5d4818d5-8835-4b33-ae13-4ff811ad2eca)
--- - 
![img-7](https://github.com/berthutapea/mern-ticket/assets/111676859/de40e3b1-e406-4aa0-abf2-d69130e69b1a)
--- - 
![img-8](https://github.com/berthutapea/mern-ticket/assets/111676859/f206c724-b0a5-472b-ad75-0b50c8b915b8)
--- - 
![img-9](https://github.com/berthutapea/mern-ticket/assets/111676859/45fc4624-1302-4ec8-9a9b-05214208087e)
--- - 
![img-10](https://github.com/berthutapea/mern-ticket/assets/111676859/dcb457e3-3656-46dc-82da-47dd8bb34044)

## Author
- Portfolio: [berthutapea](https://berthutapea.vercel.app/)
- Github: [berthutapea](https://github.com/berthutapea)
- Sponsor: [berthutapea](https://saweria.co/berthutapea)
- Linkedin: [gilberthutapea](https://www.linkedin.com/in/gilberthutapea/)
- Email: [berthutapea@gmail.com](mailto:berthutapea@gmail.com)

## License

MIT License

Copyright (c) 2022 Gilbert Hutapea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
