const requireEvent = (event) => require(`../events/${event}`);

module.exports = (client, queue) => {
    // Assigning event handlers
    client.on('guildMemberAdd', requireEvent('welcome'))
    client.on('message', requireEvent('message'));
    client.on('ready', () => requireEvent('ready')(client));
    process.on('unhandledRejection', (error) => requireEvent('unhandledRejection')(error));
};