positions=[]
i = 4
while i > -1:
    for j in range(5):
        positions.append([i, j])
    i += -1

def on_forever():
    mode = 0
    if mode == 0:
        if 22.5 < input.compass_heading() and input.compass_heading() < 67.5:
            basic.show_arrow(ArrowNames.NORTH_EAST)
        elif 67.5 < input.compass_heading() and input.compass_heading() < 112.5:
            basic.show_arrow(ArrowNames.EAST)
        elif 112.5 < input.compass_heading() and input.compass_heading() < 157.5:
            basic.show_arrow(ArrowNames.SOUTH_EAST)
        elif 157.5 < input.compass_heading() and input.compass_heading() < 202.5:
            basic.show_arrow(ArrowNames.SOUTH)
        elif 202.5 < input.compass_heading() and input.compass_heading() < 247.5:
            basic.show_arrow(ArrowNames.SOUTH_WEST)
        elif 247.5 < input.compass_heading() and input.compass_heading() < 292.5:
            basic.show_arrow(ArrowNames.WEST)
        elif 292.5 < input.compass_heading() and input.compass_heading() < 337.5:
            basic.show_arrow(ArrowNames.NORTH_WEST)
        elif 337.5 < input.compass_heading() or input.compass_heading() < 22.5:
            basic.show_arrow(ArrowNames.NORTH)
    elif mode == 1:
        for index in range(int(input.rotation(Rotation.PITCH) / 3.6)):
            led.plot(0, 0)
basic.forever(on_forever)
