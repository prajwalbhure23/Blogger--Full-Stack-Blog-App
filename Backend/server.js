const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const path = require('path');

dotenv.config()

const corsOptions = {
  origin: 'https://blogger-full-stack-blog-app-jd4o.vercel.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],       
  allowedHeaders: ['Content-Type'], 
};

const userRoutes = require('./routes/user.routes')
const blogRoutes = require('./routes/blog.routes')

connectDB();
const app = express()


//app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// static Files
//app.use(express.static(path.join(__dirname, './blogger-client/dist')))

//routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blogs', blogRoutes);

// app.get('*', function(req,res){
//      res.sendFile(path.join(__dirname, './blogger-client/dist/index.html'))
// })

 app.get('/', (req,res)=>{
     res.status(200).send({
         "message": "node server"
     })
 }) 

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})
