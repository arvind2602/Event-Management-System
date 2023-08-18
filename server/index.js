import Express  from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app=Express();
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

// Now connecting it with database
const PORT=process.env.PORT||4000;
const CONNECTION_URL="mongodb+srv://guptaarvind2602:swati@cluster0.a1nqmso.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));
