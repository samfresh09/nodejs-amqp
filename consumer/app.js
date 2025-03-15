const express =  require("express");
const consumerService = require("./consumer")

const app = express();
const queueName1 = "notification.send";
const queueName2 = "user.kpi";

consumerService.getNewUser(queueName1);
consumerService.getNewUser(queueName2);

app.listen(3032, () => {
    console.log("Server is running on port 3032");
});