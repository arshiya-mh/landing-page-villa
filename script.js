

// ************   image slider :   *************************************************
const slider = document.querySelector('.slider');  // image slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
function moveSlide(direction) {       //Image Slider
  const newSlide = (currentSlide + direction + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - newSlide) * 100}%)`;
  });
  currentSlide = newSlide;
}
prevButton.addEventListener('click', () => {    //Previous Image
  moveSlide(-1);
});
nextButton.addEventListener('click', () => {    //Next Image
  moveSlide(1);
});
document.addEventListener ('keydown', (e) =>{    //Left And Right Arrow Key Function For Image Slider
    if (e.key === 'ArrowLeft') {
        moveSlide(-1)
    } else if (e.key === 'ArrowRight'){
        moveSlide (1)
    }
})
// ================================================================================

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
      
      button.classList.toggle('active');
      
      if (button.classList.contains('active')) {
          accordionContent.style.display = 'block';
      } else {
          accordionContent.style.display = 'none';
      }
  });
});

// ================================================================================
// script.js
// document.getElementsByClassName('.accordion-header').addEventListener('click', function() {
//   this.style.color = '#f35525'; // تغییر رنگ متن به قرمز
// });

// ================================================================================
let bts = document.querySelectorAll('.bobt');
bts.forEach(button => {
    button.addEventListener('click', () => {
        // حذف کلاس active از همه دکمه‌ها
        bts.forEach(btn => btn.classList.remove('active'));
        
        // اضافه کردن کلاس active به دکمه‌ای که کلیک شده
        button.classList.add('active');
    });
});

// ================================================================================
function showImageAndText(imageSrc, text ,text1, text2){
  document.getElementById('image').src = imageSrc;
  document.getElementById('paragraph').innerText = text;
  document.getElementById('paragraph1').innerText = text1;
  document.getElementById('paragraph2').innerText = text2;

}