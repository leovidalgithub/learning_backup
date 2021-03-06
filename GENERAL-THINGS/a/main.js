
$( document ).ready(function() {
    $('button').on('click', function(e) {
        $(".app").append("Some appended text.");
        $(".pre").prepend("Some prepended text.");

        $(".pre").before("<span>Before content</span>");
        $(".app").after("<span>After content</span>");

        let txt1 = "<p>Text.</p>";               // Create element with HTML
        let txt2 = $("<p></p>").text("Text.");   // Create with jQuery
        txt2.addClass('myClass');
        let txt3 = document.createElement("p");  // Create with DOM
        $('div.content-1').append(txt1,txt2,txt3);

        let array = ['Stuff-2', 'Stuff-3', 'Stuff-4', 'Stuff-5'];

        array.forEach(function(ele, index) {
            // debugger;
            setTimeout(() => {
                $('.list').append('<li>' + ele + '</li>');
            }, index * 1000);
        })
    })

    function makeCounter() {
        let count = 0;

        return function() {
            return count++;
        };
    }
    let counter1 = makeCounter();
    let counter2 = makeCounter();

    console.log('counter1 = 1', counter1() ); // 0
    console.log('counter1 = 1', counter1() ); // 1
    console.log('counter1 = 2', counter2() ); // 1
    console.log('counter1 = 2', counter2() ); // 1
    console.log('counter1 = 1', counter1() ); // 1
    console.log('counter1 = 1', counter1() ); // 1
    console.log('counter1 = 1', counter1() ); // 2

    window.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
        let root = document.documentElement;

        let varx = event.clientX;
        let vary = event.clientY;
        console.log('epa', {vary}, {varx});

        root.style.setProperty('--posY', event.clientY + 'px');
        root.style.setProperty('--posX', event.clientX + 'px');

        if (event.clientX < window.innerWidth / 2) {
            root.style.setProperty('--varcolor', '#1e90ff');
        } else {
            root.style.setProperty('--varcolor', '#ffb01e');
        }
    }
});