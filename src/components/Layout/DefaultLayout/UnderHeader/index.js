import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./UnderHeader.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function UnderHeader(carouselClassName) {
    return (
        <div >
            <div id="carouselExample" className={cx("carousel", "slide",carouselClassName)}>
                <div className={cx("carousel-inner")}>
                    <div className={cx("carousel-item", "active")}>
                        <img src="https://s3.ap-southeast-1.amazonaws.com/gocgiaitri.com.vn/wp-content/uploads/2021/01/0ea86aa9c604375a6e15.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 1"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Ngày đăng <a href='/ho-cong-thang-va-con-duong-tro-thanh-ceo-t-booking' className={cx('daypost')}> 15/1/2021 </a></p>
                            <a href='/ho-cong-thang-va-con-duong-tro-thanh-ceo-t-booking' className={cx("item-title")}>Hồ Công Thắng và con đường trở thành CEO T-Booking</a>
                            <p className={cx("item-summary")}>Hồ Công Thắng sinh năm 1993, sinh ra từ làng quê nghèo thuộc huyện Tiên Phước, tỉnh Quảng Nam…</p>
                            <a href='/ho-cong-thang-va-con-duong-tro-thanh-ceo-t-booking' className={cx("button-default")}>
                                ĐỌC TIẾP
                            </a>
                        </div>
                    </div>
                    <div className={cx("carousel-item")}>
                        <img src="https://s3.ap-southeast-1.amazonaws.com/newvietnamnet.vn/wp-content/uploads/2021/11/7fcddb834df385addce2-850x560.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 2"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Ngày đăng <a href='/cong-ty-truyen-thong-t-booking-khach-hang-trao-niem-tin-chung-toi-trao-chat-luong' className={cx('daypost')}>2/11/2021</a></p>
                            <a href='/cong-ty-truyen-thong-t-booking-khach-hang-trao-niem-tin-chung-toi-trao-chat-luong' className={cx("item-title")}>Công ty Truyền thông T- Booking: Khách hàng trao niềm tin, chúng tôi trao chất lượng</a>
                            <p className={cx("item-summary")}>Trong thời đại phát triển với sự bùng nổ công nghệ hiện nay thì lĩnh vực truyền thông đã và đang là một yếu tố có sức hút rất ảnh hưởng ...</p>
                            <a href='/cong-ty-truyen-thong-t-booking-khach-hang-trao-niem-tin-chung-toi-trao-chat-luong' className={cx("button-default")}>
                               ĐỌC TIẾP
                            </a>
                        </div>
                    </div>
                    <div className={cx("carousel-item")}>
                        <img src="https://s3.ap-southeast-1.amazonaws.com/new24h.com.vn/wp-content/uploads/2021/01/n9706251a5c5559b0cd4.jpg" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 3"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Ngày đăng <a href='/cong-ty-truyen-thong-t-booking-va-su-menh-phuc-vu-5-sao-cho-cac-kol-tai-viet-nam' className={cx('daypost')}>30/01/2021</a></p>
                            <a href='/cong-ty-truyen-thong-t-booking-va-su-menh-phuc-vu-5-sao-cho-cac-kol-tai-viet-nam' className={cx("item-title")}>Công Ty Truyền Thông T-Booking Và Sứ Mệnh Phục Vụ 5 Sao Cho Các Kol Tại Việt Nam</a>
                            <p className={cx("item-summary")}>Trong thời đại kinh tế thị trường như ngày nay, các công ty truyền thông rất cần thiết trong việc giúp các khách hàng xây dựng thương hiệu cá nhân...</p>
                            <a href='/cong-ty-truyen-thong-t-booking-va-su-menh-phuc-vu-5-sao-cho-cac-kol-tai-viet-nam' className={cx("button-default")}>
                                ĐỌC TIẾP 
                            </a>
                        </div>
                    </div>
                    <div className={cx("carousel-item")}>
                        <img src="https://s3.ap-southeast-1.amazonaws.com/doisongkinhte.vn/wp-content/uploads/2021/11/v3.png" className={cx("d-block", "w-100", "carousel-image")} alt="Slide 4"/>
                        <div className={cx("carousel-overlay")}>
                            <p className={cx('item-post-day')}>Ngày đăng <a href='/doanh-nhan-ho-cong-thang-ban-linh-nguoi-truyen-lua-cua-thuong-hieu-tbooking' className={cx('daypost')}> 2/11/2021</a></p>
                            <a href='#' className={cx("item-title")}>Doanh nhân Hồ Công Thắng-Bản lĩnh người truyền lửa của thương hiệu T-Booking</a>
                            <p className={cx("item-summary")}>Những người trẻ, băn khoăn về những ngã rẽ cuộc đời, khao khát thành công trên con đường lập nghiệp. Chính sự cầu tiến, dám nghĩ dám làm... </p>
                            <a href='#' className={cx("button-default")}>
                                ĐỌC TIẾP
                            </a>
                        </div>
                    </div>
                </div>
                <button className={cx("carousel-control-prev")} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className={cx("carousel-control-prev-icon")} aria-hidden="true"></span>
                    <span className={cx("visually-hidden")}>Previous</span>
                </button>
                <button className={cx("carousel-control-next")} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className={cx("carousel-control-next-icon")} aria-hidden="true"></span>
                    <span className={cx("visually-hidden")}>Next</span>
                </button>
            </div>
        </div>
    );
}

export default UnderHeader;
