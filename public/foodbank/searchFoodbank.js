//const axios = require('axios')

const socialIcon = (social) => {
    switch (social) {
        case 'twitter':
            return '<i class="fab fa-twitter-square"></i>'
            break
        case 'facebook':
            return '<i class="fab fa-facebook-square fa-2x px-2"></i>'
            break
        case 'instagram':
            return '<i class="fab fa-instagram-square fa-2x px-2"></i>'
            break
        default:
            return '<i class="fas fa-hashtag"></i>'
    }
}


console.log("executing script")

const foodbanks = `{"Query": "Foodbanks",
     "results" : [
        {
            "countryId": 1,
            "isDeleted": false,
            "_id": "5ef91652b0e8e18c98e4b900",
            "name": "Bellingham Food Bank",
            "address1": "1824 Ellis St",
            "city": "Bellingham",
            "stateRegion": "WA",
            "addressCode": "98225",
            "phones": [
            {
            "_id": "5ef91652b0e8e18c98e4b901",
            "numberType": "Primary",
            "number": "360.676.0392"
            },
            {
            "_id": "5ef91652b0e8e18c98e4b902",
            "numberType": "Tollfree",
            "number": "800.833.6388"
            }
            ],
            "url": "https://www.bellinghamfoodbank.org/",
            "email": "info@bellinghamfoodbank.org",
            "social": [
            {
            "_id": "5ef91652b0e8e18c98e4b903",
            "socialName": "facebook",
            "socialLink": "https://www.facebook.com/BellinghamFoodBank/"
            },
            {
            "_id": "5ef91652b0e8e18c98e4b904",
            "socialName": "instagram",
            "socialLink": "https://www.instagram.com/bellinghamfoodbank/"
            }
            ],
            "createdAt": "2020-06-28T22:14:42.566Z",
            "updatedAt": "2020-06-28T22:14:42.566Z",
            "__v": 0
            },
{
    "countryId": 1,
    "isDeleted": false,
    "_id": "5ef94eb606b0599034f202f3",
    "name": "Blaine Food Bank",
    "address1": "500 C Street",
    "city": "Blaine",
    "stateRegion": "WA",
    "addressCode": "98230",
    "phones": [
    {
    "_id": "5ef94eb606b0599034f202f4",
    "numberType": "Primary",
    "number": "360-332-6350"
    }
    ],
    "url": "https://www.blainefoodbank.org/",
    "email": "blainefood@hotmail.com",
    "social": [
    {
    "_id": "5ef94eb606b0599034f202f5",
    "socialName": "facebook",
    "socialLink": "https://www.facebook.com/Blaine-FOOD-BANK-105752871091987"
    }
    ],
    "createdAt": "2020-06-29T02:15:18.616Z",
    "updatedAt": "2020-06-29T02:15:18.616Z",
    "__v": 0
    }
]
}
 `

const foodbankObj = JSON.parse(foodbanks)

console.log(foodbankObj.Query)

if (foodbankObj.address2) {
    console.log(foodbankObj.address2)
} else {
    console.log('Address 2 not defined')
}

const para = document.createElement("p")
para.innerHTML = "test"
para.innerHTML = foodbankObj.results[0].name
const para1 = document.createElement("p")
para1.innerHTML = foodbankObj.results[1].name

//var foodbankDIV = document.createElement("p")
var allHTML = ''

console.log(foodbankObj.results)

foodbankObj.results.forEach((results) => {
    //var foodbankDIV = document.createElement("p")
    var foodbankHTML = '<div id="' + results._id + '">'
    if (results.url) {
        foodbankHTML = foodbankHTML + '<p><a href="' + results.url + '">' + results.name + '</a>'
    }
    if (results.addressCode && results.city && results.stateRegion) {
        foodbankHTML = foodbankHTML + '<p>' + results.address1
        foodbankHTML = foodbankHTML + '<p>' + results.city + ', ' + results.stateRegion + ' ' + results.addressCode + '</p>'
    }
    //Social Icons
    if (results.social) {
        results.social.forEach((social) => {
            foodbankHTML = foodbankHTML + '<a href="' + social.socialLink + '">' + socialIcon(social.socialName) + '</a>'
            //console.log(foodbankHTML1)
        })
    }
    socialIcon('twitter')
    foodbankHTML = foodbankHTML + '</div>'

    console.log(foodbankHTML)
    //foodbankDIV.innerHTML = foodbankHTML
    //document.getElementById("searchresults").appendChild(foodbankDIV)
    //document.getElementById("searchresults").insertBefore(foodbankDIV, document.getElementById("searchresults").firstElementChild)
    allHTML = allHTML + '<p>_</p>' + foodbankHTML

})
console.log(allHTML)
var foodbankDIV = document.createElement("p")
foodbankDIV.innerHTML = allHTML
document.getElementById("searchresults").appendChild(foodbankDIV)


// < div id="_id" >
//     <p><a href="/bham">Bellingham Food Bank</a></p>
//     <p>Adress 1</p>
//     <p>City, State, Zipcode</p>
//     <p>Phone</p>

// </div >

document.getElementById("searchresults").appendChild(para1)
// async function getFoodbanks() {
//     try {
//         const response = await axios.get('http://localhost:3001/foodbanks');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }
