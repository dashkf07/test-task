TARGET = 10
DIGITS = '9876543210'

def operation_from_string(expression):
    expression = expression.replace("-", "+-")
    res = sum(int(num) for num in expression.split('+') if num) 
    return res

def get_expression(digits, expression='', index=0):

    if index == len(digits) - 1:

        if operation_from_string(expression + digits[index]) == TARGET:
            print(f"Выражение для получения {TARGET}: {expression + digits[index]}")
        return
    
    # Рекурсивно добавляем операторы между цифрами
    get_expression(digits, expression + digits[index], index + 1)
    get_expression(digits, expression + digits[index] + '+', index + 1)
    get_expression(digits, expression + digits[index] + '-', index + 1)

get_expression(DIGITS)