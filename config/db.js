const mongoose = require('mongoose');

const connectionMethod = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://Franklin:emmaofmcap%407@cluster0.jmchgoz.mongodb.net/?retryWrites=true&w=majority")
        console.log(`Db connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = { connectionMethod }