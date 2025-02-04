fetch(chrome.runtime.getURL('quotes.json'))
    .then(response => response.json())
    .then(quotes => {
        const ads = document.querySelectorAll('div[class*="ad"], iframe[src*="ads"]');

        ads.forEach(ad => {
            const quoteElement = document.createElement('div');
            quoteElement.classList.add('motivational-quote');

            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteElement.textContent = randomQuote;

            ad.replaceWith(quoteElement);
        });
    })
    .catch(error => console.error("Error loading quotes:", error))