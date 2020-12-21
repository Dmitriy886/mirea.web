const imageArray = [
    "https://greatbattle.ru/wp-content/uploads/2014/07/lavra-2014-460x345.jpg",
    "https://inkazan.ru/attachments/46913cdd9dd5a0e6aefd7d15d03c11e480d76134/store/limit/700/393/95/5ebc5a124779fca035c107a239bf37a7b2803e4ef4e750cf6d414fb18992/print_649296_917088.jpg",
    "https://www.nccih.ca/images/contenu/plus/2020-10-27-COVIDUPDATES-460X345.jpg"
];

let imageElement = document.getElementById('sliderImage'), currentImgNum = 0;

const changeImage = (context) => {
    
    if (context.id == "previous") {
        
        currentImgNum--;
        if (currentImgNum < 0) currentImgNum = imageArray.length - 1;
        
        imageElement.src = imageArray[currentImgNum];
    }
    else {
        currentImgNum = (currentImgNum + 1) % imageArray.length;
        imageElement.src = imageArray[currentImgNum];
    }
}