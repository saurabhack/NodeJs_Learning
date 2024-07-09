import express from 'express';

const app=express();

// app.get('/',(req,res)=>{
//     res.send('server is ready')
// });

app.get('/jokes',(req,res)=>{
     const jokes=[
        {
            id:1,
            name:'as',
            content:'ha ha ha'
        }
     ]
     res.send(jokes);
})

const port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});