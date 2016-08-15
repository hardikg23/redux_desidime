import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeals } from '../actions/index';
import { Link } from 'react-router';

class DealsIndex extends Component {
  componentWillMount() {
    this.props.fetchDeals();
  }

  renderDeals() {
    return this.props.deals.map((deal) => {
      return (
        <li className="list-group-item" key={deal.id}>
          <Link to={"deals/" + deal.id}>
            <span className="pull-xs-right">{deal.categories}</span>
            <strong>{deal.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/deals/new" className="btn btn-primary">
            Add a Deal
          </Link>
        </div>
        <h3>Deals</h3>
        <ul className="list-group">
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
