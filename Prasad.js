let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createandappendsearchinout(result) {
    let {
        title,
        link,
        description
    } = result;
    //1.div container-result_itme
    let resultitem = document.createElement("div");
    resultitem.classList.add("result-item");
    searchResultsE1.appendChild(resultitem);
    //ancha-title resulttitle
    let resulttitle = document.createElement("a");
    resulttitle.classList.add("result-title");
    resulttitle.textContent = title;
    resulttitle.href = link;
    resulttitle.target = "_blank";
    resultitem.appendChild(resulttitle);
    //titlebreak
    let titlebreak = document.createElement("br");
    resultitem.appendChild(titlebreak);
    //anchor url resulturl
    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.target = "_blank";
    urlE1.textContent = link;
    resultitem.appendChild(urlE1);
    //linre breakElemen
    let linebreak = document.createElement("br");
    resultitem.appendChild(linebreak);
    //paragrapha description 
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultitem.appendChild(descriptionEl);

}

function displayResult(search_results) {
    spinnerE1.classList.toggle("d-none");
    for (let result of search_results) {
        createandappendsearchinout(result);
    }
}

function wikipeadia(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.toggle("d-none");
        searchResultsE1.textContent = "";
        let searchInputE1value = searchInputE1.value;
        //console.log(searchInputE1value)
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputE1value;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResult(search_results)
            })
    }

}





searchInputE1.addEventListener("keydown", wikipeadia)