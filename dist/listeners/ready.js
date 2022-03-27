"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("../commands");
exports.default = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        await client.application.commands.set(commands_1.Commands);
        console.log(`${client.user.username} is online`);
    });
};
