// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_responsive_navbar_dropdown

const navIcon = document.querySelector(".nav-icon");
const menu = document.querySelector(".menu");

navIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
})


/**
 * Read more button function
 */

// const btn = document.querySelectorAll('.readMoreBtn');
// for (let i = 0; i < btn.length; i++) {
//     let btn = document.querySelectorAll('.readMoreBtn')[i];
//     let dots = card.document.querySelectorAll('.text-dots')[i];
//     let moreText = card.document.querySelectorAll('.more')[i];

//     btn.addEventListener("click", function (e) {
//         if (dots.style.display == "none") {
//             dots.style.display = "inline";
//             btn.innerHTML = "Read More...";
//             moreText.style.display = "none"
//         }
//         else {
//             dots.style.display = 'none';
//             btn.innerHTML = 'Read less';
//             moreText.style.display = 'inline';
//         }
//     })
// }

// const readMore = (event) => {
//     const card = event.target.closest('.blog-card-text');
//     const dots = card.document.querySelector('#text-dots');
//     const moreText = card.document.querySelector('#more');
//     const btnText = card.document.querySelector('#readMoreBtn');

//     if (dots.style.display === 'none') {
//         dots.style.display = 'inline';
//         btnText.innerHTML = 'READ MORE...';
//         moreText.style.display = 'none';
//     }
//     else {
//         dots.style.display = 'none';
//         btnText.innerHTML = 'Read less';
//         moreText.style.display = 'inline';
//     }
// }
// 
const hideElements = document.getElementsByClassName("more");
for (i = 0; i < hideElements.length; i++) {
    hideElements[i].style.display = "none";
}
const hide = (elem) => {
    const hideElement = document.getElementById(`more${elem}`);
    // const dots = card.document.getElementById(`text-dots${elem}`);
    // const moreText = card.document.querySelector(`more${elem}`);
    // const btnText = card.document.querySelector(`readMoreBtn${elem}`);
    if (hideElement.style.display == "inline-block") {
        hideElement.style.display = "none";
        // btnText.innerHTML = "Read More.."
    } else {
        hideElement.style.display = "inline-block";
        // btnText.innerHTML = "Read Less"
    }
}


// Slider Button
var slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("header-main");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
}



// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("image");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}



// Load more images
const imgLoop = () => {
    const ar = [
        'http://www.google.com/intl/en_com/images/logo_plain.png',
        'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png',
        'https://processing.org/tutorials/pixels/imgs/tint1.jpg'
    ];

    for (i = 0; i < ar.length; i++) {
        const src = document.getElementById("images");
        let div = document.createElement('div');
        div.className = 'image show';
        div.innerHTML = `<img src="${ar[i]}" alt="${'Your are offline!!!'}" style="width: 200px; height: 200px" />`;
        src.appendChild(div);
    }
}