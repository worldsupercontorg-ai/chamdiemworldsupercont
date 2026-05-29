const scoreDisplay = document.getElementById("scoreDisplay");
const keys = document.querySelectorAll(".key");
const submitBtn = document.getElementById("submitBtn");

let value = "";

keys.forEach(key => {

  key.addEventListener("click",()=>{

    const keyValue = key.innerText;

    if(keyValue === "⌫"){
      value = value.slice(0,-1);
    }
    else{
      value += keyValue;
    }

    if(value === ""){
      scoreDisplay.innerText = "0";
    }
    else{
      scoreDisplay.innerText = value;
    }

  });

});

submitBtn.addEventListener("click",()=>{

  if(value === ""){
    alert("Please enter score");
    return;
  }

  fetch("http://localhost:5000/api/score",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      contestantId:14,
      judgeId:1,
      score:value
    })
  })
  .then(res=>res.json())
  .then(data=>{

    alert("Score Submitted Successfully");

    value="";
    scoreDisplay.innerText="0";

  });

});
