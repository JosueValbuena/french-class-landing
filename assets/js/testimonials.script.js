const testimonialsContainer = document.querySelector('#testimonials-container');

const baseIpV1 = 'https://frances-con-esteban-review-back.onrender.com/api/v1/';

const fetchTestimonials = async () => {
    try {
        const response = await fetch(`${baseIpV1}reviews?status=active`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            /* body: JSON.stringify(data) */
        });
        if (!response.ok) return console.log('Error en la solicitud');
        const data = await response.json();
        return data.data.reviews;
    } catch (error) {
        console.error("Error de conexión:", error);
    };
};

const showCardsReviews = async () => {

    const reviews = await fetchTestimonials();

    if (!Array.isArray(reviews) && reviews.lenght < 1) {
        return console.log('No hay cards para mostrar');
    };

    reviews.slice(0, 6).forEach((element) => {
        const cardContainer = document.createElement('div');
        const reviewStarBox = document.createElement('div');
        const reviewAuthorName = document.createElement('div');
        const reviewAuthorAvatar = document.createElement('div');
        const reviewAuthorInfoBox = document.createElement('div');
        const reviewAuthorcountry = document.createElement('div');
        const reviewAuthorBox = document.createElement('div');
        const reviewStar = document.createElement('i');
        const reviewText = document.createElement('p');


        cardContainer.classList.add('testimonial-card');
        reviewStarBox.classList.add('stars');
        reviewAuthorBox.classList.add('testimonial-author');
        reviewStar.classList.add('fas');
        reviewStar.classList.add('fa-star');
        reviewText.classList.add('testimonial-text');
        reviewAuthorName.classList.add('author-name');
        reviewAuthorAvatar.classList.add('author-avatar');
        reviewAuthorAvatar.classList.add('bg-blue');
        reviewAuthorInfoBox.classList.add('author-info');
        reviewAuthorcountry.classList.add('author-role');

        reviewText.textContent = element.reviewText;
        reviewAuthorAvatar.textContent = element.userName.split(' ')[0].at(0).toUpperCase();
        reviewAuthorName.textContent = element.userName;
        reviewAuthorcountry.textContent = element.userCountry;

        Array.from({ length: element.reviewRate }).forEach((_) => {
            reviewStarBox.appendChild(reviewStar.cloneNode(true));
        });

        reviewAuthorInfoBox.appendChild(reviewAuthorName);
        reviewAuthorInfoBox.appendChild(reviewAuthorcountry);

        reviewAuthorBox.appendChild(reviewAuthorAvatar);
        reviewAuthorBox.appendChild(reviewAuthorInfoBox);

        cardContainer.appendChild(reviewStarBox);
        cardContainer.appendChild(reviewText);
        cardContainer.appendChild(reviewAuthorBox);
        testimonialsContainer.appendChild(cardContainer);
    });
};

showCardsReviews();