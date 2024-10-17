import { Application } from "@hotwired/stimulus";
import { Offcanvas, Popover, Collapse, Dropdown } from "bootstrap";
import { Fancybox } from "@fancyapps/ui";

export { Offcanvas /*Popover, Collapse, Dropdown, Fancybox, Application*/ };

function setActiveMenuItem (menu) {
  if (!menu) return;

  let pageUrl = new URL(window.location.href);
  let links = menu.querySelectorAll('a');
  console.log(pageUrl.pathname);

  for (let link of links) {
    let linkHref = link.getAttribute('href');
    console.log(linkHref);

    if (pageUrl.pathname == linkHref) {
      link.classList.add('active');
    }
  }
}

document.querySelectorAll('.user-menu').forEach(menu => {
  console.log(menu);
  setActiveMenuItem(menu);
});


