ARGUMENT arrayA
ARGUMENT arrayB

SET filteredArray to []

FOR each element in arrayA
  IF element doesn't exist in arrayB
    APPEND it into filteredArray
  ENDIF
ENDFOR

RETURN filteredArray
