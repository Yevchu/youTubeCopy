'use strict'

// show/hide password

let pswrd = document.querySelector('#pswrd'),
    toggleBtn = document.querySelector('#toggleBtn')

toggleBtn.addEventListener('click', () => {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text')
        toggleBtn.classList.add('hide')
    } else {
        pswrd.setAttribute('type', 'password')
        toggleBtn.classList.remove('hide')
    }
})

//---------------------------------------------------------

//check form valodation

let lowerChase = document.querySelector('#lower'),
    upperChase = document.querySelector('#upper'),
    digits = document.querySelector('#number'),
    specialChar = document.querySelector('#special'),
    minLength = document.querySelector('#length')

function checkPassword (data) {

    //regular expresion 
    const lower = new RegExp ('(?=.*[a-z])'),
          upper = new RegExp ('(?=.*[A-Z])'),
          number = new RegExp ('(?=.*[0-9])'),
          special = new RegExp ('(?=.*[!@#\$%\^&\*])'),
          length = new RegExp ('(?=.{8,})')

    function checkRegExp (elem, elemParent) {
        if (elem.test(data)) {
            elemParent.classList.add('valid')
        } else {
            elemParent.classList.remove('valid')
        }
    }

    checkRegExp(lower, lowerChase)
    checkRegExp(upper, upperChase)
    checkRegExp(number, digits)
    checkRegExp(special, specialChar)
    checkRegExp(length, minLength)
}
