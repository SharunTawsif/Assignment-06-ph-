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
            <a href="" class="text-[#1F2937]/80 text-left text-xl">${category.category_name}</a>
        `;
        categoryContainer.append(btnDiv);
    }

}
// Category loading end