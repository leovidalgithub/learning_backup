# PUG NODEJS EXAMPLE
## A Beginner’s Guide to Pug

[Source](https://www.sitepoint.com/a-beginners-guide-to-pug/ "Maria Antonietta Perna webpage")

It uses json-server which serves db.json file as API
> json-server --watch db.json -p=3001

Also, it uses axios to make a HTTP request and await function

To generate some fake data we use
> https://randomuser.me/

> https://randomuser.me/api/?results=25

We get the data and put it into db.json which will be read by json-server

This site uses Semantic UI - 2.3.3 CSS