import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet5.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet5() {
  return (
    <div>
      <Helmet>
        <title>
          Doanh nhân Hồ Công Thắng-Bản lĩnh người truyền lửa của thương hiệu
          T-Booking{" "}
        </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Doanh nhân Hồ Công Thắng-Bản lĩnh người truyền lửa của thương hiệu T-Booking "
            postDate="2/11/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/9d301051e74a2f14765b.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <strong>
                Những người trẻ, băn khoăn về những ngã rẽ cuộc đời, khao khát
                thành công trên con đường lập nghiệp. Chính sự cầu tiến, dám
                nghĩ dám làm đã giúp họ chạm tay tới những ước mơ hoài bão. Đó
                là câu chuyện lập nghiệp thành công của doanh nhân Hồ Công
                Thắng. CEO của thương hiệu truyền thông nổi tiếng T – BOOKING.
              </strong>
            </p>
            <p>
              {" "}
              Anh
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              còn rất trẻ, chỉ mới là một chàng trai sinh năm 1993 tại một làng
              quê nghèo thuộc huyện Tiên Phước, tỉnh Quảng Nam. Sau khi học xong
              bậc đại học, anh thử sức trong lĩnh vực kinh doanh, rồi từ niềm
              đam mê cháy bỏng, anh quyết định kinh doanh lĩnh vực báo chí –
              Truyền Thông.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/v1.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Với tư duy và tầm nhìn nhạy bén, anh nhận thấy: cùng với sự phát
              triển của công nghệ thông tin, sức mạnh lan tỏa của truyền thông
              đã trở nên mạnh mẽ hơn bao giờ hết. Những nội dung có ý nghĩa, có
              tính giải trí, tham khảo cao… là những cách hiệu quả nhất để doanh
              nghiệp tiếp cận với người dùng, với khách hàng. Giá trị của nội
              dung và việc sáng tạo nội dung đã được chuyên nghiệp hóa thành
              những món sản phẩm tinh thần có giá trị chia sẻ, truyền đạt thông
              điệp nhanh chóng, hiệu quả. Nhìn thấy những tiềm năng với nhiều cơ
              hội phát triển. Anh muốn thành lập một công ty giải trí, cho ra
              đời các sản phẩm truyền thông chuyên nghiệp, phù hợp với mục đích
              của doanh nghiệp, cá nhân và người nổi tiếng.
            </p>
            <p>
              Từ những khát vọng ngày đêm nung nấu, cộng với ý chí quyết tâm đã
              giúp anh thành lập một Công ty uy tín hàng đầu tại Việt Nam – Công
              ty Truyền thông T-Booking nằm tại 109 Phan Bội Châu, thành Phố Tam
              Kỳ. Từ đây, anh luôn được các anh chị người nổi tiếng biết đến anh
              để truyền thông báo chí hay truyền thông youtube.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/v2.png"
          ></img>
          <div className={cx("entry-summary")}>
            <strong
              style={{ display: "block", textAlign: "left", width: "100%" }}
            >
              Startup: Con đường lập nghiệp không trải hoa hồng
            </strong>
            <p>
              Startup hay tự khởi nghiệp kinh doanh có thể là mục tiêu đầy vinh
              quang của nhiều người trẻ, song phải biết rằng, quá trình để đi
              đến mục tiêu ấy một cách thành công, không phải là con đường trải
              hoa hồng.
            </p>
            <p>
              Trên con đường lập nghiệp của mình, có những doanh nhân được kế
              thừa sự nghiệp kinh doanh từ gia đình nhưng cũng rất nhiều người
              đến với kinh doanh và khởi nghiệp bằng con số “0” đúng nghĩa. Và
              anh Hồ Công Thắng cũng vậy, anh lập nghiệp từ 2 bàn tay trắng và
              vốn hiểu biết sâu rộng, vì thế mà hơn ai hết anh phải biết cách
              nắm bắt cơ hội cùng với sự nỗ lực của bản thân để vươn lên. Anh
              quan điểm rằng:{" "}
              <i>
                “Thành công hay không do chính bản thân của mỗi con người, không
                phải lỗi của bố mẹ (giàu, nghèo), không phải lỗi của xã hội,
                không do ai cả ngoài bản thân”.
              </i>
            </p>
            <p>
              Vì thế mà anh phải làm việc một cách nghiêm túc và hết mình, luôn
              hướng bản thân tới sự cởi mở và chân thành, thường xuyên tiếp xúc
              với nhiều người có kinh nghiệm để học hỏi và phải biết mình thiếu
              gì, cần gì, phải mạnh dạn nói ra để được giúp đỡ.
            </p>
            <p>
              Khi chân ướt chân ráo bước vào thương trường, anh Thắng đã gặp
              không ít khó khăn. Truyền thông trong thời đại ngày nay là một hệ
              thống cực phức tạp kết hợp giữa nhiều công đoạn và công việc liên
              quan tùy vào dự án. Đặc biệt là trong thời đại 4.0 khi các công ty
              truyền thông giải trí mọc lên như nấm. Nếu anh thành lập công ty,
              làm sao để đứng vững và phát triển là bài toán mà anh phải cân não
              tính toán, lên kế hoạch một cách kĩ càng. Bởi những người xuất
              thân ở gia đình nông thôn thường sẽ rất cẩn thận trong từng bước
              đi để hạn chế tối đa những quyết định sai lầm.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/v3.png"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Khi được hỏi về những khó khăn ban đầu, anh Thắng chia sẻ:
              <i>
                “Cuộc sống không bao giờ là một tấm thảm đầy hoa và êm ái mà lẫn
                trong đó là những chiếc gai nhọn. Có những lúc bạn không tránh
                khỏi những khó khăn, thất bại cay đắng. Vào những thời điểm như
                vậy, hãy luôn biết cách nhìn nhận vào mặt tốt của vấn đề, nhận
                ra ưu điểm của chính mình và có niềm tin vào cuộc sống. Chỉ khi
                bạn có lòng tin ở bản thân mình thì mới có động lực để phấn đấu
                và nỗ lực. Chắc chắn thành công luôn ở phía trước bạn, hãy đi
                tìm chúng nếu bạn thực sự đam mê”.
              </i>
            </p>
            <strong
              style={{ display: "block", textAlign: "left", width: "100%" }}
            >
              Thành công của CEO Hồ Công Thắng là cảm hứng cho người trẻ
            </strong>
            <p>
              Ông trời không phụ lòng người. Chỉ cần quyết tâm, bản lĩnh và
              không từ bỏ đam mê thì nhất định thành công sẽ đến. Bằng cái tâm
              trong mọi lĩnh vực của công việc, sự chuyên nghiệp tạo nên chất
              lượng, uy tín. Công ty của anh ngày càng thu hút được sự chú ý của
              người nổi tiếng, các doanh nghiệp lớn nhỏ, các cá nhân đang tạo
              dấu ấn. Anh đã giúp họ trên con đường tiếp cận với khách hàng, với
              fan, với mọi người.
            </p>
            <p>
              Bên cạnh đó, với kinh nghiệm chiêu mộ người tài, anh đã tuyển về
              cho công ty nhiều cá nhân xuất sắc, phần lớn họ đều là anh em cùng
              quê với anh, giúp anh điều hành các team trong công ty cho ra các
              sản phẩm dịch vụ chất lượng – đạt chuẩn 5 sao. Anh biết rằng không
              thể thành công nếu không có những người bạn, cộng sự đáng tin cậy
              bên cạnh.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/v4.png"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Anh thường xuyên khen thưởng các cá nhân, tập thể hoàn thành xuất
              sắc nhiệm vụ được giao và sáng tạo nên những ý tưởng mới giúp công
              ty ngày càng khẳng định uy tín và chỗ đứng trên thị trường truyền
              thông. Tạo động lực, sự phấn khởi, tinh thần và năng lượng cho
              nhân viên của mình, những người đóng góp không nhỏ trong sự thành
              công của T – Booking. Đặc biệt, anh được nhận xét là một người sếp
              ấm áp khi luôn quan tâm và chia sẻ những khó khăn của nhân viên
              như anh em trong nhà. Đồng thời những nỗ lực của anh không chỉ vì
              bản thân và gia đình mà còn muốn tạo việc làm và nguồn thu nhập ổn
              định cho xã hội.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/v5.png"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Quyết tâm cá nhân và khả năng lan tỏa trong cộng đồng từ câu
              chuyện lập nghiệp của một người trẻ như anh Hồ Công Thắng cho thấy
              chàng trai đó đã có những suy nghĩ, việc làm hết sức thuyết phục.
              Anh muốn truyền nguồn cảm hứng lập nghiệp cho các bạn trẻ. Tiếp
              thêm niềm tin cho các bạn trên con đường chinh phục những giá trị
              của bản thân. Cũng là góp phần xây dựng một Việt Nam vững mạnh
              hơn.
            </p>
            <p>
              Anh Hồ Công Thắng còn cho biết là dự định trong tương lai anh sẽ
              cho khai trương nhiều chi nhánh Công ty Truyền thông T-Booking
              trên khắp cả nước. Với một người trẻ tuổi tài năng và tự chủ trong
              mọi quyết định của mình. Hy vọng ước mơ của anh sẽ thành hiện thực
              và mang tầm quốc tế trong thời gian gần nhất.
            </p>
          </div>
          <EntryFooter />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet5;
