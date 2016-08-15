import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeals } from '../../actions/index';
import { Link } from 'react-router';
import DealItem from './deal_item';

class DealsIndex extends Component {

  componentWillMount() {
    this.props.fetchDeals();
  }

  renderDeals() {
    return this.props.deals.map((deal) => {
      return (
        <DealItem key={deal.id} deal={deal} />
      );
    });
  }

  render() {
    return (
      <div className='main-container'>
        <h3>Deals</h3>
        <ul className="gridfix cf">
          {this.renderDeals()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { deals: state.deals.all };
}

export default connect(mapStateToProps, { fetchDeals })(DealsIndex);
