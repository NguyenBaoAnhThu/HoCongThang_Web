import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header/index";
import Logo from "~/components/Layout/DefaultLayout/Logo/index";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Footer from "~/components/Layout/DefaultLayout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPost from "~/components/FormPost/index";
import {
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={styles.uploadContainer}>
      <Helmet>
        <title>Liên hệ</title>
      </Helmet>
      <Logo />
      <Header
        customcontactClassName={cx(styles.customcontact)}
        customHomeClassName={cx(styles.customhome)}
      />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("contact")}>
            <div>
              <h2>LIÊN HỆ</h2>
            </div>
            <div className={cx("menu-contact")}>
              <p id={cx("contact-with")}>CÔNG TY TNHH TRUYỀN THÔNG T-BOOKING</p>
              <p title="House">
                <FontAwesomeIcon
                  icon={faHouse}
                  className={cx("icon-spacing")}
                />
                109 Phan Bội Châu, Tam Kỳ, Quảng Nam
              </p>
              <p title="Phone">
                <FontAwesomeIcon
                  icon={faPhone}
                  className={cx("icon-spacing")}
                />
                0379.444.000
              </p>
              <p title="Mail">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={cx("icon-spacing")}
                />
                Tbookingkols@gmail.com
              </p>
              <p id={cx("contact-with")}>Liên hệ với chúng tôi</p>
            </div>
            <FormPost />
          </div>
          <div className={cx("sidebar")}>
            <div className={cx("side-bar-right")}>
              <div className={cx("widget-title")}> Giới thiệu </div>
              <img
                width="240"
                height="240"
                src="./Pic/sep1.jpg"
                className={cx("portrait-author")}
                alt="Felix"
                decoding="async"
                fetchpriority="high"
              />
              <p className={cx("inf-author")}>
                Hồ Công Thắng sinh năm 1993, sinh ra từ làng quê nghèo thuộc
                huyện Tiên Phước, tỉnh Quảng Nam.
                <br /> Là cố vấn thương hiệu - báo chí - youtube làm việc trực
                tiếp tại 2 văn phòng công ty hoặc facebook tick xanh tránh giả
                mạo.
              </p>
              <div className={cx("image-list-container")}>
                <ul className={cx("image-list")}>
                  <li>
                    <a href="#" target="_blank">
                      <img src="./Pic/sep2.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="./Pic/congty3.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={cx("widget-title")}> Liên hệ </div>
              <div className={cx("social-menu-container")}>
                <ul className={cx("list-social")}>
                  <li className={cx("icon")}>
                    <a
                      href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className={cx("icon")}>
                    <a
                      href="https://www.facebook.com/hocongthang.account/about_contact_and_basic_info"
                      title="Pinterest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
