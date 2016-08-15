import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../../actions/index';
import { Link } from 'react-router';
import TopicItem from './topic_item';

class TopicsIndex extends Component {

  componentWillMount() {
    this.props.fetchTopics();
  }

  renderTopics() {
    return this.props.topics.map((topic) => {
      return (
        <TopicItem key={topic.id} topic={topic} />
      );
    });
  }

  render() {
    return (
      <div className='main-container'>
        <h3>Topics</h3>
        <div className="table-responsive cf">
          <table className="table table-bordered link-clr tour-last-step wcard">
            <thead>
              <tr className="gray-slate">
                <th className="table-60">
                  <a href="/forums/hot-deals-online?sort_by=title" rel="nofollow">Threads</a>
                   |
                  <a href="/forums/hot-deals-online?sort_by=id" rel="nofollow">Newest Threads</a>
                   |
                  <a href="/forums/hot-deals-online?popular_flag=true" rel="nofollow">Popular Threads</a>
                </th>
                <th>Stores</th>
                <th>Categories</th>
                <th><a href="/forums/hot-deals-online?sort_by=posts_count" rel="nofollow">Posts</a></th>
                <th><a href="/forums/hot-deals-online?sort_by=hits" rel="nofollow">Views</a></th>
                <th>Posted By</th>
                <th>Latest Reply</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTopics()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { topics: state.topics.all };
}

export default connect(mapStateToProps, { fetchTopics })(TopicsIndex);
