# SimpleNodeJS

I use this repo as a note on how I approach Node.js from classical JavaScript (i.e. client-side).

## Installation

- Get Node.js from <https://nodejs.org/en/>
- Get NPM from <https://www.npmjs.com>
- Go to your target folder you want to create a project (e.g. `cd MyProject/`).
- Inside that folder,

```commandline
npm init
```

## Test-Driven Development

I will be using [Jest](https://jestjs.io/docs/en/getting-started.html)

```commandline
npm install -D jest
```

In your `package.json`, probably it should look somewhat like this,

```json
{
  "name": "myproject",
  "version": "1.0.0",
  "description": "A description",
  "main": "src/index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "jest": "^23.6.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourname/yourrepo.git"
  }
}
```

## Don't put everything in `index.js`

Instead, try to find a good project structure, e.g. <https://labs.mlssoccer.com/a-javascript-project-structure-i-can-finally-live-with-52b778041b72>

This is what I do,

- Move `index.js` to `src/index.js`, and try to put all source codes in `src/`.
- Don't put all code in `index.js`, instead, [learn to `export`](http://www.tutorialsteacher.com/nodejs/nodejs-module-exports).


## Running a script and REPL

It is as simple as,

```commandline
node script.js
```

To start a REPL,

```commandline
node
```

And importing script is as simple as,

```javascript
> require('./script.js')
```

Exiting the REPL is,

```javascript
> .exit
```
