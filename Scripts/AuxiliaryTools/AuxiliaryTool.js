function toggleContent(element, arrow) {
    if (element.classList.contains("collapsed")) {
        element.classList.remove("collapsed");
        element.classList.add("expanded");
        arrow.classList.remove("ArrowToRight");
        arrow.classList.add("ArrowToDown");
    } else {
        element.classList.remove("expanded");
        element.classList.add("collapsed");
        arrow.classList.add("ArrowToRight");
        arrow.classList.remove("ArrowToDown");
    }
}
