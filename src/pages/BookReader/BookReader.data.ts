import { EKeyBookReaderTab } from '@/pages/BookReader/BookReader.enums';
import BgBookReader1 from '@/assets/images/bg-book-reader-1.png';
import BgBookReader2 from '@/assets/images/bg-book-reader-2.png';
import BgBookReader3 from '@/assets/images/bg-book-reader-3.png';
import BgBookReader4 from '@/assets/images/bg-book-reader-4.png';
import BgBookReader5 from '@/assets/images/bg-book-reader-5.png';
import BgBookReader6 from '@/assets/images/bg-book-reader-6.png';

export const dataBackgroundSetting = [
  { label: '1', value: BgBookReader1 },
  { label: '2', value: BgBookReader2 },
  { label: '3', value: BgBookReader3 },
  { label: '4', value: BgBookReader4 },
  { label: '5', value: BgBookReader5 },
  { label: '6', value: BgBookReader6 },
];

export const dataBookReaderTabs = [
  { label: 'Danh sách chương', value: EKeyBookReaderTab.CHAPTERS },
  { label: 'Đặt câu hỏi', value: EKeyBookReaderTab.QUESTIONS },
  { label: 'Tài liệu', value: EKeyBookReaderTab.DOCUMENTS },
];
