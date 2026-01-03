let cart = [];
// Category loading start
const loadCategories = () => {
fetch("https://openapi.programming-hero.com/api/categories")
  .then(res => res.json())
  .then(data => displayCategories(data.categories));
}

loadCategories();

const displayCategories = (categories) => {
    // for (const category of categories) {
    //     console.log(category.category_name)
    // }
    const categoryContainer = document.getElementById("level-container");
    categoryContainer.innerHTML = "";


    for (const category of categories) {
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button id = "category-btn-${category.id}" onclick="loadCategoryElement('${category.id}')" class="text-[#1F2937]/80 text-left text-medium hover:bg-[#15803D] p-3 rounded-md flagg">${category.category_name}</button>
        `;
        categoryContainer.append(btnDiv);
    }

}
// Category loading end







// spinner related things start

const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("tree-container").classList.add("hidden");

    }
    else {
        document.getElementById("tree-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
    }
}




// spinner related things end




const removeActive = () => {
    const categoryButton = document.querySelectorAll(".flagg") //agee dot disi karon css er moto kore dhorte hoy 
    for (const ctBtn of categoryButton) {
        ctBtn.classList.remove("active");
    }
}



// load all plant start

const allPlant = () => {
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => displayAllPlants(data.plants))
}

allPlant();

const displayAllPlants = (datas) => {
    const treeContainer = document.getElementById("tree-container")
    treeContainer.innerHTML =""

    for (const data of datas) {
        // console.log(element);
        const card = document.createElement("div")
        card.innerHTML = `
            <div
                class="bg-white text-black rounded-xl shadow-sm p-5 flex flex-col h-full"
                >
                <img src="${data.image}" alt="" class="h-40 object-cover rounded-md" />

                <p class="text-left font-bold text-lg mt-3 cursor-pointer" onclick="loadModal(${data.id})">
                        ${data.name}
                </p>

                <p class="text-left text-[#71717A]/80 flex-grow">
                    ${data.description}
                </p>

                <div class="flex justify-between items-center w-full mt-3">
                    <p class="inline-block bg-[#DCFCE7] rounded-2xl p-3 text-[#15803D]">
                    ${data.category}
                    </p>
                    <p class="font-semibold">৳${data.price}</p>
                </div>

                <button onclick = "addToCart(${data.id})" class="bg-[#15803D] rounded-3xl text-white p-3 w-full mt-4">
                    Add to Cart
                </button>
            </div>

        `;
        treeContainer.append(card);

    }
    manageSpinner(false);
}






// load all plant end









// category element start

const loadCategoryElement = (categoryId) => {
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${categoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removeActive();
        const clickBtn = document.getElementById(`category-btn-${categoryId}`)
        clickBtn.classList.add("active")
        displayCategoryElement(data.plants)

    })

}


const displayCategoryElement = (elements) => {
    const treeContainer = document.getElementById("tree-container")
    treeContainer.innerHTML =""

    for (const element of elements) {
        // console.log(element);
        const card = document.createElement("div")
        card.innerHTML = `
            <div
                class="bg-white text-black rounded-xl shadow-sm p-5 flex flex-col h-full"
                >
                <img src="${element.image}" alt="" class="h-40 object-cover rounded-md" />

                <p class="text-left font-bold text-lg mt-3 cursor-pointer" onclick="my_modal_5.showModal()">
                        ${element.name}
                </p>


                <p class="text-left text-[#71717A]/80 flex-grow">
                    ${element.description}
                </p>

                <div class="flex justify-between items-center w-full mt-3">
                    <p class="inline-block bg-[#DCFCE7] rounded-2xl p-3 text-[#15803D]">
                    ${element.category}
                    </p>
                    <p class="font-semibold">৳${element.price}</p>
                </div>

                <button onclick = "addToCart(${element.id})" class="bg-[#15803D] rounded-3xl text-white p-3 w-full mt-4">
                    Add to Cart
                </button>
            </div>

        `;
        treeContainer.append(card);

    }
    manageSpinner(false);
}


// category element end

// Modal things start

const loadModal = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data.plants))
    
}
// "plants": {
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
// }
const displayModal = (data) => {
    // console.log(data);
    const detailBox = document.getElementById("details-container");
    detailBox.innerHTML = `
            <div
                class="bg-white text-black rounded-xl shadow-lg p-5 flex flex-col h-full"
                >

                <p class="text-left font-bold text-xl mt-3 cursor-pointer my-5" onclick="my_modal_5.showModal()">
                        ${data.name}
                </p>

                <img src="${data.image}" alt="" class="h-60 object-cover rounded-md" />
                
                <p class=" my-2">
                    <span class ="font-bold">Category: </span> 
                    <span class="font-normal"> ${data.category}</span>
                </p>

                <p class="my-2">
                    <span class="font-bold">Price:</span>
                    <span class="font-normal"> ৳${data.price}</span>
                </p>
                


                <p class="font-bold my-2">
                    <span class="font-bold">Description: </span>
                    <span class="font-normal"> ${data.description} </span>
                </p>

                

            </div>
    `
    document.getElementById("my_modal_5").showModal();

}





// Modal things end


// cart things start

const addToCart = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then(res => res.json())
    .then (data => {
        cart.push(data.plants)
        displayCart();
    })
    
}



const displayCart = () => {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
    
    let totall = 0;

    for (let i = 0; i < cart.length; i++) {

        totall += cart[i].price;

        const div = document.createElement("div");
        div.innerHTML = `
            <div
              class="flex items-center justify-between text-black border-b text-left">
              <div>
                <h1 class="font-bold text-lg">${cart[i].name}</h1>
                <p class="text-gray-600">
                <span>৳</span>
                <span>${cart[i].price}</span>
                </p>
              </div>

              <button onclick = "removeFromCart(${i})" class="text-red-600 text-2xl hover:text-red-800">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
        `;

        cartContainer.append(div);
    }

    const total = document.createElement("div");
    total.innerHTML = `
        <p class="font-bold text-black text-right text-lg">
                <span>Total: ৳${totall}</span>
        </p>
    `
    cartContainer.append(total);
}

const removeFromCart = (index) => {
    let newCart = []
    for (let i = 0; i < cart.length; i++) {
        if (i != index) {
            newCart.push(cart[i]);
        }
    }
    cart = newCart;
    displayCart();
}



// cart things end




