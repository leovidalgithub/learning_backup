# Angular 8 Components Communication Case 2

## Through Subject Observables

>## Using of

**@ViewChildren**

```ts
    @ViewChildren(ChildComponent) query: QueryList<ChildComponent>; // using directly the child component class name

/*
app.component through ViewChildren run a Method in their Child Components child.component

And also, app.component prints out all their children within QueryList
*/
```

***
