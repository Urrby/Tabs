const tabs = document.querySelector(".tabs");
const tabBtn = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabPanel"]`));

function tabBtnHandler(e) {
// hide all tab panels
tabPanels.forEach(panel => {
    panel.hidden = true;
})
// mark all tabs as unselected
tabBtn.forEach(tab => {
    tab.setAttribute("aria-selected", false);
})
// mark the clicked tab as selected
e.currentTarget.setAttribute("aria-selected", true);
// find the associated tabPanel and show it!
const id = e.currentTarget.id;
const tabPanel = tabPanels.find(panel => {
    return panel.getAttribute("aria-labelledby") === id;
})
tabPanel.hidden = false;
}


tabBtn.forEach(btn => btn.addEventListener("click", tabBtnHandler));