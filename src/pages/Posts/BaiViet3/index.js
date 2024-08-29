import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet3.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet3() {
  return (
    <div>
      <Helmet>
        <title>
          Hồ Công Thắng – Người truyền cảm hứng và lối tư duy tích cực cho giới
          trẻ{" "}
        </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Hồ Công Thắng – Người truyền cảm hứng và lối tư duy tích cực cho giới trẻ"
            postDate="2/12/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/12/1-768x560.png"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              – Doanh nhân trẻ đa tài với ước mơ giúp những người dân tại quê
              hương thoát nghèo, có cuộc sống ấm no. Trải qua nhiều năm tháng
              khó khăn khi mới bắt đầu khởi nghiệp, đến hiện tại <span>Hồ Công Thắng</span>
              giữ vị trí CEO Công ty truyền thông T- BOOKING – Công ty nổi tiếng
              tại Tam Kỳ, Quảng Nam, hoạt động mạnh trong lĩnh vực Báo chí –
              Truyền thông và Quảng cáo.
            </p>
            <p>
              Lớn lên tại 1 gia đình thuần nông nghèo tại vùng quê Tiên Phước,
              Quảng Nam. Từ nhỏ, anh luôn phụ giúp gia đình công việc nhà. Nhìn
              thấy những vất vả của gia đình mình, dãi nắng dầm mưa làm nông,
              anh nuôi dưỡng cho mình 1 ý chí quyết tâm sau này phải thật thành
              công, giúp ích cho đời và cho xã hội.
            </p>
            <p>
              Những ngày đầu tiên bước chân ra thành phố Đà Nẵng để theo học Đại
              học, đối với anh mọi thứ đều xa lạ và mới mẻ. Vừa học vừa làm, mỗi
              ngày trôi qua đối với <span>Hồ Công Thắng</span> là những trải nghiệm quý giá.
              Sáng đi học, tối đi làm thêm, nghề nào anh cũng thử sức từ phục vụ
              nhà hàng, khách sạn… Để giúp bản thân và gia đình vượt khỏi cái
              nghèo, có được một công việc ổn định trong tương lai, anh đã không
              ngừng cố gắng, nỗ lực học tập. Cũng giống như nhiều bạn sinh viên
              mới ra trường. Anh loay hoay tìm kiếm công việc phù hợp sau những
              năm tháng theo học trên ghế nhà trường. Nhưng cuộc sống đầy những
              khó khăn và thử thách, xin việc càng khó anh lại bắt đầu với những
              công việc không đúng chuyên ngành. Với niềm đam mê và ý chí quyết
              tâm cao, anh tiếp tục sang Nga để du học. Sau khi về nước tích lũy
              được nhiều kinh nghiệm cùng với số vốn nhỏ tích góp, từ những khát
              vọng, hoài bão ấy cộng với ý chí quyết tâm và tầm nhìn nhạy bén đã
              giúp <span>Hồ Công Thắng</span> cùng với em trai thành lập Công ty tại quê
              hương – Công ty Truyền thông T-Booking.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/12/a1.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Cũng giống như bao bạn trẻ khác, con đường khởi nghiệp lúc nào
              cũng đầy chông gai và thử thách. Để có được thành công như hiện
              tại, <span>Hồ Công thắng</span> đã trải qua nhiều khó khăn và vấp ngã khi những
              ngày đầu thành lập công ty, theo đuổi đam mê. Nhưng từ những khó
              khăn, vấp ngã ấy là những bài học đáng giá, tạo động lực giúp anh
              vượt qua để chinh phục được thành công. Đối với anh khó khăn trong
              kinh doanh không đáng sợ, đáng sợ nhất là chúng ta không đủ ý chí,
              quyết tâm để vượt qua những khó khăn ấy. Đủ đam mê, dám nghĩ, dám
              làm ắt sẽ thành công.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3-ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/12/a3.png"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Nắm bắt được xu hướng thị trường cùng với tầm nhìn xa của Hồ Công
              Thắng. Trong thời đại 4.0 truyền thông là yếu tố cần thiết trong
              việc đưa thương hiệu cá nhân, giới thiệu sản phẩm đến gần với công
              chúng, tăng độ nhận biết tới mọi người. Dưới sự dẫn dắt tài ba của
              <span>Hồ Công Thắng</span> cùng với các nhân sự. Công ty T-Booking ngày càng
              phát triển lớn mạnh và nhận được nhiều ủng hộ, tin tưởng của khách
              hàng. Sau những năm tháng hoạt động trong lĩnh vực Báo chí –
              truyền thông và quảng cáo. CEO <span>Hồ Công Thắng</span> là cái tên được nhiều
              người biết đến, từ những nghệ sĩ trong giới showbiz, người nổi
              tiếng có tầm ảnh hưởng trên mạng xã hội hay các doanh nhân thành
              đạt…
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/12/a4.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Không những là một doanh nhân đa tài, <span>Hồ Công Thắng</span> là một người
              sếp có “Tâm” và có “Tầm”. Anh thường xuyên khen thưởng cho các cá
              nhân, tập thể xuất sắc hoàn thành tốt nhiệm vụ. Đối với anh mỗi
              cộng sự trong T-Booking là cánh tay phải đắc lực đóng góp cho sự
              thành công của anh và công ty, xem các nhân viên trong công ty như
              anh em trong nhà. Anh luôn dành những điều tốt đẹp đến với mọi
              người xung quanh, gia đình và đồng nghiệp.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3-ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/12/a5.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Lớn lên trong tuổi thơ đầy khó khăn, <span>Hồ Công Thắng</span> luôn nỗ lực, cố
              gắng phấn đấu để giúp gia đình, quê hương và xã hội. Trong đợi
              dịch covid vừa qua, nhiều tỉnh thành, người dân, vô gia cư gặp khó
              khăn. Hiểu được tình hình, <span>Hồ Công Thắng</span> cùng em trai tích cực
              tham gia nhiều chuyến thiện nguyện đến tận tay người dân tại quê
              hương Quảng Nam nơi anh đang sinh sống và làm việc. Dù bận rộn
              nhiều công việc nhưng anh vẫn đến tận nơi, trao tận tay những món
              quả nhỏ nhưng đầy ắp ý nghĩa.
            </p>
            <p>
              Đối với anh được làm việc hết mình, tạo ra giá trị cho xã hội dù
              ít hay nhiều đều là động lực để cho anh phấn đấu. Mỗi ngày trôi
              qua <span>Hồ Công Thắng</span> đều trân trọng và cố gắng hết sức mình. Trong
              tương lai, anh mong muốn có thể đưa T-Booking phát triển vươn xa,
              mở rộng nhiều chi nhánh công ty để tạo ra nhiều việc làm cho đồng
              hương Tiên Phước.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3-ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/12/a6.jpg"
              alt="Hồ Công Thắng cùng em trai Hồ Công Thuận tổ chức các chiến thiện nguyện"
            />
            <p className={cx("note-pic")}>
              Hồ Công Thắng cùng em trai Hồ Công Thuận tổ chức các chiến thiện
              nguyện
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Với ý chí quyết tâm cùng với sự thông minh và nhạy bén. Đến hiện
              tại <span>Hồ Công Thắng</span> đã gặt hái được nhiều quả ngọt. Anh là niềm tự
              hào của gia đình, quê hương, là người truyền cảm hứng lập nghiệp
              cho các bản trẻ. Đối với anh có tuổi trẻ đừng phí nhòa thanh xuân
              cứ làm hết mình, có thất bại rồi mới có thành công. Phải sống vì
              đam mê và thực hiện được đam mê đó.
            </p>
          </div>
          <EntryFooter />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet3;
