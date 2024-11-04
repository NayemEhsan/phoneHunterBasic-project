

const loadPhone = async (searchText='iphone',isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones,isShowAll) =>{


  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';


// make a button logical show more phone option
  const showAllContainer = document.getElementById('showall-container');
  if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
  }else{
    showAllContainer.classList.add('hidden')
  }
  // console.log('is show all', isShowAll);

  if(!isShowAll){
         // display only 12 phones
  phones = phones.slice(0,12);

  }

 phones.forEach(phone => {
    // console.log(phone);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-base-100 w-96 shadow-xl bg-white text-black`;
    phoneCard.innerHTML = `
     <figure class="px-10 pt-10">
        <img
        src="${phone.image}"
        alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.brand}</h2>
        <h3>${phone.phone_name}</h3>
        <p>${phone.slug}</p>
        <div class="card-actions">
        <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
    </div>

    `;
    phoneContainer.appendChild(phoneCard);
 });
//  terminate loading spinner
 loadSpinner(false);
}

const showDetails = async (id)=>{
 const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
 const data = await res.json();
//  console.log(data);
 const phone = data.data;
displayShowData(phone);

}

const displayShowData = (phone) =>{
 const showDataContainer = document.getElementById('showData-container');
 showDataContainer.innerHTML=  `
<div class="content-center">
<img class="rounded my-4 mx-2 " src="${phone.image}" alt="">
</div>
<h1 class="text-4xl ml-2 my-2">${phone.name}</h1>


<p><span class="font-bold text-xl">Storage:</span> ${phone.mainFeatures.storage}</p>
<p><span class="font-bold text-xl">Display Size:</span> ${phone.mainFeatures.displaySize}</p>
<p><span class="font-bold text-xl">Chipset:</span> ${phone.mainFeatures.chipSet}</p>
<p><span class="font-bold text-xl">Memory:</span> ${phone.mainFeatures.memory}</p>
<p><span class="font-bold text-xl">Slug:</span> ${phone.slug}</p>
<p><span class="font-bold text-xl">Release Data:</span> ${phone.releaseDate}</p>
<p><span class="font-bold text-xl">Brand:</span> ${phone.brand}</p>
`;

phone_details.showModal();

}

// search function
const serachPhone = (isShowAll) =>{
  // start load spinner
  loadSpinner(true);
const  inputContainer = document.getElementById('input-search');
// console.log(inputContainer);
const searchText =inputContainer.value;
loadPhone(searchText,isShowAll);

}

// spinner function

const loadSpinner =(isLoading)=>{
  const loadContainer = document.getElementById('loading-spinner');
  if(isLoading){
    loadContainer.classList.remove('hidden');
  }else{
    loadContainer.classList.add('hidden');
  }
}

// show all data function
const showall =()=>{
  serachPhone(true);

}

loadPhone();