```
ARGUMENT nums
ARGUMENT target

SET operandPairsMap to map[int]int
SET firstOperandIndex to 0
SET secondOperandIndex to 0

FOR EACH num in nums
  IF operandPairsMap[target - num]
    SET firstOperand to operandPairsMap[target - num]
    SET secondOperand to target - num
    SET firstOperandIndex to index of firstOperand
    SET secondOperandIndex to index of lastOperand
  ELSE
    SET operandPairsMap[num] = target - num
  ENDIF
ENDFOR

RETURN [firstOperandIndex, secondOperandIndex]
```
