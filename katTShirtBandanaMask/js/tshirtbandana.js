/*
	*Author: Katheriya Prowsri <kprowsri@ucsc.edu>
	*Created: 6 June 2020
	*License: Public Domain
*/

//scroll through website to reveal parts of page
//scroll JS from https://scrollrevealjs.org/guide/installation.html
ScrollReveal().reveal('#tshirt-description', { delay: 300});
ScrollReveal().reveal('#tshirt-pros-cons', { delay: 300});
ScrollReveal().reveal('#tshirt-how-to-wear-make', { delay: 300});
ScrollReveal().reveal('#bandana-description', { delay: 300});
ScrollReveal().reveal('#bandana-pros-cons', { delay: 300});
ScrollReveal().reveal('#bandana-how-to-wear-make', { delay: 300});
ScrollReveal().reveal('#helpful-links', { delay: 300});

//goes back to previous page, or the homepage
function goBack() {
  window.history.back();
}