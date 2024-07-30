import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features25-text3 thq-heading-2">
                      User-Friendly Interface
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features25-text thq-body-small">
                      Intuitive and easy-to-navigate interface for seamless user
                      experience.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features25-text5 thq-heading-2">
                      Collaborative Tools
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features25-text4 thq-body-small">
                      Built-in collaboration tools to enhance teamwork and
                      productivity.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features25-text2 thq-heading-2">
                      Customizable Solutions
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features25-text1 thq-body-small">
                      Tailored solutions to meet the unique needs of each user.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1710922962986-a9e8de6dbb68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'User-Friendly Interface Image Alt Text',
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1559030623-0226b1241edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1Title: undefined,
  feature2ImgAlt: 'Collaborative Tools Image Alt Text',
  feature2Description: undefined,
  feature3ImgAlt: 'Customizable Solutions Image Alt Text',
  feature2Title: undefined,
}

Features25.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features25
