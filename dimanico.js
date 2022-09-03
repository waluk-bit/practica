
/* tiene que cargar toda la pagina y despues ejecutar lo dinamico DOMContentLoaded */

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
});

/* Llamar los datos de la API  */
const fetchData = async ()=>{
    try{
        loadingData(true);

        const fetchData = await fetch('https://rickandmortyapi.com/api/character');

        const data = await fetchData.json();

        pintarCard(data)

    }catch(err){
        console.log(err);  
    }finally{
        loadingData(false);
    }
};

/* Pintar el card */
const pintarCard = (data)=>{
    const $cardDinamica = document.getElementById('cardDinamica');
    const $cardTemplate = document.getElementById('cardTemplate').content;
    const fragment = document.createDocumentFragment();

    data.results.forEach(item=>{
        const cloneTemplate = $cardTemplate.cloneNode(true);
        cloneTemplate.querySelector("h5").textContent = item.name;
        cloneTemplate.querySelector("p").textContent = item.species;
        cloneTemplate.querySelector(".card-img-top").setAttribute("src", item.image);
        //Agrego fragment
        fragment.appendChild(cloneTemplate);
    });
    $cardDinamica.appendChild(fragment);
}


/* Pinte el loading si el mientras carga el card */

const loadingData = estado =>{
    const $loading = document.getElementById('loading');

    estado ? $loading.classList.remove('d-none') : $loading.classList.add('d-none');
}