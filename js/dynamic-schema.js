// eslint-disable-next-line no-unused-vars
function createSchema(reviews) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    image: ['https://scorpiobike.dk/images/logo.png'],
    name: 'Scorpio Bike',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Fynsgade 6',
      addressLocality: 'Aarhus',
      addressRegion: 'Central Denmark Region (Midtjylland)',
      postalCode: '8000',
      addressCountry: 'DK',
    },
    map: 'https://g.page/ScorpioBike01?share',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.164506617622315,
      longitude: 10.202232602658677,
    },
    url: 'https://scorpiobike.dk/',
    telephone: '+4591548718',
    email: 'scorpiobike01@gmail.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '8:30',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '8:30',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '9:00',
        closes: '13:00',
      },
    ],
    priceRange: '$',
    review: reviews,
  };

  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}