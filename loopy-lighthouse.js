var start = 100
var end = 200

for (start === 100; start < end + 1; start++)  {
  if ((start % 3 === 0) && (start % 4 === 0))  {
    console.log("LoopyLighthouse")
  }
  else if (start % 4 === 0) {
    console.log("Lighthouse");
  }
  else if (start % 3 === 0)  {
    console.log("Loopy");
  }
  else {
    console.log(start)
  }
}
