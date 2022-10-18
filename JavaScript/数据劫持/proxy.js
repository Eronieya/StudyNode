let arr = [1, 2, 3, 4, 5];

let px = new Proxy(arr, {
  set: (obj, prop, value, receiver) => {
    console.log(obj, prop, value, receiver);
    return Reflect.set(obj, prop, value, receiver);
  }
})

px[1] = 213;
px.push(1123);