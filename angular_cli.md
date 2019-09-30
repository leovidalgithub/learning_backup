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

------------------------------------------------------------------

* Global installed packages

>npm list -g -depth=0
ng version, for example, doesn't work while inside a project.
>ng update does not work!

When upgrading to v6, 'angular-cli.json' file must be update to 'angular.json'
Please, look forward on previous installed  Angular_cli local version (--from=1.7.4)
> ng update @angular/cli --migrate-only --from=1.7.4
> normally, I would run ncu -a and get back typescript version to 2.7.2 in package.json and then run npm install

~~~~
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
