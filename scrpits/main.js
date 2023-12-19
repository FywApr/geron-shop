const clothes = [
    {
        name: "Plain Sharf With Fringing",
        price: "$45",
        image: "/images/products/sharf.webp",
        type: "accessories",
        status: "none"
    }
]




window.onload = () => {
    const productsList = document.getElementById('products-list');
    const choiceList = document.querySelectorAll('.product-choice');
    clothes.forEach((clothe) => {
        productsList.innerHTML += `<li class="product-item">
            <div class="product-image">
                <img src="${clothe.image}" alt="${clothe.name}">
            </div>
            <div class="product-info">
                <span class="product-name">
                    ${clothe.name}
                </span>
                <p class="product-price">
                    ${clothe.price}
                </p>
            </div>
        </li>`
    })
    choiceList.forEach((choice) => {
        choice.addEventListener("click", function () {
            productsList.innerHTML = ``;
            if (choice.id === "all") {
                clothes.forEach((clothe) => {
                    productsList.innerHTML += `<li class="product-item">
                    <a href="#">
                        <div class="product-image">
                            <img src="${clothe.image}" alt="${clothe.name}">
                        </div>
                        <div class="product-info">
                            <span class="product-name">
                                ${clothe.name}
                            </span>
                            <p class="product-price">
                                ${clothe.price}
                            </p>
                        </div>
                        </a>
                    </li>`
                })
            } else {
                const newClothes = clothes.filter((clothe) => {
                    return clothes.type === type
                })
            }
        })
    })


}