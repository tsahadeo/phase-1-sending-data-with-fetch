// const formData = {
//     name: "Steve",
//     email: "steve@steve.com"
// }

function submitData(firstName, email) {
    const testObject = {
        method: "POST",
        headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
        },
        body: JSON.stringify({
            name: firstName,
            email: email,
        })
    };
return fetch("http://localhost:3000/users", testObject)
.then(response => response.json())
.then(body => addNewContact(body.id))
.catch(someError)
}

function addNewContact(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
    //document.body.append(message)
}

function someError(error){
    document.body.innerHTML = "Unauthorized Access"
}

