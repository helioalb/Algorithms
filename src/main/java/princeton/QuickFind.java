package princeton;

public class QuickFind implements UF {
    private int[] id;

    public QuickFind(int N) {
        id = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i;
        }
    }

    public boolean connected(int p, int q) {
        return id[p] == id[q];
    }

    public void union(int p, int q) {
        int pid = id[p];
        int qid = id[q];

        for (int i = 0; i < id.length; i++) {
            if (id[i] == pid) id[i] = qid;
        }
    }

    @Override
    public String toString() {
        String str = "";
        int last = this.id.length - 1;

        for (int i = 0; i < last; i++) {
            str += String.valueOf(this.id[i]) + " ";
        }

        str += String.valueOf(this.id[last]);

        return str;
    }
}
