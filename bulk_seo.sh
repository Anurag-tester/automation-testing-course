#!/bin/bash

# Day 3
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 3: Advanced Testing Methods - Decision Table & State Transition | SDET Course'\'',\
  description: '\''Learn advanced testing methods including Decision Table Testing, State Transition Testing, and Use Case Testing for complex business logic validation.'\'',\
  keywords: '\''decision table testing, state transition testing, use case testing, advanced testing methods, manual testing, test design techniques'\'',\
}\
' src/app/day3/page.tsx

# Day 4  
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 4: Test Documentation - Test Plans & Test Cases | SDET Course'\'',\
  description: '\''Master test documentation including Test Plans, Test Cases, and Documentation Standards. Learn IEEE standards and traceability matrix creation.'\'',\
  keywords: '\''test plans, test cases, test documentation, IEEE standards, traceability matrix, test planning, test execution, test reporting'\'',\
}\
' src/app/day4/page.tsx

# Day 5
sed -i '' '1i\
export const metadata = {\
  title: '\''Day 5: Defect Management - Bug Life Cycle & Quality Metrics | SDET Course'\'',\
  description: '\''Learn defect management including Bug Life Cycle, Severity vs Priority classification, and Quality Metrics for effective bug tracking.'\'',\
  keywords: '\''bug life cycle, defect management, severity vs priority, quality metrics, bug tracking, defect reporting, JIRA, defect analysis'\'',\
}\
' src/app/day5/page.tsx

echo "Added metadata to Days 3-5"
