# run it with python -m unittest linked_list
class Node:
    def __init__(self, value):
        self.next = None
        self.value = value


class LinkedList:
    def __init__(self):
        self._head = None

    def insert_node_to_tail(self, node):
        current =         

    def head(self):
        return self._head

    def tail(self):
       current = Node('tail')
       current.next = Node('tail2')

       return current.next;

import unittest

class LinkedListTests(unittest.TestCase):
    def setUp(self):
        self.linked_list = LinkedList()

    def test_insert_first_node_to_tail(self):
        self.linked_list.insert_node_to_tail(Node('tail'))
        self.assertEqual('tail', self.linked_list.tail().value)

    def test_insert_two_nodes_to_tail(self):
        self.linked_list.insert_node_to_tail(Node('tail'))
        self.linked_list.insert_node_to_tail(Node('tail2'))
        self.assertEqual('tail2', self.linked_list.tail().value)
