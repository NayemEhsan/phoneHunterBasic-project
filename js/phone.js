

const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones =>{

  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';

 phones.forEach(phone => {
    console.log(phone);
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
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>

    `;
    phoneContainer.appendChild(phoneCard);
 });
}

const serachPhone = () =>{
const  inputContainer = document.getElementById('input-search');
console.log(inputContainer);
const searchText =inputContainer.value;
loadPhone(searchText);

}

