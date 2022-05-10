const { MessageSelectMenu } = require("discord.js");

module.exports = {
    name: 'roll',
    description: "this is a roll command!",
    execute(message, args){
        let x = message.content.split(' ').slice(1); //remover a primera parte do comando ?roll e ficar ó com o restante da info
        let a = x.toString().replace(/ /g,'');
        if (a[0] == 'd') a = "1"+a;
        a = a.split('d').join(',').split('+').join(',').split(',').toString().replace(/,,,/g,',').replace(/,,/g,',');
        let i;

        let z = a.split(',');

        let rolagemDados;
        let totalDados = 0;
        let total;
        
        if(args == '') return message.channel.send("Informe um valor")
        
        if(!z[1]){
            rolagemDados = Math.floor(Math.random() * z[0])+1;
            message.channel.send("Resultado da Rolagem: "+rolagemDados);
            return;
        }
        
        if(isNaN(z[0])) return message.channel.send("Valor imprópio a: " + z[0]);
        if(isNaN(z[1])) return message.channel.send("Valor imprópio b: " + z[1]);
        if(!z[2]){
            if(z[0] > 20) return message.channel.send("Ultrapassou do limite de 20 dados!");
            if(z[1] > 100) return message.channel.send("Limite de 100 faces do dado!");
            for(i = 1; i <= z[0]; i++){
                rolagemDados = Math.floor(Math.random() * z[1])+1;
                message.channel.send("Rolagem "+i+" : "+rolagemDados);
                totalDados = totalDados + rolagemDados;
            }
            message.channel.send("Total dos dados: "+totalDados);
        }else if (isNaN(z[2])){
            return message.channel.send(z[1]+ " não é um número!");
        } else {
            if(z[0] > 20) return message.channel.send("Ultrapassou do limite de 20 dados!");
            if(z[1] > 100) return message.channel.send("Limite de 100 faces do dado!");
            for(i = 1; i <= z[0]; i++){
                rolagemDados = Math.floor(Math.random() * z[1])+1;
                message.channel.send("Rolagem "+i+" : "+rolagemDados);
                totalDados = totalDados + rolagemDados;
            }
            total = parseInt(totalDados) + parseInt(z[2]);
            message.channel.send("Total dos dados: "+totalDados);
            message.channel.send("Total: "+total);
        }
    }
}