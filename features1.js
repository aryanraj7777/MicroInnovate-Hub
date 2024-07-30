import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <h2>
              {props.sectionTitle ?? (
                <fragment>
                  <span className="features1-text09 thq-heading-2">
                    Key Features
                  </span>
                </fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <fragment>
                      <span className="features1-text03 thq-heading-3">
                        User-Friendly Interfaces
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <fragment>
                      <span className="features1-text04 thq-body-small">
                        Easily navigate through the platform with our
                        user-friendly interfaces.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <fragment>
                      <span className="features1-text02 thq-heading-3">
                        Advanced Analytics
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <fragment>
                      <span className="features1-text08 thq-body-small">
                        Gain valuable insights and make data-driven decisions
                        with advanced analytics.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <fragment>
                      <span className="features1-text05 thq-heading-3">
                        Collaborative Tools
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <fragment>
                      <span className="features1-text06 thq-body-small">
                        Enhance teamwork and creativity with collaborative tools
                        for seamless communication.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span>
              {props.mainAction ?? (
                <fragment>
                  <span className="features1-text01 thq-body-small">
                    User-Friendly Interfaces
                  </span>
                </fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span>
              {props.secondaryAction ?? (
                <fragment>
                  <span className="features1-text07 thq-body-small">
                    Advanced Analytics
                  </span>
                </fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMzMjIzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature2ImageAlt: 'Advanced Analytics Image',
  feature1Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMzMjIzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'Collaborative Tools Image',
  feature1ImageAlt: 'User-Friendly Interfaces Image',
  secondaryAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1497493292307-31c376b6e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMzMjIzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features1.propTypes = {
  mainAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features1
