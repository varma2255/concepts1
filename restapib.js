const express = require('express');
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json()); 
//In order to get access to the post data we have to use body-parser. 
//Basically what the body-parser is which allows express to read the body and then parse that into a Json object
const port = 3200;

let customers = [
    {
      "id": 1,
      "username": "johnsena",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "peterson",
      "role": "guest"
    },
    {
      "id": 3,
      "username": "venom",
      "role": "guest"
    },
    {
      "id": 4,
      "username": "batman",
      "role": "IT"
    }
];

//server checking
app.get('/', (req,res)=>
{
  res.send("API is working");
});

//get all the users
app.get('/get', (req,res) =>
{
  res.status(200).send(customers);
});

//get with id
app.get('/get/:id', (req, res) => {
  const id =req.params.id;  //4
  const customer = customers.filter(cust => cust.id == id);
  if(customer)
  {
    res.status(200).send(customer);
  }
  else
  {
    res.status(404).json("invalid id");
  }
});

//post
//You generally use the req. body object to receive data through POST and PUT
app.post('/post', (req,res) =>
{
    const customer = req.body;
    customers.push(customer);
    res.json(customers);
});

//delete
app.delete("/delete/:id" , (req, res) =>{
  const id = req.params.id-1; //1
  if(id>=0){
  customers.splice(id,1);
  res.status(200).send(customers);
  }
  else
  {
      res.status(404).send("employee your looking for not exist");
  }
});

//put
app.put("/put/:id" , (req, res) =>{
  const id = req.params.id-1; //to take the index value
  customers[id]["username"] = req.body.username;
  customers[id]["role"] = req.body.role;
  res.send(customers);
});

app.listen(port, () => 
console.log('http://localhost:'+port+'/'));


