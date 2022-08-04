import { EKeyBookReaderTab } from '@/pages/BookReader/BookReader.enums';

export const dataBackgroundSetting = [
  { label: 'white', value: '#ffffff' },
  { label: 'yellow', value: '#fffbd5' },
  { label: 'green', value: '#d5ffdd' },
  { label: 'blue', value: '#d5d6ff' },
  { label: 'brown', value: '#ffead5' },
];

export const dataBookReaderTabs = [
  { label: 'Danh sách chương', value: EKeyBookReaderTab.CHAPTERS },
  { label: 'Đặt câu hỏi', value: EKeyBookReaderTab.QUESTIONS },
  { label: 'Tài liệu', value: EKeyBookReaderTab.DOCUMENTS },
];
