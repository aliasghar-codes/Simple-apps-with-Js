let arr = [
    {
        name: "dove",
        url: "https://images.unsplash.com/photo-1710432157519-e437027d2e8f?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "girl",
        url: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "beach",
        url: "https://images.unsplash.com/photo-1710415273421-4d19cc02b839?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "girl with short hairs",
        url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "city",
        url: "https://images.unsplash.com/photo-1710228010417-a8d07002b83c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "dinner",
        url: "https://plus.unsplash.com/premium_photo-1710267549295-aab38cb5d5c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "buildings",
        url: "https://images.unsplash.com/photo-1710352492489-ba6d8cbe5bcb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "aurora",
        url: "https://images.unsplash.com/photo-1710246650929-f2758e3666e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "dubai",
        url: "https://images.unsplash.com/photo-1710461638555-27795861894f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


function showCards(){
    let cluster = "";
    arr.forEach((element)=>{
        cluster += `<div class="box"><img src="${element.url}" alt=""></div>`;
    })
    document.querySelector("main .images").innerHTML = cluster;
}
showCards();

function handleSearch(){
    let searchResult = document.querySelector(".search-result");
    let input = document.querySelector("header input");
    input.addEventListener("focus",()=>{
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur",()=>{
        document.querySelector(".overlay").style.display = "none";
        searchResult.style.display = "none";
    })
    input.addEventListener("input", ()=>{
        let filteredArr = arr.filter(obj => {
            return obj.name.toLowerCase().startsWith(input.value)
        })
        searchResult.style.display = "flex";
        let clutter = "";
        filteredArr.forEach((element)=>{
            clutter += `<div class="searchContent">
            <i class="ri-search-line"></i>
            <h3>${element.name}</h3>
        </div>`;
        })
        searchResult.innerHTML = clutter;
    })
}
handleSearch();