import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

    private data = [
        { name: 'Luis',
            age: 41
        },
        { name: 'Fernando',
            age: 23
        }
    ];

    getData() {
        return this.data;
    }

    constructor() { }

}
