import React, { Component } from 'react'
import HeaderContainer from './Header'
import Navbar from '../components/Navbar'

class Body extends Component {
  state = {
    symbol: '',
    tokenName: '',
    amountSupply: '',
    question: '',
    firstAnswer: '',
    secondAnswer: '',
    firstAddr: '',
    secondAddr: '',
    blankAddr: '',
    rewardAddr: '',
  }

  render() {
    return (
      <body className="sidebar-noneoverflow">
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
                    <div className="page-title mb-4">
                      <h3>Create New Vote</h3>
                    </div>
                    <form
                      className="needs-validation"
                      noValidate
                    >
                      <div className="form-row">
                        <div className="col-md-12 mb-12">
                          <label htmlFor="validationCustom03">
                            Question ( Example : Who is more handsome ? )
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.question}
                            id="validationCustom03"
                            placeholder="Question Here..."
                            onChange={(event) =>
                              this.setState({
                                question: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a question.
                          </div>
                        </div>
                      </div>
                      <div className="form-row pt-4">
                        <div className="col-md-6 mb-6">
                          <label htmlFor="validationCustom04">
                            First Answer
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom04"
                            value={this.state.firstAnswer}
                            placeholder="First Answer Here"
                            onChange={(event) =>
                              this.setState({
                                firstAnswer: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide answer.
                          </div>
                        </div>
                        <div className="col-md-6 mb-6">
                          <label htmlFor="validationCustom05">
                            Second Answer
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom05"
                            placeholder="Second Answer Here.."
                            value={this.state.secondAnswer}
                            onChange={(event) =>
                              this.setState({
                                secondAnswer: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide answer.
                          </div>
                        </div>
                      </div>
                      <div className="form-row pt-4">
                        <div className="col-md-4 mb-4">
                          <label htmlFor="validationCustom06">
                            Address for First Answer
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom06"
                            placeholder="Address for First Answer"
                            value={this.state.firstAddr}
                            onChange={(event) =>
                              this.setState({
                                firstAddr: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid wallet address.
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <label htmlFor="validationCustom07">
                            Address for Second Answer
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom07"
                            placeholder="Address for Second Answer"
                            value={this.state.secondAddr}
                            onChange={(event) =>
                              this.setState({
                                secondAddr: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid wallet address.
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <label htmlFor="validationCustom08">
                            Address Blank Vote
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom08"
                            placeholder="Address if Refused to Answer"
                            value={this.state.blankAddr}
                            onChange={(event) =>
                              this.setState({
                                blankAddr: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid wallet address.
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="col-md-12 mb-12">
                          <label htmlFor="validationCustom09">
                            Address for Rewards Token
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom09"
                            placeholder="Address for Token"
                            value={this.state.rewardAddr}
                            onChange={(event) =>
                              this.setState({
                                rewardAddr: event.target.value,
                              })
                            }
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid wallet address.
                          </div>
                        </div>
                      </div>
                      <button onClick={(event) => {
                        event.preventDefault()
                        console.log(this.state)
                      }} className="btn btn-primary mt-4 " type="submit">
                        Create Your Token
                      </button>
                    </form>
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
    )
  }
}

export default Body
