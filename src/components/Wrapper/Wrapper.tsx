import { Component, Match, Switch } from "solid-js"
import { stepState } from "../../App"
import FinishUp from "../FinishUp/FinishUp"
import Navigate from "../Navigate/Navigate"
import PersonalInfo from "../PersonalInfo/PersonalInfo"
import PickAddOns from "../PickAddOns/PickAddOns"
import SelectPlan from "../SelectPlan/SelectPlan"
import Navbar from "../Navbar/Navbar"
import "./Wrapper.scss"

const Wrapper: Component = () => (
  <div class="wrapper">
    <div class="app__navbar--desktop">
      <Navbar />
    </div>
    <div class="wrapper__main">
      <Switch>
        <Match when={stepState() === 1}>
          <PersonalInfo />
        </Match>
        <Match when={stepState() === 2}>
          <SelectPlan />
        </Match>
        <Match when={stepState() === 3}>
          <PickAddOns />
        </Match>
        <Match when={stepState() === 4}>
          <FinishUp />
        </Match>
      </Switch>
      <Navigate />
    </div>
  </div>
)

export default Wrapper
