// Configurando o objeto moeda;

const coin = {
    state: 0,

    flip: function () {
        this.state = Math.round(Math.random());
        
        return this.state
    },

    toString: function () {
        if (this.state === 0) {
            return "Heands"
        } else {
            return "Tails"
        }
      
    },

    toHTML: function () {
        const image = document.createElement("img");
        if (this.state === 0) {
            image.src = "./assets/img/moedaCara.png"
            image.alt = this.toString();

        } else {
            image.src = "./assets/img/moedaCoroa.png"
            image.alt = this.toString();
        }

        return image;
    },
};


// Configurando a hora de jogar a moeda;

function display20Flips() {
    const results = [];
    for (let i = 0; i <= 20; i++) {
        results.push(coin.flip());
    }
    const container = document.getElementsByTagName("body")[0]
    container.innerText = `${results}`;
    
    return `${results}`
    
  }
  
  function display20Images() {
    const results = [];
    for (let i = 0; i <= 20; i++) {
        coin.flip()
        results.push(coin.toHTML())
        document.body.appendChild(results[i])
    }
    console.log(results)
  }
  

  display20Flips();
  display20Images();