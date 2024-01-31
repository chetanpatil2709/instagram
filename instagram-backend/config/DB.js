import { connect } from 'mongoose'
const URL = `mongodb+srv://instagram:instagram@instagram.zjlvqxf.mongodb.net/?retryWrites=true&w=majority`

const connectToDatabase = () => {
    try {
        connect(URL)
        console.log("DataBase is connect successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDatabase