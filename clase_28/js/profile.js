window.addEventListener("load", setup)

// Initialize thing of the app
// NOTE: When function subscribe to event listener always have a event parameter
function setup() {
    // Get element to subscribe the new listener
    const form = document.querySelector("form")
    form.addEventListener("submit", saveProfile)
}

// Save profile when event submit arrives
function saveProfile(event) {
    event.preventDefault()
    const formData = createFormData()
    sendFormData("http://localhost:9000/profile", formData)
        .then(console.log)
        .catch(console.error)
}

function createFormData() {
    const formData = new FormData()
    // Access to the input values from html
    // Text value
    const name = document.querySelector('input[name="name"]').value
    formData.append('name', name)
    // Files
    const avatar = document.querySelector('input[name="avatar"]').files[0]
    formData.append('avatar', avatar)

    return formData
}

function sendFormData(url, formData) {
    return fetch(url, {
        method: "PUT",
        body: formData
    })
}