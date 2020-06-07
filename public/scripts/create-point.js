

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then( states => {
        for(const state of states){
             ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }
       
    })
}

populateUFs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
  

    const ufValue = event.target.value
    const indexState = event.target.selectedIndex
    stateInput.value = event.target.options[indexState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then( cities => {
        for(const city of cities){
             citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
             
        }
       citySelect.disabled = false
     
    })
    
}


    document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)




    //Itens de coleta

    const intemsToCollect = document.querySelectorAll(".items-grid li")

    for (const item of intemsToCollect)
        item.addEventListener("click", handleSelectedItem)



    const colletctedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event){
        const itemLi = event.target

        //add or remove a class with JS, why select and identify with different color

        itemLi.classList.toggle("selected")
        
        const itemId = itemLi.dataset.id

        //varify if exist items selecteds, if items selected = true
        //get items selecteds
        const alreadySelected = selectedItems.findIndex(item => item === itemId)

        //if have to selected
        if(alreadySelected >= 0){
            //remove from selection
            const filteredItems = selectedItems.filter( item => item != itemId)
            selectedItems = filteredItems
        }//else have to selected, add a selection
            else
                selectedItems.push(itemId)


        console.log(selectedItems);
        

        

        //update the input whith a items selecteds
        colletctedItems.value = selectedItems

        
    }