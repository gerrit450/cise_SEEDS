const { MongoClient } = require("mongodb");
const url = "mongodb+srv://gerrit:Hungergames221@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);

class connection
{
    runServer() {
    try {
        client.connect();
        return "Connected!"

    } catch (err) {
        console.log(err.stack);
        return "No connection!"
    }
    finally {
        client.close();
    }

    return 
}
}
export default connection;