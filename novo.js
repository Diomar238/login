const usuarios = [
    {
        login: 'diomar',
        pass: '123'
    },
    {
        login: 'julio',
        pass: 'julio'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
    
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('nome').value
    let pegaSenha = document.getElementById('senha').value
    let validalogin = false

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha ==
            usuarios[i].pass) {

                validalogin = true
                'break'
            }
        
        }

        if(validalogin == true )
            {
            location.href = 'https://diomar238.github.io/site/index.html'

        }
        else {
    alert('usuario ou senha incorretos')
}
    

   

    

})