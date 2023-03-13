import { Component, createEffect, createSignal, For } from "solid-js"
import FormHeader from "../FormHeader/FormHeader"
import { monthlyRate } from "../SelectPlan/SelectPlan"
import "./PickAddOns.scss"

const addOns = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    rate: {
      month: 1,
      year: 10,
    },
    selected: false,
  },
  {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    rate: {
      month: 2,
      year: 20,
    },
    selected: false,
  },
  {
    label: "Customizable profile",
    description: "Custom theme on your profile",
    rate: {
      month: 2,
      year: 20,
    },
    selected: false,
  },
]

export const [addOnsState, setAddOnsState] = createSignal([])

console.log(addOnsState())

const PickAddOns: Component = () => {
  createEffect(() => {})
  return (
    <div class="add-ons">
      <FormHeader
        heading="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <form class="add-ons__form">
        <For each={addOns}>
          {addOn => (
            <div class="add-ons__option">
              <input
                class="add-ons--input"
                type="checkbox"
                checked={false}
                onclick={e => {
                  setAddOnsState(prev => {
                    if (e.target.checked) return [...prev, addOn]
                    else {
                      if (addOnsState().length > 0) {
                        return prev.filter(
                          addOnState => addOnState.label !== addOn.label
                        )
                      }
                    }
                  })
                }}
              />
              <div class="add-ons__text-container">
                <label for="" class="add-ons__label">
                  {addOn.label}
                </label>
                <p class="add-ons__text">{addOn.description}</p>
              </div>
              <p class="add-ons__rate">
                {monthlyRate()
                  ? `+£${addOn.rate.month}/mo`
                  : `+£${addOn.rate.year}/yr`}
              </p>
            </div>
          )}
        </For>
      </form>
    </div>
  )
}

export default PickAddOns
