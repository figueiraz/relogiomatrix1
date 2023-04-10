

function relogio() {
    const elementoRelogio = document.querySelector(".relogio");
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    // ALTERANDO FORMATAÇÃO
    // const formatoHoras = horas.toString().padStart(2, "0");
    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

    //DIA E MÊS
    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    //FUNÇÃO PARA MUDAR O BACKGROUND DE FUNDO COM O PASSAR DAS HORAS

    // if(formatoHoras >= 0 && formatoHoras <12){
    //     document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'

    // } else if (formatoHoras >= 12 && formatoHoras <18) {
    //     document.body
    // } else {
    //     document.body.style.background = 'red'

    // }

    // //INSERINDO UMA IMAGEM
    // if (formatoHoras >= 0 && formatoHoras < 12) {
    //     document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/01/13/01/36/bagan-1137015_960_720.jpg)"
    //     // document.body.style.background = "linear-gradient(290deg, #9C440E, ##DB5E13)"
    //    // img.src = "pngegg.png"
    //    } else if (formatoHoras >= 12 && formatoHoras < 18) {
    //     document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1577257107590-fc448601f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)"
    //     // document.body.style.background = "linear-gradient(290dg, #C2BB34,#DBD33B)"
    //   } else {
    //     document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1462&q=80)"
    //   // document.body.style.background = "linear-gradient(290deg, #19376D, #146C94)"
    // }

}

setInterval(relogio, 1000)



