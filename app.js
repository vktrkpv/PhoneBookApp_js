// Selectors

const form = document.querySelector('#form');
const formName = document.querySelector('#name');
const formNumber = document.querySelector('#number');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const resetBtn = document.querySelector('#reset-btn');
const recordContainer = document.querySelector('.records-container');
const messageAlert = document.getElementById('.message');


let contactArr = [];
let id = 0;

// Object construction 

function Contact (id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
}

// Local Storage 

document.addEventListener('DOMContentLoaded', function(){

    if(localStorage.getItem('contacts') == null){
        ContactArr = [];
    } else {
        ContactArr = JSON.parse(localStorage.getItem('contacts'));
        lastID(ContactArr);
    }
    displayRecord();
})

//Events

submitBtn.addEventListener('click', submitAndAdd);

// FUNCTIONS

function  displayRecord(){
    contactArr.forEach(function(singleContact){
        addToList(singleContact);
    })
}

function submitAndAdd(){
    // if(checkInputFields([name, number])){
    //     setMessage("success", "Added successfully");
        id++;
        const contact = new Contact(id, formName.value, number.value);
        contactArr.push(contact);
        addToList(contact);
    // }
    // else{
    //     setMessage("error", "Empty input fields or invalid input");

    // }
    

}


function addToList(item){
    const newRecordDiv = document.createElement('div');
    newRecordDiv.classList.add('record-item');
    newRecordDiv.innerHTML = `
    <div class="record-box">
     <div class="record-el">
        <span id="lablelling">Contact ID: </span>
        <span id="contact-id-content">${item.id}</span>
    </div>
    
    <div class="record-el">
        <span id="lablelling">Name: </span>
        <span id="name-content">${item.name}</span>
    </div>

    <div class="record-el">
        <span id="lablelling">Phone number: </span>
        <span id="contact-num-content">${item.number}</span>
    </div>

    <button type="button" id="delete-btn"><i class="fas fa-trash"></i> Delete</button>
    </div>
    `;
    recordContainer.appendChild(newRecordDiv);
}

// function setMessage(status, message){
//     if(status === "error") {
//         messageAlert.innerHTML = `${message}`;
//         messageAlert.classList.add('error');
//         removeMessage(status,messageAlert);
//     }

//     if(status === "success") {
//         messageAlert.innerHTML = `${message}`;
//         messageAlert.classList.add('success');
//         removeMessage(status,messageAlert);
//     }
// }

// function removeMessage(status,messageAlert){

// }

// function checkInputFields(inputArr){
//     for(let i = 0;  i < inputArr.length; i++){
//         if ( inputArr[i].value === "") {
//             return false;
//         }
//     }
//     if(!phoneNumberCheck(inputArr[2].value)){
//         return false;
//     }
//     return true;
// }

// function phoneNumCheck(inputtxt){
//     let phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if(inputtxt.match(phoneNo)){
//         return true;
//     } else {
//         return false;
//     }
// }



