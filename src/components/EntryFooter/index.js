import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import classNames from 'classnames/bind';
import styles from './EntryFooter.module.scss';

const cx = classNames.bind(styles); 

function EntryFooter({ customEntryFooter, leaveCommentHref }) {
    return ( 
        <div className={cx("entry-footer", customEntryFooter)}>
            <div className={cx("entry-byline")}>
                <p>
                    by<a href="https://www.facebook.com/tbooking.vn">T-Booking</a>
                </p>
            </div>
            <div className={cx("social-menu-container")}>
            <ul className={cx('list-social')}>
              <li className={cx('icon')}>
                <a href="https://www.facebook.com/tbooking.vn" title="Facebook" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="https://www.facebook.com/tbooking.vn" title="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="https://www.facebook.com/tbooking.vn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className={cx('icon')}>
                <a href="https://www.youtube.com/c/C%C3%B4ngTyTruy%E1%BB%81nTh%C3%B4ngTBooking" title="Youtube" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
            </div>
            <div className={cx("entry-comments")} style={{ borderRight: "none" }}>
                <a href={leaveCommentHref}> Bình Luận </a>
            </div>
        </div>
    );
}

export default EntryFooter;
