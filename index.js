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
            <button onclick="loadCategoryElement('${category.id}')" class="text-[#1F2937]/80 text-left text-medium">${category.category_name}</button>
        `;
        categoryContainer.append(btnDiv);
    }

}
// Category loading end



// category element start

const loadCategoryElement = (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/category/${categoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategoryElement(data.plants))

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
                    <p class="inline-block bg-[#DCFCE7] rounded-xl px-2 py-1">
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