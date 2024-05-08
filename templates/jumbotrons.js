// templates/jumbotrons.js
const templates = {
    jumbotron1: `<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <img src="/files/grow.svg" class="bi mt-4 mb-3" style="color: var(--bs-indigo); width: 100px; height: 100px;">
      <h1 class="text-body-emphasis">Jumbotron with icon</h1>
      <p class="col-lg-8 mx-auto fs-5 text-muted">
        This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
      </p>
      <div class="d-inline-flex gap-2 mb-5">
        <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
          Call to action
          <img src="/files/person-fill.svg" class="bi ms-2" style="width: 24px; height: 24px;">
        </button>
        <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
          Secondary link
        </button>
      </div>
    </div>
  </div>`,
    jumbotron2: `<div class="container my-5">
    <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
      <button type="button" class="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
      <img class="bi mt-5 mb-3" width="48" height="48" src="/files/grow.svg">
      <h1 class="text-body-emphasis">Placeholder jumbotron</h1>
      <p class="col-lg-6 mx-auto mb-4">
        This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
      </p>
      <button class="btn btn-primary px-5 mb-5" type="button">
        Call to action
      </button>
    </div>
  </div>`,
    jumbotron3: `<div class="my-5">
    <div class="p-5 text-center bg-body-tertiary">
      <div class="container py-5">
        <h1 class="text-body-emphasis">Full-width jumbotron</h1>
        <p class="col-lg-8 mx-auto lead">
          This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
        </p>
      </div>
    </div>
  </div>`,
    jumbotron4: `<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <h1 class="text-body-emphasis">Basic jumbotron</h1>
      <p class="lead">
        This is a simple Bootstrap jumbotron that sits within a <code>.container</code>, recreated with built-in utility classes.
      </p>
    </div>
  </div>`,
    jumbotron5: `<div class="p-5 mb-4 bg-body-tertiary rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Custom jumbotron</h1>
      <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
  </div>`,
    jumbotron6: `<div class="row align-items-md-stretch">
    <div class="col-md-6">
      <div class="h-100 p-5 text-bg-dark rounded-3">
        <h2>Change the background</h2>
        <p>Swap the background-color utility and add a text color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
        <button class="btn btn-outline-light" type="button">Example button</button>
      </div>
    </div>
    <div class="col-md-6">
      <div class="h-100 p-5 bg-body-tertiary border rounded-3">
        <h2>Add borders</h2>
        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
        <button class="btn btn-outline-secondary" type="button">Example button</button>
      </div>
    </div>
  </div>`,
    // more templates can be added here
};

export default templates;
