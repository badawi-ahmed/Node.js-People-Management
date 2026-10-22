const fs = require("fs")

const yargs = require("yargs")

const data100 = require("./data")
const { type } = require("os")


yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "this is the first name desc in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name desc in add command",
            demandOption: true,
            type: "string"
        }

    },
    handler: (x) => {
        // console.log("you have alread")
        data100.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }

})
// console.log(yargs.argv)
// //////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        data100.deletedData(x.id)
    }
})


// /////////////////////////////////////////////////////////////////////////////


yargs.command({
    command: "read",
    describe: "to read an item",
    builder: {
        id: {
            describe: "this is id desc in read command ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data100.readData(x.id)
    }
})

// ////////////////////////////////////////////////////////////////////////

yargs.command({
    command: "list",
    describe: "to list an item  ",
    handler: () => {
        data100.listData()
    }

})

yargs.parse()

// ///////////////////////////////////////////////////////////////////////////////
















