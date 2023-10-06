// Add your code here
/*
const formValues = {
    dogName: 'Sophia',
    dogBreed: 'Maltese-Poodle',
}

const addNewDog = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formValues),
}

fetch("http://localhost:3000/dogs", addNewDog)
    .then(function (response){
        return response.json
    })
    .them(function(object){
        console.log(object)
    })
    .catch(function(error){
        alert('why!?!');
        console.log(error)
    })
*/

let userName = 'Angelo';
let emailAddress = 'angelo@email.com'

function submitData (userName, emailAddress){
    console.log(JSON.stringify({
        name: userName,
        email: emailAddress,
    }))
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: emailAddress,
        })
    })
    .then(response => response.json())
    .then(info => {
        document.body.innerHTML = info.id
    })
    .catch(error => {
        document.body.innerHTML = 'Unauthorized Access';
        console.log(error)
    })
}

submitData(userName, emailAddress);