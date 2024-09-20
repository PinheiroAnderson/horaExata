function carregar() {
    
    var msg = document.getElementById('msg')
    
    var img = document.getElementById('imagem')

    function atualizarHora() {
        
        var agora = new Date()
        
        var horas = agora.getHours()
        
        var minutos = String(agora.getMinutes()).padStart(2, '0')
        
        var segundos = String(agora.getSeconds()).padStart(2, '0')
        
        var periodo = horas >= 12 ? 'PM' : 'AM'

        horas = horas % 12
        
        horas = horas ? horas : 12
        
        var horasFormatadas = String(horas).padStart(2, '0')

        msg.innerHTML = `Agora são exatamente ${horasFormatadas}:${minutos}:${segundos} ${periodo}`

        if (agora.getHours() < 12) {
            
            img.src = 'manha.png'

            document.body.style.background = '#81c9fa'

        } else if (agora.getHours() < 18) {
            
            img.src = 'tarde.png'

            document.body.style.background = '#dcd9d0'

        } else {
            
            img.src = 'noite.png'

            document.body.style.background = '#000000'

        }
    
    }


    atualizarHora()
    setInterval(atualizarHora, 1000)

}
