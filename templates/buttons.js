// templates/buttons.js
const templates = {
    button1: `<button type="button" class="btn">Base class</button>`,
    button2: `<button type="button" class="btn btn-primary">Primary</button>`,
    button3: `<button type="button" class="btn btn-secondary">Secondary</button>`,
    button4: `<button type="button" class="btn btn-success">Success</button>`,
    button5: `<button type="button" class="btn btn-danger">Danger</button>`,
    button6: `<button type="button" class="btn btn-warning">Warning</button>`,
    button7: `<button type="button" class="btn btn-info">Info</button>`,
    button8: `<button type="button" class="btn btn-light">Light</button>`,
    button9: `<button type="button" class="btn btn-dark">Dark</button>`,
    button10: `<button type="button" class="btn btn-link">Link</button>`,
    button11: `<a class="btn btn-primary" href="#" role="button">Link</a>`,
    button12: `<button type="button" class="btn btn-outline-primary">Primary</button>`,
    button13: `<button type="button" class="btn btn-outline-secondary">Secondary</button>`,
    button14: `<button type="button" class="btn btn-outline-success">Success</button>`,
    button15: `<button type="button" class="btn btn-outline-danger">Danger</button>`,
    button16: `<button type="button" class="btn btn-outline-warning">Warning</button>`,
    button17: `<button type="button" class="btn btn-outline-info">Info</button>`,
    button18: `<button type="button" class="btn btn-outline-light">Light</button>`,
    button19: `<button type="button" class="btn btn-outline-dark btnstyle">Dark</button>`,
    button20: `<button type="button" class="btn btn-primary btn-lg">Large button</button>`,
    button21: `<button type="button" class="btn btn-primary btn-sm">Small button</button>`,
    button22: `<button type="button" class="btn btn-primary"
    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
Custom button
</button>`,
    button23: `<button type="button" class="btn btn-primary" disabled>Disabled button</button>`,
    button24: `<a class="btn btn-primary disabled" role="button" aria-disabled="true">Disabled link</a>`,
    button25: `<div class="col-lg-6 col-xxl-4 my-5 mx-auto">
    <div class="d-grid gap-2">
      <button class="btn btn-outline-secondary" type="button">Secondary action</button>
      <button class="btn btn-primary" type="button">Primary action</button>
    </div>
  </div>`,
    button26: `<div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-primary d-inline-flex align-items-center" type="button">
      Primary icon
      <img src="/files/achieve.svg" class="bi ms-1" style="width: 20px; height: 20px;">
    </button>
    <button class="btn btn-outline-secondary d-inline-flex align-items-center" type="button">
      Secondary icon
      <img src="/files/achieve.svg" class="bi ms-1" style="width: 20px; height: 20px;">
    </button>
  </div>`,
    button27: `<div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-primary" type="button" disabled="">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">Loading...</span>
    </button>
    <button class="btn btn-primary" type="button" disabled="">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  </div>`,
    button28: `<div class="d-flex gap-2 justify-content-center pb-5">
    <button class="btn btn-primary rounded-circle p-3 lh-1" type="button">
      <img src="/files/lead.svg" class="bi" style="width: 24px; height: 24px;">
      <span class="visually-hidden">Dismiss</span>
    </button>
    <button class="btn btn-outline-primary rounded-circle p-3 lh-1" type="button">
      <img src="/files/lead.svg" class="bi" style="width: 24px; height: 24px;">
      <span class="visually-hidden">Dismiss</span>
    </button>
  </div>`,
    // more templates can be added here
};

export default templates;
