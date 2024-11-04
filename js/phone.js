

const loadPhone = async (searchText,isShowAll) =>{
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
  console.log('is show all', isShowAll);

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
        <button class="btn btn-primary">Show Details</button>
        </div>
    </div>

    `;
    phoneContainer.appendChild(phoneCard);
 });
//  terminate loading spinner
 loadSpinner(false);
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

