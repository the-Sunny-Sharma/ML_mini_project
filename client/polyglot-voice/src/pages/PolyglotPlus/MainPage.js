import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div class="select-box">
        <div class="select-box__current" tabindex="1">
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="0"
              value="1"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Cream</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="1"
              value="2"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Cheese</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="2"
              value="3"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Milk</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="3"
              value="4"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Honey</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="4"
              value="5"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Toast</p>
          </div>
          {/* <img
            class="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            className="icon select-box__icon"
            viewBox="0 0 1024 1024"
          >
            <path d="M903.232 256L960 306.432 512 768 64 306.432 120.768 256 512 659.072z"></path>
          </svg>
        </div>
        <ul class="select-box__list">
          <li>
            <label class="select-box__option" for="0" aria-hidden="aria-hidden">
              Cream
            </label>
          </li>
          <li>
            <label class="select-box__option" for="1" aria-hidden="aria-hidden">
              Cheese
            </label>
          </li>
          <li>
            <label class="select-box__option" for="2" aria-hidden="aria-hidden">
              Milk
            </label>
          </li>
          <li>
            <label class="select-box__option" for="3" aria-hidden="aria-hidden">
              Honey
            </label>
          </li>
          <li>
            <label class="select-box__option" for="4" aria-hidden="aria-hidden">
              Toast
            </label>
          </li>
        </ul>
      </div>{" "}
      <div className="main_pg_wrapper">
        <div className="left-container">
          <textarea
            className="input-frame text_frame"
            placeholder="Enter text"
          />
        </div>
        <div className="mid-container">
          <button>Click</button>
        </div>
        <div className="right-container">
          <div
            className="input-frame text_frame"
            placeholder="Enter text"
          ></div>
        </div>
      </div>
    </>
  );
}
