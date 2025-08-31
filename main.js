const nerdDiv = document.getElementById("nerd-div");
const nerdDivs = Array.from(nerdDiv.children);

for (let i = 0; i < nerdDivs.length; i += 1) {
    nerdDivs[i] = nerdDivs[i].cloneNode(true);
}

function hideScripts() {
    nerdDiv.innerHTML = "";
    nerdDiv.appendChild(nerdShowButton);
}

const nerdHideButton = document.createElement("button");
nerdHideButton.innerText = "nerd no more";
nerdHideButton.onclick = hideScripts;

function showScripts() {
    nerdDiv.innerHTML = "";

    for (let i = 0; i < nerdDivs.length; i += 1) {
        nerdDiv.appendChild(nerdDivs[i]);
    }

    nerdDiv.appendChild(nerdHideButton);
}

const nerdShowButton = document.createElement("button");
nerdShowButton.innerText = "nerd button";
nerdShowButton.onclick = showScripts;

hideScripts();
