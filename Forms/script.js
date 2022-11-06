/*Do NOT edit the index.html, modify the script.js file :

1. Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
2. Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
3. Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
4. Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
*/

let firstName = document.getElementById('firstname');
let firstnameDisplay = document.getElementById('display-firstname');


$('#firstname').on('keyup', copyName);{
    let enteredName = document.getElementById("firstname").value;
    firstnameDisplay.innerHTML = enteredName;

};
// firstName.addEventListe;ner("keyup", (event) => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }

// }