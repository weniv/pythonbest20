- info
    - lv3
    - Tree | LinkedList | Trie

# Heoni spilled the latte
![Heoni spilled the latte](./11_1.webp)

## Problem Description
Mura, the bookkeeper, was forming a revolutionary team on her notebook! Butler Heoni spilled the latte she was serving to Mura, which fell directly onto Mura's notebook.

The part where the entire structure was written was destroyed, but meticulous mura wrote an example of a rough category approach in the book.

```py
["Chief of Staff-Deputy Chief of Staff-Secretary's Office", "Chief of Staff-Deputy Chief of Staff", "Deputy Chief of Staff-Planning and Management Staff", "Deputy Chief of Staff-Personnel Staff", "Deputy Chief of Staff-Intelligence Operations Staff", "Chief of Staff-Deputy Chief of Staff-Military Staff", "Intelligence Operations Staff-Special Forces", "Intelligence Operations Staff-Educational Staff"]
```

Clever Mura could reconstruct the category with only a few clues. Help her to configure it as follows based on these examples!

```txt
Chief of Staff
  └ Deputy Chief of Staff
      ├ Secretary's Office
      ├ Planning and Management Staff
      ├ Personnel Staff
      ├ Intelligence Operations Staff
      │   ├ Special Forces
      │   └ Educational Staff
      └ Military Staff
```

---

## Constraints

- Input is given as an array. 
- The output consists of line breaks, spaces, and three special characters (├,│,└). 
- Subdirectories are separated by "double space + special character + single space." 
- If there are sub-directories in sub-directories, they should be separated by "double space + special character + single space" according to the starting character of the parent directory. 
- Please sort each category in ascending order in the output. 
- All inputs are in Korean. 
- Each category in the input is separated by "-". 
- If a new category starts, it is separated by a space. 
- The output has to use the escape character `\ n` for line feeds.
---

## Input and Output Examples

**Input**

```jsx
["Clothing-Men Clothing-Tops-T-Shirts-Brand", "Clothing-Men Clothing", "Clothing-Women Clothing-Tops-T-Shirts", "Men Clothing-Tops-Suit", "Animal-Cat-Toy"]
```

**Output**

```jsx

Animal 
  └ Cat
    └ Toy 
    
Clothing 
  ├ Men Clothing 
  │   └ Tops 
  │       ├ Suit 
  │       └ T-Shirts 
  │           └ Brand 
  └ Women Clothing 
      └ Tops 
          └ T-Shirts 
```
---

## Explanation for Input and Output

For the animal category, there is only one category connected, so all are connected with "└". An "└" is entered where there are two spaces after the animal text starts, and then "Cat" comes below.

Two children exist under Clothing. Men Clothing and Women Clothing. This must be sorted in ascending order regardless of the input value. Therefore, Women Clothing cannot be placed above.

Since there is Women Clothing below Men Clothing, there must be a "│" at the front where the descendant categories of Men Clothing are connected when they are continuous.

The line feed is expressed as the escape character in the actual output, `\n`.
