// Write your JavaScript below these comments...
/*
  Hint #1: Which element in the DOM do we need to "grab"
  and listen for changes to?

  Hint #2: How do we access the VALUE that is INPUT into
  the element from Hint #1?


document.getElementsByName("Thing")[0].addEventListener('change', doThing);
function doThing(){
   alert('Horray! Someone wrote "' + this.value + '"!')

HTMLInputElementObject.addEventListener('input', (evt) => {
  console.log('run'); // Do something
});
*/

var input = document.getElementById('name');
input.addEventListener('keydown', printGreeting);

function printGreeting(event) {
    if (event.key === 'Enter') {
        // Grab input field value
        var userName = input.value;

        // Create new element (<p>)
        var newPara = document.createElement ('p');

        // Set element innerText to userName
        newPara.innerHTML = ("Hello ' + userName + ', nice to meet you!");

        // Append new element (<p>) to DOM
        document.body.appendChild(newPara);
    }

}
