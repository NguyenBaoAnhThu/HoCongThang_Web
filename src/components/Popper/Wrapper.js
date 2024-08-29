import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from './Popper.module.scss';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const SocialIcon = ({ href, icon, title }) => (
  <li className={cx('icon')}>
    <a href={href} title={title} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
);

const SocialLinks = () => (
  <div className={cx('social-menu-container')}>
    <ul className={cx('list-social')}>
      <SocialIcon href="https://www.facebook.com/" icon={faFacebookF} title="Facebook" />
      <SocialIcon href="https://x.com/" icon={faTwitter} title="Twitter" />
      <SocialIcon href="https://www.linkedin.com/" icon={faLinkedinIn} title="LinkedIn" />
      <SocialIcon href="https://www.pinterest.com/" icon={faPinterestP} title="Pinterest" />
    </ul>
  </div>
);

const Wrapper = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      const searchQuery = searchTerm.trim().split(' ').join('+');
      navigate(`/search/?s=${searchQuery}`);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidenav-block')}>
        <div className={cx('sub-search')}>
          <form onSubmit={handleSearchSubmit} className={cx('search-form')}>
            <input
              type="text"
              placeholder="SEARCH..."
              className={cx('search-input')}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
            </button>
          </form>
        </div>
        <div className={cx('primary-menu-container')}>
          <ul className={cx('primary-menu')}>
            <li><a href="/ceo-ho-cong-thang">CEO Hồ Công Thắng</a></li>
            <li><a href="/cong-ty-t-booking">Công Ty T-Booking</a></li>
            <li><a href="/contact">Liên Hệ</a></li>
          </ul>
        </div>
        <div className={cx('sub-author')}>
          <div className={cx('widget-title')}>Giới thiệu</div>
          <img
            width="240"
            height="240"
            src="./Pic/sep1.jpg"
            className={cx('portrait-author')}
            alt="Felix"
            decoding="async"
            fetchpriority="high"
          />
          <p className={cx('inf-author')}>
            Hồ Công Thắng sinh năm 1993, sinh ra từ làng quê nghèo thuộc huyện Tiên Phước, tỉnh Quảng Nam.
            <br /> Là cố vấn thương hiệu - báo chí - youtube làm việc trực tiếp tại 2 văn phòng công ty hoặc facebook tick xanh tránh giả mạo.
          </p>
          <div className={cx("image-list-container")}>
            <ul className={cx("image-list")}>
              <li><a href='#' target='_blank'><img src="./Pic/sep2.png" alt="Image 1" /></a></li>
              <li><a href='#' target='_blank'><img src="./Pic/congty3.jpg" alt="Image 2" /></a></li>
            </ul>
          </div>
          <div className={cx('widget-title')}>Liên hệ</div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
