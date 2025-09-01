#!/bin/bash

# Day 6
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 6: Java Fundamentals - Data Types & Variables | SDET Course'\'',\
  description: '\''Master Java fundamentals including primitive data types, variables, and arithmetic operations. Essential Java concepts for automation testing.'\'',\
  keywords: '\''java fundamentals, java data types, variables, arithmetic operations, primitive types, java programming, automation testing java'\'',\
}\
' src/app/day6/page.tsx

# Day 7
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 7: Java Operators & Control Structures | SDET Course'\'',\
  description: '\''Learn Java operators, conditional statements, and decision-making structures. Master if-else, switch-case, and logical operators.'\'',\
  keywords: '\''java operators, conditional statements, if else, switch case, logical operators, java control structures, decision making'\'',\
}\
' src/app/day7/page.tsx

# Day 8
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 8: Java Loops & Iterations | SDET Course'\'',\
  description: '\''Master Java loops including for, while, and do-while loops. Learn loop control statements and iteration techniques for automation.'\'',\
  keywords: '\''java loops, for loop, while loop, do while loop, iterations, loop control, java programming, automation loops'\'',\
}\
' src/app/day8/page.tsx

# Day 9
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 9: Java Methods & Functions | SDET Course'\'',\
  description: '\''Learn Java methods, parameters, return types, and variable scope. Master method creation and function concepts for test automation.'\'',\
  keywords: '\''java methods, functions, parameters, return types, variable scope, method overloading, java programming, automation methods'\'',\
}\
' src/app/day9/page.tsx

echo "Added metadata to Java Days 6-9"
