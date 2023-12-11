function gas_station(carSize, carFuel) {

    //S car
    if (carSize === "S" && carFuel === "gas") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    if (carSize === "S" && carFuel === "diesel") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    // M car
    if (carSize === "M" && carFuel === "gas") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    if (carSize === "M" && carFuel === "diesel") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    // L car
    if (carSize === "L" && carFuel === "gas") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    if (carSize === "L" && carFuel === "diesel") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    // XL car
    if (carSize === "XL" && carFuel === "gas") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

    if (carSize === "XL" && carFuel === "diesel") {
        return `заправка для ${carSize} авто, тип палива ${carFuel}`
    }

   // default value
    return "заправка для XL авто, тип палива 'diesel'"
}

let carFuel = "gas"
let carSize = "M"

console.log(gas_station(carSize, carFuel))
