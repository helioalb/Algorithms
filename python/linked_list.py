# run it with python -m unittest linked_list
class Node:
    def __init__(self, value):
        self.next = None
        self.value = value


class LinkedList:
    def __init__(self):
        self.h = None

    def insert_node_to_tail(self, node):
        if self.h:
            current = self.h

            while current.next:
                current = current.next

            current.next = node
        else:
            self.h = node

    def insert_node_to_head(self, node):
        if self.h:
            node.next = self.h
            self.h = node
        else:
            self.h = node

    def is_empty(self):
        return self.h is None

    def head(self):
        return self.h

    def tail(self):
        current = self.h

        while current.next:
            current = current.next

        return current

import unittest

class LinkedListTests(unittest.TestCase):
    def setUp(self):
        self.linked_list = LinkedList()

    def test_insert_first_node_to_tail(self):
        self.linked_list.insert_node_to_tail(Node('tail'))
        self.assertEqual('tail', self.linked_list.tail().value)

    def test_insert_first_node_to_head(self):
        self.linked_list.insert_node_to_head(Node('head'))
        self.assertEqual('head', self.linked_list.head().value)

    def test_insert_two_nodes_to_head(self):
        self.linked_list.insert_node_to_head(Node('head2'))
        self.linked_list.insert_node_to_head(Node('head1'))
        self.assertEqual('head1', self.linked_list.head().value)

    def test_insert_two_nodes_to_tail(self):
        self.linked_list.insert_node_to_tail(Node('tail1'))
        self.linked_list.insert_node_to_tail(Node('tail2'))
        self.assertEqual('tail2', self.linked_list.tail().value)

    def test_insert_nodes_to_head_and_tail(self):
        self.linked_list.insert_node_to_head(Node('head'))
        self.linked_list.insert_node_to_tail(Node('tail'))
        self.assertEqual('head', self.linked_list.head().value)
        self.assertEqual('tail', self.linked_list.tail().value)

    def test_is_empty_with_empty_linked_list(self):
        self.assertTrue(self.linked_list.is_empty())

    def test_is_empty_with_two_nodes(self):
        self.linked_list.insert_node_to_head(Node('head'))
        self.linked_list.insert_node_to_tail(Node('tail'))
        self.assertFalse(self.linked_list.is_empty())
