// Selectors

const form = document.querySelector('#form');
const formName = document.querySelector('#name');
const formNumber = document.querySelector('#number');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const recordContainer = document.querySelector('.record-box');
const messageAlert = document.getElementById('.message');
const deteleBtn = document.getElementsByClassName('delete-btn');

let contactArr = [];
let id = 0;

// Object construction 

function Contact (id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
}

document.addEventListener('DOMContentLoaded', getContacts);
submitBtn.addEventListener('click', submitAndAdd);

cancelBtn.addEventListener("click", ()=>{
    location.reload();
})

function submitAndAdd(){
        id++;
        const contact = new Contact(id, formName.value, number.value);
        contactArr.push(contact);
        addToList(contact);
}


function addToList(item){
    const newRecordDiv = document.createElement('div');
    newRecordDiv.classList.add('record-item');
    newRecordDiv.innerHTML = `
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

    <button type="button" class="delete-btn"><i class="fas fa-trash"></i> Delete</button>
   
    `;

    saveLocalContacts(item);
    recordContainer.appendChild(newRecordDiv);

}

function deleteContact(e){
    const item = e.target;
    console,log('I can touch u ');
    if(item.classList[0] === 'delete-btn'){
        const contact = item.parentElement;
        contact.remove();
    }

}

// Local Storage 

function saveLocalContacts(contact){
    console.log("it work")

    let contacts;
    if(localStorage.getItem('record-box') === null){
        contacts = [];
    }
    else {
        contacts = JSON.parse(getItem('record-box'));
        lastID(contactArr);
    }
    contacts.push({contact});
    localStorage.setItem("contacts", JSON.stringify({contact}))
}

function getContacts() {

    let contacts;
    if(localStorage.getItem('record-box') === null){
        contacts = [];
    }
    else {
        contacts = JSON.parse(getItem('record-box'));
        lastID(contactArr);
    }

    contacts.forEach((contact)=>{

        const newRecordDiv = document.createElement('div');
    newRecordDiv.classList.add('record-item');
    newRecordDiv.innerHTML = contact;

    recordContainer.appendChild(newRecordDiv);

    })

}

