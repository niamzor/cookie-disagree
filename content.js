const keywords = [
    "continuer sans accepter",
    "refuser",
    "rejeter",
    "gérer les paramètres > Tout refuser",
    "tout refuser",
    "interdire les cookies",
    "sauvegarder mes choix",
    "uniquement autoriser les cookies essentiels",
    "refuser les cookies non nécessaires",
    "décliner",
    "tout interdire",
    "non merci",
    "reject",
    "disagree",
];
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const debug = false;

let timer = setInterval(function() {
    for (let keyword of keywords) {
        let xpath = "//*[translate(text(), '" + uppercase + "', '" + lowercase + "') = '" + keyword + "']";
        checkForButton(xpath);
    }

    function checkForButton(xpath) {
        if (debug) console.log('xpath : ', xpath);

        if (typeof xpath !== 'string') {
            return;
        }

        let xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        let element = xpathResult.iterateNext();
        if (debug) console.log('element : ', element);

        if (element === null) {
            if (debug) console.log('element is null, move on');
            return;
        }

        if (debug) console.log('element is not null, continue');

        element.click();
    
        if (debug) console.log('Consent has been revoked');
        stopTryin();
    }
    
    window.addEventListener('load', checkForButton);
}, 500);

function stopTryin() {
    window.clearInterval(timer);
    if (debug) console.log('timer cleared');
}

setTimeout(stopTryin, 5000);