import React, { Component } from 'react';
import { Link } from 'react-router';

class CategoryItem extends Component {

  render() {
    var category = this.props.category;
    return (
      <li className="grid-20 show-grid tablet-grid-25">
        <div className="cat-list-block">
          <div className="scat-icon">
            <a href="/categories/fashion-apparels"><span className="ico ico-fashion"></span></a>
          </div>
          <a className="cat-name" href="/categories/fashion-apparels">{category.name}</a>
        </div>
      </li>
    );
  }
}

export default CategoryItem;



