import { Graphics } from './libraries/pixi.mjs'

export class HealthBar extends Graphics {

    #health = 400

    constructor() {
        super()
        this.updateHealth()
    }

    updateHealth(val) {
        if (this.#health + val >= 1 && this.#health + val <= 400) {
            this.#health += val;
        }
        this.clear()
        this.beginFill(0x33DE2C)
        this.drawRect(20, 20, this.#health, 40)
        this.endFill()

        this.lineStyle(4, 0x114411)
        this.drawRect(20, 20, 400, 40)
    }
}
