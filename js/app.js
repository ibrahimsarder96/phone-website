const searchPhone = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  if(searchText === '') {
    alert('please display write something');
  }
  else{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch (url)
  .then(res => res.json())
  .then(data =>displaySearchResult(data.data))
  } 
}

const displaySearchResult = phones => {
  const searchResult = document.getElementById('search-result');
  phones.forEach(phone => {
    // console.log(phone)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 shadow-lg bg-body rounded">
        <img class="p-5" src="${phone.image}" class="img-fluid card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${phone.phone_name}</h5>
          <h5 class="card-title text-center">${phone.brand}</h5>
          <button class="col btn btn-warning" onclick="loadPhoneDetail('${phone.slug}')">Details</button>
        </div>
      </div>
    `;
    searchResult.appendChild(div);
  });
}