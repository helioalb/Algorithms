import edu.princeton.cs.algorithms.WeightedQuickUnionUF;

public class Percolation {
    private int dim;
    private int openSites;
    private int[][] grid;
    private WeightedQuickUnionUF uf;

    public Percolation(int n) {
        openSites = 0;
        uf = new WeightedQuickUnionUF(n * n + 2);
        dim = n;
        grid = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
               grid[i][j] = 0;
            }
        }
    }

    public void open(int row, int col) {
       if (!isOpen(row, col)) {
           grid[row - 1][col -1 ] = 1;
           openSites++;
           int p = gridToArray(row, col);

           for (int q : adjacentOf(row, col)) {
               if (q != -1) {
                   uf.union(p, q);
               }
           }
       }
    }

    private int[] adjacentOf(int row, int col) {
        int [] adjcentList = new int[4];
        adjcentList[0] = col > 1 ? gridToArray(row, col - 1) : -1; //left
        adjcentList[1] = col < dim ? gridToArray(row, col + 1) : -1; //right
        adjcentList[2] = row > 1 ? gridToArray(row - 1, col) : -1; //0 is the parent of all nodes on first line //top
        adjcentList[3] = row < dim ? gridToArray(row + 1, col) : -1; //dim * dim + 1 is the parent of all nodes on last line //bottom

        return adjcentList;
    }

    private int gridToArray(int row, int col) {
        if (isOpen(row, col)) {
            return (row - 1) * dim + col;
        }
        return -1;
    }

    public boolean isOpen(int row, int col) {
        return grid[--row][--col] == 1;
    }
    public boolean isFull(int row, int col) {
        if (isOpen(row, col)) {
            int q = gridToArray(row, col);

            for (int i = 1; i <= dim; i++) {
                if (isOpen(1, i)) {
                    int p = gridToArray(1, i);

                    if (uf.connected(p, q)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    public int numberOfOpenSites() {
        return openSites;
    }

    public boolean percolates() {
        for (int i = 1; i <= dim; i++) {
            for (int j = 1; j <= dim; j++) {


                if (isOpen(1, i) && isOpen(dim, j)) {
                    int top = gridToArray(1, i);
                    int bottom = gridToArray(dim, j);

                    if (uf.connected(top, bottom)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Percolation percolation = new Percolation(8);

        percolation.open(1,1);
        percolation.open(2,1);
        percolation.open(3,1);
        percolation.open(3,2);
        percolation.open(3,3);
        percolation.open(4,3);


        percolation.open(4,4);
        percolation.open(4,5);
        percolation.open(5,5);
        percolation.open(5,6);
        percolation.open(6,6);
        percolation.open(6,7);

        percolation.open(7,7);
        percolation.open(8,8);
        percolation.open(7,8);
        percolation.open(8,1);

        if (percolation.percolates()) {
            System.out.println("percolates");
        } else {
            System.out.println("dont percolates");
        }

        if (percolation.isFull(4,4)) {
            System.out.println("4,4 is full");
        }

        if (percolation.isFull(8,1)) {
            System.out.println("8,1 is full");
        }
        System.out.println(percolation.numberOfOpenSites());
    }
}