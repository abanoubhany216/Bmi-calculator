sub = document.getElementById("sub");

sub.onclick = function(){
    weight = document.getElementById("weight");
height = document.getElementById("height");
result = document.getElementById("result");
    Height = height.value/100;
    bmi = weight.value/(Height*Height);
if(bmi > 0){
    if(bmi <= 16){
      result.innerHTML = "You are very underweight";
      result.style.color = "red";
  }
 else if(bmi <= 18.5){
    result.innerHTML = "You are underweight";
    result.style.color = "red";
} 
 else if(bmi <= 25){
    result.innerHTML = "You are healthy";
    result.style.color = "lightgreen";
}
 else if(bmi <= 30){
    result.innerHTML = "You are overweight";
    result.style.color = "red";
}
 else{
    result.innerHTML = "You are very overweight";
    result.style.color = "red";
 }
}
else{
    result.innerHtml = "Write vaild details";
    result.style.color = "red";
}
}