//requiring stuff--> importing stuff
import express from "express";
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from  "pusher";
import cors from "cors";
//app config--> in a way
const app = express()   //creating application instance ; that instance allow us to write API route.
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1152504",
    key: "199b2604b3d21f23f659",
    secret: "655e3d94ae99f7a39e42",
    cluster: "ap2",
    useTLS: true
  });
  


// middleware--> 
// json ability
app.use(express.json());
app.use(cors());
// app.use((req,res,next) => {
//     //cors header
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     next();
// })

//db configure
const connection_url = 
'mongodb+srv://admin:LCfHC2AdTTpQrYm@cluster0.bxa5y.mongodb.net/whatsappDB?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useCreateIndex : true,
    useNewUrlParser : true,  
    useUnifiedTopology : true,
    
});
// .then(() => console.log("DBconnection Successful"))
// .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB connected");
    const msgCollection = db.collection("messagecontents");
    const changeStream  =msgCollection.watch();

    changeStream.on('change', (change)   => {
        console.log("A change occured",change);
        
        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("messages","inserted",
            {
                name: messageDetails.name,
                message:messageDetails.message,
                timestamp:messageDetails.timestamp,
                received:messageDetails.received,

            }
            );
        }else{
            console.log("error triggering Pusher")
        }
    });
});

//api routing
app.get('/',(req,res) => res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err,data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
});

app.post('/messages/new',(req,res) => {
    //passing message structure in request body
    const dbMessage = req.body
    //here we creating a new data through creating 
    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
            console.log(err)

        }
        else {
            res.status(201).send(data)
            console.log(data)
        }
    })
});


//listen my port
app.listen(port,()=>console.log(`Listening on localhost: ${port}`));

