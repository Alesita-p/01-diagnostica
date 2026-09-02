public class Ejercicio4 {
    public static void main(String[] args) {
        System.out.println("Números del 1 al 20:");
        for (int i = 1; i <= 20; i++) {
            System.out.print(i + " ");
        }
        
        System.out.println("\n"); 

        System.out.println("Números del 20 al 1:");
        int j = 20;
        while (j >= 1) {
            System.out.print(j + " ");
            j--;
        }
    }
}
