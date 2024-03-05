const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

dotenv.config()

const userRoutes = require('./routes/user.routes')
const blogRoutes = require('./routes/blog.routes')

connectDB();
const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blogs', blogRoutes)

 // app.get('/', (req,res)=>{
 //     res.status(200).send({
 //         "message": "node server"
 //     })
 // }) 

const port = 4040;

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})
