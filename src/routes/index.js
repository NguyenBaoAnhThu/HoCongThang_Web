import Home from "~/pages/Home";
import Contact from "pages/Contact";
import Fashion from "pages/CeoHoCongThang";
import Photography from "pages/CongTy";
import SearchResult from "pages/SearchResult/index";
import BaiViet1 from "pages/Posts/BaiViet1/index";
import BaiViet2 from "pages/Posts/BaiViet2/index";
import BaiViet3 from "pages/Posts/BaiViet3/index";
import BaiViet4 from "pages/Posts/BaiViet4/index";
import BaiViet5 from "pages/Posts/BaiViet5/index";
import BaiViet6 from "pages/Posts/BaiViet6/index";
import BaiViet7 from "pages/Posts/BaiViet7/index";
import BaiViet8 from "pages/Posts/BaiViet8/index";
import BaiViet9 from "pages/Posts/BaiViet9/index";
import BaiViet10 from "pages/Posts/BaiViet10/index";
import BaiViet11 from "pages/Posts/BaiViet11/index";
import { DefaultLayout } from "~/components/Layout/index";

const publicRouters = [
  { path: "/ho-cong-thang-va-con-duong-tro-thanh-ceo-t-booking", component: BaiViet1 },
  { path: "/cung-tim-hieu-ve-phuong-thuc-truyen-thong-tren-youtube-co-hieu-qua-nhu-the-nao-voi-ceo-t-booking-ho-cong-thang", component: BaiViet2 },
  { path: "/ho-cong-thang-nguoi-truyen-cam-hung-va-loi-tu-duy-tich-cuc-cho-gioi-tre", component: BaiViet3 },
  { path: "/doanh-nhan-ho-cong-thang-nguoi-nam-giu-bi-quyet-khoi-nghiep-thanh-cong", component: BaiViet4 },
  { path: "/doanh-nhan-ho-cong-thang-ban-linh-nguoi-truyen-lua-cua-thuong-hieu-tbooking", component: BaiViet5 },
  { path: "/ceo-ho-cong-thang-tham-du-tuan-le-thoi-trang-luan-don-london-fashion-week", component: BaiViet6 },
  { path: "/cong-ty-truyen-thong-t-booking-nang-tam-thuong-hieu-viet", component: BaiViet7 },
  { path: "/truyen-thong-t-booking-diem-den-cua-su-thanh-cong", component: BaiViet8 },
  { path: "/cong-ty-truyen-thong-t-booking-khach-hang-trao-niem-tin-chung-toi-trao-chat-luong", component: BaiViet9 },
  { path: "/long-tin-cua-khach-hang-lam-nen-suc-manh-cua-t-booking", component: BaiViet10 },
  { path: "/cong-ty-truyen-thong-t-booking-va-su-menh-phuc-vu-5-sao-cho-cac-kol-tai-viet-nam", component: BaiViet11 },
  // không cần đăng nhập vẫn xem được
  { path: "/", component: Home },
  { path: "/contact", component: Contact, layout: null },
  { path: "/wp-comments-post.php", component: Error, layout: null },
  {
    path: "/ceo-ho-cong-thang",
    component: Fashion,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "CEO HỒ CÔNG THẮNG",
    headerProps: { ceoClassName: "ceo-class" },
    sidebarProps: { classNameFashion: "custom-fashion-class" },
  },
  {
    path: "/cong-ty-t-booking",
    component: Photography,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "CÔNG TY T-BOOKING",
    headerProps: { ceoClassName: "ceo-class" },
    sidebarProps: { classNameFashion: "custom-fashion-class" },
  },
  {
    path: "/search",
    component: SearchResult,
    layout: DefaultLayout,
    hideUnderHeader: true,
    showSitePageTitle: true,
    title: "KẾT QUẢ TÌM KIẾM ",
},
];

const privateRouters = [
  // nếu không đăng nhập thì dẫn tới trang login
];

export { publicRouters, privateRouters };
