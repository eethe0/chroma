const dateInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type=date]");
const today = new Date();

for (const input of dateInputs) {
    input.value = today.toISOString().substring(0, 10);
}

const inputs = document.querySelectorAll("input");

function applyNonEmptyClass(el: HTMLInputElement) {
    if (el.value) {
        el.classList.add("has-content")
    } else {
        el.classList.remove("has-content")
    }
}

for (const input of inputs) {
    applyNonEmptyClass(input);
    input.addEventListener("change", e => {
        const el = e.target as HTMLInputElement;
        applyNonEmptyClass(el);
    });
}