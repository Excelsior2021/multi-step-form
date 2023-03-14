import { Component } from "solid-js"
import { setState, state } from "../../store/store"
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
        value={state.userInfo.name}
        placeholder="e.g. Stephen King"
        onchange={e =>
          setState("userInfo", { ...state.userInfo, name: e.target.value })
        }
      />
      <label class="personal-info__label" for="email">
        email address
      </label>
      <input
        class="personal-info__input"
        name="email"
        type="text"
        value={state.userInfo.email}
        placeholder="e.g. stephenking@lorem.com"
        onchange={e =>
          setState("userInfo", { ...state.userInfo, email: e.target.value })
        }
      />
      <label class="personal-info__label" for="phone">
        phone number
      </label>
      <input
        class="personal-info__input"
        name="phone"
        type="text"
        value={state.userInfo.phone}
        placeholder="e.g. +1 234 567 890"
        onchange={e =>
          setState("userInfo", { ...state.userInfo, phone: e.target.value })
        }
      />
    </form>
  </div>
)

export default PersonalInfo
