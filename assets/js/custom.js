
//? Accepts the values clicked as params and returns them to textbox
function display(val){

document.getElementById('result').value += val

return val

}

//? The solve() method is called when the user clicks on the ‘=’ operator. The variable x accepts the mathematical expression provided by the user. This expression is evaluated and stored in the variable y. The result is displayed in the textbox. 
function solve(){

let x = document.getElementById('result').value

let y = eval(x);

document.getElementById('result').value = y

return y

}

//? This function is called when the user clicks on the C or the clear button. The value of the result is set to an empty string. 
function clearScreen() {
  document.getElementById("result").value = "";
}
