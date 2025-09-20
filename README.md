### Hosted link:-  **https://pooling-system-1.onrender.com**
# Pooling System:- 
This project is the backend for a real-time polling system that allows teachers to create live polls and students to participate in them. The backend is built with Node.js, Express.js, and MongoDB for data storage. Socket.IO is used for real-time communication.

---

## Features
- **Teacher Features**:
  - Create polls with options and set a timer for voting.
  - View real-time results as students vote.
  - View poll history.
  - Kick students out of the room.

- **Student Features**:
  - Join a poll room created by a teacher.
  - Vote in real-time on polls.
  - Redirect to a "kicked out" page if removed by the teacher.

## Tech Stack
- **React** (with Vite for fast development)
- **Socket.IO** (for real-time communication)
- **Bootstrap** (for styling)
- **Session Storage** (for session management)
- **Mongodb** (for database management)

 
## Project Structure
```
pooling_backend/
├── node_modules/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── routes/
├── server.js
├── .env
├── .gitignore
├── package-lock.json
└── package.json

pooling_frontend/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── Pages/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.development
├── .env.production
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md  
├── server.js
└── vite.config.js

```

## Installations
- Clone the Repository
  ```
  git clone https://github.com/Prakharpandey007/Pooling_system.git
  cd pooling_backend (for backend)
  cd pooling_frontend (for frontend)

  ```
- Install Dependencies
  ```
  npm install

  ```
- Set Up Enviroment Variables for backend
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/pooling_System

```

- Setup Enviroment Variable for frontend

```
VITE_API_BASE_URL=http://localhost:3000  (for local)
```

- Start the server
  ```
  npm start
  ```
- Access the Api
  ```
  http://localhost:3000/<abc>
  ```
--- 

## Running the Application

1. The frontend will be available at:
   ```
   http://localhost:5173/
   
   ```
2. username for teacher should start with teacher......
   example -> teacherprakhar

## Contributing
Contributions are welcome! If you'd like to contribute to Twitter_Dev Backend, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b  add-new-feature).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin add-new-feature).
- Create a new Pull Request.

## License
 This project is licensed under the MIT License - see the LICENSE file for details.
