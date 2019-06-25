module.exports = (member) => {
    console.log(`User ${member.user.username} has joined the server`);
    var role = member.guild.roles.find('name', 'The Boys');
    member.addRole(role);

    const channel = member.guild.channels.find('name', 'welcome-boyes');
    if(!channel) return;
    channel.send(`Welcome to the boyes, ${member}!`);
}