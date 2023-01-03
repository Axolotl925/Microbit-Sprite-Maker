/**
 * Sprite Block
 */
//% weight=100 color=#ff0000 icon="\uf007"
namespace SpriteMaker {
    /**
     * TODO: Makes a sprite of the name you choose!
     * @param x horizontal led coordinate
     * @param y vertical led coordinate
     * @param n name of sprite
     */
    //% block="Make Sprite x $x and y $y and Name $n"
    export function MakeSpr(x: number, y: number, n: string): void {
        let $n = game.createSprite(x, y)
    }
}