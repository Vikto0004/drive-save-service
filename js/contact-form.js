const contactForm = document.querySelector(".contact-form");
const contactFormWrap = document.querySelector(".contact-form-wrap");
const contactFormWrapClose = document.querySelector(".contact-form-wrap-close");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  contactFormWrap.classList.add("contact-form-wrap-active");

  contactForm.reset();
});

contactFormWrapClose.addEventListener("click", () => {
  contactFormWrap.classList.remove("contact-form-wrap-active");
});
