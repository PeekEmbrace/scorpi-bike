const placeId = 'ChIJKflki78_TEYRUFf_TWF3nNM';
const reviewsWrapper = document.querySelector('.reviews-wrapper');
const ourClientsSection = document.querySelector('.our-clients');
const reviewsSchema = [];

function getAuthorAccount(url) {
  return url.split('/').slice(0, -1).join('/');
}

function getStars(rating) {
  let starBuilder = '';

  for (let i = 0; i < rating; i++) {
    starBuilder += `
      <img
        src='images/star.png'
        alt='Star icon used for the rating'
        width='15'
        height='14'
      />
    `;
  }

  return starBuilder;
}

// eslint-disable-next-line no-unused-vars
function deleteOurClientsSection() {
  ourClientsSection.remove();
}

// eslint-disable-next-line no-unused-vars
function setReviews(reviews) {
  for (let review of reviews) {
    const reviewUrl = getAuthorAccount(review.author_url) + `/place/${placeId}`;
    const reviewElement = `
        <article class='review swiper-slide'>
            <img
              class='reviewer-image'
              src='${review.profile_photo_url}'
              alt='Reviewer profile image'
              width='99'
              height='97'
            />
            <p class='reviewer-name'>${review.author_name}</p>
            <section class='reviewer-rating'>
               ${getStars(review.rating)}
            </section>
            <p class='reviewer-comment'>"${review.text}"</p>
            <a href='${reviewUrl}' class='base-button' target='_blank' rel='noopener'>Read On Google</a>
          </article>
      `;

    reviewsSchema.push({
      '@type': 'Review',
      'reviewBody': review.text,
      'author': {
        '@type': 'Person',
        'name': review.author_name
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': review.rating
      }
    }
    );

    reviewsWrapper.insertAdjacentHTML('beforeend', reviewElement);
  }

  // eslint-disable-next-line no-undef
  createSchema(reviewsSchema);

  ourClientsSection.classList.add('has-reviews');
  // eslint-disable-next-line no-undef
  initSwiper();
}
