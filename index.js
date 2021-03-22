
require('dotenv').config();
require('express')().get('/', (req, res) => {
res.send("Online !");

}).listen();



//chamando blibliotecas

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });




//Mundança de status.
 client.on('ready', () => {
  
    let activities = [
	
    'Meu prefixo padrão e -',
    'Use -help para obter ajuda',
    'Monitorando varios servidores',
    'Use -invite para me adicionar em seu servidor!'
  
  
		]

let logos = [
"imagem 1.png ",
"imagem 2.png",
"imagem 3.png",
"imagem 4.png"

]

//Indico uso de somente 4 imagens para não tomar  ratelimit

function rand() {
     let randomAvatars = logos[Math.floor(Math.random() * logos.length)]
     client.user.setAvatar(randomAvatars)
		 console.log("Mudei de avatar.")
} 


		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type:  "WATCHING"
			}),
		5000
	);


 
 setInterval(() => rand(), 22500000)
console.log("Online")

 });
 


 



 client.login("Seu token");
