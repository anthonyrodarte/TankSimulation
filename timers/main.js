/* eslint-disable no-unused-vars */

const factory = (location, direction, speed, marker) => {
  const car = {
    move: function () {
      if (direction === 'north') {
        location[0] = location[0] - speed
        marker.style.top = location[0] + 'px'
      }
      else if (direction === 'east') {
        location[1] = location[1] - speed
        marker.style.right = location[1] + 'px'
      }
      else if (direction === 'south') {
        location[0] = location[0] + speed
        marker.style.top = location[0] + 'px'
      }
      else if (direction === 'west') {
        location[1] = location[1] + speed
        marker.style.right = location[1] + 'px'
      }
    },
    accelarate: function () {
      speed = speed + 10
    },
    decelarate: function () {
      speed = speed - 10
    },
    stop: function () {
      speed = 0
    },
    turnRight: function () {
      if (direction === 'north') {
        direction = 'east'
        marker.style.transform = 'rotateZ(90deg)'
      }
      else if (direction === 'east') {
        direction = 'south'
        marker.style.transform = 'rotateZ(180deg)'
      }
      else if (direction === 'south') {
        direction = 'west'
        marker.style.transform = 'rotateZ(270deg)'
      }
      else if (direction === 'west') {
        direction = 'north'
        marker.style.transform = 'rotateZ(0deg)'
      }
    },
    turnLeft: function () {
      if (direction === 'north') {
        direction = 'west'
        marker.style.transform = 'rotateZ(-90deg)'
      }
      else if (direction === 'west') {
        direction = 'south'
        marker.style.transform = 'rotateZ(-180deg)'
      }
      else if (direction === 'south') {
        direction = 'east'
        marker.style.transform = 'rotateZ(-270deg)'
      }
      else if (direction === 'east') {
        direction = 'north'
        marker.style.transform = 'rotateZ(0deg)'
      }
    }
  }
  return car
}

const myCar = factory([0, 690], 'north', 1, document.querySelector('div.tank'))
setInterval(function () {
  myCar.move()
}, 100)
