import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petPrimaryKey] = itemClicked.id.split("--")
            let matchingPet = null
            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                }
            }
            let matchingWalker = null
            for (const walker of walkers) {
                if (matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                    window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
                }
            }
        }
    }

)
const pets = getPets()
const walkers = getWalkers()

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("pet")) {
//             const [, petPrimaryKey] = itemClicked.id.split("--")
//             for (const pet of pets) {
//                 if (pet.id === parseInt(petPrimaryKey)) {
//                     window.alert(`${pet.name} barks at you`)
//                 }
//             }
//         }
//     }
// )



export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"
    return petHTML
}


// Update the code in RegisteredPets module so that the <li> for each pet has an id attribute with the following format 
// id="pet--1". The primary key should be correct for each element.[X]
// Add a click event listener to your HTML document.[X]
// Store the target HTML element of the click event in a variable.[X]
// Check if the id property of the element starts with the string of "pet".[X]
// If it does, use the split() method on the id property to get an array of two string (e.g. ["pet", "4"])
// Use array deconstruction to assign the primary key to a variable named petPrimaryKey.[X]
// Find the whole pet object by iterating the array of pet objects and comparing each primary key to the integer value of the petPrimaryKey variable.
// As soon as a match is found, display a message that the dog barks at you - "Rocket barks at you"