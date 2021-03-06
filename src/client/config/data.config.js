const { HashRouter } = require("react-router-dom");

module.exports = {
    // home page
    cardMoney: 16.234,
    masterCard: 'mastercard.png',
    visaLogo: 'Visa-Logo.png',
    masterCardLogo: 'MasterCard-Logo.png',
    upcomingBills: [
            { title: 'Netflix', price: 12.00, image: 'netflix.svg', id: 1, date: '2020-07-21' },
            { title: 'Apple TV', price: 10.00, image: 'apple.svg', id: 2, date: '2020-07-21' },
            { title: '+38 063 12 34 567', price: 5.00, image: 'lifecell.svg', id: 3, date: '2020-07-21' }
        ],
        monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ],
        spendingBreakdown: [
            { title: 'Grocery', sum: 766.38, lineWidth: '90%' },
            { title: 'Bills', sum: 456.91, lineWidth: '80%' },
            { title: 'Transport', sum: 255.28, lineWidth: '70%' },
            { title: 'Subscriptions', sum: 181.42, lineWidth: '60%' }
        ],
        sendMoneyPhotos: [
            {image: "face-photo(1)"}, 
            {image: "face-photo(2)"}, 
            {image: "face-photo(3)"}, 
            {image: "face-photo(4)"},
            {image: "face-photo(5)"},
            {image: "face-photo(6)"},
            {image: "face-photo(7)"},
            {image: "face-photo(8)"}
        ],
        recentOperations: [
            {title: "5367 7603 5710 9553", price: 50, image: 'face-photo(1).jpg'},
            {title: "Spotify", price: 5, image: 'spotify-icon.png'},
            {title: "Rocket Espresso", price: 10, image: 'rocket-espresso.jpg'}
        ],
        // transfer page
        briefcase: 'briefcase.svg',
        creditCards: 'credit-cards.svg',
        debitCard: 'blue_card.png',
        contactsItem: [
            {image: 'face-photo(1).jpg', name: 'Aurora Richards'},
            {image: 'face-photo(2).jpg', name: 'Ben Smith'},
            {image: 'face-photo(3).jpg', name: 'Charlotte Johnson'},
            {image: 'face-photo(4).jpg', name: 'Daniel Williams'},
            {image: 'face-photo(5).jpg', name: 'Emma Brown'},
            {image: 'face-photo(6).jpg', name: 'Finn Jones'},
            {image: 'face-photo(7).jpg', name: 'Grace Miller'},
            {image: 'face-photo(8).jpg', name: 'Henry Davis'},
            {image: 'face-photo(9).jpg', name: 'James Brown'},
            {image: 'face-photo(10).jpg', name: 'Nora Taylor'},
            {image: 'face-photo(11).jpg', name: 'Olivia Anderson'},
            {image: 'face-photo(12).jpg', name: 'Sophia White'},
            {image: 'face-photo(13).jpg', name: 'Victoria Scott'},
            {image: 'face-photo(14).jpg', name: 'Ryan Baker'},
            {image: 'face-photo(15).jpg', name: 'William Adams'},
            {image: 'face-photo(16).jpg', name: 'Brooklyn Evans'},
        ],
        paymentItems: [
            {icon: 'phone-icon.svg', name: 'Mobile communication' },
            {icon: 'municipal-services-icon.svg', name: 'Municipal services' },
            {icon: 'bank-icon.svg', name: 'By bank details' },
            {icon: 'internet-icon.svg', name: 'Internet' },
            {icon: 'tv-icon.svg', name: 'TV' },
            {icon: 'public-service-icon.svg', name: 'Public service' },
            {icon: 'transport-icon.svg', name: 'Transport' },
            {icon: 'games-icon.svg', name: 'Games' },
            {icon: 'education-icon.svg', name: 'Education' },
            {icon: 'e-wallets-icon.svg', name: 'E-wallets' },
            {icon: 'travelling-icon.svg', name: 'Travelling' },
            {icon: 'e-commerce-icon.svg', name: 'E-commerce' }

        ],
        // spending page
        spending: 1.948,
        expenses: 1.948,
        income: 2.543,
        spendingInfo: [
            { color: "rgb(43, 202, 240)", width: "26%" },
            { color: "rgb(31, 255, 113)", width: "21%" },
            { color: "rgb(224, 151, 30)", width: "17%" },
            { color: "rgb(253, 57, 17)", width: "13%" },
            { color: "rgb(153, 55, 224)", width: "9%" },
            { color: "rgb(0, 130, 230)", width: "6%" },
            { color: "rgb(129, 133, 142)", width: "4%" },
          ],
        spendingBreakdownInfo: [
            {
              title: "Grocery",
              color: "rgb(43, 202, 240)",
              sum: 766,
              icon: 'shopping-cart-black.svg',
              lineWidth: "100%",
            },
            {
              title: "Bills",
              color: "rgb(31, 255, 113)",
              sum: 456,
              icon: 'money.svg',
              lineWidth: "90%",
            },
            {
              title: "Transport",
              color: "rgb(224, 151, 30)",
              sum: 255,
              icon: 'bus-black.svg',
              lineWidth: "80%",
            },
            {
              title: "Subscriptions",
              color: "rgb(253, 57, 17)",
              sum: 181,
              icon: 'dollar.svg',
              lineWidth: "70%",
            },
            {
              title: "Entertainment",
              color: "rgb(153, 55, 224)",
              sum: 134,
              icon: 'popcorn.svg',
              lineWidth: "60%",
            },
            {
              title: "Apparel",
              color: "rgb(0, 130, 230)",
              sum: 96,
              icon: 'shirt.svg',
              lineWidth: "50%",
            },
            {
              title: "Other",
              color: "rgb(129, 133, 142)",
              sum: 54,
              icon: 'more.svg',
              lineWidth: "40%",
            },
          ],
        // history page
        transactionsItemsToday: [
            { title: '5367 7603 5710 9553', sum: '- $50', image: 'face-photo(1).jpg' },
            { title: 'Rocket Espresso', sum: '- $10', image: 'rocket-espresso.jpg' },
            { title: '6804 7846 9752 2365', sum: '+ $100', image: 'face-photo(2).jpg' },
            { title: 'Walmart', sum: '- $10', image: 'walmart-icon.png' },
        ],
        transactionsItemsYesterday: [
            { title: '9025 8503 7501 8611', sum: '+ $50', image: 'face-photo(3).jpg' },
            { title: 'Spotify', sum: '- $5', image: 'spotify-icon.png' },
            { title: 'Rocket Espresso', sum: '- $10', image: 'rocket-espresso.jpg' },
            { title: '6804 7846 9752 2365', sum: '- $100', image: 'face-photo(4).jpg' }
        ],
        transactionsItemsDaysAgo: [
            { title: 'Rocket Espresso', sum: '- $10', image: 'rocket-espresso.jpg' },
            { title: 'Spotify', sum: '- $5', image: 'spotify-icon.png' },
        ],
        billsItems: [
            { title: 'Netflix', price: 12, image: 'netflix.svg', date: 'Mon, 25' },
            { title: 'Apple TV', price: 10, image: 'apple.svg', date: 'Fr, 17' },
            { title: '+38 063 12 34 567', price: 5, image: 'lifecell.svg', date: 'Wen, 14' }
        ],
        billsItemsMore: [
          { title: 'Netflix', price: 12, image: 'netflix.svg', date: 'Mon, 25' },
          { title: 'Apple TV', price: 10, image: 'apple.svg', date: 'Fr, 17' },
          { title: '+38 063 12 34 567', price: 5, image: 'lifecell.svg', date: 'Wen, 14' },
          { title: 'Netflix', price: 12, image: 'netflix.svg', date: 'Mon, 25' },
          { title: 'Apple TV', price: 10, image: 'apple.svg', date: 'Fr, 17' },
          { title: '+38 063 12 34 567', price: 5, image: 'lifecell.svg', date: 'Wen, 14' },
          { title: 'Netflix', price: 12, image: 'netflix.svg', date: 'Mon, 25' },
          { title: 'Apple TV', price: 10, image: 'apple.svg', date: 'Fr, 17' },
          { title: '+38 063 12 34 567', price: 5, image: 'lifecell.svg', date: 'Wen, 14' }
        ]
};