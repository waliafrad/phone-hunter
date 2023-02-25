const loadPhones = async(searchText)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data.slice(0,5));
}

const displayPhones = phones=>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';
    // phonesContainer.innerText = ''; (it also same as textContent that give us emty value)
    phones.forEach(phone => {
        console.log(phone);
        const phonesDiv = document.createElement('div');
        phonesDiv.classList.add('col');
        phonesDiv.innerHTML= `
        <div class="card p-5">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        `;
        phonesContainer.appendChild(phonesDiv);
    })
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchValue = document.getElementById('search-field');
    const searchText = searchValue.value;
    loadPhones(searchText);
    searchValue.value = '';

})

loadPhones();