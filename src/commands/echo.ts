import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Echo: Command = {
    name: "echo",
    description: "echos input",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = ;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};