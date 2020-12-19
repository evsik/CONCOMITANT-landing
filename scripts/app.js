$(document).ready(function () {
    $('.b-aboutUs').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__bounceInLeft',
        offset: 300
    });
    $('.b-project').addClass("hidden pluses-article-right").viewportChecker({
        classToAdd: 'visible animate__animated animate__bounceInRight',
        offset: 300
    });
    $('footer').addClass("hidden").viewportChecker({
        classToAdd: 'visible animate__animated animate__bounceInUp',
        offset: 300
    });
});