const split = Split(['#img-one', '#img-two','#img-three','#img-three'], {
    sizes: [50, 50],
    gutterSize: 5,
    cursor: 'col-resize',
    onDragEnd: () => {
      const dragger = document.querySelector('.dragger');
      const split = dragger.parentNode;
      const rect = split.getBoundingClientRect();
      const mid = rect.width / 2;
      dragger.style.left = `${mid}px`;
    }
  });
  
  const dragger = document.querySelector('.dragger');
  const rect = split.element.getBoundingClientRect();
  const mid = rect.width / 2;
  dragger.style.left = `${mid}px`;
  
  dragger.addEventListener('mousedown', (event) => {
    const startX = event.clientX;
    const startLeft = parseFloat(dragger.style.left);
  
    const onMouseMove = (moveEvent) => {
      const moveX = moveEvent.clientX;
      const diffX = moveX - startX;
      const newLeft = startLeft + diffX;
      dragger.style.left = `${newLeft}px`;
  
      const minLeft = 0;
      const maxLeft = rect.width - dragger.offsetWidth;
      if (newLeft < minLeft) {
        dragger.style.left = `${minLeft}px`;
      } else if (newLeft > maxLeft) {
        dragger.style.left = `${maxLeft}px`;
      }
    };
  
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
const words = text.split(' ');

let index = 0;

const type = () => {
  if (index < words.length) {
    typewriter.textContent = words.slice(0, index + 1).join(' ');
    index++;
    setTimeout(type, 100);
  } else {
    index = 0;
    setTimeout(() => {
      typewriter.textContent = '';
      type();
    }, 2000);
  }
};

type();