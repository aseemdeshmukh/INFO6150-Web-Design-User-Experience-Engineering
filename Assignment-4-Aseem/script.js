var form = document.getElementById("myForm");
//form.addEventListener("submit", submitted)

var validEmail = false;
var validPhone = false;
var validZip = false;

// regex checks variables        
var regExEmail = /(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /\d{5}/;

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

function validate(e){
    var value = e.target.value;
    var type = this.id;
    var em = "error_" + type

    switch(type){
        case "emailId":
            if(!value.trim().match(regExEmail)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validEmail = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmail = true;
            }
            break;
        case "phoneNumber":
            if(!value.trim().match(regExPhone)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validPhone = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhone = true;
            }
            break;
        case "zipcode":
            if(!value.trim().match(regExZip)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZip = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZip = true;
            }
            break;

    }
}


function getDetails(el){
    var selectedString = el.options[el.selectedIndex].value;
    
    if(selectedString == 1)
    {
        document.getElementById("coffee").style.display = "block";
    }
    else 
    {
        document.getElementById("coffee").style.display = "none";
    }

    if(selectedString == 2)
    {
        document.getElementById("lemonade").style.display = "block";
    
    }
    else 
    {
        document.getElementById("lemonade").style.display = "none";
    }

   if(selectedString == 3)
    {
        document.getElementById("chocolate").style.display = "block";
    
    }
    else 
    {
        document.getElementById("chocolate").style.display = "none";
    }

    if(selectedString == 4)
    {
        document.getElementById("milkshake").style.display = "block";
    
    }
    else 
    {
        document.getElementById("milkshake").style.display = "none";
    }

    if(selectedString == 5)
    {
        document.getElementById("tea").style.display = "block";
    
    }
    else 
    {
        document.getElementById("tea").style.display = "none";
    }
    }

    function showQuantity(e)
    {
        var coffeeCB = document.getElementById("cb_coffee");
        var lemonadeCB = document.getElementById("cb_lemonade");
        var chocolateCB = document.getElementById("cb_chocolate");
        var milkshakeCB = document.getElementById("cb_milkshake");
        var teaCB = document.getElementById("cb_tea");

        var text = document.getElementById("extraComments");

    
        if(coffeeCB.checked == true||lemonadeCB.checked == true||chocolateCB.checked == true||milkshakeCB.checked == true||teaCB.checked == true)
        {
            text.style.display = "block"; 
        }
        else 
        {
            text.style.display = "none";
        }

        }


        

    (function setup() {
        //"use strict";
    var myForm = document.getElementById("myForm");
    var title = document.getElementsByName("title");
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("emailId");
    var phone = document.getElementById("phoneNumber");
    var streetAddress1 = document.getElementById("streetAddress1");
    var streetAddress2 = document.getElementById("streetAddress2");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zipcode = document.getElementById("zipcode");
    var source = document.getElementsByName("source");    
    var comments = document.getElementById("comments");
    var drink = document.getElementsByName("drink");
    var extraComments = document.getElementById("excom");
    var table = document.getElementById("list");

    var selectedTitle = '';
    var selectedSource = [];
    var selectedDrink = [];
    var result ='';

    var selection = document.querySelector('select');
    selection.addEventListener('change', () => {
        result = selection.options[selection.selectedIndex].text;
    });    

    document.getElementById("submit").addEventListener("click", function() {
        for(var i = 0; i < title.length; i++) {
            if(title[i].checked)
              selectedTitle = title[i].value;
         }
         
         for(var i = 0; i < source.length; i++) {
            if(source[i].checked)
              selectedSource.push(source[i].value);
         }

         for(var i = 0; i < drink.length; i++) {
            if(drink[i].checked)
            selectedDrink=drink[i].value;
         }


        var newRow = table.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(selectedTitle);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(1);
        newText = document.createTextNode(firstName.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(2);
        newText = document.createTextNode(lastName.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(3);
        newText = document.createTextNode(email.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(4);
        newText = document.createTextNode(phone.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(5);
        newText = document.createTextNode(streetAddress1.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(6);
        newText = document.createTextNode(streetAddress2.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(7);
        newText = document.createTextNode(city.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(8);
        newText = document.createTextNode(state.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(9);
        newText = document.createTextNode(zipcode.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(10);
        newText = document.createTextNode(selectedSource.toString());
        newCell.appendChild(newText);
        newCell = newRow.insertCell(11);
        newText = document.createTextNode(comments.value);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(12);
        newText = document.createTextNode(result);
        newCell.appendChild(newText);
        newCell = newRow.insertCell(13);
        newText = document.createTextNode(selectedDrink.toString());
        newCell.appendChild(newText);
        newCell = newRow.insertCell(14);
        newText = document.createTextNode(extraComments.value);
        newCell.appendChild(newText);
        
        myForm.reset();
        selectedTitle = "";
        selectedSource = [];
        
      });
    })();

