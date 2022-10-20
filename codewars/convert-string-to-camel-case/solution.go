package main

import (
	"fmt"
	"strings"
)

func toCamelCase(str string, sep string) string {
	words := strings.Split(str, sep)
	var result string

	for i, word := range words {
		if i == 0 {
			result += strings.ToLower(word)
		} else {
			firstChar := strings.ToUpper(string(word[0]))
			restCharsSlice := strings.Split(word, "")[1:]
			restChars := strings.Join(restCharsSlice, "")

			result += firstChar + restChars
		}
	}

	return result
}

func main() {
	result := toCamelCase("you-are-cool", "-")
	fmt.Println(result)
}
