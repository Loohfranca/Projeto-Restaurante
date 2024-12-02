const list = document.querySelector('ul');
const buttonmostre = document.querySelector('.mostretudo')
const mapclick = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filtrarAll = document.querySelector('.filer-all')

function formatTexto(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', 
    currency: 'BRL',
     })
     
     return newValue
}


function mostretude(procuctsArray) {
    let myLi = ''

    procuctsArray.forEach((product) => {
        myLi += `
                  <li> 
                    <img src=${product.src}>
                     <p>${product.name} </p>
                     <p> R$ ${formatTexto (product.price)}</p>
                    </li>

                `
    })

    list.innerHTML = myLi

}

function mapitens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // 10% de desconto

    }))


    mostretude(newPrices)
}

function sumAllitens() {
    const totalValue = menuOptions.reduce((acc, curr
    ) => acc + curr.price, 0)

    list.innerHTML = `
     <li> 
 <p> O Valor total dos itens é R$ ${formatTexto (totalValue)}</p>
 </li>
`

    console.log(totalValue)
}

function filteritens() {
    const filterVegan = menuOptions.filter((product) => product.vegan)

    mostretude(filterVegan)
}

buttonmostre.addEventListener('click', () => mostretude(menuOptions))
mapclick.addEventListener('click', mapitens)
sumAll.addEventListener('click', sumAllitens)
filtrarAll.addEventListener('click', filteritens)