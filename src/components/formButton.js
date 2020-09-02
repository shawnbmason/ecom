import React, { Component } from 'react';

export class FormButton extends Component {
  render() {
    const { className, title, type, input, onClick, short } = this.props;
    return (
      <div className={`${className} form-button`}>
        <button className={`form-button__button ${short ? 'form-button__gray-button' : ''}`} type={type} {...input} onClick={onClick}> {title} </button>
      </div>
    )
  }
}
