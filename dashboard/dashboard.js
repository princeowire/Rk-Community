
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup")
    alert = "added"
    ;
}

document.addEventListener ("DOMContentLoaded", function() {
    let contentSelector = document.getElementById("selector");
    let contentContainer = document.getElementById("container");

    contentSelector.addEventListener("change", function () {
        let selectedValue = contentSelector.value;

        contentContainer.innerHTML = "";

        if (selectedValue === "option1") {
            contentContainer.innerHTML = "<p>This is content for Option 1.</p>";
        } else if (selectedValue === "option2") {
            contentContainer.innerHTML = "<p>This is content for Option 2.</p>";
        } 
    });

    contentSelector.dispatchEvent(new Event("change"));
});
