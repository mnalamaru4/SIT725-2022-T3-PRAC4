function changeText() {
    var textsArray = ["Text 1", "Text2" "Text 3", "Text 4", "Text 5"]
    varnumber = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
}
functiongetRandomNumberBetween(min, max){
    returnMath.floor(Math.random() * (max - min + 1) + min);
}