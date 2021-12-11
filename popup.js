// Initialize button with user's preferred color
let scrnShot = document.getElementById("scrnShot");
let img = document.getElementById("tab")

// When the button is clicked, inject setPageBackgroundColor into current page
scrnShot.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log("SCNSHOT")
    chrome.tabs.captureVisibleTab(null, {}, function (image) {
        console.log(image)
        img.src = image
    });
});

// The body of this function will be executed as a content script inside the
// current page
/*
function setPageScrnshot() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}
*/