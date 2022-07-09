ARGUMENT sentence

SPLIT sentence into words by - or \_ separator

FOR each word in words
  IF not first word
    CONVERT first letter to uppercase
  ENDIF
ENDFOR

JOIN words into sentence with - or \_ separator

RETURN sentence
