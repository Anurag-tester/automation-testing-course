
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