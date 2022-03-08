module.exports = {
  name: "tictactoe",
  aliases: [],
  category: "Economy",
  description: "play and earn",
  usage: "tictactie",
  run: async (client, message, args, db) => {
    if(!message.member.mentions.first()) return message.channel.send(`Pls mention someone`)
    const mention = message.mentions.members.first();
    const { tictactoe } = require('easy-games-js')
    const tic = new tictactoe(mention, message)
    tic.init({ PROVIDE_MEMBER: "Please provide a  member", ACCEPT_CHALLENGE: "{user} Do you accept this challange?", DOESNT_PLAY: "looks like {user} doesnt wanna play", WICH_SIDE: "**{user}, Which Side Do You Pick? Type \`End\` To Forfeit!**", GAME_OVER: "Times up!", END: "end", INACTIVITY: "game ended due to inactivity!", WINNER: "Congrats u have won {winner} and earned 70 coins ", DRAW: "Its a draw"})
  

  }
}
