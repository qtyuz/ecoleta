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
    const IndexOfSelectedState = event.target.selectedindex


    stateInput.value = event.target.options[IndexOfSelectedState]



    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`



    cityselect.innerHTML = "<option value>selecione a cidade</option>"
    cityselect.disabled = true


    fetch(url)
        .then((res) => res.json())
        .then((cities) => {

            for (const city of cities) {

                cityselect.innerHTML += `<option value ="${city.id}" >${city.nome}</option>`
            }

            cityselect.disabled = false

        })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities)