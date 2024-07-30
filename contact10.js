import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="contact10-text11 thq-heading-2">
                    Get in Touch
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="contact10-text07 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact10-text10 thq-heading-3">
                    Email: info@microinnovatehub.com
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="contact10-text06 thq-body-large">
                    For any inquiries or feedback, feel free to drop us an
                    email.
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact10-text08 thq-heading-3">
                    Phone: +1-123-456-7890
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="contact10-text09 thq-body-large">
                    Give us a call during our office hours for immediate
                    assistance.
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1Description: undefined,
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1656228538617-11e25f130bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU2MHw&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Phone Icon',
  location2: undefined,
  location2Description: undefined,
  location1: undefined,
  heading1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1711437757489-f739a581c55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Email Icon',
}

Contact10.propTypes = {
  location1Description: PropTypes.element,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location2: PropTypes.element,
  location2Description: PropTypes.element,
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
}

export default Contact10
