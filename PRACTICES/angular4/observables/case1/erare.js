(function fn() {
    $('.test').each(function (index, element) {
        // element == this
        element.prevent
    });
    
})();