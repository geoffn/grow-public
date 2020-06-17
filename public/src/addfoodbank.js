
const addfoodbankform = document.getElementById('addfoodbank')
const zipcode = document.getElementById('zipcode')
const city = document.getElementById('city')

console.log('Got here')

addfoodbankform.addEventListener('submit', (e) => {
    console.log(addfoodbank.elements)
    e.preventDefault()
    const { foodbankname, address1, address2, state, city, zipcode } = addfoodbank.elements


    //console.log(addfoodbankform.serializeJSON())
    city.value = zipcode.value

    console.log(zipcode.value)
})

// weatherForm.addEventListener('submit', (e) => {
//     //Submit does not refresh the page with preventDefault 
//     e.preventDefault()

//     const location = search.value

//     console.log('-' + location + '-')

//     messageOne.textContent = 'Loading'
//     messageTwo.textContent = ''
//     messageThree.textContent = ''


//     fetch('/weather?address=' + location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent(data.error)
//                 console.log(data.error)
//             } else {
//                 console.log(data)
//                 messageOne.textContent = data.address
//                 messageTwo.textContent = data.Temperature
//                 messageThree.textContent = data.description
//             }
//         })
//     })
// })

