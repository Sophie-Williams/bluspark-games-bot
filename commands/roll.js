const Discord = require("discord.js");

module.exports.run = async (bot, message, args, messageArray) => {
  let coins = 100;
  let dcnum = `**dicenumber**`;
  let mnyamnt = `**moneyamount**`;
  if (messageArray.length < 2) {
    let replies = ["**1**", "**2**", "**3**", "**4**", "**5**", "**6**"];
    let result = Math.floor((Math.random() * replies.length));

    let frllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Dice Roll (no prize) 🎲`)
    .setDescription(`You rolled a ${replies[result]}!`);
    return message.channel.send(frllembed);
  }
  if(messageArray.length != 3) return message.channel.send(`Please use the correct format: ~roll ${dcnum} ${mnyamnt}.`);
  if(isNaN(args[0]) && isNaN(args[1])) return message.channel.send(`Please use numbers! The correct format is: ~roll ${dcnum} ${mnyamnt}.`);
  if(args[0] != 1 && args[0] != 2 && args[0] != 3 && args[0] != 4 && args[0] != 5 && args[0] != 6) return message.channel.send(`${message.author.username}, please use a number from 1 to 6.`);
  if(isNaN(args[1])) return message.channel.send(`${message.author.username}, please use a money amount.`);
  let replies = ["1", "2", "3", "4", "5", "6"];
  let result = Math.floor((Math.random() * replies.length));

  let win = `*You win ${args[1]} SparkCoins!*`;
  let lose = `*You lose ${args[1]} SparkCoins.*`;
  let frmtresult = "None";
  if (args[0] === replies[result]) {
    if (replies[result] === "1") {frmtresult = "**1**";}
    if (replies[result] === "2") {frmtresult = "**2**";}
    if (replies[result] === "3") {frmtresult = "**3**";}
    if (replies[result] === "4") {frmtresult = "**4**";}
    if (replies[result] === "5") {frmtresult = "**5**";}
    if (replies[result] === "6") {frmtresult = "**6**";}
    coins = coins + args[1];
    let flpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Dice Roll 🎲`)
    .setDescription(`You rolled a ${frmtresult}! ${win}`);
    return message.channel.send(flpembed);
  }
  if (args[0] !== replies[result]) {
    if (replies[result] === "1") {frmtresult = "**1**";}
    if (replies[result] === "2") {frmtresult = "**2**";}
    if (replies[result] === "3") {frmtresult = "**3**";}
    if (replies[result] === "4") {frmtresult = "**4**";}
    if (replies[result] === "5") {frmtresult = "**5**";}
    if (replies[result] === "6") {frmtresult = "**6**";}
    coins = coins - args[1];
    let flpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Dice Roll 🎲`)
    .setDescription(`You rolled a ${frmtresult}! ${lose}`);
    return message.channel.send(flpembed);
  }
}

module.exports.help = {
  name: "roll"
}