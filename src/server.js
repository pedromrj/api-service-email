import "dotenv/config";
import express from "express";
import UserController from "./controllers/UserController";
import BullBoard from "bull-board";
import Queue from "./lib/Queue";

const PORT = 3333;
const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json)

app.post("/users", UserController.store(request, response));

app.use("/admin/queues", BullBoard.UI);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});