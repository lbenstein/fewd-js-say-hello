// Write your JavaScript below these comments...
/*
  Hint #1: Which element in the DOM do we need to "grab"
  and listen for changes to?

  Hint #2: How do we access the VALUE that is INPUT into
  the element from Hint #1?


clear out the input field for user convenience. after line 31. one line.
*/

var input = document.getElementById('name');
input.addEventListener('keydown', printGreeting);

var moveOver = document.querySelector('.col-md-6')

function printGreeting(event) {
    if (event.key === 'Enter') {
        // Grab input field value
        var userName = input.value;

        // Create new element (<p>)
        var newPara = document.createElement('p');

        // Set element innerText to userName
        newPara.innerHTML = 'Hello ' + userName + ', nice to meet you!';

        // Append new element (<p>) to DOM
        moveOver.appendChild(newPara);
        event.preventDefault();
    }

}
