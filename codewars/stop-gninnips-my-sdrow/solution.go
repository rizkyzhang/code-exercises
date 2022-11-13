package main

import (
	"fmt"
	"strings"
)

func reverseWord(word string) string {
	var reversedWord string

	for i := len(word) - 1; i >= 0; i-- {
		reversedWord += string(byte(word[i]))
	}

	return reversedWord
}

func reverseWords(sentence string) string {
	words := strings.Split(sentence, " ")
	var reversedWords []string

	if len(words) == 1 {
		if len(words[0]) >= 5 {
			reversedWord := reverseWord(words[0])
			return reversedWord
		}

		return sentence
	}

	for _, word := range words {
		if len(word) >= 5 {
			reversedWord := reverseWord(word)
			reversedWords = append(reversedWords, reversedWord)
		} else {
			reversedWords = append(reversedWords, word)
		}
	}

	return strings.Join(reversedWords, " ")
}

func main() {
	result := reverseWords("Golang is so cool!")
	fmt.Println(result)
}
