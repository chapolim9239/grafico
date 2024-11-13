import { getCSS, tickConfig } from "./common.js"

async function quantidadeusuariosporede(params) {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const res = await fetch(url)
const dados = await res.json()
const nomedasredes = Object.json(dados)
const quantidadedeusuarios = Object.values(dados)

const data = [
    { 
        x: nomedasredes,
        y: quantidadedeusuarios,
        type: 'bar',
        marker: {
            color: getCSS('--primary-color')
        }
    }
]

const laytout = {
    plot_bgcolor: getCSS('--bg-color')
    paper_bgcolor: getCSS('--bg-color')
    title: {
        Text 'redes sociais com mais usuários',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            size: 30,
            font:getCSS('--font')
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            Text: 'nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
yaxis: {
    tickfont: tickConfig,
    text: 'bilhões de usuários ativos',
    font: {
        color: getCSS('--secondary-color')
          }
       }   
    }
}

const grafico = document.createElement('div')
grafico.className ='grafico'
document.getElementById('graficos-container').appendChild(grafico)
plotly.newplot(grafico,data,laytout)
}

quantidadeusuariosporede()