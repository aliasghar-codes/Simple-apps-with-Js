const products = [
    {
        name: "Black shoe",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "By now or cry forever",
        price: "$150"
    },
    {
        name: "Black watch",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "By now or cry forever",
        price: "$350"
    },
    {
        name: "Black headphone",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "By now or cry forever",
        price: "$550"
    }
]

const cart = [];

const populars = [
    {
        name: "Controller",
        image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "By now or cry forever",
        price: "$100"
    },
    {
        name: "Switch controller",
        image: "https://images.unsplash.com/photo-1585857188823-77658a70979a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "By now or cry forever",
        price: "$250"
    },
    {
        name: "PS5 Controller",
        image: "https://images.unsplash.com/photo-1554213352-5ffe6534af08?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "By now or cry forever",
        price: "$350"
    }
]

function showCards(){
    let cluster = '';
    products.forEach((product, index)=>{
        cluster += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
            <img src="${product.image}" class="w-[14rem] h-[13rem] object-cover" alt="">
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">${product.price}</h4>
                </div>
                <button data-value="${index}" class="w-10 h-10 rounded-full shader text-yellow-400">
                <i data-value="${index}" class="ri-add-line"></i></button>
            </div>
        </div>
        </div>`;
    })
    document.querySelector(".products").innerHTML = cluster;
}
showCards();

function showPopularProducts(){
    let cluster = "";
    populars.forEach((product)=>{
        document.querySelector(".populars").innerHTML += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
    </div>`;
    })
}
showPopularProducts();

function productToCart(){
    document.querySelector(".products").addEventListener("click", (event)=>{

        if(!cart.includes(products[event.target.dataset.value])){
            cart.push(products[event.target.dataset.value]);
        }

        let cartexpand = document.querySelector(".cartexpnd");
        let count = true;

        document.querySelector(".carticon").addEventListener("click", function(){
            if(count){
                cartexpand.style.display = "block";
            }else{
                cartexpand.style.display = "none";
            }
            count = !count;
        })
        let clutter = "";
        cart.forEach(prod => {
            clutter += `
            <div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img src="${prod.image}" class="w-full h-full object-cover" alt="">
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                    </div>
                </div>
            `;
        })
        cartexpand.innerHTML = clutter;
    })
}
productToCart();