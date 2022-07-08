let debugToggle = document.querySelector('input[name="debug"]');

chrome.storage.sync.get("debug", ({debug}) => {
    if (debug === true) {
        debugToggle.checked = true;
    }
});

debugToggle.addEventListener('change', function (event) {
    if (event.currentTarget.checked === true) {
        chrome.storage.sync.set({"debug": true});
        console.log("Debuggin has been enabled");
    } else {
        chrome.storage.sync.set({"debug": false});
        console.log("Debugging has been disabled");
    }
});