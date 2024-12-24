let munstersDescription = "The Munsters are creepy and spooky.";
let strArr = munstersDescription.split("");

let newStrArr = strArr.map((char) =>{
  if(char !== char.toLowerCase()){
    return char.toLowerCase();
  }else{
    return char.toUpperCase();
  }
})


console.log(newStrArr.join(""));