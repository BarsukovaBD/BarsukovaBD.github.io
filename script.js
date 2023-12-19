document.querySelectorAll('.form-radio').forEach(function (radio) {
    const radioDepends = {
        email: document.querySelector('.email'),
        phone: document.querySelector('.phone'),
        another: document.querySelector('.url'),
        met: document.querySelector('.date'),
    }

    radio.addEventListener('click', function (e) {
        const value = this.value
        Object.keys(radioDepends).forEach(function (dependKey) {
            const depend = radioDepends[dependKey]
            depend?.classList.add('hidden')
            depend?.classList.remove('validate')
        })

        radioDepends[value]?.classList.remove('hidden')
        radioDepends[value]?.classList.add('validate')

    })
})

const formSectionSelect = document.querySelector('.form-select')
if (formSectionSelect) {
    formSectionSelect.addEventListener('change', function () {
        const value = this.value
        const education = document.querySelector('.form-edu')
        if (value == "education") {
            education.classList.remove('hidden')
        } else {
            education.classList.add('hidden')
        }
    })
}



const form = document.querySelector('form')
if (form) {
    const raiseValidateError = (msg, input) => {
        input.classList.add('error')
        input.classList.remove('success')
        const errorItem = document.createElement('li')
        errorItem.classList.add('error-item')
        errorItem.textContent = msg
        document.querySelector('.errors-list').append(errorItem)
        console.log(input)
    }
    const lettersRegexp = /^[a-zа-яё]+$/i
    const emailRegex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/
    const phoneRegex = /^\+7\d{10}$/
    form.addEventListener('submit', function (e) {
        document.querySelectorAll('.error-item').forEach(er => er.remove())
        e.preventDefault()
        let canSubmit = true
        const toValidate = document.querySelectorAll('.validate')
        toValidate.forEach(function (item) {
            item.classList.remove('error')
            item.classList.add('success')
            const value = item.value
            if (item.classList.contains('required')) {
                if (value === "") {
                    raiseValidateError("Заполните необходимые", item)
                    canSubmit = false
                }
            }
            if (item.classList.contains('lettersRegexp')) {
                if (!lettersRegexp.test(value)) {
                    raiseValidateError("Какое-то поле должно содержать только буквы", item)
                    canSubmit = false
                }
            }
            if (item.classList.contains('emailRegexp')) {
                if (!emailRegex.test(value)) {
                    raiseValidateError("Какое-то поле должно соответствовать формату Email", item)
                    canSubmit = false
                }
            }
            if (item.classList.contains('phoneRegexp')) {
                if (!phoneRegex.test(value)) {
                    raiseValidateError("Какое-то поле должно соответствовать формату номера телефона +7", item)
                    canSubmit = false
                }
            }
        })
        if(canSubmit){
            form.submit()
        }
    })

    // const clearBtn = document.querySelector('.form__btns-clear')

    // clearBtn.addEventListener('click', function () {
    //     const inputs = form.querySelectorAll('input, textarea')
    //     inputs.forEach(input => input.value = "")
    // })

}