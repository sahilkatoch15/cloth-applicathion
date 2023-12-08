
fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    let datal = "";
    completedata.map((values) => {
        datal += `  
        <div class="card">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3" >
                        <h2 class="title">${values.title}</h2>
                        <img src="${values.image}" alt="img" class="images">
                        <p>${values.description}</p>
                        <p class="category">${values.category}</p>
                        <p class="price">${values.price}</p>
                        <button class="btn">add to card</button>
                    </div>
                </div>
            </div>
        </div>`
    })
    document.getElementById("cards").innerHTML = datal;
}).catch((err) => {
    console.log(err);
})

fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then((completedata) => {
        let datal = "";
        completedata.forEach((values, index) => {
            datal += `
            <div class="col-sm-3">
                <div class="card" onclick="showProductDetails(${values.id})">
                    <h2 class="title">${values.title}</h2>
                    <img src="${values.image}" alt="img" class="images">
                    <p>${values.description}</p>
                    <p class="category">${values.category}</p>
                    <p class="price">${values.price}</p>
                    <button class="btn">add to card</button>
                </div>
            </div>`;
        });
        datal = `
            <div class="container">
                <div class="row">
                    ${datal}
                </div>
            </div>`;

        document.getElementById("cards").innerHTML = datal;
    })
    .catch((err) => {
        console.log(err);
    });
function showProductDetails(productId) {
    window.location.href = `productdetails.html?id=${productId}`;
}
