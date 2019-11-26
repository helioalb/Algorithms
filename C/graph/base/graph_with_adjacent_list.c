#include <stdio.h>
#include <stdlib.h>

#define vertex int

typedef struct node *link;
struct node {
  vertex v;
  link next;
};

struct graph {
  int V;
  int A;
  link *adj;
};

typedef struct graph *Graph;

Graph GRAPHInit (int V) {
  Graph G = malloc (sizeof (*G));
  G->V = V;
  G->A = 0;
  G->adj = malloc (V * sizeof (struct node));

  for (vertex v = 0; v < V; ++v) {
    G->adj[v] = NULL;
  }

  return G;
}

static link NEWNode (vertex w, link next) {
  link a = malloc (sizeof (struct node));
  a->v = w;
  a->next = next;

  return a;
}

void GRAPHInsertArc (Graph G, vertex v, vertex w) {
  for (link a = G->adj[v]; a != NULL; a = a->next) {
    if (a->v == w) return;
  }

  G->adj[v] = NEWNode (w, G->adj[v]);
  G->A++;
}

void GRAPHShow (Graph G) {
  for (vertex v = 0; v < G->V; ++v) {
    printf("%2d:", v);

    for (link a = G->adj[v]; a != NULL; a = a->next) {
      printf (" %2d", a->v);
    }

    printf ("\n");
  }
}

int main(int argc, char const *argv[]) {
  Graph G = GRAPHInit (4);

  GRAPHInsertArc (G, 0, 1);
  GRAPHInsertArc (G, 0, 2);
  GRAPHInsertArc (G, 0, 3);
  GRAPHInsertArc (G, 1, 0);
  GRAPHInsertArc (G, 1, 2);
  GRAPHInsertArc (G, 1, 3);
  GRAPHInsertArc (G, 2, 1);
  GRAPHInsertArc (G, 3, 1);

  GRAPHShow (G);

  return 0;
}
