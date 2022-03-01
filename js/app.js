document.getElementById('error-message').style.display = 'none'
//--toggleSpinner arrow function---------------------
const toggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
}
//--toggleSearchResult arrow function--------------------
const toggleSearchResult = displayStyle => {
  document.getElementById('toggle-search').style.display = displayStyle;
 }
 //--phone-search function------------------------------
const searchPhone = () => {
  const searchField = document.getElementById('search-field');
  toggleSpinner('block');
  toggleSearchResult('none');
  const searchText = searchField.value.toLowerCase();
  searchField.value = '';
  if(searchText === '') {
    alert('please, display write something');
    toggleSpinner('none');
  }
  else{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch (url)
  .then(res => res.json())
  .then(data =>displaySearchResult(data.data))
  toggleSpinner('none')
  } 
}
//-- all-phone-display-function---------------------------
const displaySearchResult = phones => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  if(!phones.length[0]){
    document.getElementById('error-message').style.display = 'block'
  }
    phones.forEach(phone => {
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
  toggleSpinner('none');
  toggleSearchResult('block')
}
// --id load function----------------------------------
const loadPhoneDetail = id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetail(data.data))
}
//-- display single phone------------------------------
const displayPhoneDetail = phone => {
  console.log(phone)
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.textContent = '';
  if(!phone.releaseDate){
    const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img class="img-fluid p-5" src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.name}</h5>
    <h5 class="card-title">No release data found${phone.releaseDate}</h5>
    <div>
    <h5 class="card-title">Product details ${phone.name}</h5>
    <li>Chip: ${phone.mainFeatures.chipSet}</li>
    <li>Display Size: ${phone.mainFeatures.displaySize}</li>
    <li>Memory: ${phone.mainFeatures.memory}</li>
    <li>Storage: ${phone.mainFeatures.storage}</li>
    <li>Bluetooth: ${phone.others.Bluetooth}</li>
    <li>GPS: ${phone.others.GPS}</li>
    <li>NFC: ${phone.others.NFC}</li>
    <li>Radio: ${phone.others.Radio}</li>
    <li>USB: ${phone.others.USB}</li>
    <li>WLAN: ${phone.others.WLAN}</li>
    </div> 
  </div>
  `;
  phoneDetails.appendChild(div);
  }
  else if(!phone.others){
    const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img class="img-fluid p-5" src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.name}</h5>
    <h5 class="card-title">${phone.releaseDate}</h5>
    <div>
    <h5 class="card-title">Product details ${phone.name}</h5>
    <li>Chip: ${phone.mainFeatures.chipSet}</li>
    <li>Display Size: ${phone.mainFeatures.displaySize}</li>
    <li>Memory: ${phone.mainFeatures.memory}</li>
    <li>Storage: ${phone.mainFeatures.storage}</li>
    </div> 
  </div>
  `;
  phoneDetails.appendChild(div);
  }
  else{
    const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img class="img-fluid p-5" src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.name}</h5>
    <h5 class="card-title">${phone.releaseDate}</h5>
    <div>
    <h5 class="card-title">Product details ${phone.name}</h5>
    <li>Chip: ${phone.mainFeatures.chipSet}</li>
    <li>Display Size: ${phone.mainFeatures.displaySize}</li>
    <li>Memory: ${phone.mainFeatures.memory}</li>
    <li>Storage: ${phone.mainFeatures.storage}</li>
    <li>Bluetooth: ${phone.others.Bluetooth}</li>
    <li>GPS: ${phone.others.GPS}</li>
    <li>NFC: ${phone.others.NFC}</li>
    <li>Radio: ${phone.others.Radio}</li>
    <li>USB: ${phone.others.USB}</li>
    <li>WLAN: ${phone.others.WLAN}</li>
    </div> 
  </div>
  `;
  phoneDetails.appendChild(div);
  }
}