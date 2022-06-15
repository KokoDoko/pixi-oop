// import { Sprite } from '../libraries/pixi.mjs' // SADLY THIS IS PIXI 5

export class Block extends PIXI.Sprite {

    #speed = 0

    constructor(texture) {
        super(texture)

        this.#speed = 5 + Math.random() * 10
        this.x = 1000 + Math.random() * 500
        this.y = Math.random() * 700 + 50

    }

    update(){
        this.rotation += 0.01
        this.x -= this.#speed
        if(this.x < -100){
            this.x = 1300
            this.y = Math.random() * 800
        }
    }
}