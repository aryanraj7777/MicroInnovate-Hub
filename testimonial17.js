import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="testimonial17-text18 thq-heading-2">
                  Testimonials
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial17-text19 thq-body-small">
                  Read what our clients have to say about their experience with
                  MicroInnovate Hub.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial17-text21 thq-body-large">
                            John Doe
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="testimonial17-text26 thq-body-small">
                            CEO, Tech Solutions Inc.
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial17-text14 thq-body-small">
                        MicroInnovate Hub has truly transformed the way we
                        approach innovation in our organization. The platform is
                        user-friendly and has helped us streamline our processes
                        efficiently.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial17-text25 thq-body-large">
                            Jane Smith
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="testimonial17-text22 thq-body-small">
                            CTO, Innovate Co.
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial17-text15 thq-body-small">
                        I highly recommend MicroInnovate Hub to any company
                        looking to foster a culture of innovation. The support
                        team is exceptional, and the features are top-notch.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial17-text20 thq-body-large">
                            Michael Johnson
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial17-text17 thq-body-small">
                            Head of R&amp;D, FutureTech Ltd.
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial17-text27 thq-body-small">
                        Using MicroInnovate Hub has been a game-changer for us.
                        The platform is intuitive, and the results speak for
                        themselves. We&apos;ve seen a significant increase in
                        our innovation output.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial17-text16 thq-body-large">
                            Sarah Lee
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial17-text23 thq-body-small">
                            Innovation Manager, NextGen Innovations
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial17-text24 thq-body-small">
                        MicroInnovate Hub exceeded our expectations. It has
                        helped us collaborate more effectively and bring our
                        ideas to life faster than ever before. A must-have for
                        any forward-thinking company.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Alt: 'Image of Michael Johnson',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Sarah Lee',
  review1: undefined,
  review2: undefined,
  author4Name: undefined,
  author3Position: undefined,
  heading1: undefined,
  content1: undefined,
  author3Name: undefined,
  author2Src:
    'https://images.unsplash.com/36/xIsiRLngSRWN02yA2BbK_submission-photo-7.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author2Position: undefined,
  author4Position: undefined,
  review4: undefined,
  author2Name: undefined,
  author1Position: undefined,
  author1Alt: 'Image of John Doe',
  author3Src:
    'https://images.unsplash.com/photo-1632377082403-214778bec07b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1520454125516-134a66d9bf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTk2OTU3NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author3Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  review1: PropTypes.element,
  review2: PropTypes.element,
  author4Name: PropTypes.element,
  author3Position: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  author3Name: PropTypes.element,
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  author4Position: PropTypes.element,
  review4: PropTypes.element,
  author2Name: PropTypes.element,
  author1Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  review3: PropTypes.element,
  author1Src: PropTypes.string,
  author4Src: PropTypes.string,
}

export default Testimonial17
