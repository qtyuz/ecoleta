function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}
populateUFs()

function getcities(event) {
    const cityselect = document.querySelector("[name=city]")

    const stateInput = document.querySelector("[name=state]")



    const ufvalue = event.target.value
    const IndexOfSelectedState = event.target.selectedIndex


    stateInput.value = event.target.options[IndexOfSelectedState].text



    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`



    cityselect.innerHTML = "<option value>selecione a cidade</option>"
    cityselect.disabled = true


    fetch(url)
        .then((res) => res.json())
        .then((cities) => {

            for (const city of cities) {

                cityselect.innerHTML += `<option value ="${city.nome}" >${city.nome}</option>`
            }

            cityselect.disabled = false

        })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities)




// itens de coleta
// pegar todos os li's

const itemsTocollect = document.querySelectorAll(".items-grid li")

for (const Item of itemsTocollect) {
    Item.addEventListener("click", handleSelectedItem)
}

let selectedItems = [2, 3]

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id



    // verificar se existem intens selecionados se sim
    //pegar os intens selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //isso sera true ou fale
        return itemFound
    })

    console.log(alreadySelected)
        // se já estiver selecionado, tirar de selecionado
    if (alreadySelected >= 0) {
        const filteredItem = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent

        })
        console.log(filteredItem)

    }
    // se não estiver selecionado adicionar a selecão
    //atualizar o campo escondido com os dados selecionados

}