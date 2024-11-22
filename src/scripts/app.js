function setActiveMenuItem (menu) {
  if (!menu) return;

  let pageUrl = new URL(window.location.href);
  let links = menu.querySelectorAll('a');

  for (let link of links) {
    let linkHref = link.getAttribute('href');

    if (pageUrl.pathname == linkHref) {
      link.classList.add('active');
    }
  }
}

document.querySelectorAll('.user-menu').forEach(menu => {
  setActiveMenuItem(menu);
});


