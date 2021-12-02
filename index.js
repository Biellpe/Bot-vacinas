const Discord = require('discord.js');
const { existsSync } = require('fs');
const { exit } = require('process');

const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

const token = 'OTE1NzE0MjI0OTY4MzMxMzU1.YafnVA.q-5YZj4ixym0qd99o4vnzisGPjw';

var cov = false;
var dose = false;
var h1n1 = false;
var tipo = false;


bot.login(token);
bot.on('ready', () => {

    console.log('Operacional')
})
/*
bot.on('message', msg => { 
    if(msg.content === 'Boas Vindas'){
        msg.reply('Bem vindo ao calendário de vacinas! Favor escolher uma das opções abaixo: \n 1 - Covid \n 2 - H1N1 \n 3 - Poliomielite \n Você pode voltar ou cancelar uma ação digitando "Menu"')

    }
})
*/
bot.on('message', msg => { 
    if(msg.content === 'Menu'||msg.content === 'menu'){
        cov = false;
        dose = false;
        h1n1 = false;
        tipo = false;
        msg.reply('Bem vindo ao calendário de vacinas! Favor escolher uma das opções abaixo: \n 1 - Covid \n 2 - H1N1 \n 3 - Poliomielite')

    }
})





  

/* ------------------------- Vacinas ----------------------------*/
    bot.on('message', msg => {
        if(cov == false & dose == false & h1n1 == false & tipo == false){
        if(msg.content === 'Covid'||msg.content === 'covid'||msg.content === '1'){
           msg.reply('Primeira ou segunda dose? (Digite Pri ou Seg)')
           cov = true;
        }
        else if(msg.content === 'H1N1' || msg.content === 'h1n1' ||msg.content === 'H1n1'||msg.content === '2'){
            msg.reply('Por favor selecione das categorias abaixo: \n S - Trabalhador da Saúde \n I - Indígena \n G - Gestante \n O - Outros')
            h1n1 = true;
        }
        else if(msg.content === 'Poliomielite' || msg.content === '3'){
            msg.reply('A criança pode ser vacinada contra poliomielite a partir dos 6 meses até os 5 anos em qualquer rede do governo, precisando apenas da identidade')
        }
    }

  /* ------------------------- Tipo H1N1 ----------------------------*/
bot.on('message', msg => {
        
    if(h1n1 == true){
        if(msg.content === 'S'){
            msg.reply('A vacinação será admnistrada durante o período de 8 a 19 de março')
            h1n1 = false;
        }   
        else if(msg.content === 'I'){
            msg.reply('A vacinação será admnistrada durante o período de 8 a 19 de março')
            h1n1 = false;
        }
        else if(msg.content === 'G'){
            msg.reply('A vacinação será admnistrada durante o período de 22 de março a 21 de maio')
            h1n1 = false;
        }
        else if(msg.content === 'O'){
            msg.reply('Qual sua idade? (Favor digitar apenas números)')
            h1n1 = false;
            tipo = true;
        }
    }
})



/* ------------------------- Dose Covid----------------------------*/
bot.on('message', msg => { 
    if(cov == true){
        if(msg.content === 'Pri' || msg.content === 'pri'){
        msg.reply('Todas as idades já estão liberadas para tomar a primeira dose')
        cov = false;
        return;
    }
        else if(msg.content === 'Seg' || msg.content === 'seg'){
        msg.reply('Qual o fabricante? \n 1 - Butantan (Coronavac) \n 2 - AstraZeneca \n 3 - Pfizer \n 4 - Janssen')
        cov = false;
        dose = true;
        }
    }

})
/* ------------------------- Fabricante Covid ----------------------------*/
bot.on('message', msg => {
        
    if(dose == true){
        if(msg.content === '1' || msg.content === 'Butantan'|| msg.content === 'butantan'|| msg.content === 'Coronavac'|| msg.content === 'coronavac'){
            msg.reply('Você deve tomar 15 dias após a primeira dose')
            dose = false;
        }   
        else if(msg.content === '2' || msg.content === 'AstraZeneca'|| msg.content === 'astrazeneca'|| msg.content === 'Astrazeneca'){
            msg.reply('Você deve tomar 8 semanas (56 dias) após a primeira dose')
            dose = false;
        }
        else if(msg.content === '3' || msg.content === 'Pfizer'|| msg.content === 'pfizer'){
            msg.reply('Você deve tomar 21 dias após a primeira dose')
            dose = false;
        }
        else if(msg.content === '4' || msg.content === 'Janssen'|| msg.content === 'janssen'){
            msg.reply('Você deve tomar entre 2 e 6 meses após a primeira dose')
            dose = false;
        }
        }
    })


})

/* ------------------------- Idade H1N1 ----------------------------*/
bot.on('message', msg => {
    
if(tipo == true){
    if(msg.content <= 6){
        msg.reply('A vacinação será admnistrada durante o período de 12 de abril a 10 de maio')
        tipo = false;
    }   
    else if(msg.content >= 60){
        msg.reply('A vacinação será admnistrada durante o período de 11 de maio a 08 de junho')
        tipo = false;
    }
    else if(msg.content >= 12 & msg.content < 21){
        msg.reply('A vacinação será admnistrada durante o período de 09 de junho a 11 de julho')
        tipo = false;
    }
    else if(msg.content > 0 & msg.content < 100) {
        msg.reply('A vacinação será admnistrada durante o período de 12 de julho a 28 de setembro')
        tipo = false;
    }
}
})