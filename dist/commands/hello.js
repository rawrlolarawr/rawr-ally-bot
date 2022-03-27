"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = void 0;
exports.Hello = {
    name: "hello",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        const content = "Hello there!";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
