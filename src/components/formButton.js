import React, { Component } from 'react';

export class FormButton extends Component {
  render() {
    const { className, title, type, placeholder, input, onClick } = this.props;
    return (
      <div className={`${className} form-button`}>
        <button className={`form-buttom__button`} type={type} {...input} onClick={onClick}> {title} </button>
      </div>
    )
  }
}
