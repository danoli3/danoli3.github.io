const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const filters = document.querySelector('.filters');
const projects = [...document.querySelectorAll('.project-row')];
const count = document.querySelector('.projects-count');
if (filters && projects.length) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    const category = button.dataset.filter;
    let visible = 0;
    projects.forEach((project) => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
      if (!project.hidden) visible++;
    });
    count.hidden = false;
    count.textContent = `${visible} of ${projects.length} selected repositories`;
  });
}

const printButton = document.querySelector('[data-print]');
if (printButton) {
  printButton.classList.add('ready');
  printButton.addEventListener('click', () => window.print());
}
