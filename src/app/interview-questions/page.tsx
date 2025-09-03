import DayLayout from '@/components/DayLayout';
import InterviewQuestionsClient from './InterviewQuestionsClient';

export const metadata = {
  metadataBase: new URL('https://testmaster-iota.vercel.app'),
  title: 'SDET Interview Questions - 40+ Questions with Answers | Automation Testing',
  description: 'Comprehensive SDET interview questions covering Manual Testing, Java, Selenium WebDriver, TestNG, and advanced automation concepts. Perfect for interview preparation.',
  keywords: 'SDET interview questions, selenium interview questions, automation testing interview, java interview questions, manual testing interview, QA interview prep',
}

export default function InterviewQuestions() {
  return (
    <DayLayout
      dayNumber={0}
      title="SDET Interview Questions"
      description="Comprehensive collection of SDET interview questions covering Manual Testing, Java Programming, Selenium WebDriver, and TestNG with detailed answers."
    >
      <InterviewQuestionsClient />
    </DayLayout>
  );
}