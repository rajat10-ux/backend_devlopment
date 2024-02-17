import  express  from "express";
const app=express();
app.get("/",(req,res)=>{
        res.send("/","server is ready");
})
//get list jokes
app.get('/api/jokes',(req,res)=>{
        const jokes=[
                {
                        id:1,
                        title:'a joke',
                        content:'this is joke'
                },
                {
                        id:2,
                        title:'another joke',
                        content:'this is joke'
                },
                {
                        id:3,
                        title:'a last  joke',
                        content:'this is joke'
                },
                {
                        id:4,
                        title:'alas joking event',
                        content:'this is joke'
                },
                {
                        id:5,
                        title:'a jokefb',
                        content:'this is a jonebjvbr  joke'
                },
        ];
        res.send(jokes);
});
const port= process.env.port || 3000;
app.listen(port,()=>{
        console.log(`server is reday at${port}`);
})