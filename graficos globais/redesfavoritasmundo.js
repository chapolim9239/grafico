import { getCSS,criargrafico, incluirtexto } from "./common.js"

async function redesfavoristasmundo(params) {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados) 
    const valores = -Object.values(dados)

    const data = [
        {
   values: valores,
   labels: redes,
   type: 'pie' ,
   texinfo: 'label+percent'
  }
]

const laytout -{
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    height: 700,
    title:{
        Text: 'redes sociais que os usuários mais gostam',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),  
            size: 30
        }
    },
    legend: {
        font: {
            color: getCSS('--primary-color'),

        }
    }
}

criargrafico(data, laytout)

incluirtexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais`)
}

redesfavoristasmundo()