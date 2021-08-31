/*Write a code to Convert sorted array to balanced binary search tree. */

class Node {
    int data;
    Node left,right;
    Node(int data){
        this.data=data;
        left=right=null;
    }
}
class BST{
    Node root;
    BST(){
        root=null;
    }
        void insert(int data){
        root=insert(root,data);
    }
    Node insert(Node root,int data){
        if(root==null){
            root=new Node(data);
            return root;
        }
        if(data<root.data){
            root.left=insert(root.left,data);
        }
        else{
            root.right=insert(root.right,data);
        }
        return root;
    }
    // The arr must be sorted
    void convertArrayToBST(int arr[],int start,int end){
        if(start>end)
            return;
        int mid=(start+end)/2;
        insert(arr[mid]);
        convertArrayToBST(arr,start,mid-1);
        convertArrayToBST(arr,mid+1,end);
    }
    void convertArrayToBST(int arr[]){
        convertArrayToBST(arr,0,arr.length-1);
    }

    int maxHeight(Node node)
    {
        if (node == null)
            return 0;
        else
        {
            /* compute the height of each subtree */
            int lHeight = maxHeight(node.left);
            int rHeight = maxHeight(node.right);
  
            /* use the larger one */
            if (lHeight > rHeight)
                return (lHeight + 1);
             else
                return (rHeight + 1);
        }
    }

    void printTree(Node node){
        int h = maxHeight(node);
        System.out.println("Height of tree is "+h);
        for(int i = 1; i <= h; i++){
            printGivenLevel(node, i);
            System.out.println();
        }
    }

    void printGivenLevel(Node node, int level){
        if(node == null){ 
            return; 
        }
        if(level == 1){ 
            System.out.print(node.data + " "); 
        } else if(level > 1){
            printGivenLevel(node.left, level-1);
            printGivenLevel(node.right, level-1);
        }
    }

    public static void main(String[] args){
        BST bst1=new BST();

        //Test cases
        int Test1[]={1,2,3,4,5,6,7,8,9,10};
        
        //Convert array to Binary Search Tree
        bst1.convertArrayToBST(Test1);
  
        //Print the tree
        System.out.println("Print BST Test1");
        bst1.printTree(bst1.root);
       
    }
}
