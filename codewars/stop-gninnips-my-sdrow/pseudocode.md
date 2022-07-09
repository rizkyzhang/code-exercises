ARGUMENT sentence

SET words to []

IF sentence only have 1 word
  IF word length >= 5
    REVERSE word
    RETURN word
  ELSE
    RETURN word
  ENDIF
ENDIF

FOR each word in sentence
  IF word length >= 5
    REVERSE word
    APPEND word into words
  ENDIF
ENDFOR

JOIN words into sentence

RETURN sentence
