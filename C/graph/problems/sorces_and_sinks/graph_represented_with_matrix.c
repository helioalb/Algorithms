#include <stdio.h>
#include <stdlib.h>

#define vertex int

struct graph {
  int V;
  int A;
  int **adj;
};

typedef struct graph *Graph;

static int** MATRIX(int r, int c, int val) {
  int **m = malloc(r * sizeof(int*));

  for(int i = 0; i < r; ++i) {
    m[i] = malloc(c * sizeof(int));
  }

  for(int i = 0; i < r; ++i) {
    for(int j = 0; j < c; ++j) {
      m[i][j] = val;
    }
  }

  return m;
}

Graph GRAPHInit(int V) {
  Graph G = malloc(sizeof(*G));
  G->V = V;
  G->A = 0;
  G->adj = MATRIX(V, V, 0);

  return G;
}

void GRAPHInsertArc(Graph G, vertex v, vertex w) {
  if(G->adj[v][w] == 0) {
    G->adj[v][w] = 1;
    G->A++;
  }
}

void GRAPHShow(Graph G) {
  for(vertex v = 0; v < G->V; ++v) {
    printf("%2d: ", v);

    for(vertex w = 0; w < G->V; ++w) {
      if(G->adj[v][w] == 1) {
        printf(" %2d", w);
      }
    }

    printf("\n");
  }
}

static int* GRAPHSinks(Graph G) {
  int* sinks = malloc(G->V * sizeof(int));

  for(vertex v = 0; v < G->V; ++v) {
    sinks[v]= 1;

    for(vertex w = 0; w < G->V; ++w) {
      if(G->adj[v][w] == 1) {
        sinks[v] = 0;
        continue;
      }
    }
  }

  return sinks;
}

void GRAPHShowSinks(Graph G) {
  int *sinks = GRAPHSinks(G);

  for(vertex v = 0; v < G->V; ++v) {
    if (sinks[v] == 1) {
      printf("%d is sink\n", v);
    } else {
      printf("%d is not sink\n", v);
    }
  }
}

static int* GRAPHSources(Graph G) {
  int* sources = malloc(G->V * sizeof(int));

  for(vertex w = 0; w < G->V; w++) {
    sources[w] = 1;

    for(vertex v = 0; v < G->V; v++) {
      if(G->adj[v][w] == 1) {
        sources[w] = 0;
        continue;
      }
    }
  }

  return sources;
}

void GRAPHShowSources(Graph G) {
  int* sources = GRAPHSources(G);

  for(vertex v = 0; v < G->V; ++v) {
    if(sources[v] == 1) {
      printf("%d is a source\n", v);
    } else {
      printf("%d is not a source\n", v);
    }
  }
}


int main(int argc, char const *argv[]) {
  Graph G = GRAPHInit(6);

  GRAPHInsertArc(G, 0, 2);
  GRAPHInsertArc(G, 1, 3);
  GRAPHInsertArc(G, 2, 3);
  GRAPHInsertArc(G, 2, 4);
  GRAPHInsertArc(G, 3, 5);

  GRAPHShow(G);
  printf("\n");

  GRAPHShowSinks(G);
  printf("\n");

  GRAPHShowSources(G);

  return 0;
}
