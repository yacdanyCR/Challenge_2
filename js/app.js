const $submitButton = document.querySelector('.sign__Submit--Button')
const $signUp__Input_Field = document.querySelector('.signUp__Input--Email')
const $email__Error = document.querySelector('.email--Error')

const checkEmail = (inputField) => {
    const newRgex = new RegExp(/\S+@\S+\.\S+/)
    return newRgex.test(inputField.value)
}

const showError = (inputField) => {
    const CLASS__ERROR = { email_Error: "errorEmail--Input" }
    inputField.classList.add(CLASS__ERROR.email_Error)
    $email__Error.removeAttribute('hidden')
}

$submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    checkEmail($signUp__Input_Field) ? window.location.href = "/confirmation.html" : showError($signUp__Input_Field)
})
