const filterForm = document.getElementById("filter-form");
const filterFormSide = document.getElementById("filter-form-side");


const tops = ["Plain Grey Shirt", "Black Suit", "Brown Jacket", "Grey Long Sleeves", "Neko Shirt", "White V-neck", "White Jacket", "Purple Shirt", "Moss Green Jacket", "Orange Jacket", "Biker Leather Jacket", "Abstract Color Shirt"];

const topsPrices = ["Rp150.000", "Rp650.000", "Rp370.000", "Rp250.000", "Rp150.000", "Rp150.000", "Rp250.000", "Rp300.000", "Rp560.000", "Rp450.000", "Rp850.000", "Rp180.000"];

const bottoms = ["Egg Bottoms", "Blue Bottoms", "Striped Bottoms", "Ripped Jeans", "Blue Jeans", "Orange Bottoms", "Black Bottoms", "Orange Shorts", "Grey Bottoms", "Purple-Grey Shorts", "Grey Shorts", "Jean Shorts"];

const bottomsPrices = ["Rp200.000", "Rp450.000", "Rp270.000", "Rp350.000", "Rp350.000", "Rp260.000", "Rp250.000", "Rp170.000", "Rp440.000", "Rp150.000", "Rp180.000", "Rp250.000"]; 

const itemCollection = document.getElementsByClassName("item-info-clothes");
const categoryH1 = document.getElementsByClassName("store-category");

let showTops = () => {

    for(let i = 0; i < 12; i++){
    
        itemCollection[i].previousElementSibling.src = `./img/store/tops/top_${i + 1}.png`;
        
        itemCollection[i].childNodes[1].innerText = "Men's tops";
        itemCollection[i].childNodes[3].innerText = tops[i];
        itemCollection[i].childNodes[5].innerText = topsPrices[i];
    }

    categoryH1[0].firstElementChild.innerText = "Category: Tops";

}

let showBottoms = () => {
    for(let i = 0; i < 12; i++){
    
        itemCollection[i].previousElementSibling.src = `./img/store/bottoms/bottom_${i + 1}.png`;
        
        itemCollection[i].childNodes[1].innerText = "Men's bottoms";
        itemCollection[i].childNodes[3].innerText = bottoms[i];
        itemCollection[i].childNodes[5].innerText = bottomsPrices[i];
    }

    categoryH1[0].firstElementChild.innerText = "Category: Bottoms";
}


filterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const category = document.getElementById("category-filter").value;

    if(category == "filter-tops"){
        showTops();
    } else {
        showBottoms();
    }
})

filterFormSide.addEventListener("submit", (e) => {

    e.preventDefault();

    const category = document.getElementById("category-filter-side").value;

    if(category == "filter-tops"){
        showTops();
    } else {
        showBottoms();
    }

})