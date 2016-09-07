package main

import "fmt"

func main() {
	a := [3]int{1, 2, 3}
	s := a[:]
	fmt.Printf("a: %v\n", a)
	fmt.Printf("s: %v\n", s)

	s[0] = 10
	fmt.Printf("a: %v\n", a)
	fmt.Printf("s: %v\n", s)

	s = append(s, 4)
	s[0] = 1
	fmt.Printf("a: %v\n", a)
	fmt.Printf("s: %v\n", s)
}
