# Object Oriented PIXI in Javascript

This is an experiment to build an OOP game in PIXIJS using Javascript classes and native ES6 modules. There is no publish folder or compilation process 🤯. Just open `index.html` via a live server or localhost!

<br>
<br>
<br>

## Extending Pixi Classes

You can extend ***pixi graphics, sprites, tilingsprites, text***, etc. This makes the code very readable. This example shows a player sprite that has a `speed` and an `update` method:

```javascript
import { Sprite } from './mygame/pixi.mjs'

export class Player extends Sprite {

    #speed

    constructor(texture) {
        super(texture)
        this.#speed = 10
    }

    update(){
        this.x += this.#speed
    }
}
```
In your main game, you can now add a `Player` to your game:
```javascript

import { Player } from "./player.js"

export class Game {

    player

    constructor(){
        ...
    }

    doneLoading() {
        this.player = new Player(texture)
        this.pixi.stage.addChild(this.player)
        this.player.update()
    }
}
```

<br>
<br>
<br>

## ES6 Classes

Classes in ES6 are a very similar to classes in typescript or C#, but:

- New properties can be added *anywhere* in the class. 
- Properties and methods can be made `private` by adding a `#` before the name of the variable or method. This only works when targeting the latest ES version in `jsconfig.json`.

<br>
<br>
<br>

## Type checking

By setting `checkJS` to true in `jsconfig.json`, we get intellisense and type checking in javascript.

<br>
<br>
<br>

## Native PIXI module

🔥 This project loads PIXIJS as a module from `./js/libraries/pixi.mjs`!

You can find this module if you temporarily run `npm install pixi-js`. Then copy the native pixi module from `node_modules/pixi.js/dist/esm/pixi.js` to your own project. Now you can `import` pixi just like your other modules.

```typescript
import { Application, Sprite, Loader } from './mygame/pixi.mjs'
```
<br>
<br>
<br>

### 💀 TODO Code completion for Pixi

The type definitions for Pixi are in `node_modules/pixi.js/index.d.ts` but they reference the `node_modules` folder. If you rename the file to `js/pixi.mjs.d.ts` VS Code will recognise it, but it still needs the whole `node_modules` folder and a `package.json` *just for type checking* 😖...

<br>
<br>
<br>

# Links

- [PixiJS](https://pixijs.com)
- [MDN ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [MDN Private features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- Using [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set).
