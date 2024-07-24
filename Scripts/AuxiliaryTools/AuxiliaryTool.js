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

const widthThreshold = 425;

function replaceClassesIfNeeded() {
  if (window.innerWidth <= widthThreshold) {
    document.querySelectorAll('.expanded').forEach(element => {
      element.classList.remove('expanded');
      element.classList.add('collapsed');
    });

    document.querySelectorAll('.ArrowToRightNoExpanded').forEach(element => {
      element.classList.remove('ArrowToRightNoExpanded');
      element.classList.add('ArrowToRight');
    });
  }
}

replaceClassesIfNeeded();

window.addEventListener('resize', replaceClassesIfNeeded);