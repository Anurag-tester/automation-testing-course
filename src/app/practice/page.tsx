import DayLayout from '@/components/DayLayout';
import Link from 'next/link';
import { Code, Target, Clock, Star, ChevronRight, Play, Zap, Trophy, Brain } from 'lucide-react';

const practiceProblems = [
  {
    id: 'input-edit',
    title: 'Input - Edit Fields',
    description: 'Complex input field automation with validation, dynamic attributes, and edge cases',
    difficulty: 'Advanced',
    estimatedTime: '25-30 min',
    skills: ['complex locators', 'input validation', 'dynamic attributes', 'edge case handling'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'button-click',
    title: 'Button - Click Actions',
    description: 'Basic button interactions with click, properties, and navigation',
    difficulty: 'Beginner',
    estimatedTime: '10-15 min',
    skills: ['basic clicks', 'button properties', 'navigation', 'element states'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'select-dropdown',
    title: 'Select - Dropdown Mastery',
    description: 'Advanced dropdown automation with optgroups, dynamic loading, and complex locators',
    difficulty: 'Advanced',
    estimatedTime: '30-35 min',
    skills: ['optgroup handling', 'dynamic content', 'complex locators', 'multi-attribute selection'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'alert-dialog',
    title: 'Alert - Dialog Boxes',
    description: 'Basic alert handling - accept, dismiss, and prompt interactions',
    difficulty: 'Beginner',
    estimatedTime: '15-20 min',
    skills: ['alert handling', 'accept', 'dismiss', 'sendKeys to alert'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'frame-innerhtml',
    title: 'Frame - Inner HTML',
    description: 'Interact with different types of frames/iframes and nested frame structures',
    difficulty: 'Intermediate',
    estimatedTime: '25-30 min',
    skills: ['switchTo frame', 'defaultContent', 'nested frames', 'frame navigation'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'radio-toggle',
    title: 'Radio - Toggle Elements',
    description: 'Basic radio button and checkbox interactions with selection and validation',
    difficulty: 'Beginner',
    estimatedTime: '15-20 min',
    skills: ['radio buttons', 'checkboxes', 'selection states', 'basic validation'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'window-tabs',
    title: 'Window - Tab Management',
    description: 'Switch between different types of tabs and windows',
    difficulty: 'Intermediate',
    estimatedTime: '25-30 min',
    skills: ['window handles', 'switchTo window', 'tab management', 'popup handling'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'elements-find',
    title: 'Elements - Find & Smash',
    description: 'Basic element location and interaction practice',
    difficulty: 'Beginner',
    estimatedTime: '15-20 min',
    skills: ['element location', 'findElements', 'basic interactions', 'locator strategies'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'drag-aui1',
    title: 'Drag - AUI 1',
    description: 'Drag me here and there - master drag operations and movements',
    difficulty: 'Advanced',
    estimatedTime: '20-25 min',
    skills: ['drag operations', 'Actions class', 'dragAndDrop', 'mouse movements'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'drop-aui2',
    title: 'Drop - AUI 2',
    description: 'Feel free to bounce me - master drop operations and target interactions',
    difficulty: 'Advanced',
    estimatedTime: '20-25 min',
    skills: ['drop operations', 'dragAndDropBy', 'target elements', 'coordinate-based drops'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'sort-aui3',
    title: 'Sort - AUI 3',
    description: 'Sort out the problem quickly - master sorting and reordering elements',
    difficulty: 'Expert',
    estimatedTime: '30-35 min',
    skills: ['element sorting', 'drag and drop sequences', 'list reordering', 'complex interactions'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'multiselect-aui4',
    title: 'Multi-Select - AUI 4',
    description: 'Be a multi-tasker - handle complex multi-selection scenarios',
    difficulty: 'Advanced',
    estimatedTime: '25-30 min',
    skills: ['multi-selection', 'Ctrl+Click', 'range selection', 'selection management'],
    color: 'from-lime-500 to-green-600'
  },
  {
    id: 'slider-aui5',
    title: 'Slider - AUI 5',
    description: 'Basic slider controls and range input interactions',
    difficulty: 'Beginner',
    estimatedTime: '15-20 min',
    skills: ['slider controls', 'dragAndDropBy', 'range inputs', 'value manipulation'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'waits-timeouts',
    title: 'Waits - Timeouts',
    description: "It's ok to wait but you know.. - master different wait strategies",
    difficulty: 'Advanced',
    estimatedTime: '25-30 min',
    skills: ['explicit waits', 'implicit waits', 'fluent waits', 'timeout handling'],
    color: 'from-stone-500 to-gray-600'
  },
  {
    id: 'table-simple',
    title: 'Table - Simple',
    description: "Basic table operations - rows, columns, and cell data extraction",
    difficulty: 'Beginner',
    estimatedTime: '20-25 min',
    skills: ['table parsing', 'row/column navigation', 'cell data extraction', 'table validation'],
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'table-advanced',
    title: 'Table - Advanced',
    description: "It's little complicated but give a try - complex table operations",
    difficulty: 'Expert',
    estimatedTime: '35-40 min',
    skills: ['dynamic tables', 'sorting', 'filtering', 'pagination', 'complex table operations'],
    color: 'from-indigo-600 to-purple-700'
  },
  {
    id: 'calendar-datetime',
    title: 'Calendar - Date & Time',
    description: 'My time is precious & yours? - master date picker and calendar interactions',
    difficulty: 'Advanced',
    estimatedTime: '25-30 min',
    skills: ['date picker', 'calendar navigation', 'date selection', 'time handling'],
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 'forms-allinone',
    title: 'Forms - All in One',
    description: 'Interact with everything - comprehensive form handling challenge',
    difficulty: 'Expert',
    estimatedTime: '40-45 min',
    skills: ['form handling', 'validation', 'submission', 'comprehensive testing'],
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'file-management',
    title: 'File - Management',
    description: 'All your data is secured! - master file upload and download operations',
    difficulty: 'Expert',
    estimatedTime: '30-35 min',
    skills: ['file upload', 'file download', 'file validation', 'file management'],
    color: 'from-violet-600 to-purple-700'
  },
  {
    id: 'shadow-dom',
    title: 'Shadow - DOM',
    description: 'Shadow never leaves us alone - master shadow DOM interactions',
    difficulty: 'Expert',
    estimatedTime: '35-40 min',
    skills: ['shadow DOM', 'getShadowRoot', 'shadow elements', 'encapsulated DOM'],
    color: 'from-gray-600 to-slate-700'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
    case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Advanced': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Expert': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getDifficultyIcon = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return <Play className="w-4 h-4" />;
    case 'Intermediate': return <Target className="w-4 h-4" />;
    case 'Advanced': return <Zap className="w-4 h-4" />;
    case 'Expert': return <Brain className="w-4 h-4" />;
    default: return <Code className="w-4 h-4" />;
  }
};

export const metadata = {
  title: 'Selenium Practice Problems - 22 Hands-on Challenges | Automation Testing',
  description: 'Master Selenium WebDriver with 22 hands-on practice challenges from beginner to expert level. Real-world automation scenarios with interactive solutions.',
  keywords: 'selenium practice problems, automation testing challenges, selenium webdriver practice, hands-on selenium, automation exercises, selenium training',
}

export default function PracticePage() {
  return (
    <DayLayout
      dayNumber={0}
      title="Selenium Practice Problems"
      description="Master Selenium WebDriver with hands-on practice problems ranging from beginner to expert level challenges."
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-4">Selenium Practice Arena</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Challenge yourself with real-world Selenium automation problems. Each challenge is designed to test and improve your automation skills with practical scenarios you'll encounter in professional testing.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">{practiceProblems.filter(p => p.difficulty === 'Beginner').length}</div>
                  <div className="text-sm text-gray-600">Beginner</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{practiceProblems.filter(p => p.difficulty === 'Intermediate').length}</div>
                  <div className="text-sm text-gray-600">Intermediate</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{practiceProblems.filter(p => p.difficulty === 'Advanced').length}</div>
                  <div className="text-sm text-gray-600">Advanced</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-red-600 mb-1">{practiceProblems.filter(p => p.difficulty === 'Expert').length}</div>
                  <div className="text-sm text-gray-600">Expert</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Interactive practice challenges:</p>
                <div className="flex justify-center gap-4 text-xs">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Built-in Practice Pages</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Real-world Scenarios</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Problems Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-4">
            {practiceProblems.map((problem) => (
              <Link key={problem.id} href={`/practice/${problem.id}`}>
                <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${problem.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(problem.difficulty)} flex items-center gap-1`}>
                            {getDifficultyIcon(problem.difficulty)}
                            {problem.difficulty}
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            {problem.estimatedTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {problem.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {problem.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {problem.skills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                          {problem.skills.length > 3 && (
                            <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs rounded">
                              +{problem.skills.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Interactive Practice Challenge
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Play className="w-4 h-4" />
                        <span>Start Challenge</span>
                      </div>
                      <div className={`w-8 h-8 bg-gradient-to-br ${problem.color} rounded-lg flex items-center justify-center`}>
                        <Code className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">How Practice Challenges Work</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Problem Statement</h3>
              <p className="text-gray-600 text-sm">
                Each challenge presents a real-world scenario with specific requirements and acceptance criteria to meet.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Code Solution</h3>
              <p className="text-gray-600 text-sm">
                Write Selenium WebDriver code to solve the challenge using best practices and efficient techniques.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Solution</h3>
              <p className="text-gray-600 text-sm">
                Compare your approach with expert solutions and learn advanced techniques and optimizations.
              </p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Practice Tips</h2>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Before You Start</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Read the problem statement carefully</li>
                  <li>• Understand the acceptance criteria</li>
                  <li>• Plan your approach before coding</li>
                  <li>• Set up your development environment</li>
                  <li>• Have browser drivers ready</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Best Practices</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Use explicit waits over implicit waits</li>
                  <li>• Implement proper exception handling</li>
                  <li>• Follow Page Object Model patterns</li>
                  <li>• Add meaningful assertions</li>
                  <li>• Clean up resources properly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Challenge Yourself?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Start with beginner challenges and work your way up to expert-level problems. Each challenge will enhance your Selenium automation skills.
          </p>
          <Link href="/practice/input-edit">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5 mr-3 inline" />
              Start Challenge
            </button>
          </Link>
        </section>
      </div>
    </DayLayout>
  );
}