/* eslint-disable no-unused-vars */

const factory = (location, direction, speed, marker) => {
  const car = {
    speed: speed,
    direction: direction,
    location: location,
    marker: marker,
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
      }
      else if (direction === 'east') {
        direction = 'south'
      }
      else if (direction === 'south') {
        direction = 'west'
      }
      else if (direction === 'west') {
        direction = 'north'
      }
    },
    turnLeft: function () {
      if (direction === 'north') {
        direction = 'west'
      }
      else if (direction === 'west') {
        direction = 'south'
      }
      else if (direction === 'south') {
        direction = 'east'
      }
      else if (direction === 'east') {
        direction = 'north'
      }
    }
  }
  return car
}

const myCar = factory([0, 0], 'north', 10, document.querySelector('div.tank'))
setInterval(function () {
  myCar.move()
}, 1000)
