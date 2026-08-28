const scroller = document.querySelector(".horizontal");

const links = document.querySelectorAll(".nav-link");

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


/* NAVIGATION */

function goTo(id) {

  const section = document.querySelector(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      inline: "start"
    });
  }

  nav.classList.remove("open");

  toggle.setAttribute(
    "aria-expanded",
    "false"
  );
}


links.forEach(link => {

  link.addEventListener("click", event => {

    event.preventDefault();

    goTo(
      link.getAttribute("href")
    );

  });

});


/* LOGO */

document
  .querySelector(".brand")
  .addEventListener("click", event => {

    event.preventDefault();

    goTo("#home");

  });


/* MOBILE MENU */

toggle.addEventListener("click", () => {

  const isOpen =
    nav.classList.toggle("open");

  toggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


/* RIGHT ARROW */

document
  .querySelector(".right")
  .addEventListener("click", () => {

    scroller.scrollBy({
      left: window.innerWidth * 0.82,
      behavior: "smooth"
    });

  });


/* LEFT ARROW */

document
  .querySelector(".left")
  .addEventListener("click", () => {

    scroller.scrollBy({
      left: -window.innerWidth * 0.82,
      behavior: "smooth"
    });

  });


/* ACTIVE NAVIGATION TAB */

const sections =
  document.querySelectorAll(".panel");


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          links.forEach(link => {

            link.classList.toggle(
              "active",

              link.getAttribute("href") ===
              "#" + entry.target.id
            );

          });

        }

      });

    },
    {
      root: scroller,
      threshold: 0.55
    }
  );


sections.forEach(section => {
  observer.observe(section);
});
