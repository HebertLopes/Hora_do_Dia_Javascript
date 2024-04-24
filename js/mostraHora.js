function mostraHora(){ //Função para mostrar a hora para o usuário de acordo com o horário do seu computador.

    var data = new Date() //cria um objeto de data com a data e hora atuais.
    var hora = 8 //pega a hora atual.
    var minuto = data.getMinutes() //pega o minuto atual.
    var tela = window.document.getElementById('info') //realiza a conexão com a div info.
    var mostraHora = window.document.getElementsByTagName('h2')[0] //realiza a conexão com a primeira tag h2.
    var mensagem = window.document.getElementsByTagName('h2')[1] //realiza a conexão com a segunda tag h2.
    var imagem = window.document.getElementsByTagName('img')[0] //realiza a conexão com a tag img.
    
        //verifica se são minutos ou minuto.
        if(minuto == 1){
            mostraHora.innerHTML = `São ${hora} horas e ${minuto} minuto.`
        }else{
            mostraHora.innerHTML = `São ${hora} horas e ${minuto} minutos.`
        }

        //Verifica se o horário se identifica como horário da manhã.
        if(hora >= 5 && hora < 12){
            imagem.src = './img/encode_talker1.png'
            mensagem.innerHTML = 'Bom Dia!'
            window.document.body.style.background = 'linear-gradient(to right, #ff512f, #f09819)'
            tela.style.background = 'linear-gradient(to right, #ffefba, #ffffff)'
            tela.style.color = '#D2691E'
            //Verifica se o horário se identifica como horário da tarde.
        }else if(hora >= 12 && hora < 19){
            imagem.src = './img/powercode_talker1.png'
            mensagem.innerHTML = 'Boa Tarde!'
            window.document.body.style.background = 'linear-gradient(to right, #ff512f, #f09819)'
            tela.style.background = 'linear-gradient(to right, #ffefba, #ffffff)'
            tela.style.color = '#D2691E'
            //Verifica se o horário se identifica como horário da noite.
        }else if(hora >= 19 && hora < 24){
            imagem.src = './img/decode_talker.png'
            mensagem.innerHTML = 'Boa Noite!'
            window.document.body.style.background = 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
            tela.style.background = 'linear-gradient(to right, #2c3e50, #4ca1af)'
            tela.style.color = '#FFFAF0'
            //Verifica se o horário se identifica como horário da madrugada.
        }else{
            imagem.src = './img/dark_templar1.png'
            mensagem.innerHTML = 'Boa Madrugada!'
            window.document.body.style.background = 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
            tela.style.background = 'linear-gradient(to right, #141e30, #243b55)'
            tela.style.color = '#FFFAF0'
        }
}