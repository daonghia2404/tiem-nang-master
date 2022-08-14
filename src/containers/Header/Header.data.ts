import { THeaderMenuData } from '@/containers/Header/Header.types.d';
import { Paths } from '@/pages/routers';

export const dataHeaderMenu: THeaderMenuData[] = [
  { key: 1, link: Paths.Release, activePaths: [Paths.Release], title: 'Giải tỏa' },
  { key: 2, link: Paths.Courses, activePaths: [Paths.Courses], title: 'Khóa học' },
  { key: 3, link: Paths.BooksLibrary, activePaths: [Paths.BooksLibrary], title: 'Tiềm năng Master' },
  { key: 4, link: Paths.BookShelf, activePaths: [Paths.BookShelf], title: 'Kệ sách', requireAuth: true },
  { key: 5, link: Paths.Contact, activePaths: [Paths.Contact], title: 'Tư vấn', requireAuth: true },
];
