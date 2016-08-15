import React, { Component } from 'react';
import { Link } from 'react-router';

class TopicItem extends Component {

  render() {
    var topic = this.props.topic;
    return (
              <tr>
                <td>
                  <div>
                    <a href="/forums/hot-deals-online/topics/new" rel="bookmark">{topic.title}</a>
                    
                    <div className="ftr pad-top5">
                      
                    </div>
                  </div>
                </td>
                <td>
                  <a href="/stores/other">{topic.merchant.name}</a>
                </td>
                <td>
                  <a href="/categories/other">{topic.categories.name}</a>
                </td>
                <td className="gray-slate txt-center font12">
                  {topic.posts_count}
                </td>
                <td className="gray-slate txt-center font12">
                  {topic.view_count}
                </td>
                <td className="font12">
                  <a href="/users/1">{topic.user.name}</a>
                  <span className="comment-date"><time datetime="2013-10-11T15:56:07+05:30" title="Fri, 11 Oct 2013 15:56:07 +0530">{topic.updated_at}</time></span>
                </td>
                <td className="font12">
                  <a className="form_user" href="/users/1">{topic.user.name}</a>
                  <span className="comment-date">
                    <time datetime="2013-10-11T15:56:07+05:30" title="Fri, 11 Oct 2013 15:56:07 +0530">{topic.updated_at}</time>
                  </span>
                  <a className="btn btn-basic btn-xs" href="/forums/hot-deals-online/topics/new?f=1&amp;page=1#post_674"> view</a>
                </td>
              </tr>
    );
  }
}

export default TopicItem;



