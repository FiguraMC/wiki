Contains functions which Figura adds to the default Lua "math" library table. These are accessed via the `math` global.


## Math Functions

### map
Maps the given value from one range to another

For example, if you have a value of 20 in the range 0-200, and you want to map it to the range 100-200, the result will be 110

### round
Rounds the given number to the nearest whole integer

### sign
Returns the sign of the given number

Returns 1 if the number is positive, -1 if it's negative, and 0 if it's 0

### lerpAngle
Similar to the default lerp function, but numbers are limited to the range of 0-360

Lerp is done towards the shortest angle

For example, a lerp of 340 and 20, with factor of 0.75, will return 10

### shortAngle
Returns the shortest angle between two angles

For example, if you have an angle of 350 degrees and you want to get the shortest angle between it and 0 degrees, the result will be 10 degrees

### clamp
Clamps the given value between min and max

### lerp
Linearly interpolates from its first argument to its second argument, with the third argument as the parameter

Works on both regular numbers, vectors of the same type and matrices of the same type

## Numbers

### playerScale
The constant of the player scaling related to the world

### worldScale
The constant of the world scaling related with the player