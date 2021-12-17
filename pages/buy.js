import React, { Component } from 'react'
import HeadSection from '../components/Head'
import HeaderContainer from '../components/Header'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import poll from '../pollList'
import armworld from '../armWorld'
import web3 from '../web3'
import web3Binance from '../webBinance'

class BuySell extends Component {
  static async getInitialProps() {
    let balanceArm = await armworld.methods
      .balanceOf('0xF81b94beB72aD2eA568125c844cE1D272aAEdeC7')
      .call()
    balanceArm /= 1000000000

    let balanceSet = await poll.methods.tokenBalance().call()
    balanceSet /= 1000000000000000000
    return { balanceArm, balanceSet }
  }

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
                <div className="row sales">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing pt-5">
                    <div class="widget widget-account-invoice-one">
                      <div class="widget-heading">
                        <h5 class="">ARMWORLD Token Info</h5>
                      </div>

                      <div class="widget-content">
                        <div class="invoice-box">
                          <div class="acc-total-info">
                            <h5>Balance of Token</h5>
                            <p class="acc-amount">
                              {this.props.balanceArm} ARMWORLD
                            </p>
                          </div>

                          <div class="inv-detail">
                            <div class="info-detail-1">
                              <p>Contract Address</p>
                              <p className="truncate">
                                0xF81b94beB72aD2eA568125c844cE1D272aAEdeC7
                              </p>
                            </div>
                            <div class="info-detail-1">
                              <p>Token Supply</p>
                              <p>30,000,000 token</p>
                            </div>
                            <div class="info-detail-2">
                              <p>Taxes</p>
                              <p>$ 17.82</p>
                            </div>
                          </div>

                          <div class="inv-action">
                            <a href='https://bscscan.com/address/0xF81b94beB72aD2eA568125c844cE1D272aAEdeC7' target="_blank" class="btn btn-danger">
                              Track on BSCScan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing pt-5">
                    <div class="widget widget-account-invoice-one">
                      <div class="widget-heading">
                        <h5 class="">SET Token Info</h5>
                      </div>

                      <div class="widget-content">
                        <div class="invoice-box">
                          <div class="acc-total-info">
                            <h5>Balance of Token</h5>
                            <p class="acc-amount">
                              {this.props.balanceSet} SET
                            </p>
                          </div>

                          <div class="inv-detail">
                            <div class="info-detail-1">
                              <p>Contract Address</p>
                              <p className="truncate">
                                0x3854c97B5EB4bc29881e97D7790D4e1eD5F61e31
                              </p>
                            </div>
                            <div class="info-detail-1">
                              <p>Token Supply</p>
                              <p>30,000,000 SET</p>
                            </div>
                            <div class="info-detail-2">
                              <p>Taxes</p>
                              <p>$ 17.82</p>
                            </div>
                          </div>

                          <div class="inv-action">
                            <a href="https://rinkeby.etherscan.io/address/0x07bE87a28767B69D12f78D4dbb17c7fD172f4cD2"  target="_blank" class="btn btn-danger">
                              Track on EtherScan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ height: '5px', borderTop: '1px dotted' }} />
                <div className="row layout-top-spacing">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                    <div className="widget-content-area br-4">
                      <div class="form">
                        <div class="row justify-content-center">
                          <div class="col-lg-4" style={{paddingTop : '100px' , paddingBottom  : '100px'}}>
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
                                          <label htmlFor="validationCustom01">
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
                                                  <option value="0.1">
                                                    0.1
                                                  </option>
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
                          </div>
                          <div class="col-lg-4" style={{paddingTop : '100px' , paddingBottom  : '100px'}}>
                            <div class="form-form">
                              <div class="form-form-wrap">
                                <div class="form-container">
                                  <div class="form-content">
                                    <h1 class="">
                                      Trade token for Ether <br /> right here
                                    </h1>
                                    <form class="text-left">
                                      <div class="form">
                                        <form class="select mt-4" noValidate>
                                          <label htmlFor="validationCustom01">
                                            Amount that you want to trade ( in
                                            Set )
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
                                                  <option value="100">
                                                    100
                                                  </option>
                                                  <option value="500">
                                                    500
                                                  </option>
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
