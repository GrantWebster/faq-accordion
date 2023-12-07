const questionIcon = document.getElementById("question-icon");
const faqDetail = document.getElementsById("details-id1");
const faq = document.getElementById("summary-id1");

function toggleFaqIcon() {

  if(faqDetail.open) {
    questionIcon.src = "./assets/images/icon-minus.svg";
  } else {
    questionIcon.src = "./assets/images/icon-plus.svg";
  }
}

faq.addEventListener("click", toggleFaqIcon);
