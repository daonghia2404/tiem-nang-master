import { THeaderMenuData } from '@/containers/Header/Header.types.d';
import { Paths } from '@/pages/routers';

export const dataFooterMenu: THeaderMenuData[] = [
  { key: 1, link: Paths.Faq, activePaths: [Paths.Faq], title: 'Câu hỏi thường gặp' },
  { key: 2, link: Paths.PrivacyPolicy, activePaths: [Paths.PrivacyPolicy], title: 'Điều khoản chính sách' },
  { key: 3, link: Paths.BooksLibrary, activePaths: [], title: 'Chính sách bảo mật' },
  { key: 4, link: Paths.ListBanks, activePaths: [Paths.ListBanks], title: 'Ngân hàng thanh toán' },
];
