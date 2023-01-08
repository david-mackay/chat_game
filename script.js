const form = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');
const messagesDiv = document.querySelector('#messages');

form.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the form from being submitted and the page from being reloaded

  // Send the message to the backend
  fetch('http://localhost:5000/send_message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `message=${messageInput.value}`
  })
  .then(response => response.text())
  .then(result => {
    // Update the chat window with the message
    console.log(result)
    const p = document.createElement('p');
    p.textContent = result;
    messagesDiv.appendChild(p);
  });

  // Clear the message input
  messageInput.value = '';
});



const nameForm = document.querySelector('#name-form');
const nameInput = document.querySelector('#name-input');

nameForm.addEventListener('submit', e => {
  e.preventDefault();  // Prevent the form from being submitted and the page from being reloaded

  // Send the name to the backend
  fetch('http://localhost:5000/add_player', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `name=${nameInput.value}`
  })
  .then(response => response.text())
  .then(result => {
    console.log(result)
  });
});
