import { CityList } from "./CityList.js"
import { getWalkers, getWalkerCities } from "./database.js"
import { Assignments } from "./Assignments.js"
import { assignedCityNames } from "./CityList.js"
document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [, walkerId] = itemClicked.id.split("--")

            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const walker of walkers) {
                /*
                                   Compare the primary key of each walker to the one
                                   you have. As soon as you find the right one, display
                                   the window alert message.
                               */
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
                    window.alert(`${walker.name} services ${cities}`)

                }
            }
        }
    }
)

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const list = CityList()
const jobs = Assignments()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {

        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`

    }
    walkerHTML += "</ul>"
    return walkerHTML
}


// The function need the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    let assignments = []
    for (const dogWalker of walkerCities) {
        if (dogWalker.walkerId === walker.id) {
            assignments.push(dogWalker)
        }
    }
    return assignments
    // Iterate the array value of walkerCities

    // Check if the primary key of the walker equals the foreign key on the assignment

    // If it does, add the current object to the array of assignments

    // After the loop is done, return the assignments array
}














//----------------------Alex's explanation----------------------
// const walker = {
//     name: "nelson",
//     id: 3
// }


// <li id="walker--${walker.id}>"

// document.addEventListener(
//     "click",  
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("walker")) {
//             const [, walkerId] = itemClicked.id.split("--")
//             for (const walker of walkers) {
//                 if (walker.id === parseInt(walkerId)) {
//                     window.alert(`${walker.name} services ${walker.city}`)
//                 }
//             }
//         }
//     }
// )