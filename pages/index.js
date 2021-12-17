import React, { Component } from 'react'
import HeadSection from '../components/Head'
import HeadSectionIndex from '../components/HeadIndex'
import { useRouter } from 'next/router'
import { Link } from '../routes'

const Index = () => {
  const router = useRouter()

  return (
    <>
      {router.pathname == '/' ? <HeadSectionIndex /> : <HeadSection />}
      <body class="form">
        <div class="form-container">
          <div class="form-form">
            <div class="form-form-wrap">
              <div class="form-container">
                <div class="form-content">
                  <h1 class="" style={{ paddingBottom: '10px' }}>
                    Let's just{' '}
                    <a>
                      <span class="brand-name"> VOTE</span>
                    </a>
                  </h1>
                  <h5 class="signup-link pb-3">So, what it's all about ?</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <hr style={{height : '5px', borderTop : '2px solid'}}/>
                  <Link route={'/'}>
                  <a class="info-link" style={{ color: 'blue' }} href="">
                    Discover more{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="form-image">
            <div class="l-image"></div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Index
