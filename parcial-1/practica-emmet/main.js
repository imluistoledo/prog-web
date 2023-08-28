// Logo animation
const text = document.getElementById("logo-animation");
const letters = text.innerText.split("");

text.innerText = "";
letters.forEach((letter) => {
    let character = letter === ' ' ? '&nbsp;' : letter;
    text.innerHTML = text.innerHTML + `
    <div>
        <span>${character}</span>
        <span class="second-logo">${character}</span>
    </div>
    `;
});

text.addEventListener('mouseenter', () => {
    let count = 0;
    const interval = setInterval(() => {
        if (count < text.children.length) {
            text.children[count].classList.add('animation');
            count += 1;
        } 
        else {
            clearInterval(interval);
        }
    }, 30);
});

text.addEventListener('mouseleave', () => {
    let count = 0;
    const interval = setInterval(() => {
        if (count < text.children.length) {
            text.children[count].classList.remove('animation');
            count += 1;
        } 
        else {
            clearInterval(interval);
        }
    }, 30);
});
// End logo animation

// Change the box image
const changeSliderImgAndColor = (image, color) => {
    setTimeout(() => {
        document.querySelector(".starbucks").src = "";
        const circleColor = document.querySelector(".circle");
        circleColor.style.background = "white";

        setTimeout(() => {
            document.querySelector(".starbucks").src = image;
            const circleColor = document.querySelector(".circle");
            circleColor.style.background = color;
        }, 300);
    }, 300);
    
}

const image1 = document.getElementById("thumb-menu_img1");
image1.addEventListener("click", () => {
    changeSliderImgAndColor("img/img1.png", "#017143");
});
const image2 = document.getElementById("thumb-menu_img2");
image2.addEventListener("click", () => {
    changeSliderImgAndColor("img/img2.png", "#eb7495");
});
const image3 = document.getElementById("thumb-menu_img3");
image3.addEventListener("click", () => {
    changeSliderImgAndColor("img/img3.png", "#d752b1");
});