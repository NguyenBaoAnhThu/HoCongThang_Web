import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet6.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);
const imageData = [
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/131985876_3548592365259318_3938466975004687486_o-1-1.jpg",
    alt: "Nhà thiết kế Trần Hùng và CEO Hồ Công Thắng tại Tuần lễ thời trang Luân Đôn – LonDon Fashion Week.",
    note: "Nhà thiết kế Trần Hùng và CEO Hồ Công Thắng tại Tuần lễ thời trang Luân Đôn – LonDon Fashion Week.",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/b69b2392883f7961202e.jpg",
    alt: "CEO Hồ Công Thắng và doanh nhân Nhật Vũ",
    note: "CEO Hồ Công Thắng và doanh nhân Nhật Vũ",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/10.jpg",
    alt: "Siêu mẫu Thanh Hằng",
    note: "Siêu mẫu Thanh Hằng",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/131528330_10213931410478605_7762784293904287746_o-1.jpg",
    alt: "Hương Ly – Học trò cũ siêu mẫu Thanh Hằng",
    note: "Hương Ly – Học trò cũ siêu mẫu Thanh Hằng",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/image-36-1.png",
    alt: "Top 3 Hoa hậu Việt Nam 2020: Hoa hậu Đỗ Thị Hà cùng 2 Á hậu Phương Anh, Ngọc Thảo",
    note: "Top 3 Hoa hậu Việt Nam 2020: Hoa hậu Đỗ Thị Hà cùng 2 Á hậu Phương Anh, Ngọc Thảo",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/133046514_10213953127261511_522028427997935270_o.jpg",
    alt: "Ca sĩ Thủy Tiên",
    note: "Ca sĩ Thủy Tiên",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/131979960_10213946353812179_7600746653209265534_o.jpg",
    alt: "Vợ chồng Đàm Thu Trang – Cường Đô La",
    note: "Vợ chồng Đàm Thu Trang – Cường Đô La",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/133766765_10213980777032738_9019772795567341194_o.jpg",
    alt: "Vợ chồng Thu Thủy – Kin Nguyễn",
    note: "Vợ chồng Thu Thủy – Kin Nguyễn",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/131401611_996883940801288_4662634157108866541_o.jpg",
    alt: "Diễn viên Trúc Anh",
    note: "Diễn viên Trúc Anh",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/image-19-1.png",
    alt: "Hoàng Yến Chibi và Hoàng Ku",
    note: "Hoàng Yến Chibi và Hoàng Ku",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/image-15-1.png",
    alt: "MC Sam",
    note: "MC Sam",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/image-16-1.png",
    alt: "Diễn viên Midu",
    note: "Diễn viên Midu",
  },
  {
    src: "https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/132827207_10213982224308919_2969296820724984278_o.jpg",
    alt: "Hoa hậu Hương Giang",
    note: "Hoa hậu Hương Giang",
  },
];
function BaiViet6() {
  return (
    <div>
      <Helmet>
        <title>
          {" "}
          CEO Hồ Công Thắng Tham Dự Tuần Lễ Thời Trang Luân Đôn – London Fashion
          Week{" "}
        </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="CEO Hồ Công Thắng Tham Dự Tuần Lễ Thời Trang Luân Đôn – London Fashion Week"
            postDate="14/1/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/e8fa4327ee8a1fd4469b.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <strong>
                Tuần lễ thời trang Luân Đôn (LonDon Fashion Week) là một trong
                những sự kiện lớn khi các nhà thiết nổi tiếng cho ra mắt những
                bộ sưu tập thời trang mới nhất và cũng là cơ hội cho các “tín đồ
                thời trang” nắm bắt được các xu hướng mới hứa hẹn “gây bão”.
              </strong>
            </p>
            <p>
              Các tên tuổi hàng đầu trong giới mộ điệu đều tụ tập về đây từ biên
              tập viên thời trang, nhà thiết kế nổi tiếng tới các fashionista,
              người mẫu và không thể thiếu sự góp mặt của những ngôi sao trong
              làng giải trí. Điều đặc biệt nhất là gồm có sự tham gia dự tuần lễ
              là
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                CEO Hồ Công Thắng{" "}
              </a>
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/0ea86aa9c604375a6e15.jpg"
              alt="CEO Hồ Công Thắng – Công ty Truyền thông T-Booking."
            />
            <p className={cx("note-pic")}>
              CEO Hồ Công Thắng – Công ty Truyền thông T-Booking.
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              {" "}
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>{" "}
              là một trong những gương mặt hiếm hoi có cơ hội góp mặt tại các
              Tuần lễ thời trang Luân Đôn – LonDon Fashion Week với danh nghĩa
              khách mời danh dự. Được biết Tuần lễ thời trang Luân Đôn này được
              chính tay nhà thiết kế Trần Hùng mời anh đến buổi lễ. Nhà thiết
              Trần Hùng cho ra mắt bộ sưu tập “Musée d’Art” (viện bảo tàng nghệ
              thuật trong tiếng Pháp). Đây là sự kiện Pre-Fall 2021 được nằm
              trong Tuần lễ Thời trang Luân Đôn. Sự kiện Pre-Fall 2021 được diễn
              ra vào tối ngày 20/12/2020 tại thành phố Hồ Chí Minh. Anh{" "}
              <span>Hồ Công Thắng</span> đã có được cơ hội trải nghiệm những
              tinh túy tại nền thời trang hiện đại nhất.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/a44f6754ccf93da764e8-1.jpg"
              alt="Hồ Công Thắng đã có được cơ hội trải nghiệm những tinh túy tại nền thời trang hiện đại nhất. "
            />
            <p className={cx("note-pic")}>
              Hồ Công Thắng đã có được cơ hội trải nghiệm những tinh túy tại nền
              thời trang hiện đại nhất.
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Tại sự kiện lần này, anh đã được giao lưu, gặp gỡ rất nhiều người
              có tầm ảnh hưởng lớn tại Việt Nam như siêu mẫu Thanh Hằng, top 3
              hoa hậu top 3 hoa hậu Việt Nam 2020 là Hoa hậu Đỗ Thị Hà, Á hậu
              Phương Anh, Á hậu Ngọc Thảo. Các khách mời tham dự không kém độ
              nổi tiếng trong làng giải trí như: ca sĩ Thủy Tiên, diễn viên
              Midu, diễn viên Trúc Anh, MC Sam, ca sĩ Thu Thủy, Cường Đô La… và
              còn rất nhiều anh chị nổi tiếng khác nữa.
            </p>
            <p>
              <strong>
                Một số hình ảnh CEO Hồ Công Thắng và các anh chị nổi tiếng tại
                Tuần lễ thời trang Luân Đôn – LonDon Fashion Week:
              </strong>
            </p>
          </div>
          <div>
            {imageData.map((image, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  style={{ width: "100%" }}
                  src={image.src}
                  alt={image.alt}
                />
                <p className={cx("note-pic")}>{image.note}</p>
              </div>
            ))}
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Sau buổi gặp gỡ tại sự kiện, anh <span>Hồ Công Thắng</span> còn cho biết là dự
              định trong tương lai anh sẽ cho khai trương nhiều chi nhánh Công
              ty Truyền thông T-Booking trên khắp cả nước. Với một người trẻ
              tuổi tài năng và tự chủ trong mọi quyết định của mình. Hy vọng ước
              mơ của anh sẽ thành hiện thực và mang tầm quốc tế trong thời gian
              gần nhất.
            </p>
          </div>
          <EntryFooter />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet6;
