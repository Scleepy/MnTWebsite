const filterButton = document.getElementsByClassName("filter-button")[0];
const filterPanel = document.getElementsByClassName("filter-side")[0];

filterPanel.style.position = "fixed";

let isActiveFilter = false;

filterButton.addEventListener("click", (e) => {
    
    if(isActiveFilter){
        filterPanel.style.position = "fixed";
        filterPanel.classList.remove("show-filter");
        isActiveFilter = false;
    } else {
        filterPanel.style.position = "absolute";
        filterPanel.classList.add("show-filter");
        isActiveFilter = true;
    }

})