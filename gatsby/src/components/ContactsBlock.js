import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const ContactsBlock = withMenuComponentBlock({
  id: 'contacts',
  Component: () => (
    <>
      <div className="columns is-multiline is-mobile">
        <div className="column column-title is-full has-text-centered is-size-1-desktop is-size-3-touch">
          <span className="brand-black-underline">Kontakt</span>
        </div>
        <div className="column column-links">
          <div className="column is-full has-text-centered is-size-3-desktop is-size-6-touch">
            <a
              className="sn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:we-are-legion@could-need-an-email.kekw"
            >
              {/* envelope svg */}
              <svg
                className="envelope"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
              </svg>
              we-are-legion@could-need-an-email.kekw
            </a>
          </div>
          <div className="column is-full has-text-centered is-size-3-desktop is-size-6-touch">
            <a
              className="sn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/we.are.legion"
            >
              {/* instagram svg */}
              <svg
                className="instagram"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              We Are Legion
            </a>
          </div>
          <div className="column is-full has-text-centered is-size-3-desktop is-size-6-touch">
            <a
              className="sn-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://raider.io/guilds/eu/blackrock/We%20are%20Legion"
            >
              {/* instagram svg */}
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="32.000000pt"
                height="32.000000pt"
                viewBox="0 0 32.000000 32.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,32.000000) scale(0.050000,-0.050000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M0 265 c0 -37 4 -55 13 -55 24 0 39 18 35 41 -3 21 1 24 24 21 19 -2
            28 2 33 17 7 23 25 27 43 9 9 -9 15 -9 24 0 18 18 36 14 43 -9 5 -15 14 -19
            33 -17 23 3 27 0 24 -21 -4 -23 11 -41 36 -41 8 0 12 18 12 55 l0 55 -160 0
            -160 0 0 -55z"
                  />
                  <path
                    d="M118 203 c-23 -25 -25 -34 -21 -90 l5 -63 -29 0 c-25 0 -29 4 -28 26
            0 18 -7 29 -22 35 -22 8 -23 6 -23 -51 l0 -60 71 0 72 0 -6 79 c-4 60 -2 84 9
            98 13 17 15 17 28 0 11 -14 13 -38 9 -98 l-6 -79 72 0 71 0 0 60 c0 57 -1 59
            -22 51 -16 -6 -23 -17 -23 -35 1 -22 -3 -26 -28 -26 l-30 0 5 64 c5 60 4 66
            -21 90 -34 33 -51 33 -83 -1z"
                  />
                  <path d="M0 165 c0 -32 2 -36 15 -25 19 16 19 34 0 50 -13 11 -15 7 -15 -25z" />
                  <path
                    d="M302 188 c-16 -16 -15 -33 3 -48 13 -11 15 -7 15 24 0 40 -1 41 -18
            24z"
                  />
                </g>
              </svg>
              We Are Legion Raider.io
            </a>
          </div>
        </div>
      </div>
    </>
  ),
});
