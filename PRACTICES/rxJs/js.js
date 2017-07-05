// ******************************************************************************** throttleTime
        let button = document.querySelector('.throttlet');
        // button.addEventListener('click', (event => {console.log(event)}));
        Rx.Observable.fromEvent(button,'click')
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

// ******************************************************************************** flatMap
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
              val => console.log(val),
              err => console.log('flatMap ' + err),
               () => console.log('flatMap completed')
          );

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
















//*
