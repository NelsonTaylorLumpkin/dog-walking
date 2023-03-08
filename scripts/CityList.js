import { getCities, getWalkerCities } from "./database.js"
import { filterWalkerCitiesByWalker } from "./Walkers.js"

// const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()
// const assignments = filterWalkerCitiesByWalker(walker)

// Define a function that builds a string of city names. Needs a paramter for assignments array.
export const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let matchingCities = ""
    // Iterate the array of assignment objects
    for (const assignment of assignments) {
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                matchingCities += `\n ${city.name}`
            }
        }
    }
   return matchingCities // For each assignment, iterate the cities array to find the match

    // Add the name of the matching city to the array of city names

    // After the loop is done, return the string
}

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

