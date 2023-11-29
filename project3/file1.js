function abcd(){
    this.name = "hello"
    this.age = 12
    this.email = "example@gmail.com"
}

abcd.prototype.printDets = function(){
    console.log(this.name,this.age,this.email)
}
var helo = new abcd();
console.log(helo)
