public class Ejercicio5 {

    // Función estática para calcular el promedio de dos números
    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        // 1. Prueba de la función calcularPromedio
        double nota1 = 8.5;
        double nota2 = 9.5;
        double resultadoPromedio = calcularPromedio(nota1, nota2);
        System.out.println("El promedio de las notas es: " + resultadoPromedio);
        System.out.println(); // Espacio en blanco

        // 2. Instancia de la clase Estudiante y llamada a su método
        Estudiante estudiante1 = new Estudiante("Alejandra", 20, resultadoPromedio);
        estudiante1.mostrarFicha();
    }
}

// Clase Estudiante con atributos, constructor y método
class Estudiante {
    // Atributos
    String nombre;
    int edad;
    double promedio;

    // Constructor
    public Estudiante(String nombre, int edad, double promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    // Método para mostrar la información
    public void mostrarFicha() {
        System.out.println("--- Ficha del Estudiante ---");
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Edad: " + this.edad + " años");
        System.out.println("Promedio Final: " + this.promedio);
    }
}
