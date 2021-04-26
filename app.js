const { MongoClient } = require('mongodb')

const client = new MongoClient('connection string')

exports.handler = async () => {
  try {
    await client.connect()
    console.log('Connected!')
  }
  catch (e) {
    console.error(e)
  }
  finally {
    client.close()
  }
}
