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
  else
  {
    document.querySelectorAll('.Circle').forEach(element => {
      const arrow = element.querySelector('.ArrowToRightNoExpanded');
    if (arrow) {
      element.classList.remove('Circle');
      arrow.onclick = null; // remove manipulador direto
    }
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
      updateContent("Hope", "Solo Dev", "Akapaya", "Hope.html");
      break;
      case 1:
      updateContent("Cybersteam Heroes", "Gameplay Mechanics and UI/UX Implementation", "Plundervolt", "Heroes.html");
      break;
      case 2:
      updateContent("When are you coming?", "Solo Dev", "Akapaya", "WAYC.html");
      break;
      case 3:
      updateContent("Tower Defense", "Solo Dev", "Akapaya", "Tower.html");
      break;
      case 4:
      updateContent("Nak: O Resgate dos Animais", "Gameplay Mechanics, Game Design and Project Manager", "Etec A. F. Team", "NakRA.html");
      break;
      case 5:
      updateContent("Ocarina Studios Games", "Gameplay Mechanics, Systems and UI/UX Implementation", "Ocarina Studios", "Ocarina.html");
      break;
      case 6:
      updateContent("Dreamwalker’s Loop", "Solo Dev", "Akapaya", "Dream.html");
      break;
      case 7:
      updateContent("VR", "Solo Dev", "Akapaya", "VR.html");
      break;
      case 8:
      updateContent("Cute Space Attack", "Gameplay Mechanics, Game Design and Project Manager", "Etec A. F. Team", "Cute.html");
      break;
    case 9:
      updateContent("Corpse 4 Party", "Solo Dev", "Akapaya", "C4P.html");
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
    document.getElementById('SeeMoreSliderShow').href = buttonUrl;
  };
}


$(document).ready(function() {
  $('#contactForm').on('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      $.ajax({
          url: 'https://api.staticforms.xyz/submit',
          method: 'POST',
          data: $(this).serialize(),
          success: function(response) {
            $('#ContactMeContainer').css('display', 'none');
            $('#PositiveResultContact').css('display', 'flex');
        },
        error: function() {
            $('#ContactMeContainer').css('display', 'none');
            $('#NegativeResultContact').css('display', 'flex');
        }
      });
  });
});

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}