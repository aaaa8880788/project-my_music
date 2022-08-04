import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import styles from "./index.module.less";
import { headerLinks } from "@/common/local-data";
import { SearchOutlined } from "@ant-design/icons";

const AppHeader = memo(() => {
  const { pathname } = useLocation();
  const [placeholder, setPlaceholder] = useState("音乐/视频/电台/用户");
  const inputFocusFn = () => {
    setPlaceholder("");
  };
  const inputBlurFn = () => {
    setPlaceholder("音乐/视频/电台/用户");
  };
  return (
    <div className={styles.wrap}>
      <div className={`${styles.top_box} wrap-v1`}>
        <h1 className={styles.left_box}>
          <Link to="/">网易云音乐</Link>
        </h1>
        <ul className={styles.center_box}>
          {headerLinks.map((item, index) => {
            if (index < 3) {
              return (
                <li
                  key={item.title}
                  className={pathname === item.link ? styles.activeItem : ""}
                >
                  <Link to={item.link}>
                    <em>{item.title}</em>
                    <i> </i>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={item.title}>
                  <a href={item.link} target="_blank">
                    <em>{item.title}</em>
                    <i> </i>
                  </a>
                </li>
              );
            }
          })}
        </ul>
        <div className={styles.right_box}>
          <div className={styles.search}>
            <SearchOutlined className={styles.search_icon} />
            <input
              type="text"
              placeholder={placeholder}
              className={styles.search_input}
              onFocus={(e) => inputFocusFn()}
              onBlur={(e) => inputBlurFn()}
            />
          </div>
          <div className={styles.producer}>
            <span>创作者中心</span>
          </div>
          <div className={styles.login}>
            <span>登录</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom_box}></div>
    </div>
  );
});

export default AppHeader;
