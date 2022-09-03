/**
 * if you want to rigg it put a for head, and b for tails
 */
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
// yo sup
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
