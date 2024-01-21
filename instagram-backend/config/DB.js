import { connect } from 'mongoose'

const connectToDatabase = () => {
    try {
        connect(process.env.DB_URL)
        console.log("DataBase is connect successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDatabase