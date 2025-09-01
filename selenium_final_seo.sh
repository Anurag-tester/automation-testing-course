#!/bin/bash

# Days 15-25
for day in {15..25}; do
  case $day in
    15) title="Checkbox & Radio Button Handling"; desc="Learn Selenium checkbox and radio button handling. Master selection states, group operations, and form element automation."; keywords="selenium checkbox, radio buttons, form elements, selection handling, input elements, form automation" ;;
    16) title="Alert Handling - JavaScript Alerts"; desc="Master Selenium alert handling including simple alerts, confirmation alerts, and prompt dialogs. Learn switchTo().alert() methods."; keywords="selenium alerts, javascript alerts, alert handling, confirmation alerts, prompt alerts, switchTo alert" ;;
    17) title="Frame Handling - iFrame Navigation"; desc="Learn Selenium frame handling and iFrame navigation. Master switchTo().frame(), defaultContent(), and nested frame operations."; keywords="selenium frames, iframe handling, frame switching, nested frames, switchTo frame, defaultContent" ;;
    18) title="Actions Class - Mouse & Keyboard Events"; desc="Master Selenium Actions class for mouse and keyboard events. Learn drag-drop, hover, right-click, and complex interactions."; keywords="selenium actions class, mouse actions, keyboard events, drag drop, hover, right click, complex interactions" ;;
    19) title="JavaScript Executor - DOM Manipulation"; desc="Learn Selenium JavaScript Executor for DOM manipulation and advanced browser interactions. Master executeScript() methods."; keywords="selenium javascript executor, DOM manipulation, executeScript, browser javascript, scroll, click using js" ;;
    20) title="Relative XPath Fundamentals"; desc="Master relative XPath techniques including single attributes, logical operators, and XPath functions for robust element location."; keywords="relative xpath, xpath fundamentals, xpath functions, xpath techniques, element location, xpath methods" ;;
    21) title="Advanced XPath & Axes"; desc="Master advanced XPath techniques including XPath axes like child, descendant, and complex DOM navigation strategies."; keywords="advanced xpath, xpath axes, child axis, descendant axis, xpath navigation, dom traversal, xpath optimization" ;;
    22) title="XPath Practice & Assignments"; desc="Comprehensive XPath practice session with real-world assignments and hands-on exercises for mastering element location."; keywords="xpath practice, xpath assignments, xpath exercises, element location practice, xpath training, locator practice" ;;
    23) title="XPath Sibling Navigation"; desc="Master XPath sibling navigation techniques using following-sibling and preceding-sibling axes for related element location."; keywords="xpath sibling navigation, following-sibling, preceding-sibling, sibling axes, xpath navigation, element relationships" ;;
    24) title="Advanced XPath Practice"; desc="Advanced XPath practice with complex scenarios, real-world applications, and comprehensive assignments for expert-level skills."; keywords="advanced xpath practice, complex xpath, xpath mastery, xpath challenges, expert xpath, xpath optimization" ;;
    25) title="Dropdown Handling - Select Class & Dynamic"; desc="Master dropdown handling techniques including Select class for HTML select tags and iteration methods for dynamic dropdowns."; keywords="dropdown handling, select class, dynamic dropdowns, dropdown automation, selectByVisibleText, custom dropdowns" ;;
  esac
  
  sed -i '' "1i\\
export const metadata = {\\
  title: 'Day $day: $title | SDET Course',\\
  description: '$desc',\\
  keywords: '$keywords',\\
}\\
" src/app/day$day/page.tsx
done

echo "Added metadata to Days 15-25"
