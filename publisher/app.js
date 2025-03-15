const express =  require("express");
const publiserService = require("./publisher")

const app = express();

publiserService.createNewUserFanout({
    "nom": "ama",
    "prenom": "koffi"
});

app.listen(3031, () => {
    console.log("Server is running on port 3031");
});