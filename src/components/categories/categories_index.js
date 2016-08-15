import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/index';
import { Link } from 'react-router';
import CategoryItem from './category_item';

class CategoriesIndex extends Component {

  componentWillMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return (
        <CategoryItem key={category.id} category={category} />
      );
    });
  }

  render() {
    return (
      <div className='main-container'>
        <h3>Categories</h3>
        <ul className="grid-100 grid-parent gridfix">
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories.all };
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesIndex);
