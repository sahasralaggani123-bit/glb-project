import java.util.*;

public class Main {

    static Scanner sc = new Scanner(System.in);
    static ArrayList<String> cart = new ArrayList<>();
    static ArrayList<String> wishlist = new ArrayList<>();

    public static void main(String[] args) {

        login();

        while(true){
            System.out.println("\n===== HOME MENU =====");
            System.out.println("1. Explore Images");
            System.out.println("2. View Cart");
            System.out.println("3. View Wishlist");
            System.out.println("4. Size Calculator");
            System.out.println("5. Exit");

            int choice = sc.nextInt();

            switch(choice){
                case 1:
                    collections();
                    break;
                case 2:
                    viewCart();
                    break;
                case 3:
                    viewWishlist();
                    break;
                case 4:
                    sizeCalculator();
                    break;
                case 5:
                    System.out.println("Thank you!");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice");
            }
        }
    }

    static void login(){
        System.out.println("===== LOGIN PAGE =====");
        System.out.print("Enter username: ");
        String name = sc.next();
        System.out.println("Welcome " + name + "!");
    }

    static void collections(){
        System.out.println("\n===== COLLECTIONS =====");
        System.out.println("1. Bridal Lehenga");
        System.out.println("2. Designer Saree");
        System.out.println("3. Long Gown");
        System.out.println("4. Go Back");

        int choice = sc.nextInt();

        if(choice == 4) return;

        String product = "";

        switch(choice){
            case 1: product = "Bridal Lehenga"; break;
            case 2: product = "Designer Saree"; break;
            case 3: product = "Long Gown"; break;
            default:
                System.out.println("Invalid choice");
                return;
        }

        System.out.println("\nSelected: " + product);
        System.out.println("1. Add to Cart");
        System.out.println("2. Add to Wishlist");

        int option = sc.nextInt();

        if(option == 1){
            cart.add(product);
            System.out.println("Added to Cart!");
        }
        else if(option == 2){
            wishlist.add(product);
            System.out.println("Added to Wishlist!");
        }
        else{
            System.out.println("Invalid option");
        }
    }

    static void viewCart(){
        System.out.println("\n===== CART =====");
        if(cart.isEmpty()){
            System.out.println("Cart is empty.");
        } else {
            for(String item : cart){
                System.out.println(item);
            }
        }
    }

    static void viewWishlist(){
        System.out.println("\n===== WISHLIST =====");
        if(wishlist.isEmpty()){
            System.out.println("Wishlist is empty.");
        } else {
            for(String item : wishlist){
                System.out.println(item);
            }
        }
    }

    static void sizeCalculator(){
        System.out.print("\nEnter Bust Size (cm): ");
        int bust = sc.nextInt();

        if(bust < 80){
            System.out.println("Suggested Size: Small");
        }
        else if(bust < 95){
            System.out.println("Suggested Size: Medium");
        }
        else if(bust < 110){
            System.out.println("Suggested Size: Large");
        }
        else{
            System.out.println("Suggested Size: XL");
        }
    }
}