import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BaiViet4.module.scss";
import classNames from "classnames/bind";
import CarouselOverlay from "~/components/CarouselOverlay";
import EntryFooter from "~/components/EntryFooter";
import FormPost from "~/components/FormPost/index";

const cx = classNames.bind(styles);

function BaiViet4() {
  return (
    <div>
      <Helmet>
        <title>
          Doanh nhân Hồ Công Thắng- Người nắm giữ “bí quyết” khởi nghiệp thành
          công{" "}
        </title>
      </Helmet>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <CarouselOverlay
            title="Doanh nhân Hồ Công Thắng- Người nắm giữ “bí quyết” khởi nghiệp thành công"
            postDate="3/12/2021"
            customOverlay={cx(styles.customoverlay)}
          />
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/12/hinh121.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              – Một người con của vùng đất trung du Tiên Phước thuộc tỉnh Quảng
              Nam, dù chỉ mới 28 tuổi nhưng anh đã gặt hái được những thành công
              nhất định nhờ vào sự cần cù, quyết tâm và tầm nhìn xa trông rộng.
              Đặc biệt hiện nay anh đang giữ vai trò là CEO của công ty Truyền
              thông T-Booking – đơn vị uy tín hàng đầu tại Việt Nam trong lĩnh
              vực báo chí, truyền thông.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/12/nen-1.jpg"
              alt="CEO Hồ Công Thắng – Người sáng lập Công ty Truyền thông T-Booking"
            />
            <p className={cx("note-pic")}>
              CEO Hồ Công Thắng – Người sáng lập Công ty Truyền thông T-Booking
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              sinh năm 1993, tại vùng đất xứ Tiên đầy nắng và gió. Trong tiềm
              thức từ thời thơ ấu của mình, anh sớm nhận thấy cuộc sống ở đây
              tuy đang phát triển nhưng đa phần còn gặp nhiều khó khăn, người
              dân chủ yếu còn sống bằng nghề nông và lao động chân tay. Hiểu
              được điều đó, anh đã quyết tâm nung nấu ý chí cùng với ước mơ,
              hoài bão để khởi nghiệp và truyền động lực cho thế hế sau thoát
              khỏi cuộc sống vất vả.
            </p>
            <p>
              Trong cuộc sống này mỗi một người có một hoàn cảnh xuất thân, một
              điều kiện phát triển khác nhau. Điều làm nên giá trị con người
              không phải là việc bạn xuất thân từ đâu, gia đình bạn giàu có như
              thế nào mà quan trọng nhất đó là bản thân bạn là ai và bạn đã nỗ
              lực ra sao trên chặng đường đóng góp cho xã hội. Vì thế nên mới
              nói hoàn cảnh không quyết định nên con người. Cũng giống như câu
              nói{" "}
              <i>
                {" "}
                “Ta không được chọn nơi mình sinh ra nhưng ta được chọn cách
                mình sẽ sống”
              </i>
              , quả thật câu nói rất hợp với con người của anh Hồ Công Thắng.
            </p>
            <p>
              Từ năm 18 tuổi, anh đã rời quê hương tới thành phố Đà Nẵng để học
              đại học, đó là khoảng thời gian đầy khó khăn khi ban ngày anh đi
              học, tối đến đi làm để kiếm tiền trang trải cuộc sống. Đúng như
              người ta nói: “Thành công nào mà chẳng đánh đổi bằng máu, mồ hôi
              và nước mắt đâu”. Sau đó anh quyết định đi du học ở Nga. Trên con
              đường học vấn, anh đã tích lũy được nhiều kiến thức cũng như những
              kinh nghiệm sống quý báu. Tất cả là nền tảng đã giúp anh thành lập
              nên Công ty TNHH Truyền thông T-Booking, công ty được đông đảo
              người nổi tiếng, các KOL, các anh chị doanh nhân biết đến và hợp
              tác.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/12/tam.jpg"
              alt="Công ty truyền thông T-Booking với trụ sở tại 109 Phan Bội Châu, TP Tam Kỳ."
            />
            <p className={cx("note-pic")}>
              Công ty truyền thông T-Booking với trụ sở tại 109 Phan Bội Châu,
              TP Tam Kỳ.
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Khởi nghiệp, theo định nghĩa là thuật ngữ chỉ về những công ty
              đang trong giai đoạn bắt đầu kinh doanh nói chung (Startup
              company). Vấn đề khởi nghiệp hiện nay thường được gắn với những
              người trẻ, những người mới tham gia vào hoạt động sản xuất, kinh
              doanh. Bằng nguồn vốn tự có hoặc qua các nguồn vốn huy động khác,
              những người trẻ hiện thực hóa ý tưởng khởi nghiệp của mình. Trên
              thực tế, số người khởi nghiệp thành công không phải là ít song số
              người thất bại cũng không hề hiếm.
            </p>
            <p>
              Anh
              <a href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info">
                Hồ Công Thắng{" "}
              </a>
              cũng không phải ngoại lệ, trong quá trình khởi nghiệp, anh đã
              không ít lần thất bại và vấp ngã hết lần nãy đến lần khác. Nhưng
              nhờ sự quyết tâm, nỗ lực bền bỉ không ngừng, nhiệt huyết và đam mê
              tuổi trẻ, anh đã vực dậy bản thân và viết tiếp nên câu chuyện của
              cuộc đời.
            </p>
            <p>
              Anh chia sẻ:{" "}
              <i>
                “Cuộc sống không bao giờ là một tấm thảm đầy hoa và êm ái mà lẫn
                trong đó là những chiếc gai nhọn. Có những lúc bạn không tránh
                khỏi khó khăn, thất bại cay đắng. Vào những thời điểm như vậy,
                hãy luôn biết cách nhìn nhận vào mặt tốt của vấn đề, nhận ra ưu
                điểm của chính mình và có niềm tin vào cuộc sống. Chỉ khi bạn có
                lòng tin ở bản thân mình thì mới có động lực để phấn đấu và nỗ
                lực. Chắc chắn thành công luôn ở phía trước bạn, hãy đi tìm
                chúng nếu bạn thực sự đam mê”.
              </i>
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/12/Hinh-100.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Giờ đây, với cương vị là người lãnh đạo của Công ty truyền thông
              T-Booking, anh vẫn đang cố gắng từng ngày để có thể đưa T-Booking
              ngày càng phát triển, nhận được sự tín nhiệm của khách hàng hơn
              nữa. Một người lãnh đạo giỏi thì luôn đi đôi với người cộng sự
              tốt. Thật vậy, với tài nhìn người xa rộng, anh đã cùng với những
              người đồng nghiệp đầu tư cho sự phát triển đường dài của công ty.
              Đến nay, T-Booking đã có rất nhiều nhân viên ưu tú và cộng tác
              viên đang công tác. Đây là điều tự hào nhất mà anh Hồ Công Thắng
              đã mang lại cho mọi người và giúp họ có thể chinh phục được ước mơ
              như bản thân anh đã từng.
            </p>
            <p>
              Bên cạnh đó, anh còn được mời góp mặt trong Tuần lễ thời trang
              Luân Đôn – LonDon Fashion Week với danh nghĩa là khách mời danh dự
              và tham gia sự kiện Pre-Fall 2021 của nhà thiết kế Trần Hùng. Đó
              là một sự đền đáp xứng đáng cho những nỗ lực bền bỉ không ngừng
              của anh.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "100%" }}
              src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/12/hinh120.jpg"
              alt="Anh Hồ Công Thắng cùng NTK Trần Hùng tại London Fashion Week"
            />
            <p className={cx("note-pic")}>
              Anh Hồ Công Thắng cùng NTK Trần Hùng tại London Fashion Week
            </p>
          </div>
          <div className={cx("entry-summary")}>
            <p>
              Trong thời đại 4.0 hiện nay, nơi mà các hoạt động công nghệ và
              truyền thông lên ngôi. Với những thành công nhất định đã có nhưng
              anh <span>Hồ Công Thắng</span> vẫn quan niệm rằng bản thân không
              được ngủ quên trên chiến thắng. Anh ấp ủ kế hoạch trong tương lai
              sẽ mở rộng thêm nhiều chi nhánh của Công ty ở các tỉnh thành trên
              cả nước, tạo ra những sản phẩm ngày càng chất lượng hơn nữa – đạt
              chuẩn 5 sao để phục vụ khách hàng bằng chất lượng và cái tâm của
              mình.
            </p>
          </div>
          <img
            width="100%"
            src="https://s3.ap-southeast-1.amazonaws.com/kenh24h.net/wp-content/uploads/2021/12/anh-2.jpg"
          ></img>
          <div className={cx("entry-summary")}>
            <p>
              Với những người trẻ đang có ý định khởi nghiệp thì câu chuyện của
              anh <span>Hồ Công Thắng</span> là minh chứng cho quá trình nỗ lực vượt lên trên
              hoàn cảnh sống khó khăn. Anh chính là một tấm gương về sự ham học
              hỏi với ý chí cầu tiến, cũng như tầm nhìn của một nhà lãnh đạo.
              Qua đó, Anh Công Thắng muốn gửi lời khuyên đến các bạn trẻ hãy học
              hỏi kinh nghiệm từ những người đi trước và không ngục ngã trên
              chặng đường chinh phục thành công.
            </p>
            <p>
              Hi vọng câu chuyện của anh <span>Hồ Công Thắng</span> sẽ là tấm gương, tiếp
              thêm động lực và niềm tin cho các bạn trẻ đang loay hoay trên con
              đường khởi nghiệp. Đừng ngại hoàn cảnh, đừng sợ thất bại, đừng
              ngán thử thách, rồi các bạn sẽ thành công, “Sau cơn mưa sẽ có cầu
              vồng”!.
            </p>
          </div>
          <EntryFooter />
          <FormPost />
        </div>
      </div>
    </div>
  );
}

export default BaiViet4;
