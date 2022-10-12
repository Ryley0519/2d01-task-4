let count = 0
input.onButtonPressed(Button.A, function () {
    count = 0
    while (count <= 4) {
        led.plot(count, 0)
        basic.pause(1000)
        basic.clearScreen()
        count += 1
    }
})
basic.forever(function () {
	
})
