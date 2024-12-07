PROBLEM:1:   The function groupAnagrams(strs) is created, where strs is the input list of words or phrases.
A Map is used to store the sorted versions of the words/phrases as keys, and the corresponding anagram groups as values.
A loop is used to iterate through each word or phrase in the input list (strs).
Inside the loop, spaces are removed from each word/phrase and it is converted to lowercase to ensure correct comparison.
The cleaned-up string is split into individual characters, sorted alphabetically, and then joined back together to form a sorted string.
The sorted string is used as the key in the Map.
A check is made to see if the sorted string is already a key in the Map:
If it is not, a new key is created, and an empty array is initialized for it.
If it is already present, the original word/phrase is added to the existing anagram group.
Finally, the values (anagram groups) from the Map are returned as an array.



PROBLEM 2: 
The function and variables are initialized at the beginning. Here, start = 0 represents the starting index of the substring, and maxLength = 0 is used to track the length of the longest substring without repeating characters.
A charSet is initialized as an empty set (Set()). This set is used to keep track of unique characters because a Set only stores distinct values.
A for loop iterates over the string, using end as the pointer to check each character in the string. Initially, end = 0.
Inside the for loop, a while loop checks for duplicates. If the character at s[end] already exists in the charSet, the character at s[start] is removed from the Set, and the start pointer is incremented to shrink the window.
If the character at s[end] is unique (not already in the Set), it is added to the Set.
The maxLength is calculated as (end - start + 1), which represents the current length of the valid substring. If the substring is valid and contains all unique characters, this formula gives the longest substring's length dynamically as the loop progresses.
At the end of the process, the final maxLength is returned, representing the length of the longest substring without repeating characters.

