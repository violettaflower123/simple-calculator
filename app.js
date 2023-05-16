const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/calculate", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operator = req.query.operator;
  let result;

  if (!num1 || !num2) {
    res.send("Please, enter two numbers");
  }

  if (isNaN(num1) || isNaN(num2)) {
    res.send("Please, enter valid numbers");
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default: 
      result = 'Invalid operation!';
      break;
  }

  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
