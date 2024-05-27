function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  for (let i = 1; i <= callbacks.length * 2; i++) {
    setTimeout(() => { console.log(i) }, i * 1000);
  }

  for (let callback of callbacks) {
    let rand = Math.floor(Math.random() * (callbacks.length * 2)) + 1;
    setTimeout(callback, 1000 * rand);
  }

}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6