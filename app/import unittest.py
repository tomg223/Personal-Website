import unittest

def is_palindrome(str):
    return str == str[::-1]

class TestPalindrome(unittest.TestCase):
    def test_empty_string(self):
        self.assertTrue(is_palindrome(""))

    def test_simple_palindrome(self):
        self.assertTrue(is_palindrome("madam"))

    def test_non_palindrome(self):
        self.assertFalse(is_palindrome("hello"))

    def test_with_spaces(self):
        self.assertTrue(is_palindrome("amanaplanacanalpanama"))

if __name__ == "__main__":
    unittest.main()
