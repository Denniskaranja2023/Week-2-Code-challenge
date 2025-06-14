//1. Allows user to input the type of event guests are being invited for to generate a heading capturing that information
const eventForm= document.querySelector('#eventForm')
const clickEvent= eventForm.addEventListener('submit',(event)=>{  //title of event is displayed on guest list window once submit button is hit
    event.preventDefault()
    eventTitler(event.target.eventType.value)
})

//function that creates the heading of event title by taking a parameter that is the event type e.g Birthday
function eventTitler(eventInput) { 
   let eventHeading = document.createElement('h4')
    eventHeading.textContent=`Your ${eventInput} guest list:`
    eventHeading.style.color= "purple"
    eventHeading.style.textDecoration='underline'  
  let eventOutput=document.querySelector('#guestList').appendChild(eventHeading)
    eventOutput.style.cursor="pointer"
    eventOutput.addEventListener('click', (e)=>{ e.target.remove()}) // Enable event title to be removed by a click
    eventOutput.title='click to delete'
}


//2. Allows guests to be submitted to the guest list window through the guest form
const guestForm= document.querySelector("#guestForm")      
guestForm.addEventListener('submit', (event)=> {     // name input displayed on guest list window once submit button is hit
    event.preventDefault();
    //counts all list elements in guestList to confirm whether limit of 10 is exceeded
    const guestNUmber = guestList.querySelectorAll('li').length;
    if (guestNUmber >= 10) {
    alert('Only ten guests can be added!');
    return;
    }
    //cannot allow guest input if event Type has not been inputed
    else if(guestList.querySelector('h4')=== null){
    alert('Input event type first');
    return;
    }
    else{
    guestLogger(event.target.guestAdd.value)}  
    }) 


//funcgtion with the logic that logs name input into guest list window
function guestLogger(guestInput){                       
    let guestEntry= document.createElement('li')
    guestEntry.style.marginTop='2%'
    //add span for name tag
    let nameSpan= document.createElement('span')
    nameSpan.textContent=`${guestInput}`
    //add rsvp toogle button
    let rsvpButton= document.createElement('button')
    rsvpButton.style.height='2rem'
    rsvpButton.style.width='7rem'
    rsvpButton.style.marginLeft= '5%'
    rsvpButton.textContent = 'Not Attending';
    rsvpButton.style.cursor='pointer'
    rsvpButton.style.borderRadius='1rem'
    rsvpButton.classList.add('not-attending');
    rsvpButton.addEventListener('click', rsvpToggler)
    //add a delete button that also adds deleted name into the deleted List window
    let deleteButton= document.createElement('button')
    deleteButton.style.cursor='pointer'
    deleteButton.style.height='2rem'
    deleteButton.style.width='4rem'
    deleteButton.style.borderRadius='0.5rem'
    deleteButton.style.marginLeft= '1%'
    deleteButton.addEventListener('click', deleter)
    deleteButton.addEventListener('click', appendToDeletedList)
    deleteButton.textContent='delete'
    //append the three elements to one list tag and append it to the guestlist container
    guestEntry.append(nameSpan)
    guestEntry.appendChild(deleteButton)
    guestEntry.appendChild(rsvpButton)
    document.querySelector("#guestList").appendChild(guestEntry)
}
//function that enables toggling between attending and not atttending to confirm attendance of a guest
function rsvpToggler(e) {
    //pass to a variable button
    const button= e.target.classList
    //toggle button logic
   if (button.contains('not-attending')) {                                                    
      button.remove('not-attending')
      button.add('attending')
      e.target.textContent = 'Attending'
    } 
    else {
      button.remove('attending')
      button.add('not-attending')
      e.target.textContent = 'Not Attending'
} }

//function that deletes a guest entry when delete button is clicked
function deleter(e){
    e.target.parentNode.remove()
}

//function that adds a deleted Entry from the guest list to the deleted-guest-list once delete is clicked
function appendToDeletedList(e) {
   let deletedEntry= document.createElement('p')
   document.querySelector('#deletedGuests').appendChild(deletedEntry)
   deletedEntry.textContent= e.target.parentNode.querySelector('span').textContent
   //delete an item from deleted-list container by a click
   deletedEntry.addEventListener('click', (e) =>{e.target.remove()})
   deletedEntry.style.cursor='pointer'
   deletedEntry.title='click to delete'
}