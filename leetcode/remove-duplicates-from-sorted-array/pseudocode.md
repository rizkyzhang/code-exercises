```
ARGUMENT nums

SET indexToInsertUniqueNum to 0
SET numsOccurrenceMap to map[int]bool // true indicate that the num have appeared at least 1 time

FOR each num in nums
  IF !numsOccurrenceMap[num]
    SET nums[indexToInsertUniqueNum] to num
    SET numsOccurrenceMap[num] to true
    INCREMENT indexToInsertUniqueNum by 1
  ENDIF
ENDFOR

RETURN indexToInsertUniqueNum
```
