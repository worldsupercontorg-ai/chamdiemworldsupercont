const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"pageant_system"
});

app.post("/api/score",(req,res)=>{

  const {
    contestantId,
    judgeId,
    score
  } = req.body;

  const sql = `
  INSERT INTO scores
  (contestant_id,judge_id,score)
  VALUES (?,?,?)
  `;

  db.query(sql,[contestantId,judgeId,score],(err,result)=>{

    if(err){
      console.log(err);
      return res.status(500).json({
        message:"Database Error"
      });
    }

    res.json({
      message:"Score Saved"
    });

  });

});

app.listen(5000,()=>{
  console.log("Server Running On Port 5000");
});
