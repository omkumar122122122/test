import express, { json } from "express"
import cors from "cors";


const app=express();

app.use(express.json()) 
app.use(cors())

const users=[{
    id:1,
    name:"om",
    email:"om@gmail.com",
    pass:"abcd"
},
{
    id:2,
    name:"om2",
    email:"om2@gmail.com",
    pass:"abcd"
},
{
    id:3,
    name:"om3",
    email:"om3@gmail.com",
    pass:"abcd"
},
{
    id:4,
    name:"om4",
    email:"om4@gmail.com",
    pass:"abcd"
}

]



const events=[{
    id:"1",
    Event:"event01",
    Category:"dance01",
    Location:"location01",
    Date:"kal",
    Description:"sun",
},

{
    id:"2",
    Event:"event02",
    Category:"dance01",
    Location:"location01",
    Date:"kal",
    Description:"sun",
},

{
    id:"3",
    Event:"event01",
    Category:"dance01",
    Location:"location01",
    Date:"kal",
    Description:"sun",
},

{
    id:"4",
    Event:"event01",
    Category:"dance01",
    Location:"location01",
    Date:"kal",
    Description:"sun",
}




]

app.get("/",(req,res)=>{
    res.json({msg:"hee heeeee"})
})


app.get("/home",(req,res)=>{
    res.json(events)
})

app.get("/event/:id",(req,res)=>{
    const id=req.params.id
    const index=events.findIndex((ev)=>ev.id==id)

    if(index==-1){
        
    }


    res.json(events)
})


app.post("/events",(req,res)=>{
    const newenvt=req.body
    newenvt.id=events.length+1

    events.push(newenvt)
    console.log(newenvt)
    console.log(req.body)

    res.json({msg:"added event "
    })





})







app.post("/login",(req,res)=>{
   
    const user=req.body;
    console.log(user)

    const index=users.findIndex((us)=>us.email==user.email)
    console.log(users[0].email==user.email)

    if(index==-1){
        res.json({
            msg:"user not found",
            login:"false"
        })
        
    }
    else if(users[index].pass!=user.pass){
        res.json({
            msg:"wrong pass",
            login:"false"
        })
    }
    else{

        res.json({
            msg:" login succesfull",
            login:"true"
        })

    }


})










app.listen(3000, ()=>{
    console.log(`Server is running on port http://localhost:${3000}`)
})