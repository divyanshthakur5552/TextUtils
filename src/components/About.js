import React from 'react';

export default function About({ mode = 'light' }) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: mode === 'light' ? 'white' : '#212529',
        color: mode === 'light' ? 'black' : 'white',
      }}
    >
      <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: mode === 'light' ? 'white' : '#212529',
            color: mode === 'light' ? 'black' : 'white',
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={{
                backgroundColor: mode === 'light' ? 'white' : '#212529',
                color: mode === 'light' ? 'black' : 'white',
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Who We Are 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                background: mode === 'light' ? 'white' : '#212529',
                color: mode === 'light' ? 'black' : 'white',
              }}
            >
              <strong>At TextUtils,</strong>we believe that text should work for you — not the other way around. Whether you're a student, professional, writer, or just someone who deals with text every day, we've created a simple and efficient platform to help you transform and manage your content easily. Our mission is to make text editing accessible, quick, and enjoyable for everyone.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            background: mode === 'light' ? 'white' : '#212529',
            color: mode === 'light' ? 'black' : 'white',
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                background: mode === 'light' ? 'white' : '#212529',
                color: mode === 'light' ? 'black' : 'white',
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            What We Offer
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                background: mode === 'light' ? 'white' : '#212529',
                color: mode === 'light' ? 'black' : 'white',
              }}
            >
              <strong>TextUtils provides a variety of powerful yet easy-to-use tools</strong>to manipulate your text the way you want. From changing cases, removing extra spaces, counting words and characters, to formatting and cleaning up messy text — we offer solutions that save time and improve productivity. Designed with a focus on speed, accuracy, and user-friendliness, TextUtils is your go-to online text editor.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            background: mode === 'light' ? 'white' : '#212529',
            color: mode === 'light' ? 'black' : 'white',
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={{
                background: mode === 'light' ? 'white' : '#212529',
                color: mode === 'light' ? 'black' : 'white',
              }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Choose Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                background: mode === 'light' ? 'white' : '#212529',
                color: mode === 'light' ? 'black' : 'white',
              }}
            >
              <strong>We are committed to providing a clean, distraction-free experience that focuses entirely on your needs.</strong>TextUtils is fast, lightweight, mobile-friendly, and completely free to use. Whether you’re editing a quick note or preparing professional documents, you can rely on TextUtils to deliver perfect results every time. We're constantly improving and adding new features to serve you better!
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}
