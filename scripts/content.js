const ads = document.querySelectorAll('div[class*="ad"], iframe[src*="ads"]');
ads.forEach(ad => {
    const quote = document.createElement('div');
    quote.textContent = "Stay positive, you got this!"
    ad.replaceWith(quote);
});