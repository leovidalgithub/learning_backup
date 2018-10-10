# Angular CLI useful Notes

>ng update does not work!

When upgrading to v6, 'angular-cli.json' file must be update to 'angular.json'
> ng update @angular/cli --migrate-only --from=1.1.1

>normally, I would run ncu -a and get back typescript version to 2.7.2 in package.json and then run npm install

npm install -g npm-check-updates
https://www.npmjs.com/package/npm-check-updates
ncu
ncu -u
ncu -a

npm outdated
