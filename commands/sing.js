const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    `**Happy Birthday To You**\n\nHappy Birthday to you\nHappy Birthday to you\nHappy Birthday to someone\nHappy Birthday to you\n🎂`,
    "**Pokemon Theme 1**\n\nI wanna be the very best\nLike no one ever was\nTo catch them is my real test\nTo train them is my cause**",
    "**Random Singing To Self**\n\nLa la la laaa la la laaaa",
    "**In My Place**\n\nYeah, how long must you wait for it?\nYeah, how long must you pay for it?\nYeah, how long must you wait for it?",
    "**Yellow**\n\nLook at the stars\nLook how they shine for you\nAnd everything you do\nThey were all yellow",
    "**November Rain**\n\nNothin' lasts forever\nAnd we both know hearts can change\nAnd it's hard to hold a candle\nIn the cold November rain",
    "**Over You**\n\nNow that it's all said and done\nI can't believe you were the one\nTo build me up and tear me down\nLike an old abandoned house\nWhat you said when you left\nJust left me cold and out of breath\nI felt as if I was in way to deep\nGuess I let you get the best of me",
    "**You Belong With Me**\n\nYou're on the phone with your girlfriend\nShe's upset\nShe's going off about something that you said\n'Cause she doesn't get your humour like I do\nI'm in my room\nIt's a typical Tuesday night\nI'm listening to the kind of music she doesn't like\nAnd she'll never know your story like I do'",
    "**We Are One**\n\nIf there's so much I must be, can I still just be me the way I am?\nCan I trust in my own heart or am I just one part of some big plan?",
    "**Dry Your Eyes**\n\nDry your eyes mate\nI know it's hard to take but her mind has been made up\nThere's plenty more fish in the sea\nDry your eyes mate\nI know you want to make her see how much this pain hurts but you've got to walk away now, it's over.",
    "**I don't Wanna Miss A Thing**\n\nDon't wanna close my eyes\nI don't wanna fall asleep\n'Cause I'd miss you babe\nAnd I don't wanna miss a thing\n'Cause even when I dream of you\nThe sweetest dream will never do\nI'd still miss you babe\nAnd I don't wanna miss a thing",
    "**Payphone**\n\nI'm at a payphone trying to call home\nAll of my change I spent on you\nWhere have the times gone, baby it's all wrong\nWhere are the plans we made for two",
    "**What About Now**\n\nWhat about now?\nWhat about today?\nWhat if you're making me all that I was meant to be?\nWhat if our love never went away?\nWhat if it's lost behind words we could never find?\nBaby, before it's too late,\nWhat about now?",
    "**Hear You Me**\n\nThere's no one in town I know\nYou gave us some place to go\nI never said thank you for that\nI thought I might get one more chance\nWhat would you think of me now\nSo lucky, So strong, So proud?\nI never said thank you for that\nNow I'll never have a chance",
    "**Give Yourself A Try**\n\nYou learn a couple things when you get to my age\nLike friends don't lie and it all tastes the same in the dark\nWhen your vinyl and your coffee collection is a sign of the times\nYou're getting spiritually enlightened at 29\nSo just give yourself a try",
    "**A Million Dreams**\n\nI close my eyes and I can see\nThe world that's waiting up for me\nThat I call my own\nThrough the dark, through the door\nThrough where no one's been before\nBut it feels like home",
    "**A Million Dreams**\n\n'Cause every night I lie in bed\nThe brightest colors fill my head\nA million dreams are keeping me awake\nI think of what the world could be\nA vision of the one I see\nA million dreams is all it's gonna take\nA million dreams for the world we're gonna make",
    "**A Million Dreams**\n\nThere's a house we can build\nEvery room inside is filled\nWith things from far away\nSpecial things I compile\nEach one there to make you smile\nOn a rainy day",
    "**The Scientist**\n\nCome up to meet you\nTell you I'm sorry\nYou don't know how lovely you are\nI had to find you\nTell you I need you\nTell you I set you apart",
    "**Can You Feel The Love Tonight (Movie Version)**\n\nI can see what's happening\nWhat?\nAnd they don't have a clue\nWho?\nThey'll fall in love and here's the bottom line, our trio's down to two\nOh\nThe sweet caress of twilight, there's magic everywhere\nAnd with all this romantic atmosphere disaster's in the air",
    "**Forever Young**\n\nLet's dance in style, let's dance for a while\nHeaven can wait we're only watching the skies\nHoping for the best, but expecting the worst\nAre you gonna drop the bomb or not?",
    "**Disco 2000**\n\nAnd I said let's all meet up in the year 2000\nWon't it be strange when we're all fully grown\nBe there 2 o'clock by the fountain down the road\nI never knew that you'd get married\nI would be living down here on my own\nOn that damp and lonely Thursday years ago",
    "**Always**\n\nNow I can't sing a love song\nLike the way it's meant to be\nWell I guess I'm not that good anymore\nBut baby, that's just me\nYeah, I will love you baby\nAlways and I'll be there\nForever and a day, always\nI'll be there till the stars don't shine\n'Til the heavens burst and the words don't rhyme\nI know when I die you'll be on my mind\nAnd I'll love you, always",
    "**Angels**\n\nAnd through it all she offers me protection\nA lot of love and affection\nWhether I'm right or wrong\nAnd down the waterfall\nWherever it may take me\nI know that life won't break me\nWhen I come to call, she won't forsake me\nI'm loving angels instead",
    "**Torn**\n\nI'm all out of faith\nThis is how I feel, I'm cold and I am shamed\nLying naked on the floor\nIllusion never changed\nInto something real\nWide awake and I can see the perfect sky is torn\nYou're a little late\nI'm already torn",
    "**Chasing Cars**\n\nIf I lay here\nIf I just lay here\nWould you lay with me and just forget the world?",
    "**Huh?**\n\nI've lost my voice! Try again.",
    "**When You Say Nothing At All**\n\nThe smile on your face let's me know that you need me\nThere's a truth in your eyes saying you'll never leave me\nThe touch of your hand says you'll catch me if wherever I fall\nYou say it best when you say nothing at all",
    "**A Little Respect**\n\nI try to discover\nA little something to make me sweeter\nOh baby refrain from breaking my heart\nI'm so in love with you\nI'll be forever blue\nThat you gimme no reason\nWhy you make me work so hard\nThat you gimme no\nThat you gimme no\nThat you gimme no\nThat you gimme no\nSoul, I hear you calling\nOh baby please give a little respect to me"];

  let result = Math.floor((Math.random() * replies.length));
  if (result === 26){
    let sngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`❗`)
    .setDescription(replies[result])
    return message.channel.send(sngembed);
  }

  let sngembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setTitle(`🎵`)
  .setDescription(replies[result]);
  return message.channel.send(sngembed);
}

module.exports.help = {
  name: "sing"
}
