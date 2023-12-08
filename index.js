function toggleFaqIcon(e) {
  
  // Gets img element of details element with same id +'-icon'
  const faqIcon = document.getElementById(e.target.id+'-icon');

  if (faqIcon.src.endsWith("icon-plus.svg")) {
        faqIcon.src = "./assets/images/icon-minus.svg";
      } else {
        faqIcon.src = "./assets/images/icon-plus.svg";
      }
}

const faqs = document.querySelectorAll("details");
faqs.forEach((question) => {
  question.addEventListener("toggle", toggleFaqIcon);
});