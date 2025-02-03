// Selectors

const form = document.querySelector('#form');
const formName = document.querySelector('#name');
const formNumber = document.querySelector('#number');
const submitBtn = document.querySelector('#submit-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const recordContainer = document.querySelector('.record-box');
const messageAlert = document.getElementById('message');
const deteleBtn = document.getElementsByClassName('delete-btn');

let contactArr = [];
let id = 0;

// Object construction 

function Contact (id, name, number) {
    this.id = id;
    this.name = name;
    this.number = number;
}

// Event Listeners

document.addEventListener('DOMContentLoaded', getContacts);
submitBtn.addEventListener('click', submitAndAdd);
recordContainer.addEventListener('click', deleteContact);
cancelBtn.addEventListener("click", () => location.reload());

// Submit and Add Contact
function submitAndAdd(){

    if (formName.value.trim() === "") {
        alert("Please enter a NAME before adding a contact");
        return; 
    }
    else if (formNumber.value.trim() === "") {
          {
        alert("Please enter a phone NUMBER before adding a contact.")
    }}

        id++;
        const contact = new Contact(id, formName.value, formNumber.value);
        contactArr.push(contact);
        addToList(contact);
        saveLocalContacts(contact);
}

// Add Contact to List
function addToList(item){
    const newRecordDiv = document.createElement('div');
    newRecordDiv.classList.add('record-item');
    newRecordDiv.setAttribute('data-id', item.id);
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

    recordContainer.appendChild(newRecordDiv);
}

// Delete Contact Function
function deleteContact(e) {
    if (e.target.classList.contains('delete-btn')) {
        const contactDiv = e.target.parentElement;
        const contactId = contactDiv.getAttribute('data-id');

        contactDiv.remove();
        removeContactFromLocal(Number(contactId));
    }
}

// Local Storage 

// Save Contact to Local Storage
function saveLocalContacts(contact) {
    let contacts = JSON.parse(localStorage.getItem('record-box')) || [];
    contacts.push(contact);
    localStorage.setItem("record-box", JSON.stringify(contacts));
}

// Get Contacts from Local Storage
function getContacts() {
    let contacts = JSON.parse(localStorage.getItem('record-box')) || [];
    contacts.forEach(contact => addToList(contact));
}

// Remove Contact from Local Storage
function removeContactFromLocal(contactId) {
    let contacts = JSON.parse(localStorage.getItem('record-box')) || [];
    contacts = contacts.filter(contact => contact.id !== contactId);
    localStorage.setItem("record-box", JSON.stringify(contacts));
}

