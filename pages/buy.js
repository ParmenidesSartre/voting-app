import React, { Component } from 'react'
import HeadSection from '../components/Head'
import HeaderContainer from '../components/Header'
import Navbar from '../components/Navbar'
import Body from '../components/Body'

class BuySell extends Component {
  render() {
    return (
      <>
        <HeadSection />
        <body
          className="sidebar-noneoverflow"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          <HeaderContainer />

          <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>

            <Navbar />

            <div id="content" className="main-content">
              <div className="layout-px-spacing">
                <div class="row layout-top-spacing">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                    <div class="widget-content-area br-4">
                      <div class="widget-one">
                        <h5>Get Token for a Small Fee</h5>

                        <p class="">
                          With CORK starter kit, you can begin your work without
                          any hassle. The starter page is highly optimized which
                          gives you freedom to start with minimal code and add
                          only the desired components and plugins required for
                          your project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row layout-top-spacing">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                    <div className="widget-content-area br-4">
                      <div class="form">
                        <div class="form-container">
                          <div class="form-form">
                            <div class="form-form-wrap">
                              <div class="form-container">
                                <div class="form-content">
                                  <h1 class="">
                                    Trade Ether for token <br /> right here
                                  </h1>
                                  <form class="text-left">
                                    <div class="form">
                                      <form
                                        class="select mt-4"
                                        novalidate
                                        action="javascript:void(0);"
                                      >
                                        <label for="validationCustom01">
                                          Amount that you want to trade ( in
                                          Ether )
                                        </label>
                                        <div class="form-row">
                                          <div class="col-md-12">
                                            <div
                                              id="select_menu"
                                              class="form-group mb-4"
                                            >
                                              <select
                                                class="custom-select"
                                                required
                                              >
                                                <option value="0.001">
                                                  0.001
                                                </option>
                                                <option value="0.005">
                                                  0.001
                                                </option>
                                                <option value="0.01">
                                                  0.01
                                                </option>
                                                <option value="0.05">
                                                  0.05
                                                </option>
                                                <option value="0.1">0.1</option>
                                                <option value="0.5">
                                                  0.50
                                                </option>
                                                <option value="1">1</option>
                                              </select>
                                              <div class="valid-feedback">
                                                Example valid custom select
                                                feedback
                                              </div>
                                              <div class="invalid-feedback">
                                                Please Select the field
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                      <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                          <button
                                            type="submit"
                                            class="btn btn-primary"
                                            value=""
                                          >
                                            Trade Now !
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-form">
                            <div class="form-form-wrap">
                              <div class="form-container">
                                <div class="form-content">
                                  <h1 class="">
                                    Trade token for Ether <br /> right here
                                  </h1>
                                  <form class="text-left">
                                    <div class="form">
                                      <form
                                        class="select mt-4"
                                        novalidate
                                        action="javascript:void(0);"
                                      >
                                        <label for="validationCustom01">
                                          Amount that you want to trade ( in Set
                                          )
                                        </label>
                                        <div class="form-row">
                                          <div class="col-md-12">
                                            <div
                                              id="select_menu"
                                              class="form-group mb-4"
                                            >
                                              <select
                                                class="custom-select"
                                                required
                                              >
                                                <option value="10">10</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                                <option value="500">500</option>
                                                <option value="1000">
                                                  1000
                                                </option>
                                                <option value="5000">
                                                  5000
                                                </option>
                                                <option value="10000">
                                                  10000
                                                </option>
                                              </select>
                                              <div class="valid-feedback">
                                                Example valid custom select
                                                feedback
                                              </div>
                                              <div class="invalid-feedback">
                                                Please Select the field
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                      <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                          <button
                                            type="submit"
                                            class="btn btn-primary"
                                            value=""
                                          >
                                            Trade Now !
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-wrapper">
                <div className="footer-section f-section-1">
                  <p className="">
                    Copyright © 2021{' '}
                    <a target="_blank" href="">
                      Noesis Analytics
                    </a>
                    , All rights reserved.
                  </p>
                </div>
                <div className="footer-section f-section-2">
                  <p className="">
                    Coded with{' '}
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
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    )
  }
}

export default BuySell
