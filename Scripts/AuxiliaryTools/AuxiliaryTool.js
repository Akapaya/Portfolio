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
  calcularDiasPassados('18/4/2025', 'NewsCount1');
  calcularDiasPassados('24/4/2025', 'NewsCount2');
  calcularDiasPassados('24/4/2025', 'NewsCount3');
});

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

function calcularDiasPassados(dataStr, elementoId) {
  // Espera que a data venha no formato dd/mm/yyyy
  const [diaStr, mesStr, anoStr] = dataStr.split('/');
  const dia = parseInt(diaStr, 10);
  const mes = parseInt(mesStr, 10);
  const ano = parseInt(anoStr, 10);

  // Validação simples da data
  if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    console.warn(`Invalid date format: "${dataStr}"`);
    const el = document.getElementById(elementoId);
    if (el) el.textContent = 'Invalid date format.';
    return;
  }

  // Cria a data em UTC, com base no formato dd/mm/yyyy
  const dataInformada = new Date(Date.UTC(ano, mes - 1, dia));

  // Pega a data de hoje em UTC também
  const hoje = new Date();
  const hojeUTC = new Date(Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()));

  const diffMs = hojeUTC - dataInformada;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let resultado = '';
  if (diffDias === 0) {
    resultado = 'It\'s today!';
  } else if (diffDias > 0) {
    resultado = `${diffDias} day${diffDias > 1 ? 's' : ''} ago`;
  } else {
    resultado = `${Math.abs(diffDias)} day${Math.abs(diffDias) > 1 ? 's' : ''} left`;
  }

  const elemento = document.getElementById(elementoId);
  if (elemento) {
    elemento.textContent = resultado;
  } else {
    console.warn(`Element with ID "${elementoId}" not found.`);
  }
}


