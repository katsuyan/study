object MyApp {
  def main(args: Array[String]): Unit = {
    val i = args(0).toInt
    val result = if (i % 3 == 0 && i % 5 == 0) {
      "FizzBuzz"
    } else if(i % 3 == 0) {
      "Fizz"
    } else if(i % 5 == 0) {
      "Buzz"
    } else {
      i.toString
    }
    println(result)
  }
}
