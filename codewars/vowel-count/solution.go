package main

import (
	"fmt"
)

func isVowel(char rune) bool {
	vowelMap := map[string]bool{
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
	}

	if vowelMap[string(char)] {
		return true
	} else {
		return false
	}
}

func getVowelCount(str string) int {
	vowelCount := 0

	for _, char := range str {
		if isVowel(char) {
			vowelCount++
		}
	}

	return vowelCount
}

func main() {
	vowelCount := getVowelCount("crazy le")
	fmt.Println(vowelCount)
}
