def calculadora(x: float, y: float, operador: str) -> float:
    match (operador):
        case "+":
            print(x + y)
        case "-":
            print(x - y)
        case "/":
            print(x / y)
        case "*":
            print(x * y)
        case _:
            raise ValueError("Operador invalido")


def main() -> None:
    print("Digite um numero")
    
    x: float = input(float)
    
    print("Digite outro numero")
    
    y: float = input(float)
    
    print("Digite um operador: + / - / * ou /")
    
    operador: str = input(str)

    calculadora(x, y, operador)


main()
