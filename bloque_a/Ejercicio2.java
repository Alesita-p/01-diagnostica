import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        // TODO: Instancia la clase Scanner
        Scanner teclado = new Scanner(System.in);
        
        // TODO: Lee dos números por teclado
        System.out.print("Introduce el primer número: ");
        double num1 = teclado.nextDouble();
        
        System.out.print("Introduce el segundo número: ");
        double num2 = teclado.nextDouble();
        // TODO: Calcula y muestra suma, resta, multiplicación y división
        double suma = num1 + num2;
        double resta = num1 - num2;
        double multiplicacion = num1 * num2;

        if (num2 != 0) {
            double division = num1 / num2;
            System.out.println("División: " + division);
        } else {
            System.out.println("División: No es posible dividir entre cero.");
        }

        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        
    }
}
