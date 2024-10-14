let distance = 0
led.enable(false)
pins.servoWritePin(AnalogPin.P5, 0)
basic.pause(100)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    serial.writeNumber(distance)
    serial.writeLine("")
    if (distance < 10) {
        pins.servoWritePin(AnalogPin.P5, 0)
        basic.pause(1000)
    } else {
        pins.servoWritePin(AnalogPin.P5, 90)
        basic.pause(1000)
    }
})
