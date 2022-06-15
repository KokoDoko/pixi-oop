import { Application, Sprite, TilingSprite, Loader, SCALE_MODES } from '../libraries/pixi.mjs'
import { Block } from "./block.js"
import { HealthBar } from "./healthbar.js"
import { Player } from "./player.js"

class Game {

    background
    player
    blocks
    healthbar
    pixi

    constructor(){
        this.pixi = new Application({width: 1200, height: 800})
        document.body.appendChild(this.pixi.view)
        
        //const loader = new Loader()
        this.pixi.loader.add('background', './images/background.png')
              .add('ship', './images/ship.png')
              .add('block', './images/block.png')

        this.pixi.loader.load((loader, resources)=>this.doneLoading(loader, resources))
    }

    doneLoading(loader, resources) {
        this.background = new TilingSprite(resources.background.texture, 1200, 800)
        this.pixi.stage.addChild(this.background)

        this.player = new Player(resources.ship.texture)
        this.pixi.stage.addChild(this.player)

        this.blocks = []
        for(let i = 0; i<10; i++) {
            let block = new Block(resources.block.texture)
            this.pixi.stage.addChild(block)
            this.blocks.push(block)
        }

        this.healthBar = new HealthBar()
        this.pixi.stage.addChild(this.healthBar)
        
        this.pixi.ticker.add(() => this.update())
    }

    update(delta) {
        this.player.update()
        this.background.tilePosition.x -= 3
        
        for(let b of this.blocks){
            b.update()
            if (this.collision(this.player, b)) {
                this.healthBar.updateHealth(-1)
            }  
        }
    }

    collision(a, b) {
        const aBox = a.getBounds()
        const bBox = b.getBounds()

        return aBox.x + aBox.width > bBox.x &&
            aBox.x < bBox.x + bBox.width &&
            aBox.y + aBox.height > bBox.y &&
            aBox.y < bBox.y + bBox.height
    }
}

new Game()

















