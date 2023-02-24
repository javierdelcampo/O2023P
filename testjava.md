## Llamada recurrente en Java


´´´java
public class testJava {
    public static void main(String[] args) {
        String inputstr = "abcdef";
        System.out.println("Entrada:" + inputstr);
        Clasception obj = new Clasception();
        // Salida: fedcba
        System.out.print("Salida:");
        obj.procesar(inputstr);
    }
}
´´´

```java
class Clasception {

    public Clasception() {
        
    }

    void procesar (String str) {
        if ((str == null) || (str.length() <= 1)) {  // Ojo. length devuelve el tamaño (6), pero...
            System.out.println(str);
        } else {
            System.out.print(str.charAt(str.length()-1));   // ...el primer elemento es el 0 (cero)
            procesar(str.substring(0, str.length()-1));  // Lo mismo, substring empieza en cero y el máx es length - 1 (0..5)
        }
    }
}
```
