chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get("debug", ({debug}) => {
        if (debug === true) {
            chrome.storage.sync.set({"debug": true});
            console.log("Debugging is enabled");
        } else {
            console.log("Debugging is disabled");
        }
    });
}); 
