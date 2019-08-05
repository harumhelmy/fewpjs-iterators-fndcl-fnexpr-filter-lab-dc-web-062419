function findMatching(drivers, string) {
    let match = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return match
}

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(driver => driver.substring(0, string.length) === string) 
    return match 
}

function matchName(drivers, string) {
    let match = drivers.filter(function (el) {return el.name === string })
    return match 
}