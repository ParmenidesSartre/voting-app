import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import HeadSection from '../components/Head'
import HeaderContainer from '../components/Header'
import Navbar from '../components/Navbar'
import VoteBox from '../components/VoteBox'
import poll from '../pollList'
import web3 from '../web3'

class Pool extends Component {
  state = {
    valueSelected: '',
    errorMessage: '',
    receipt: '',
    loading: false,
  }

  static async getInitialProps() {
    const referendum = await poll.methods.description().call()
    const address = await poll.methods.props().call()
    return { referendum, address }
  }

  chooseValue = (addre) => {
    this.setState({ valueSelected: addre })
  }

  async firstChoice(addr) {
    if (this.state.valueSelected == '') {
      this.setState({ errorMessage: 'You must choose which one to vote' })
      return
    }

    this.setState({ loading: true, errorMessage: '' })

    try {
      var amount = 1
      const account = await web3.eth.getAccounts()
      var tx = {
        from: account[0],
        to: poll._address,
        data: poll.methods
          .transfer(addr, web3.utils.toWei(amount.toString()))
          .encodeABI(),
        gas: 3000000,
      }
      const receipt = await web3.eth.sendTransaction(tx)
      this.setState({ receipt: receipt.status })
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }
    this.setState({ loading: false })
  }

  renderError() {
    return (
      <div class="alert alert-warning mb-4" role="alert">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <svg> ... </svg>
        </button>
        <strong>Warning!</strong> {this.state.errorMessage}
      </div>
    )
  }

  renderSuccess() {
    return (
      <div class="alert alert-primary mb-4" role="alert">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <svg> ... </svg>
        </button>
        <strong>Info!</strong> Thank you for voting!
      </div>
    )
  }

  render() {
    return (
      <>
        <HeadSection />
        <body className="sidebar-noneoverflow" style={{fontFamily : 'Quicksand, sans-serif'}}>
          <HeaderContainer />

          <div className="main-container" id="container">
            <div className="overlay"></div>
            <div className="search-overlay"></div>

            <Navbar />

            <div id="content" className="main-content">
              <div className="layout-px-spacing">
                <div className="row layout-top-spacing">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                    <div className="widget-content-area br-4">
                      {this.state.receipt != '' ? this.renderSuccess() : null}
                      {this.state.errorMessage != ''
                        ? this.renderError()
                        : null}
                      <div class="wrapper">
                        <div class="poll-top-title text-center">
                          <h2>{this.props.referendum['0']}</h2>
                        </div>

                        <div class="poll-content-img clearfix">
                          <div class="poll-left-img float-left clearfix">
                            <img
                              width="600"
                              height="600"
                              src="/img/plp.png"
                              alt=""
                            />
                          </div>

                          <div class="poll-right-text">
                            <form>
                              <VoteBox
                                value={this.props.referendum['1']}
                                func={this.chooseValue}
                                addr={this.props.address['0']}
                              />
                              <VoteBox
                                value={this.props.referendum['2']}
                                func={this.chooseValue}
                                addr={this.props.address['1']}
                              />
                              <VoteBox
                                value="Nobody care"
                                func={this.chooseValue}
                                addr={this.props.address['2']}
                              />
                              <div
                                ref={(element) => {
                                  if (element)
                                    element.style.setProperty(
                                      'border',
                                      '2px',
                                      'important',
                                    )
                                }}
                              />
                              <Button
                                onClick={(event) => {
                                  event.preventDefault()
                                  this.firstChoice(this.state.valueSelected)
                                }}
                                loading={this.state.loading}
                                type="submit"
                              >
                                <Button.Content style={{ textAlign: 'middle' }}>
                                  Submit vote
                                </Button.Content>
                              </Button>
                            </form>
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

export default Pool
