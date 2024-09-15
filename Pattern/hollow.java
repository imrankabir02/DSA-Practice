package Pattern;

public class hollow {
    public static void main(String[] args) {
        int n = 5;
        int m = 4;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (i == 1 || i == n || j == 1 || j == m) {
                    System.out.print("*");
                }
                else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}


// package Pattern;

// public class Hollow {
//     public static void main(String[] args) {
//         int n = 5;
//         int m = 4;
//         for (int i = 1; i <= n; i++) {          // Outer loop for rows
//             for (int j = 1; j <= m; j++) {      // Inner loop for columns
//                 if (i == 1 || i == n || j == 1 || j == m) {
//                     System.out.print("*");       // Print '*' on the borders
//                 } else {
//                     System.out.print(" ");       // Print space inside
//                 }
//             }
//             System.out.println();                // Move to the next line after each row
//         }
//     }
// }
