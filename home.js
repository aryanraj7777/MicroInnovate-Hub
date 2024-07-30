import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Banner1 from '../components/banner1'
import BlogPostHeader1 from '../components/blog-post-header1'
import Features1 from '../components/features1'
import CTA26 from '../components/cta26'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Glittering Novel Spider</title>
        <meta property="og:title" content="Glittering Novel Spider" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="home-text thq-body-small thq-link">
              Welcome to MicroInnovate Hub
            </span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text01 thq-body-small thq-link">
              Mission Statement
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text02 thq-body-small thq-link">
              Key Features
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text03 thq-body-small thq-link">
              About Us
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text04 thq-body-large">Welcome</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text05 thq-body-large">Mission</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text06 thq-body-large">Features</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text07 thq-body-large">About Us</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text08">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text09">Secondary Action</span>
          </fragment>
        }
        link2Url="/"
        page1Description={
          <fragment>
            <span className="home-text10 thq-body-small">
              Learn about what MicroInnovate Hub has to offer
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="home-text11 thq-body-small">
              Understand our core mission and values
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="home-text12 thq-body-small">
              Explore the key features of MicroInnovate Hub
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="home-text13 thq-body-small">
              Get to know more about MicroInnovate Hub and our team
            </span>
          </fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1675348005313-bf4b58d8de68?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMzMjcxN3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Navbar8>
      <Hero17
        action1={
          <fragment>
            <span className="home-text14 thq-body-small">Main action</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text15 thq-body-large">
              Empowering Micro and Nano Entrepreneurs with Cutting-edge
              Technologies
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text16 thq-heading-1">
              Welcome to MicroInnovate Hub
            </span>
          </fragment>
        }
        image1Src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMzMjU4MXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
      ></Hero17>
      <Banner1
        content1={
          <fragment>
            <span className="home-text17 thq-heading-3">
              <span>
                Join MicroInnovate Hub to access user-friendly interfaces,
                advanced analytics, and collaborative tools.
              </span>
              <br></br>
              <span className="home-text20">About Us</span>
              <br></br>
              <span>
                MicroInnovate Hub is an integrated platform designed to empower
                micro and nano entrepreneurs by providing access to financial
                resources, management tools, and market visibility through
                innovative technologies.
              </span>
              <br></br>
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text24">Get Started</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text25 thq-heading-2">
              Empower Innovation Through Technology
            </span>
          </fragment>
        }
      ></Banner1>
      <BlogPostHeader1
        blogPostTitle={
          <fragment>
            <span className="home-text26 thq-heading-1">
              <span className="home-text27">
                Empowering Innovation Through Technology
              </span>
              <br></br>
              <span className="home-text29">Why MicroInnovate Hub?</span>
              <br className="home-text30"></br>
              <span className="home-text31">
                MicroInnovate Hub stands out by combining various advanced
                technologies into a single platform. It addresses financial,
                operational, marketing, and educational barriers, offering a
                comprehensive suite of tools tailored specifically for micro and
                nano entrepreneurs.
              </span>
              <br></br>
            </span>
          </fragment>
        }
        readTime={
          <fragment>
            <span className="home-text33 thq-body-small">5 min read</span>
          </fragment>
        }
        avatarName={
          <fragment>
            <span className="home-text34 thq-body-small">
              MicroInnovate Hub Team
            </span>
          </fragment>
        }
        date={
          <fragment>
            <span className="home-text35 thq-body-small">
              September 15, 2022
            </span>
          </fragment>
        }
      ></BlogPostHeader1>
      <Features1
        mainAction={
          <fragment>
            <span className="home-text36 thq-body-small">
              User-Friendly Interfaces
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text37 thq-heading-3">
              Advanced Analytics
            </span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="home-text38 thq-heading-3">
              User-Friendly Interfaces
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text39 thq-body-small">
              Easily navigate through the platform with our user-friendly
              interfaces.
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text40 thq-heading-3">
              Collaborative Tools
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text41 thq-body-small">
              Enhance teamwork and creativity with collaborative tools for
              seamless communication.
            </span>
          </fragment>
        }
        secondaryAction={
          <fragment>
            <span className="home-text42 thq-body-small">
              Advanced Analytics
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text43 thq-body-small">
              Gain valuable insights and make data-driven decisions with
              advanced analytics.
            </span>
          </fragment>
        }
        sectionTitle={
          <fragment>
            <span className="home-text44 thq-heading-2">Key Features</span>
          </fragment>
        }
      ></Features1>
      <CTA26
        action1={
          <fragment>
            <span className="home-text45">Sign Up Now</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text46 thq-body-large">
              Join MicroInnovate Hub and revolutionize your business.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text47 thq-heading-2">
              Start Innovating Today!
            </span>
          </fragment>
        }
      ></CTA26>
      <Steps2
        step1Title={
          <fragment>
            <span className="home-text48 thq-heading-2">Sign Up</span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="home-text49 thq-heading-2">Submit Idea</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="home-text50 thq-heading-2">Collaborate</span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="home-text51 thq-heading-2">Implement</span>
          </fragment>
        }
        step1Description={
          <fragment>
            <span className="home-text52 thq-body-small">
              Create an account on MicroInnovate Hub to access all our features.
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text53 thq-body-small">
              Share your innovative ideas with the community and get feedback.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text54 thq-body-small">
              Connect with like-minded individuals to collaborate on projects
              and bring ideas to life.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text55 thq-body-small">
              Utilize our technology and resources to implement your innovative
              solutions.
            </span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <fragment>
            <span className="home-text56 thq-body-small">
              MicroInnovate Hub has truly transformed the way we approach
              innovation in our organization. The platform is user-friendly and
              has helped us streamline our processes efficiently.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text57 thq-body-small">
              I highly recommend MicroInnovate Hub to any company looking to
              foster a culture of innovation. The support team is exceptional,
              and the features are top-notch.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text58 thq-body-small">
              Using MicroInnovate Hub has been a game-changer for us. The
              platform is intuitive, and the results speak for themselves.
              We&apos;ve seen a significant increase in our innovation output.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text59 thq-body-small">
              MicroInnovate Hub exceeded our expectations. It has helped us
              collaborate more effectively and bring our ideas to life faster
              than ever before. A must-have for any forward-thinking company.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text60 thq-body-small">
              Read what our clients have to say about their experience with
              MicroInnovate Hub.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text61 thq-heading-2">Testimonials</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="home-text62 thq-body-large">John Doe</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="home-text63 thq-body-large">Jane Smith</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="home-text64 thq-body-large">Michael Johnson</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="home-text65 thq-body-large">Sarah Lee</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="home-text66 thq-body-small">
              CEO, Tech Solutions Inc.
            </span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="home-text67 thq-body-small">
              CTO, Innovate Co.
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="home-text68 thq-body-small">
              Head of R&amp;D, FutureTech Ltd.
            </span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="home-text69 thq-body-small">
              Innovation Manager, NextGen Innovations
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="home-text70 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text71 thq-heading-2">Get in Touch</span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text72 thq-heading-3">
              Email: info@microinnovatehub.com
            </span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="home-text73 thq-heading-3">
              Phone: +1-123-456-7890
            </span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="home-text74 thq-body-large">
              For any inquiries or feedback, feel free to drop us an email.
            </span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="home-text75 thq-body-large">
              Give us a call during our office hours for immediate assistance.
            </span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <fragment>
            <span className="home-text76 thq-body-small">Link 1</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text77 thq-body-small">Link 2</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text78 thq-body-small">Link 3</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text79 thq-body-small">Link 4</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="home-text80 thq-body-small">Link 5</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="home-text81 thq-body-small">Terms of Service</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="home-text82 thq-body-small">Cookies Settings</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="home-text83 thq-body-small">Privacy Policy</span>
          </fragment>
        }
      ></Footer4>
      <img
        alt="pastedImage"
        src="/external/pastedimage-zgit-600h.jpeg"
        className="home-pasted-image"
      />
    </div>
  )
}

export default Home
