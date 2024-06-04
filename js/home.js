function toggleCheckbox(checkbox) {
    if (checkbox.checked) {
        checkbox.nextElementSibling.innerText = "Visto";
    } else {
        checkbox.nextElementSibling.innerText = "Não Visto";
    }
}