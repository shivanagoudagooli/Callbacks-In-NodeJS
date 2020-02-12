function add(num1,num2,shiva){
     add =  num1+ num2;
    console.log(add)
    shiva();
}
function shiva(){
    console.log('ccc');
}
add(2,5, shiva);
