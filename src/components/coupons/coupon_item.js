import React, { Component } from 'react';
import { Link } from 'react-router';

class CouponItem extends Component {

  render() {
    var coupon = this.props.coupon;
    return (
      <li className="grid-25 tablet-grid-33">
        <div className="store-coupon-box shadow">
          <div className="pad6 cf">
            <div className="coupon_time ftr"><time data-time-ago="2016-06-30T12:35:45+05:30">2 months ago</time></div>
          </div>
          <div className="coupon-image-box">
            <a href="/stores/flipkart"><img alt="Flipkart logo retina 9fddfff2" src={coupon.image} /></a>
          </div>
          <div className="dsp-coupon">
            <a className="click_coupons_code" data-href-alt="/stores/flipkart?coupon_id=286" data-href="http://links.desidime.com?ref=coupons&amp;url=http://www.flipkart.com/" href="#" rel="nofollow">{coupon.coupon_detail}</a>
          </div>
          <div className="cf">
            <a className="click_coupons_code couponcode" data-href-alt="/stores/flipkart?coupon_id=286" data-href="http://links.desidime.com?ref=coupons&amp;url=http://www.flipkart.com/" href="#" rel="nofollow">Click here for coupon code</a>
          </div>
          <span className="coupon_redemption ftr">{coupon.redemption_count} redemptions</span>
        </div>
      </li>
    );
  }
}

export default CouponItem;



