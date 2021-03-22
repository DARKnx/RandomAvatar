
require('dotenv').config();
require('express')().get('/', (req, res) => {
res.send("Online !");
}).listen();



//chamando bibliotecas
const Discord = require('discord.js');
const client = new Discord.Client();



//Inicando evento de ready

 client.on('ready', () => {
   
//Aki e o local onde podemos colocar os status do Bot.
    let activities = [
	
    'status 1',
    'status 2 ',
    'status 3 ',
    'status 4'
  
  //Caso queira adicionar ou remover outro status ou imagem apague ou adicione ' ' 
		]

let logos = [
"imagem 1.png ",
"imagem 2.png",
"imagem 3.png",
"imagem 4.png"

]
 
//VALORES 
	 	
let statustime = 10000; //Indicado por acima de 10 mil (1000 = 1 segundo - 10000 = 10 segundos) 
let avatartime = 22500000; //Indico não mudar isso para o discord não bloquear troca de avatar do bot
	
//coloque na variavel abaixo o tipo de status que quer
 
let tipo = "WATCHING";	//Tipos disponiveis "WATCHING", "PLAYING", "STREAMING", "COMPETING"
	 
	 
	 
//Não mude nada abaixo 
function stats() {
client.user.setActivity(`${activities[i++ % activities.length]}`, { type:  `${tipo}` })	
}
function rand() {
i = 0;
client.user.setAvatar(`${logos[i++ % logos.length]}`);	
console.log("Acabei de mudar meu avatar!");
} 
 setInterval(() => stats(), statustime)
 setInterval(() => rand(), avatartime)

	 
	 
//Aki fica oque ira aparecer no console quando o bot ficar online
//Mude caso quiser 
console.log("Estou Online!")
 });
 


 



 client.login("Seu token");
