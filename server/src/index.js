const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const { urlencoded } = require('body-parser');
const { request } = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser,urlencoded({extended: true}));

const corsOptions={
    origin: '*',
    //isso é paia 👍
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const multipartMiddleware = multipart({uploadDir: './uploads'});
app.post('/upload',multipartMiddleware,(req, res) =>{
    const files= req.files
    console.log(files);
    res.json({message:files});
})

app.use((err, req, res, next) => res.json({error: err.message}));

app.listen(8000, () =>{
    console.log('server running')
} )