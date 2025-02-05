// fetch user preference from chrome storage
chrome.storage.sync.get("contentType", function(data) {
    const selectedType = data.contentType || "quotes"

    const fileName = selectedType === "quotes" ? "quotes.json" : "reminders.json";

    fetch(chrome.runtime.getURL(fileName))
        .then(response => response.json())
        .then(contentArray => {
            const ads = document.querySelectorAll('div[class*="ad"], iframe[src*="ads"]');

            ads.forEach(ad => {
                const contentElement = document.createElement('div');
                contentElement.classList.add('motivational-quote');

                const randomContent = contentArray[Math.floor(Math.random() * contentArray.length)];
                contentElement.textContent = randomContent;

                ad.replaceWith(contentElement);
            });
        })
        .catch(error => console.error("Error loading content:", error));
});