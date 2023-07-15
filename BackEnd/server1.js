// const express = require('express');
// const mongoose = require('mongoose');
// const usercontroller = require('./Controller/login');
// const regcontroller = require('./Controller/Reg');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;

// // Connect to database
// mongoose.connect('mongodb://0.0.0.0:27017/DB')
//   .then(() => console.log('MongoDB connected'))
//   .catch(error => console.error(error));

//   console.log('DB connected');

// // Add middleware
// app.use(cors());
// app.use(express.json());


// app.post('/api/vistreport',regcontroller.insertdata);
// app.post('/api/signup',usercontroller.signup);
// app.post('/api/login',usercontroller.login);




// // Start server
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
