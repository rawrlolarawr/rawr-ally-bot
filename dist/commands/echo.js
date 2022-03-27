"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Echo = void 0;
exports.Echo = {
    name: "echo",
    description: "echos input",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        const content = "";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
