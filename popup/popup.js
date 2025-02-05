document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="contentType"]');
    const saveButton = document.getElementById("save");

    chrome.storage.sync.get("contentType", function(data) {
        if (data.contentType) {
            document.querySelector(`input[value="${data.contentType}"]`).checked = true;
        }
    });

    saveButton.addEventListener("click", function () {
        const selectedContent = document.querySelector('input[name="contentType"]:checked').value
        chrome.storage.sync.set({ contentType: selectedContent }, function() {
            alert("Preference saved!");
        });
    });
});