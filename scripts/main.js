window.onload = function () {

    $(document).ready(function () {
        $('.image-link').magnificPopup({type: 'image'});
    });

    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });

    $(function () {
        $("#accordion").accordion();
    });

    let text = document.getElementById('validationCustom01');
    let secondName = document.getElementById('validationCustom02');
    let number = document.getElementById('validationCustomUsername');
    let from = document.getElementById('validationCustom03');
    let index = document.getElementById('validationCustom04');
    let adres = document.getElementById('validationCustom05');
    text.onkeydown = (e) => {
        let words = parseFloat(e.key)
        if (isFinite(words)) {
            return false;
        }
    }
    secondName.onkeydown = (e) => {
        let words = parseFloat(e.key)
        if (isFinite(words)) {
            return false;
        }
    }


    document.getElementById('send').onclick = function (e) {

        if (!text.value) {
            alert('Пожалуйста введите Ваше имя');
            return false;
        } if (!secondName.value) {
            alert('Пожалуйста введите Вашу фамилию');
            return false;
        } if (!number.value) {
            alert('Пожалуйста введите Ваш номер телефона');
            return false;
        } if (!from.value) {
            alert('Пожалуйста введите Вашу страну');
            return false;
        } if (!index.value) {
            alert('Пожалуйста введите Ваши индекс');
            return false;
        } if (!adres.value) {
            alert('Пожалуйста введите Ваш адрес');
            return false;
        } else {
            alert('Скоро с вами свяжется наш оператор.')
        }

        e.preventDefault()
    }


    $('#carouselExample').slick();


}