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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("SlideItems");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}

  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }

  switch(slideIndex-1) {
    case 0:
      updateContent("Hope", "Solo Dev", "Akapaya", "Test");
      break;
    case 1:
      updateContent("When are you coming?", "Solo Dev", "Akapaya", "Test");
      break;
  }

  x[slideIndex-1].classList.add("active");
}



function updateContent(title, occupation, copyright, buttonUrl) {
  // Update the title
  document.getElementById('TitleTitleBox').textContent = title;
  
  // Update the occupation
  document.getElementById('OccupationBox').textContent = occupation;
  
  // Update the copyright
  document.getElementById('SliderShowCopyright').textContent = 'Copyright: ' + copyright;
  
  // Update the button onclick URL
  document.getElementById('SeeMoreSliderShow').onclick = function() {
    alert("Page not found");
    //window.location.href = buttonUrl;
  };
}

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return false;
  }

  // Additional validation can be added here

  alert('Form submitted successfully!');
  return true;
}