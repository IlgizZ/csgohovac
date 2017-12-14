import React, { Component } from 'react'
import PDF from 'react-pdfjs'

export default class PaperComponent extends Component {
  render() {
    return <PDF file="/../../assets/emploreum.pdf" />
  }
}
