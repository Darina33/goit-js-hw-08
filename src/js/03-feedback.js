import throttle from 'lodash.throttle';

const INPUT_TEXT = 'feedback-form-state'
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);
window.addEventListener("DOMContentLoaded", fillTextForm)

function inputForm(e) {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    
    const formDataJson = JSON.stringify(formData);
    try {
        localStorage.setItem(INPUT_TEXT, formDataJson);
    } catch (e) {
        console.error('Error setting');
     }
}

function submitForm(e) {

        if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all the fields!');
        }
    
    e.preventDefault();

    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(INPUT_TEXT);

    
}
function fillTextForm() {
    const saveTextForm = localStorage.getItem(INPUT_TEXT);
    if (saveTextForm) {
        form.elements.email.value = JSON.parse(saveTextForm).email;
        form.elements.message.value = JSON.parse(saveTextForm).message;
    }
}