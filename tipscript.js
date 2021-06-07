//calculate tip and bill amount
function calculateBill(){
   let tip = parseInt(document.getElementById("tip").value) /100;

    let people = parseInt(document.getElementById("people").value);
    let bill = parseFloat(document.getElementById("bill").value);
    
    //checking valid input
    if(tip === 0 || people === 0 || bill === 0){
        alert("Enter correct values");
        return;
    }

    let billPerPerson = parseFloat(bill / people).toFixed(2);
    
     //calculate tip
    let tipPerPerson = parseFloat(billPerPerson * tip).toFixed(2);
    
    //finally displaying the tip value
    document.getElementById("displayTip").innerHTML = `$ ${tipPerPerson}`;
    
    //calculate total bill
    let total = parseFloat(billPerPerson + tipPerPerson).toFixed(2);
    
    //finally displaying the total bill value
    document.getElementById("displayTotal").innerHTML = `$ ${total}`;

}

//increasing the input value of number of people
let input = Number(document.getElementById("people").value);
function incrementCount(){
    input = input+1;
    document.getElementById("people").value = input;
}
//check if input value is already 0
function decrementCount(){
    if(input === 0){
        document.querySelectorAll(".decrement").disabled = true;
    }
    else{
        //decreasing the input value of number of people
        input = input-1;
        document.getElementById("people").value = input;
    }
    
}

//increasing the input value of tip by 1
let tip = Number(document.getElementById("tip").value);
function incrementTip(){
    tip = tip+1;
    document.getElementById("tip").value = `${tip} %`;
}
function decrementTip(){
    if(tip === 0){
        //check if tip is already 0 
        document.querySelectorAll(".decrement").disabled = true;
    }
    else{
        //decreasing the input value of tip by 1
        tip = tip-1;
        document.getElementById("tip").value = `${tip} %`;
    }
    
}