# Cypress type reproduction

## The issue
When you `.type()` in an element inside a shadow root, it will always [perform a `.click()`](https://docs.cypress.io/api/commands/type#When-element-is-not-in-focus), even if the element is focused.

## Scenario
I've come up with a scenario with a web component; the component contains two elements: an `<input>` and a focusable `<div>`, which is a popup.  When the input is *clicked*, the popup appears & is focused, but the same does not happen on *focus*.

While this seems like a contrived example, I'm running into a similar issue with a more complicated component in a complex codebase.

## The fix
Either check inside of shadow roots when determining when an element is focused for the purposes of `.type()`, or allow the user to disable the automatic `.click()`.
