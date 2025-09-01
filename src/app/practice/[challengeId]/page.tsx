'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import InputEditChallenge from './challenges/InputEditChallenge';
import ButtonClickChallenge from './challenges/ButtonClickChallenge';
import SelectDropdownChallenge from './challenges/SelectDropdownChallenge';
import AlertDialogChallenge from './challenges/AlertDialogChallenge';
import FrameChallenge from './challenges/FrameChallenge';
import RadioToggleChallenge from './challenges/RadioToggleChallenge';
import WindowChallenge from './challenges/WindowChallenge';
import ElementsChallenge from './challenges/ElementsChallenge';
import DragChallenge from './challenges/DragChallenge';
import DropChallenge from './challenges/DropChallenge';
import SortChallenge from './challenges/SortChallenge';
import SelectChallenge from './challenges/SelectChallenge';
import SliderChallenge from './challenges/SliderChallenge';
import WaitsChallenge from './challenges/WaitsChallenge';
import MultiSelectChallenge from './challenges/MultiSelectChallenge';
import TableSimpleChallenge from './challenges/TableSimpleChallenge';
import TableAdvancedChallenge from './challenges/TableAdvancedChallenge';
import CalendarChallenge from './challenges/CalendarChallenge';
import FormsChallenge from './challenges/FormsChallenge';
import FileManagementChallenge from './challenges/FileManagementChallenge';
import ShadowDomChallenge from './challenges/ShadowDomChallenge';


const challengeComponents = {
  'input-edit': InputEditChallenge,
  'button-click': ButtonClickChallenge,
  'select-dropdown': SelectDropdownChallenge,
  'alert-dialog': AlertDialogChallenge,
  'frame-innerhtml': FrameChallenge,
  'radio-toggle': RadioToggleChallenge,
  'window-tabs': WindowChallenge,
  'elements-find': ElementsChallenge,
  'drag-aui1': DragChallenge,
  'drop-aui2': DropChallenge,
  'sort-aui3': SortChallenge,
  'multiselect-aui4': MultiSelectChallenge,
  'slider-aui5': SliderChallenge,
  'waits-timeouts': WaitsChallenge,
  'table-simple': TableSimpleChallenge,
  'table-advanced': TableAdvancedChallenge,
  'calendar-datetime': CalendarChallenge,
  'forms-allinone': FormsChallenge,
  'file-management': FileManagementChallenge,
  'shadow-dom': ShadowDomChallenge,

  // Add more challenges as we build them
};

export default function ChallengePage() {
  const params = useParams();
  const challengeId = params.challengeId as string;
  
  const ChallengeComponent = challengeComponents[challengeId as keyof typeof challengeComponents];
  
  if (!ChallengeComponent) {
    notFound();
  }
  
  return <ChallengeComponent />;
}