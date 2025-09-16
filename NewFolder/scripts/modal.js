const colorWhiteName = document.querySelector(".modal-section-color1-name");
const colorBlackName = document.querySelector(".modal-section-color2-name");

colorWhiteName.addEventListener("click", () => {
    colorWhiteName.style.backgroundColor = "black";
    colorWhiteName.style.color = "white";

    colorBlackName.style.backgroundColor = "transparent";
    colorBlackName.style.color = "black";
});

colorBlackName.addEventListener("click", () => {
    colorBlackName.style.backgroundColor = "black";
    colorBlackName.style.color = "white";

    colorWhiteName.style.backgroundColor = "transparent";
    colorWhiteName.style.color = "black";
});

