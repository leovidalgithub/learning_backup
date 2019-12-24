# Angular CLI useful **UPDATING** Notes

[AngularCli Update](https://update.angular.io/ "AngularCli Update").

~~~~node
npm install -g @angular/cli
npm install @angular/cli
ng update @angular/cli

ng update @angular/core
ng update
ng update @angular/cli @angular/core

npm install -g rxjs-tslint
rxjs-5-to-6-migrate -p src/tsconfig.app.json
~~~~

> ng update --all --allowDirty=true --force=true
> ng update @angular/cli @angular/core --allow-dirty
> ng update @angular/cli --migrate-only --from=4 --allow-dirty
> npm install typescript@">=3.4.0 <3.6.0"

------------------------------------------------------------------

* Global installed packages

>npm list -g -depth=0
ng version, for example, doesn't work while inside a project.
>ng update does not work!

When upgrading to v6, 'angular-cli.json' file must be update to 'angular.json'
Please, look forward on previous installed  Angular_cli local version (--from=1.7.4)

> ng update @angular/cli --migrate-only --from=1.7.4
> normally, I would run ncu -a and get back typescript version to 2.7.2 in package.json and then run npm install

> error : cannot find module 'rxjs-compat/observable'
>npm install --save rxjs-compat

> error : Cannot find module 'node-sass'
> remove package-lock.json and npm install

> error : ERROR in node_modules/rxjs/internal/types.d.ts(81,44): error TS1005: ';' expected. (Angular 6)
> npm install rxjs@6.0.0 --save

> ERROR in ./src/polyfills.ts
> Module not found: Error: Can't resolve 'core-js/es6/reflect' in 'c:\Users\leone\WEB Developer\learning\LAST_REVISIONS\component-communications\case3\src'
    Inside polyfills.ts I updated this line:
    import 'core-js/es6/reflect';
    To this one:
    import 'core-js/es/reflect';

> Schema validation failed with the following errors:
  Data path ".builders['app-shell']" should have required property 'class'.
    > In your package.json change the devkit builder.
    "@angular-devkit/build-angular": "^0.800.1",
    "@angular-devkit/build-angular": "^0.10.0",

npm outdated
~~~~

https://www.npmjs.com/package/npm-check-updates
~~~~
npm install -g npm-check-updates
ncu
ncu -u
ncu -a
~~~~

## NPM vulnerabilities

  run `npm audit` for details
  run `npm audit fix` to fix them
