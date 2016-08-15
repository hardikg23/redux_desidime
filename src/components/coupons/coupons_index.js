import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoupons } from '../../actions/index';
import { Link } from 'react-router';
import CouponItem from './coupon_item';

class CouponsIndex extends Component {

  componentWillMount() {
    this.props.fetchCoupons();
  }

  renderCoupons() {
    return this.props.coupons.map((coupon) => {
      return (
        <CouponItem key={coupon.id} coupon={coupon} />
      );
    });
  }

  render() {
    return (
      <div className='main-container'>
        <h3>Coupons</h3>
        <ul className="gridfix cf gb20">
          {this.renderCoupons()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { coupons: state.coupons.all };
}

export default connect(mapStateToProps, { fetchCoupons })(CouponsIndex);
