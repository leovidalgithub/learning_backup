



// ******************************************************************************** throttleTime
        let button = document.querySelector('.throttlet');
        // button.addEventListener('click', (event => {console.log(event)}));
        Rx.Observable.fromEvent(button,"click")
            .throttleTime(1000)
            .map((data) => data.clientY)
            .subscribe( coordinate => console.log('throttleTime ' + coordinate));

// ******************************************************************************** bufferTime, take
        let bff = Rx.Observable.interval(500)
        .bufferTime(3000)
        .take(3)
        .subscribe(
              val => console.log('bufferTime ' + val),
              err => console.log('bufferTime ' + err),
               () => console.log('bufferTime completed')
          );
// ******************************************************************************** bufferTime, map, filter
        const $BUTTON = document.querySelector('#div1');
        const CLICK$  = Rx.Observable.fromEvent($BUTTON,'click');
        CLICK$
            .bufferTime(2000)
            .map(clicks => clicks.length)
            .filter(length => length > 0)
            .subscribe(
                clicks => console.log(`${clicks} clicks within 2000ms`)
            );

// ******************************************************************************** flatMap from
        let times = [
            { value: '0 time 200',  time: 200},
            { value: '1 time 700',  time: 700},
            { value: '2 time 400',  time: 400},
            { value: '3 time 1200', time: 1200},
            { value: '4 time 100',  time: 100}
        ];

        let flatmap = Rx.Observable.from(times)
        .flatMap( item => {
            return Rx.Observable
              .of(item.value)
              .delay(item.time)
        })
        // .pluck('value')
        .subscribe(
              val => console.log('flatMap ' + val),
              err => console.log('flatMap ' + err),
               () => console.log('flatMap completed')
          );

// ******************************************************************************** from zip
        let f1 = (...arguments) => Rx.Observable.from(arguments);
        let f2 = Rx.Observable.from('Foot');
        let zip = Rx.Observable.zip(
            f1(4,5,6),
            f2
            // (x,y) => 'FROM ' + x + ' : ' + y
        )
        .subscribe(
            val => console.log('from ' + val),
            err => console.log('from err ' + err),
            ()  => console.log('from completed')
        )

// ******************************************************************************** map
        let md = Rx.Observable.range(2,4)
          .map( (x,idx) => x * x)
          .subscribe( val => console.log('Map ' + val));

// ******************************************************************************** delay, timeout
        let sou = Rx.Observable.range(0, 13)
          .delay(2000)
          .take(5)
          .timeout(1900);
        let subscription = sou.subscribe(
              x => console.log('timeout ' + x),
            err => console.log('timeout err ocurred ' + err),
             () => console.log('timeout Completed') );

// ******************************************************************************** timestamp
        let www = Rx.Observable.timer(0,1000)
            .timestamp()
            .map( x => x.value + ' : ' + x.timestamp )
            .take(3)
            .subscribe(
                val => console.log('timestamp ' + val),
                err => console.log('timestamp err ' + err),
                 () => console.log('timestamp Completed') );

 // ******************************************************************************** every some
        let rrr = Rx.Observable.of(1,2,3,4,5)
            .every( x => x < 5 )
            .subscribe( val => console.log('every ' + val));
        // let ttt = Rx.Observable.of(1,2,3,4,5)
        //     .some( x => x < 5 )
        //     .subscribe( val => console.log('some ' + val));

// ******************************************************************************** zip range skip
        let range1 = Rx.Observable.range(0,5);
        let range2 = Rx.Observable.range(6,7);
        let ooo = Rx.Observable.zip(
            range1,
            range1.skip(1),
            range1.skip(2),
            range2,
            (s1,s2,s3,s4) => s1 + ' : ' + s2 + ' : ' + s3 + ' : ' + s4)
        .subscribe(
              x => console.log('ZIP ' + x),
            err => console.log('ZIP ERROR ' + err),
             () => console.log('ZIP COMPLETED')
        );

// ******************************************************************************** ignoreElements
        let aaa = Rx.Observable.range(0,10)
            .ignoreElements()
            .subscribe(
                val => console.log('ignoreElements ' + val),
                err => console.log('ignoreElements ERROR ' + err),
                 () => console.log('ignoreElements COMPLETED')
            );

// ******************************************************************************** sample
        let bbb = Rx.Observable.interval(1000)
            .sample(Rx.Observable.interval(2000))
            .take(2)
            .subscribe(
            val => console.log('sample ' + val),
            err => console.log('sample ERROR ' + err),
             () => console.log('sample COMPLETED')
        );

// ******************************************************************************** repeat
        // let i = 0;
        // let rep = Rx.Observable.from(42)
        // .doWhile(
        //         function(x) { return ++i > 2 });
        // rep.subscribe(
        //     val => console.log('repeat ' + val),
        //     err => console.log('repeat ERROR ' + err),
        //      () => console.log('repeat COMPLETED')
        //  );

// ******************************************************************************** debounce
        let exa = Rx.Observable.of('W','O','Se','Last item');
        let debounced = exa.debounce(() => Rx.Observable.timer(1000));
        let subs = debounced.subscribe(val => console.log('debounce ' + val));

        const interval = Rx.Observable.interval(1000);
        const debouncedInterval = interval.debounce(val => Rx.Observable.timer(val * 200))
        const subscribe = debouncedInterval.subscribe(val => console.log(`debounce Example Two: ${val}`));

// ******************************************************************************** startWith scan
        const source = Rx.Observable.of('World!', 'Goodbye', 'World!');
        const example = source
          .startWith('Hello')
          .scan((acc, curr) => `${acc} ${curr}`);
        example.subscribe(val => console.log(val));






//*
