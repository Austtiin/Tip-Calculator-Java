function OnClick(el){

    // Select all checkboxes by class
    var checkboxesList = document.getElementsByClassName("CheakB");
    for (var i = 0; i < checkboxesList.length; i++) {
       checkboxesList.item(i).checked = false; // Uncheck all checkboxes
    }

    el.checked = true; // Checked clicked checkbox
 }










 function CheakFields()
 {
    const ELEM1 = document.getElementById("ELEM1").value;
    var InputEle = document.getElementsByClassName("CheakB");
    varCheakedVal = null;
    let total = (ELEM1 * 0.18 + ELEM1);


    while (ELEM1 < 5 || ELEM1 > 500) {
        alert("Please Enter Valid Meal Cost");
        break;
    }

    document.getElementById("MC").innerText = "Meal Cost: $" + ELEM1;
    document.getElementById("RT").innerText = "Reccomened Tip @ 18%: $" + ELEM1 * 0.18;
    document.getElementById("TC").innerText = "Total: $" + total;

    


    
     

for(var i=0; InputEle[i]; ++i){
      if(InputEle[i].checked){
           varCheakedVal = InputEle[i].value;
           break;
      }
}
    

    document.getElementById("SQ").innerHTML = "Service Quality: " + varCheakedVal;

    switch (varCheakedVal) {
        case "Great":
            document.getElementById("Mess").innerHTML = " We Are Glad you had a great time! ";
            break;
    
            case "Okay":
            document.getElementById("Mess").innerHTML = " Better Luck next Time! ";
            break;
    
            case "Poor":
            document.getElementById("Mess").innerHTML = " Sorry to hear that here is 100% off your next order ";
            break;
    

        default:
            break;
    }

    


 }