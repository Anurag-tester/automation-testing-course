# Complete SDET Automation Testing Course

🚀 **Full Stack SDET Training** - A comprehensive automation testing course website covering Web UI, API, Database, and Mobile testing with modern tools and frameworks.

## 🎯 Course Overview

**36 Days of Complete SDET Training** covering:
- 📋 **Manual Testing Foundation** (5 days)
- ☕ **Java Programming** (4 days) 
- 🌐 **Selenium WebDriver Mastery** (27 days)
- 🎯 **40+ Interview Questions**
- 💻 **22 Practice Challenges**
- 📚 **Complete Curriculum Guide**

## ✨ Features

- 📚 **36 comprehensive days** of structured content
- 💻 **Interactive code examples** with syntax highlighting
- 🧪 **22 hands-on practice challenges** (Beginner to Expert)
- 📝 **40 interview questions** with detailed answers
- 🎨 **Modern UI** with Tailwind CSS and shadcn/ui
- 📱 **Responsive design** for all devices
- ⚡ **Fast performance** with Next.js 14
- 🔍 **Advanced search** functionality

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/Anurag-tester/automation-testing-course.git
cd automation-testing-course
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000
```

## 📋 Complete Course Structure

### 🔵 Manual Testing Foundation (Days 1-5)
- **Day 1:** Manual Testing Basics (SDLC, Fish Model)
- **Day 2:** Testing Techniques (Black Box, ECP, BVA)
- **Day 3:** Advanced Testing Methods (Decision Table, State Transition)
- **Day 4:** Test Documentation (Test Plans, Test Cases)
- **Day 5:** Defect Management (Bug Life Cycle, Severity vs Priority)

### 🟢 Java Programming (Days 6-9)
- **Day 6:** Java Fundamentals (Data Types, Variables, Operators)
- **Day 7:** Java Operators & Control Structures
- **Day 8:** Loops & Iterations (For, While, Do-While)
- **Day 9:** Methods & Functions (Parameters, Return Types, Scope)

### 🟣 Selenium WebDriver Mastery (Days 10-36)
- **Day 10:** Selenium Introduction & Setup
- **Day 11:** Web Element Identification & Locators
- **Day 12:** Element Interactions (Click, Type, Clear)
- **Day 13:** Advanced Locators (XPath, CSS Selectors)
- **Day 14:** Dropdown Handling (Select Class)
- **Day 15:** Checkbox & Radio Button Handling
- **Day 16:** Alert Handling (JavaScript Alerts)
- **Day 17:** Frame Handling (iFrame Navigation)
- **Day 18:** Actions Class (Mouse & Keyboard Events)
- **Day 19:** JavaScript Executor (DOM Manipulation)
- **Day 20:** Relative XPath Fundamentals
- **Day 21:** Advanced XPath & Axes
- **Day 22:** XPath Practice & Assignments
- **Day 23:** XPath Sibling Navigation
- **Day 24:** Advanced XPath Practice
- **Day 25:** Dropdown Handling (Select Class & Dynamic)
- **Day 26:** Dynamic Table & Calendar Handling
- **Day 27:** Multiple Window & Tab Handling
- **Day 28:** Selenium Roadmap & Review
- **Day 29:** Synchronization (Implicit, Explicit, Fluent Waits)
- **Day 30:** Screenshots & Browser Options
- **Day 31:** Broken Link Detection
- **Day 32:** Selenium Theory & Interview Questions
- **Day 33:** Advanced Concepts & Exception Handling
- **Day 34:** Shadow DOM Handling
- **Day 35:** SSL Certificate & File Upload (AutoIT)
- **Day 36:** JavaScript Executor Interface & Advanced Techniques (2 Parts)

## 🎯 Practice Challenges (22 Total)

### 🟢 Beginner Level (6 challenges)
- Button Click Challenge
- Input Handling Challenge
- Select Dropdown Challenge
- Radio Button Toggle Challenge
- Elements Challenge
- Forms Challenge

### 🔵 Intermediate Level (4 challenges)
- Multi-Select Challenge
- Slider Challenge
- Calendar Challenge
- Waits Challenge

### 🟠 Advanced Level (8 challenges)
- Table Operations (Simple & Advanced)
- Frame Navigation Challenge
- Window Management Challenge
- Drag & Drop Challenge
- Sort Challenge
- Alert Dialog Challenge
- File Management Challenge
- Shadow DOM Challenge

### 🔴 Expert Level (4 challenges)
- Complex multi-step scenarios
- Real-world automation challenges

## 📚 Additional Resources

- **📋 Complete Curriculum:** Full Stack SDET training roadmap
- **❓ Interview Questions:** 40 comprehensive Q&A covering all topics
- **🔍 Search Functionality:** Find content across all days and topics
- **📖 Selenium Cheatsheet:** Quick reference guide

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Search:** Advanced fuzzy search
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── day1-day35/          # 35 individual day pages
│   ├── practice/            # 22 practice challenges
│   ├── interview-questions/ # 40 interview Q&A
│   ├── curriculum/          # Complete curriculum guide
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── DayLayout.tsx       # Day page layout
│   ├── Quiz.tsx            # Interactive quizzes
│   └── SearchBox.tsx       # Search functionality
├── data/
│   └── courseData.ts       # Course content and metadata
└── lib/
    └── utils.ts            # Utility functions
```

## 📝 Adding New Course Content

### Rules for Adding New Days/Lessons:

1. **Update courseData.ts**:
   - Add new day entry to `/src/data/courseData.ts`
   - Include proper `id`, `slug`, `title`, `description`, `category`, and `tags`
   - Follow existing naming conventions (e.g., `day38`, `day39`)

2. **Create Component File**:
   - Create new component in `/src/components/days/dayXX/index.tsx`
   - Use `'use client'` directive for interactive components
   - Follow existing component structure with DayLayout wrapper

3. **Update Dynamic Imports**:
   - Add new route mapping in `/src/app/[slug]/page.tsx` componentMap
   - Format: `'slug-name': () => import('@/components/days/dayXX')`

4. **Update Search Keywords**:
   - Add relevant search terms to `/src/components/SearchBox.tsx`
   - Include topic-specific keywords for discoverability

5. **Update IndexNow URLs**:
   - Add new page URL to `/src/app/page.tsx` IndexNow submission
   - Format: `'https://testmaster-iota.vercel.app/new-slug'`

6. **Content Guidelines**:
   - Include interactive quizzes using LazyQuiz component
   - Add comprehensive tags for SEO optimization
   - Follow consistent styling with existing pages
   - Include code examples and practical exercises

### Example New Day Structure:
```typescript
{ 
  id: "day38", 
  slug: "new-topic-name", 
  title: "New Topic Title", 
  description: "Brief description of the topic", 
  category: "selenium", // or appropriate category
  lessons: [], 
  tags: ["relevant", "keywords", "for", "search"] 
}
```

## 🤝 Contributing

Contributions are welcome! Please follow the above guidelines when adding new content.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨💻 Author

**Praful Pawar** - SDET Trainer & Automation Expert

---

⭐ **Star this repository** if you find it helpful for your SDET journey!