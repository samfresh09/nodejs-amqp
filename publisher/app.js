const express =  require("express");
const publiserService = require("./publisher")

const app = express();
const routinghKey1 = 'user.new.*'
const routinghKey2 = 'user.#'

publiserService.createNewUserTopic({
    "nom": "EZION",
    "prenom": "Claire"
},routinghKey2);

app.listen(3031, () => {
    console.log("Server is running on port 3031");
});