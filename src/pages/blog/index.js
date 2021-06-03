import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="content">
          <section className="section section--gradient">
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column is-7 is-offset-1">
                    <h3 className="has-text-weight-semibold is-size-2">Writing</h3>
                    <p>I've never claimed that any of these posts would be interesting, relevant, or well written.</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                  <BlogRoll />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
