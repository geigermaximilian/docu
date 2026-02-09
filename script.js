const viewer = document.getElementById("viewer");
const content = document.querySelector(".content");
let currentPath = null;

// Markdown laden
function loadPage(path) {
  currentPath = path;
  fetch(path)
    .then(res => res.text())
    .then(md => {
      viewer.innerHTML = marked.parse(md);
      
      // Entferne führende und nachfolgende Leerzeilen in Code-Blöcken
      document.querySelectorAll('pre code').forEach(block => {
        block.textContent = block.textContent.trim();
      });
      
      Prism.highlightAll();
      
      // IDs zu Überschriften hinzufügen für Anker-Links
      addHeadingIds();
      
      // Extrahiere Überschriften und aktualisiere Sidebar
      updateSidebarNavigation(path);
      
      // Markiere aktiven Link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.path === path) {
          link.classList.add('active');
          link.parentElement.querySelector('.nav-subitems').classList.add('open');
        } else {
          link.parentElement.querySelector('.nav-subitems').classList.remove('open');
        }
      });
      
      // Scroll zum Anfang der Seite
      content.scrollTop = 0;
    });
}

// Füge IDs zu allen Überschriften hinzu
function addHeadingIds() {
  const headings = viewer.querySelectorAll('h2, h3, h4');
  headings.forEach(heading => {
    const id = heading.textContent.trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    heading.id = id;
  });
}

// Extrahiere Überschriften und erstelle Sub-Navigation
function updateSidebarNavigation(path) {
  const headings = viewer.querySelectorAll('h2, h3');
  const navItem = document.querySelector(`.nav-link[data-path="${path}"]`)?.parentElement;
  
  if (!navItem) return;
  
  const subitems = navItem.querySelector('.nav-subitems');
  subitems.innerHTML = '';
  
  headings.forEach(heading => {
    const text = heading.textContent.trim().replace(/^[\ud83c-\ud83e][\udc00-\udfff]\s*/, ''); // Remove emoji
    const id = heading.id;
    const level = heading.tagName.toLowerCase();
    
    const sublink = document.createElement('a');
    sublink.textContent = text;
    sublink.className = `nav-sublink ${level}`;
    sublink.onclick = () => scrollToHeading(id);
    
    subitems.appendChild(sublink);
  });
}

// Scroll zu einer bestimmten Überschrift
function scrollToHeading(id) {
  const heading = document.getElementById(id);
  if (heading) {
    const headingTop = heading.offsetTop;
    content.scrollTo({
      top: headingTop - 20,
      behavior: 'smooth'
    });
  }
}

// Theme
const toggle = document.getElementById("themeToggle");
const body = document.body;

// gespeichertes Theme laden
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.remove("dark", "light");
  body.classList.add(savedTheme);
}

// Button-Icon setzen
updateIcon();

toggle.onclick = () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
  updateIcon();
};

function updateIcon() {
  toggle.textContent =
    body.classList.contains("dark") ? "🌙" : "☀️";
}