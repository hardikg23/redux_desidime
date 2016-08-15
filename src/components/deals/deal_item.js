import React, { Component } from 'react';
import { Link } from 'react-router';

class DealItem extends Component {

  render() {
    var deal = this.props.deal;
    return (
      <li className="grid-25 tablet-grid-33" key={deal.id}>
        <Link to={"deals/" + deal.id}>
          
          <div className="deal-box shadow">
            <div className="deal-box-head">
              <div className="like-count">
                <span className="ico ico-voteup"></span>
                <span>
                  {deal.score}
                </span>
              </div>
              <div className="like-count">
                <span className="ico ico-post"></span>
                <span>
                  {deal.comments_count}
                </span>
              </div>
              <span className="deal-date deal-header">
                {deal.promoted_at}
              </span>
            </div>
            <div className="deal-box-image fpd_prod_img">
            </div>
            <div className="deal-dsp">
              {deal.title}
            </div>
            <div className="deal-price">
              <span className="rupee_fonts">`</span>
              {deal.current_price}
            </div>
            <div className="deal-discount">
            </div>
          </div>

        </Link>
      </li>
    );
  }
}

export default DealItem;



