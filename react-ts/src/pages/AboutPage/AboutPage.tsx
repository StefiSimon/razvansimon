import React from 'react';

import './AboutPage.scss';
import { collective, orientations, solo } from './constants';

const AboutPage = () => {
  return (
    <div>
      <section id="about" className="about-section section">
        <div className="content">
          <header>
            <h1 className="about-title">ABOUT r.SIMON</h1>
          </header>
          <p className="about-text-header header">biography</p>

          <div className="about-block">
            <p className="about-text">Contemporary artist</p>
            <p className="about-text">Born in Iasi, Romania, 1997</p>
            <p className="about-text">
              Graduated from "George Enescu" Fine Arts University, 2019
            </p>
          </div>

          <p className="about-text-header header">solo exhibitions</p>

          {solo.map((se) => (
            <div className="about-block">
              <p className="collection-year center">{se.year}</p>
              <p className="collection-name">{se.name}</p>
              <p className="collection-location">{se.location}</p>
            </div>
          ))}

          <p className="about-text-header header">collective exhibitions</p>
          <div className="timeline-container">
            {orientations.map((co, oIndex) => {
              let separatorClassName = '';
              if (co.isTop) {
                separatorClassName = 'vertical-top';
              } else if (co.isBottom) {
                separatorClassName = 'vertical-bottom';
              } else {
                separatorClassName = 'vertical-middle';
              }

              if (co.orientation === 'right') {
                return (
                  <div className="timeline-row">
                    <div className="collection-year left">{co.year}</div>
                    <span className={separatorClassName}></span>
                    <div className="collection-list">
                      {collective?.[co.year].map((ce, cIndex) => (
                        <>
                          <div className="right">
                            <p className="collection-name">{ce.name}</p>
                            <p className="collection-location">{ce.location}</p>
                          </div>
                          {oIndex === orientations.length - 1 &&
                          cIndex === collective?.[co.year].length - 1 ? (
                            <></>
                          ) : (
                            <span className="right"></span>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="timeline-row">
                    <div className="collection-list">
                      {collective?.[co.year].map((ce, cIndex) => (
                        <>
                          <div className="left">
                            <p className="collection-name">{ce.name}</p>
                            <p className="collection-location">{ce.location}</p>
                          </div>
                          {oIndex === orientations.length - 1 &&
                          cIndex === collective?.[co.year].length - 1 ? (
                            <></>
                          ) : (
                            <span className="left"></span>
                          )}
                        </>
                      ))}
                    </div>
                    <span className={separatorClassName}></span>
                    <div className="collection-year right">{co.year}</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
