import { Component } from "solid-js"
import FormHeader from "../FormHeader/FormHeader"
import "./PersonalInfo.scss"

const PersonalInfo: Component = () => (
  <div class="personal-info">
    <FormHeader
      heading="Personal info"
      description="Please provide your name, email address, and phone number."
    />
    <form class="personal-info__form">
      <label class="personal-info__label" for="name">
        name
      </label>
      <input
        class="personal-info__input"
        name="name"
        type="text"
        placeholder="e.g. Stephen King"
      />
      <label class="personal-info__label" for="email">
        email address
      </label>
      <input
        class="personal-info__input"
        name="email"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
      />
      <label class="personal-info__label" for="phone">
        phone number
      </label>
      <input
        class="personal-info__input"
        name="phone"
        type="text"
        placeholder="e.g. +1 234 567 890"
      />
    </form>
  </div>
)

export default PersonalInfo
