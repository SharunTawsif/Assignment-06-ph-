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

const removeActive = () => {
    const categoryButton = document.querySelectorAll(".flagg") //agee dot disi karon css er moto kore dhorte hoy 
    for (const ctBtn of categoryButton) {
        ctBtn.classList.remove("active");
    }
}



// load all plant start

const allPlant = () => {
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

                <p class="text-left font-bold text-lg mt-3">
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

                <button class="bg-[#15803D] rounded-3xl text-white p-3 w-full mt-4">
                    Add to Cart
                </button>
            </div>

        `;
        treeContainer.append(card);

    }
}






// load all plant end









// category element start

const loadCategoryElement = (categoryId) => {
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

                <p class="text-left font-bold text-lg mt-3">
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

                <button class="bg-[#15803D] rounded-3xl text-white p-3 w-full mt-4">
                    Add to Cart
                </button>
            </div>

        `;
        treeContainer.append(card);

    }
}


// category element end