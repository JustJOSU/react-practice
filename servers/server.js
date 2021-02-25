const express = require('express');
const app = express();
//const cors = require('cors'); 외부에서 접근 가능하게 하려면 주석 해제
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

//app.use(cors());

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use('/api', (req, res) => res.json({username:'test'}));

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})