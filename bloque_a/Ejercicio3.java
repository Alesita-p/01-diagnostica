import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        int edad = 19;

        if (edad >= 18) {
            System.out.println("La persona tiene " + edad + " años. Es mayor de edad.");
        } else {
            System.out.println("La persona tiene " + edad + " años. Es menor de edad.");
        }
    }
}
