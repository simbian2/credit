
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const sequelize = require('sequelize')
const {sequelize2} = require('./models');
const {User} = require('./models');
const cors = require('cors')

app.use(cors());
// const router = require('./routers/index');

nunjucks.configure('views', {
    express:app,
})
app.use(express.static('node_modules'));
app.use(express.json());
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('images'));
// app.use('/',router)

app.get('/',(req,res)=>{
    let msg = req.query.msg
    let name = req.query.name
    let price = req.query.price
    res.render('./credit.html',{
        price, name, msg
    })
})
app.get('/credit_delete', (req,res)=>{
    res.render('./credit_delete.html')
})

app.post('/credit_json', async (req,res)=>{

    let creditnumber = req.body.creditnumber
    let pname = req.body.name
    let price = Number(req.body.price)
    let result = await User.findOne({where:{creditnumber}})    
    if(result == undefined){
        res.redirect(`/?msg=카드번호를 확인해주세요&price=${price}&name=${pname}`)
        return 0;
    }
    console.log(result)
    let calculate = result.assert - price
    let result2 = await User.update({assert:calculate}, {
                                where:{ creditnumber: creditnumber }
                                            })


    res.render('./credit_delete.html',{calculate:calculate,result:result}) 


})

app.listen(5000,()=>{
    console.log(`server start port : 5000`)
})