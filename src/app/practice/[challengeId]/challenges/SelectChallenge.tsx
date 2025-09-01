'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Eye, EyeOff } from 'lucide-react';

export default function SelectChallenge() {
  const [showLocators, setShowLocators] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);

  const handleItemSelect = (item: string, category: 'items' | 'colors' | 'numbers') => {
    if (category === 'items') {
      setSelectedItems(prev => 
        prev.includes(item) 
          ? prev.filter(i => i !== item)
          : [...prev, item]
      );
    } else if (category === 'colors') {
      setSelectedColors(prev => 
        prev.includes(item) 
          ? prev.filter(i => i !== item)
          : [...prev, item]
      );
    } else {
      setSelectedNumbers(prev => 
        prev.includes(item) 
          ? prev.filter(i => i !== item)
          : [...prev, item]
      );
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const locators = [
    { element: 'Selectable Container', locator: 'id("selectable-list")', type: 'ID' },
    { element: 'Selectable Item', locator: '//li[@class="selectable-item"]', type: 'XPath' },
    { element: 'Selected Item', locator: 'css(".selected")', type: 'CSS' },
    { element: 'Multi-select Item', locator: '//div[@data-selectable="true"]', type: 'XPath' },
    { element: 'All Selected Items', locator: 'css(".selectable-item.selected")', type: 'CSS' }
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Multi Select Challenge</h1>
          <p className="text-muted-foreground mt-2">Practice multi-selection operations with various UI elements</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">Difficulty: Medium</Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowLocators(!showLocators)}
          >
            {showLocators ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showLocators ? 'Hide' : 'Show'} Locators
          </Button>
        </div>
      </div>

      {showLocators && (
        <Card>
          <CardHeader>
            <CardTitle>Element Locators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {locators.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <span className="font-medium">{item.element}</span>
                    <Badge variant="outline" className="ml-2">{item.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-background px-2 py-1 rounded text-sm">{item.locator}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(item.locator)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {/* Basic Multi-Select List */}
        <Card>
          <CardHeader>
            <CardTitle>1. Basic Multi-Select List</CardTitle>
            <p className="text-sm text-muted-foreground">Click items to select/deselect multiple items</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ul id="selectable-list" className="grid grid-cols-2 gap-2 max-w-md">
                {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'].map((item) => (
                  <li
                    key={item}
                    className={`selectable-item p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedItems.includes(item)
                        ? 'selected bg-blue-100 border-blue-500 text-blue-700'
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => handleItemSelect(item, 'items')}
                    data-testid={`selectable-${item.toLowerCase().replace(' ', '-')}`}
                    data-selectable="true"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-sm text-muted-foreground">
                Selected: {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Selection Grid */}
        <Card>
          <CardHeader>
            <CardTitle>2. Color Selection Grid</CardTitle>
            <p className="text-sm text-muted-foreground">Select multiple colors from the palette</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div id="color-selector" className="grid grid-cols-4 gap-3 max-w-md">
                {[
                  { name: 'Red', color: 'bg-red-500' },
                  { name: 'Blue', color: 'bg-blue-500' },
                  { name: 'Green', color: 'bg-green-500' },
                  { name: 'Yellow', color: 'bg-yellow-500' },
                  { name: 'Purple', color: 'bg-purple-500' },
                  { name: 'Pink', color: 'bg-pink-500' },
                  { name: 'Orange', color: 'bg-orange-500' },
                  { name: 'Teal', color: 'bg-teal-500' }
                ].map((colorItem) => (
                  <div
                    key={colorItem.name}
                    className={`color-item w-16 h-16 rounded-lg cursor-pointer border-4 transition-all ${colorItem.color} ${
                      selectedColors.includes(colorItem.name)
                        ? 'border-gray-800 scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => handleItemSelect(colorItem.name, 'colors')}
                    data-testid={`color-${colorItem.name.toLowerCase()}`}
                    data-color={colorItem.name}
                    title={colorItem.name}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Selected Colors: {selectedColors.length > 0 ? selectedColors.join(', ') : 'None'}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Number Range Selection */}
        <Card>
          <CardHeader>
            <CardTitle>3. Number Range Selection</CardTitle>
            <p className="text-sm text-muted-foreground">Select multiple numbers from the range</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div id="number-selector" className="grid grid-cols-5 gap-2 max-w-md">
                {Array.from({ length: 15 }, (_, i) => i + 1).map((number) => (
                  <div
                    key={number}
                    className={`number-item w-12 h-12 rounded-lg cursor-pointer border-2 flex items-center justify-center font-bold transition-all ${
                      selectedNumbers.includes(number.toString())
                        ? 'selected bg-green-500 text-white border-green-600'
                        : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                    onClick={() => handleItemSelect(number.toString(), 'numbers')}
                    data-testid={`number-${number}`}
                    data-number={number}
                  >
                    {number}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Selected Numbers: {selectedNumbers.length > 0 ? selectedNumbers.sort((a, b) => parseInt(a) - parseInt(b)).join(', ') : 'None'}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Selection with Categories */}
        <Card>
          <CardHeader>
            <CardTitle>4. Category-based Selection</CardTitle>
            <p className="text-sm text-muted-foreground">Select items from different categories</p>
          </CardHeader>
          <CardContent>
            <CategorySelector />
          </CardContent>
        </Card>
      </div>

      {/* Selenium Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Selenium WebDriver Code Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Java - Multi-Selection Operations</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`// Select multiple items using Ctrl+Click
Actions actions = new Actions(driver);
List<WebElement> items = driver.findElements(By.className("selectable-item"));

// Select first item
items.get(0).click();

// Hold Ctrl and select additional items
actions.keyDown(Keys.CONTROL)
       .click(items.get(2))
       .click(items.get(4))
       .keyUp(Keys.CONTROL)
       .perform();

// Verify selected items
List<WebElement> selectedItems = driver.findElements(By.cssSelector(".selectable-item.selected"));
System.out.println("Selected count: " + selectedItems.size());

// Select all items in a range (Shift+Click)
items.get(0).click();
actions.keyDown(Keys.SHIFT)
       .click(items.get(3))
       .keyUp(Keys.SHIFT)
       .perform();`}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Python - Multi-Selection with ActionChains</h4>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

# Get selectable items
items = driver.find_elements(By.CLASS_NAME, "selectable-item")

# Multi-select with Ctrl+Click
actions = ActionChains(driver)
items[0].click()  # Select first item

# Hold Ctrl and select additional items
actions.key_down(Keys.CONTROL).click(items[2]).click(items[4]).key_up(Keys.CONTROL).perform()

# Verify selections
selected_items = driver.find_elements(By.CSS_SELECTOR, ".selectable-item.selected")
print(f"Selected count: {len(selected_items)}")

# Select range with Shift+Click
items[0].click()
actions.key_down(Keys.SHIFT).click(items[3]).key_up(Keys.SHIFT).perform()`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CategorySelector() {
  const [selectedByCategory, setSelectedByCategory] = useState<{[key: string]: string[]}>({
    fruits: [],
    colors: [],
    animals: []
  });

  const categories = {
    fruits: ['Apple', 'Banana', 'Orange', 'Grape'],
    colors: ['Red', 'Blue', 'Green', 'Yellow'],
    animals: ['Cat', 'Dog', 'Bird', 'Fish']
  };

  const handleCategorySelect = (category: string, item: string) => {
    setSelectedByCategory(prev => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter(i => i !== item)
        : [...prev[category], item]
    }));
  };

  return (
    <div className="space-y-6">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h4 className="font-semibold capitalize">{category}</h4>
          <div className="flex gap-2 flex-wrap">
            {items.map((item) => (
              <div
                key={item}
                className={`category-item px-4 py-2 rounded-lg cursor-pointer border transition-all ${
                  selectedByCategory[category].includes(item)
                    ? 'bg-purple-100 border-purple-500 text-purple-700'
                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }`}
                onClick={() => handleCategorySelect(category, item)}
                data-testid={`${category}-${item.toLowerCase()}`}
                data-category={category}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            Selected {category}: {selectedByCategory[category].join(', ') || 'None'}
          </div>
        </div>
      ))}
    </div>
  );
}