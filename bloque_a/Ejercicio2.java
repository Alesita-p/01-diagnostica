import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        System.out.print("Introduce el primer número: ");
        double numero1 = teclado.nextDouble();
        
        System.out.print("Introduce el segundo número: ");
        double numero2 = teclado.nextDouble();
        double suma = numero1 + numero2;
        double resta = numero1 - numero2;
        double multiplicacion = numero1 * numero2;

        if (numero2 != 0) {
            double division = numero1 / numero2;
            System.out.println("División: " + division);
        } else {
            System.out.println("División: No es posible dividir entre cero.");
        }

        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        
    }
}
