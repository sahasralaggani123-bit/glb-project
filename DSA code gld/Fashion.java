import java.util.*;

/* ================= PRODUCT CLASS ================= */

class Product {

    String name;
    int price;

    Product(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String toString() {
        return name + " - ₹" + price;
    }
}

/* ================= LINKED LIST NODE ================= */

class Node {

    Product data;
    Node next;

    Node(Product p) {
        data = p;
        next = null;
    }
}

/* ================= PRODUCT CATALOG ================= */

class Catalog {

    Node head;

    void addProduct(Product p) {

        Node n = new Node(p);

        if (head == null) {
            head = n;
            return;
        }

        Node temp = head;

        while (temp.next != null)
            temp = temp.next;

        temp.next = n;
    }

    void showProducts() {

        Node temp = head;

        int i = 1;

        while (temp != null) {
            System.out.println(i + ". " + temp.data);
            temp = temp.next;
            i++;
        }
    }

    Product getProduct(int choice) {

        Node temp = head;

        int i = 1;

        while (temp != null) {

            if (i == choice)
                return temp.data;

            temp = temp.next;
            i++;
        }

        return null;
    }
}

/* ================= MAIN PROGRAM ================= */

public class Fashion {

    public static void main(String args[]) {

        Scanner sc = new Scanner(System.in);

        /* ================= USER DATABASE (HASHMAP) ================= */

        HashMap<String, String> users = new HashMap<>();
        users.put("customer", "123");

        /* ================= PRODUCT CATALOG (LINKED LIST) ================= */

        Catalog catalog = new Catalog();

        catalog.addProduct(new Product("Bridal Lehenga", 9000));
        catalog.addProduct(new Product("Designer Saree", 6500));
        catalog.addProduct(new Product("Party Gown", 5500));
        catalog.addProduct(new Product("Festive Anarkali", 5000));

        /* ================= STACK (SIZE HISTORY) ================= */

        Stack<String> sizeHistory = new Stack<>();

        /* ================= QUEUE (NORMAL DELIVERY) ================= */

        Queue<Product> orders = new LinkedList<>();

        /* ================= PRIORITY QUEUE (EXPRESS DELIVERY) ================= */

        PriorityQueue<Product> expressOrders =
                new PriorityQueue<>(Comparator.comparingInt(p -> p.price));

        int choice;

        do {

            System.out.println("\n===== Fashion Customization Backend =====");

            System.out.println("1 View Fashion Catalog");
            System.out.println("2 AI Stylist (Mix Styles)");
            System.out.println("3 Sort Designs by Price");
            System.out.println("4 Save Size Measurement");
            System.out.println("5 Place Delivery Order");
            System.out.println("6 Express Delivery");
            System.out.println("7 Process Deliveries");
            System.out.println("8 Exit");

            choice = sc.nextInt();

            switch (choice) {

                /* ================= VIEW CATALOG ================= */

                case 1:

                    System.out.println("\nAvailable Designs:");
                    catalog.showProducts();

                    break;

                /* ================= AI STYLIST ================= */

                case 2:

                    System.out.println("\nAI Stylist - Create Your Style");

                    System.out.println("Choose Base Style:");
                    System.out.println("1 Traditional");
                    System.out.println("2 Western");

                    int base = sc.nextInt();

                    System.out.println("Choose Secondary Style:");
                    System.out.println("1 Traditional");
                    System.out.println("2 Western");

                    int second = sc.nextInt();

                    String style1 = (base == 1) ? "Traditional" : "Western";
                    String style2 = (second == 1) ? "Traditional" : "Western";

                    System.out.println("\nAI Stylist Mixing Styles...");

                    if ((style1.equals("Traditional") && style2.equals("Western")) ||
                        (style1.equals("Western") && style2.equals("Traditional"))) {

                        System.out.println("AI Stylist Suggests: Indo-Western Fusion Outfit");

                    }

                    else if (style1.equals("Traditional") && style2.equals("Traditional")) {

                        System.out.println("AI Stylist Suggests: Bridal Traditional Collection");

                    }

                    else {

                        System.out.println("AI Stylist Suggests: Modern Western Designer Wear");

                    }

                    break;

                /* ================= SORTING (BUBBLE SORT) ================= */

                case 3:

                    Product arr[] = {
                            new Product("Bridal Lehenga", 9000),
                            new Product("Designer Saree", 6500),
                            new Product("Party Gown", 5500),
                            new Product("Festive Anarkali", 5000)
                    };

                    for (int i = 0; i < arr.length - 1; i++) {

                        for (int j = 0; j < arr.length - i - 1; j++) {

                            if (arr[j].price > arr[j + 1].price) {

                                Product temp = arr[j];
                                arr[j] = arr[j + 1];
                                arr[j + 1] = temp;

                            }

                        }

                    }

                    System.out.println("\nDesigns Sorted by Price:");

                    for (Product p : arr)
                        System.out.println(p);

                    break;

                /* ================= STACK (SIZE SELECTION) ================= */

                case 4:

                    System.out.println("\nSelect Size:");

                    System.out.println("1 S");
                    System.out.println("2 M");
                    System.out.println("3 L");
                    System.out.println("4 XL");

                    int sizeChoice = sc.nextInt();

                    String size = "";

                    if (sizeChoice == 1)
                        size = "S";
                    else if (sizeChoice == 2)
                        size = "M";
                    else if (sizeChoice == 3)
                        size = "L";
                    else if (sizeChoice == 4)
                        size = "XL";
                    else {
                        System.out.println("Invalid Size");
                        break;
                    }

                    sizeHistory.push(size);

                    System.out.println("Size " + size + " stored in STACK");

                    break;

                /* ================= NORMAL DELIVERY ================= */

                case 5:

                    System.out.println("\nSelect Dress for Delivery:");

                    catalog.showProducts();

                    int orderChoice = sc.nextInt();

                    Product order = catalog.getProduct(orderChoice);

                    if (order != null) {

                        orders.add(order);

                        System.out.println(order.name + " added to delivery queue");

                    }

                    else
                        System.out.println("Invalid selection");

                    break;

                /* ================= EXPRESS DELIVERY ================= */

                case 6:

                    System.out.println("\nSelect Dress for EXPRESS Delivery:");

                    catalog.showProducts();

                    int expressChoice = sc.nextInt();

                    Product express = catalog.getProduct(expressChoice);

                    if (express != null) {

                        expressOrders.add(express);

                        System.out.println(express.name + " added for express delivery");

                    }

                    else
                        System.out.println("Invalid selection");

                    break;

                /* ================= PROCESS DELIVERIES ================= */

                case 7:

                    if (!expressOrders.isEmpty())
                        System.out.println("Express Delivered: " + expressOrders.poll());

                    else if (!orders.isEmpty())
                        System.out.println("Delivered: " + orders.poll());

                    else
                        System.out.println("No pending deliveries");

                    break;

            }

        } while (choice != 8);

    }
}