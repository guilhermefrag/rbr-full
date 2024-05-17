import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URL

export const connection = async () => {
  try {
    await mongoose.connect(`${uri}`)

    console.log('Conexão com o banco de dados estabelecida!')

    return mongoose.connection
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error)
  }
}
