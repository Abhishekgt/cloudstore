document.addEventListener("DOMContentLoaded", function() {
    const bestsellers = [
        { img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741358933_1028222.jpg?format=webp&w=360&dpr=1.5", name: "Best Seller 1" },
        { img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741345234_2786880.jpg?format=webp&w=360&dpr=1.5", name: "Best Seller 2" },
        { img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1739512994_5204844.jpg?format=webp&w=360&dpr=1.5", name: "Best Seller 3" }
    ];
    
    const categories = [
        { img: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Tops_copy_kSUeUkf.jpg?format=webp&w=480&dpr=1.5", name: "Tops" },
        { img: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/sneakers_copy_S2Qrmtv.jpg?format=webp&w=480&dpr=1.5", name: "Sneakers" },
        { img: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/jackets_n_more_vMI4YkZ.jpg?format=webp&w=480&dpr=1.5", name: "Jackets" }
    ];
    
    function populateSection(sectionId, items) {
        const container = document.getElementById(sectionId);
        items.forEach(item => {
            const element = document.createElement("div");
            element.className = "product";
            element.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            container.appendChild(element);
        });
    }
    
    populateSection("bestsellers", bestsellers);
    populateSection("categories", categories);
    
    // Add images for Shop by Themes, Why Choose Us, and Membership Perks
    document.getElementById("themes").innerHTML += `<img src="img/themes-banner.jpg" alt="Shop by Themes Banner" class="full-width">`;
    document.getElementById("info").innerHTML += `https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_1.jpg?format=webp&w=1500&dpr=1.5" alt="Why Choose Us Banner" class="full-width">`;
    document.getElementById("membership").innerHTML += `<img src="img/membership-perks.jpg" alt="Membership Perks Banner" class="full-width">`;
});
