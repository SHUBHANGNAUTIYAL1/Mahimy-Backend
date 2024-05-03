import express from "express"

import Email from "./routes/email.js"
import cors from 'cors';

const app=express()

    
    app.use(cors());
    app.use('/api/email',Email);

app.listen(8100,()=>{
    
    console.log("connected")

})
