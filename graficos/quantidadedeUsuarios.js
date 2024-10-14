import { getCSS } from "./common.js";

async function quantidadedeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados)
  
    const data = [
      {
        x: nomeDasRedes,
        y: quantidadedeUsuarios,
        type: 'bar',
        marker: {
          color: getCSS('--primary-color')
        }
      }
    ]
  
    const grafico = document.createElem

    const layout = {
      plot_bgcolor: getCSS('--bg-color'),
      paper_bgcolor: getCSS('--bg-color')
  }
  
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)

}

  quantidadeUsuarios()