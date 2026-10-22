const fs = require("fs")

const addPerson = (id, fname, lname, age, city) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter((odj) => {
        return odj.id === id
    })

    if (duplicatedData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveData(allData)
    } else {
        console.log("ERROR DUPLICATED DATA")
    }

}
// //////////////////////////////////////////////////////////////////////////////
const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data20.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}
// ///////////////////////////////////////////////////////////////////////////

const saveData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data20.json", allDataJson)
}
// //////////////////////////////////////////////////////////////////////////


const deletedData = (id) => {
    const allData = loadInfo()
    const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveData(dataTokeep)
}

// ///////////////////////////////////////////////////////////////////////////

const readData = (id) => {
    const allData = loadInfo()

    const itemNeeded = allData.filter((obj) => {
        return obj.id == id
    })

    if (itemNeeded) {
        console.log(itemNeeded)
    } else {
        console.log("ID NEEDED NOT FOUND")
    }
}
// ////////////////////////////////////

const listData = () => {
    const allData = loadInfo()
    allData.forEach((obj) => {
        console.log(obj.id, obj.fname, obj.lname, obj.age, obj.city)
    });
}

// ////////////////////////////////////////////////////////////////////





module.exports = {
    addPerson,
    deletedData,
    readData,
    listData
}












//  node app.js add --id="1" --fname="Badawi" --lname="Ahmed" --age="20" --city="Damanhur"

