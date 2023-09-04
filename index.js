const express = require('express')
const { ByteLengthQueuingStrategy } = require('stream/web')
const app = express()

const questions = [
    {

        questions:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python, pip, query"
    },
    {

        questions:"how to install python1",
        slug:"how-to-install-python1",
        votes:3,
        views:10,
        tags:"python1, pip, query"
    },
    {

        questions:"how to install python2",
        slug:"how-to-install-python2",
        votes:3,
        views:10,
        tags:"python2, pip, query"
    },
]

const users = [
    {
        name:"Mallik",
        followers:100,
        location:"Mandapeta"
    },
    {
        name:"Ramesh",
        followers:1000,
        location:"USA"
    },
    {
        name:"Prakash",
        followers:1002,
        location:"HYD"
    }
]

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/questions',(req,res)=>{
    
    res.send(questions)
})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }

    })
    res.send("Question not Found")

})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/tags',(req,res)=>{
    res.send("Tags")
})

app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")
})

app.listen(1234,()=>{
    console.log("Listening...")

})