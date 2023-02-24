class Clasception {

    public Clasception() {
        
    }

    void procesar (String str) {
        if ((str == null) || (str.length() <= 1)) {
            System.out.println(str);
        } else {
            System.out.print(str.charAt(str.length()-1));
            procesar(str.substring(0, str.length()-1));
        }
    }
}

