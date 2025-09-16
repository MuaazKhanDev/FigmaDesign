document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal-wrapper");
    const overlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".modal-section-crossicon");
    const addToCartBtn = document.querySelector(".addtocart-button");
    const addIcons = document.querySelectorAll(".addicon-image");

    const openModal = () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    };

    const closeModal = () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    };

    addIcons.forEach(icon => {
        icon.addEventListener("click", async (e) => {
            const productBox = e.target.closest(".imagebox");
            const productId = parseInt(productBox.getAttribute("data-id"));

            try {
                const response = await fetch("/NewFolder/json/products.json");
                const data = await response.json();
                const products = data.products;
                const product = products.find(p => p.id === productId);

                if (product) {
                    modal.querySelector(".modal-section-part1-image img").src = product.img_url;
                    modal.querySelector(".modal-section-part1-logo").textContent = product.name;
                    modal.querySelector(".modal-section-part1-price").textContent = product.price;
                    modal.querySelector(".modal-section-part1-description").textContent = product.description;
                    openModal();
                }
            }
            catch (err) {
                console.error("Error fetching product data", err);
            }
        });
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    addToCartBtn.addEventListener("click", closeModal);
});


