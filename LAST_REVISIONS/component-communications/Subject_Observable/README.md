# Angular 8 Components Communication Case 2

## Through Subject Observables

>## Using of

### Service Observable Reactive X (rxjs)

A Class
  
A Service

```ts
  @Injectable() ShareDataService
    private subjectToChild1: Subject<IData> = new Subject<IData>();
/*
A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.

Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call next to feed values as well as error and complete.
*/
```

***
