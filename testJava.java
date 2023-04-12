public class testJava {
    public static void main(String[] args) {
        String inputstr = "abcdef";
        System.out.println("Entrada:" + inputstr);
        Clasception obj = new Clasception();
        System.out.print("Salida:");
        // Devuelve la cadena al revés. Ej: de 'abcdef' a 'fedcba'
        obj.procesar(inputstr);
    }
}
