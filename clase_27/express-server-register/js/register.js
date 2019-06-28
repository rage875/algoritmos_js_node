window.addEventListener("load", setup)

// Initialize thing of the app
// NOTE: When function subscribe to event listener always have a event parameter
function setup() {
    // Get element to subscribe the new listener
    const form = document.querySelector("form")
    form.addEventListener("submit", saveProfile)
}

function saveProfile(event){
    event.preventDefault()
    const formData = createFormData()

    sendFormData("http://localhost:9000/register", formData)
        .then(console.log)
        .catch(console.error)
}

function createFormData() {
    // Get input values
    const name = document.querySelector('input[name="user_name"]').value
    const mail = document.querySelector('input[name="user_email"]').value
    const textarea = document.querySelector('textarea[name="user_message"]').value

    const formData = {
        "name": name,
        "mail": mail,
        "msg": textarea
    }

    console.log(JSON.stringify(formData))

    return formData
}

function sendFormData(url, data) {
    return fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // data can be `string` or {object}!
    }).then(res => res.json())
}