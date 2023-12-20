const clothes = [
    {
        name: "Plain Sharf With Fringing",
        price: "$45",
        image: "/images/products/sharf.webp",
        type: "accessories",
        status: "none",
        id: 1
    },
    {
        name: "Black T-Shirt",
        price: "$25",
        image: "/images/products/tshirt.png",
        type: "boys",
        status: "hot",
        id: 2
    },
    {
        name: "Sunglasses",
        price: "$15",
        image: "/images/products/glasses.png",
        type: "accessories",
        status: "hot",
        id: 3
    },
    {
        name: "Black T-Shirt For Women",
        price: "$25",
        image: "/images/products/tshirt-for-girls.png",
        type: "girls",
        status: "none ",
        id: 4
    },
    {
        name: "Sweater 'New Year'",
        price: "$38",
        image: "/images/products/sweater.png",
        type: "boys",
        status: "hot",
        id: 5
    },
    {
        name: "Hat",
        price: "$40",
        image: "/images/products/hat.png",
        type: "boys",
        status: "sale",
        id: 6
    },
]



window.onload = () => {

    const productsList = document.getElementById('products-list');
    const choiceList = document.querySelectorAll('.product-choice');
    const renderClothes = clothe => {
        productsList.innerHTML += `<li class="product-item" id="${clothe.id}">
        <a href="#">
            <div class="product-image" data-status="${clothe.status}">
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
    }
    clothes.forEach((clothe) => {
        renderClothes(clothe)
    })


    choiceList.forEach((choice) => {
        choice.addEventListener("click", function () {
            choiceList.forEach((choice) => {
                choice.setAttribute("data-choice", "false")
            })
            choice.setAttribute("data-choice", "true")
            productsList.innerHTML = ``;
            if (choice.id === "all") {
                clothes.forEach((clothe) => {
                    renderClothes(clothe)
                })
                console.log(window.document.querySelector("[data-status]"))
            } else {
                const newClothes = clothes.filter((clothe) => {
                    return clothe.type === choice.id
                })
                newClothes.forEach((clothe) => {
                    renderClothes(clothe)
                })
            }
        })
    })


}