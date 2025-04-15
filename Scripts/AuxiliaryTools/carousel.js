'use strict';

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ['previous', 'next'];
    this.carouselData = [
      {
        'id': '1',
        'text': 'Finalist in Etec 2018 TCCs',
      },
      {
        'id': '2',
        'text': 'Mentoring with Sebrae and ABStartups',
      },
      {
        'id': '3',
        'text': 'Games made from scratch like Dev Solo',
      },
      {
        'id': '4',
        'text': 'Mentoring from a Senior Programmer',
      },
      {
        'id': '5',
        'text': 'Participation in Indie Games events',
      },
      {
        'id': '6',
        'text': 'Portfolio analyzed by Unity employees',
      },
      {
        'id': '7',
        'text': 'Board game project for Sustainable Development Goals',
      },
      {
        'id': '8',
        'text': 'Games released on the Play Store with viable retention',
      }
    ];
    this.carouselInView = [1, 2, 3, 4, 5, 6, 7, 8];
    this.carouselContainer;
    this.carouselPlayState;
  }

  mounted() {
    this.setupCarousel();
  }

  setupCarousel() {
    const container = document.createElement('div');
    const controls = document.createElement('div');

    this.el.append(container, controls);
    container.className = 'carousel-container';
    controls.className = 'carousel-controls';

    this.carouselData.forEach((item, index) => {
      const carouselItem = document.createElement('div');
      const paragraph = document.createElement('p');

      paragraph.innerText = item.text;
      carouselItem.append(paragraph);

      container.append(carouselItem);

      carouselItem.className = `carousel-item carousel-item-${index + 1}`;
      carouselItem.setAttribute('data-index', `${index + 1}`);
    });

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement('button');
      const axSpan = document.createElement('span');

      axSpan.innerText = option;
      axSpan.className = 'ax-hidden';
      btn.append(axSpan);

      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute('data-name', option);

      controls.append(btn);
    });

    this.setControls([...controls.children]);

    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();
        this.controlManager(control.dataset.name);
        this.resetTimer();
      };
    });
  }

  controlManager(control) {
    if (control === 'previous') return this.previous();
    if (control === 'next') return this.next();
  }

  previous() {
    this.carouselData.unshift(this.carouselData.pop());
    this.carouselInView.push(this.carouselInView.shift());

    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1} p`).innerText = data.text;
    });
  }

  next() {
    this.carouselData.push(this.carouselData.shift());
    this.carouselInView.unshift(this.carouselInView.pop());

    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    this.carouselData.slice(0, 5).forEach((data, index) => {
      document.querySelector(`.carousel-item-${index + 1} p`).innerText = data.text;
    });
  }

  play() {
    this.resetTimer(); // Começa com o timer resetado
  }

  resetTimer() {
    if (this.carouselPlayState) {
      clearInterval(this.carouselPlayState);
    }

    this.carouselPlayState = setInterval(() => this.next(), 5000);
  }
}

const el = document.querySelector('.carousel');
const exampleCarousel = new Carousel(el);
exampleCarousel.mounted();

exampleCarousel.play();
