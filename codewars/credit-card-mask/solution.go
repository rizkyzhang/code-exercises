package main

import (
	"fmt"
	"strings"
)

func maskString(str string) string {
	if len(str) < 5 {
		return str
	}

	return strings.Repeat("#", len(str)-4) + str[len(str)-4:]
}

func main() {
	result := maskString("1234567890")

	fmt.Println(result)
}
