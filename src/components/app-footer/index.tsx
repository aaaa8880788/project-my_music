import React, { memo } from "react";
import styles from "./index.module.less";

const AppFooter = memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={`wrap-v2 ${styles.center}`}>
        <div className={styles.left_box}>
          <ul className={styles.left_box_title}>
            <li>
              <a href="javascript:;">服务条款</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">隐私政策</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">儿童隐私政策</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">版权投诉</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">投资者关系</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">广告合作</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">廉正举报</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="javascript:;">联系我们</a>
            </li>
          </ul>
          <div className={styles.left_box_belong}>
            <span>网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="javascript:;">浙网文[2021] 1186-054号</a>
          </div>
          <div className={styles.left_box_safe}>
            <a href="javascript:;">
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a href="javascript:;">浙公网安备 33010902002564号</a>
          </div>
          <div>
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          </div>
        </div>
        <div className={styles.right_box}>
          <ul>
            <li>
              <div className={styles.image}></div>
              <span>Amped Studio</span>
            </li>
            <li>
              <div className={styles.image}></div>
              <span>用户认证</span>
            </li>
            <li>
              <div className={styles.image}></div>
              <span>独立音乐人</span>
            </li>
            <li>
              <div className={styles.image}></div>
              <span>赞赏</span>
            </li>
            <li>
              <div className={styles.image}></div>
              <span>视频奖励</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default AppFooter;
