# Object Oriented PIXI in Javascript

This is an experiment to build an OOP game in PIXIJS using Javascript classes and ES6 modules, *without* using a build process. PixiJS is loaded using a `<script>` tag. There is no publish folder or compilation process 🤯. Just open `index.html` via a live server or localhost!

<br>
<br>
<br>

## Extending Pixi Classes

You can extend ***pixi graphics, sprites, tilingsprites, text***, etc. This makes the code very readable. This example shows a player sprite that has a `speed` and an `update` method:

```javascript
export class Player extends PIXI.Sprite {

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

### TODO

[Import Pixi as a native ES6 module! To get better type checking](https://github.com/pixijs/pixijs/issues/6734)

Or else, to get type checking working for PIXIJS, you need type definitions for Pixi 5. You could get this by creating a `package.json` and installing pixi with `npm install pixi-js`. Visual Studio Code should now use the type information from the `node_modules` folder, even though we do not actually use the pixi library from `node_modules`

<br>
<br>
<br>

# Links

- [PixiJS](https://pixijs.com)
- [MDN ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [MDN Private features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- Using [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set).
