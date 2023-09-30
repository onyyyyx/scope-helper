let positions = []
let i = 4
while (i > -1) {
    for (let j = 0; j < 5; j++) {
        positions.push([i, j])
    }
    i += -1
}
basic.forever(function on_forever() {
    let mode = 0
    if (mode == 0) {
        if (22.5 < input.compassHeading() && input.compassHeading() < 67.5) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (67.5 < input.compassHeading() && input.compassHeading() < 112.5) {
            basic.showArrow(ArrowNames.East)
        } else if (112.5 < input.compassHeading() && input.compassHeading() < 157.5) {
            basic.showArrow(ArrowNames.SouthEast)
        } else if (157.5 < input.compassHeading() && input.compassHeading() < 202.5) {
            basic.showArrow(ArrowNames.South)
        } else if (202.5 < input.compassHeading() && input.compassHeading() < 247.5) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (247.5 < input.compassHeading() && input.compassHeading() < 292.5) {
            basic.showArrow(ArrowNames.West)
        } else if (292.5 < input.compassHeading() && input.compassHeading() < 337.5) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (337.5 < input.compassHeading() || input.compassHeading() < 22.5) {
            basic.showArrow(ArrowNames.North)
        }
        
    } else if (mode == 1) {
        for (let index = 0; index < Math.trunc(input.rotation(Rotation.Pitch) / 3.6); index++) {
            led.plot(0, 0)
        }
    }
    
})
