const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', drop);
  image.addEventListener('dragend', dragEnd);
});

let draggedItem = null;

function dragStart(e) {
  draggedItem = this;
  setTimeout(() => this.classList.add('invisible'), 0);
}

function dragOver(e) {
  e.preventDefault();
}

function drop() {
  if (this !== draggedItem) {
    let allItems = [...images];
    let draggedIndex = allItems.indexOf(draggedItem);
    let targetIndex = allItems.indexOf(this);

    this.parentNode.insertBefore(draggedItem, targetIndex > draggedIndex ? this.nextSibling : this);
  }
}

function dragEnd() {
  this.classList.remove('invisible');
}