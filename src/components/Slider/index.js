
function Slider () {

    // slider container
    const sliderContenair = document.createElement("div");
    sliderContenair.classList.add('slider');
    document.body.appendChild(sliderContenair);

    // 1ere slide de Slider
    const slide1 = document.createElement('img');
    slide1.classList.add("slide");
    slide1.setAttribute('src', '../src/images/slide/slide1(petit).jpg');
    slide1.setAttribute('alt', 'slide1');
    sliderContenair.appendChild(slide1);

    // 2eme slide de Slider
    const slide2 = document.createElement('img');
    slide2.classList.add("slide");
    slide2.setAttribute('src', '../src/images/slide/slide2(petit).jpg');
    slide2.setAttribute('alt', 'slide2');
    sliderContenair.appendChild(slide2);

    // 3eme slide de Slider
    const slide3 = document.createElement('img');
    slide3.classList.add("slide");
    slide3.setAttribute('src', '../src/images/slide/slide3(petit).jpg');
    slide3.setAttribute('alt', 'slide3');
    sliderContenair.appendChild(slide3);

    // animation du slider
    //
    sliderContenair.animate({
        marginLeft : "-480px"
    }, {
        duration: 5000,
        iterations: Infinity, 
    })
}

export default Slider