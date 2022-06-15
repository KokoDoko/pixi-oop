import { Sprite } from './pixi/pixi.mjs'

export class Player extends Sprite {

    #xspeed = 0
    #yspeed = 0

    constructor(texture){
        super(texture)
 
        this.x = 100
        this.y = 400

        window.addEventListener("keydown", (e) => this.onKeyDown(e))
        window.addEventListener("keyup", (e) => this.onKeyUp(e))
    }

    update() {
        this.x += this.#xspeed
        this.y += this.#yspeed
    }

    onKeyDown(e) {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.#xspeed = -7
                break
            case "D":
            case "ARROWRIGHT":
                this.#xspeed = 7
                break
            case "W":
            case "ARROWUP":
                this.#yspeed = -7
                break
            case "S":
            case "ARROWDOWN":
                this.#yspeed = 7
                break
        }
    }

    onKeyUp(e) {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.#xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.#yspeed = 0
                break
        }
    }
}