// templates/lists.js
const templates = {
    list1: `<ul class="list-group">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>`,
    list2: `<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">A second link item</a>
    <a href="#" class="list-group-item list-group-item-action">A third link item</a>
    <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
    <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
  </div>`,
    list3: `<div class="list-group">
    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
      The current button
    </button>
    <button type="button" class="list-group-item list-group-item-action">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
  </div>`,
    list4: `<ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    <li class="list-group-item">A fourth item</li>
    <li class="list-group-item">And a fifth one</li>
  </ul>`,
    list5: `<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      A list item
      <span class="badge text-bg-primary rounded-pill">14</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      A second list item
      <span class="badge text-bg-primary rounded-pill">2</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      A third list item
      <span class="badge text-bg-primary rounded-pill">1</span>
    </li>
  </ul>`,
    list6: `<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small>And some small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-body-secondary">And some muted small print.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small class="text-body-secondary">3 days ago</small>
      </div>
      <p class="mb-1">Some placeholder content in a paragraph.</p>
      <small class="text-body-secondary">And some muted small print.</small>
    </a>
  </div>`,
    list7: `<ul class="list-group">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
      <label class="form-check-label" for="firstCheckbox">First checkbox</label>
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
      <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
      <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
    </li>
  </ul>`,
    list8: `<ul class="list-group">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
      <label class="form-check-label" for="firstRadio">First radio</label>
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
      <label class="form-check-label" for="secondRadio">Second radio</label>
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
      <label class="form-check-label" for="thirdRadio">Third radio</label>
    </li>
  </ul>`,
    list9: `<ul class="list-group">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
      <label class="form-check-label stretched-link" for="firstCheckboxStretched">First checkbox</label>
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched">
      <label class="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched">
      <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
    </li>
  </ul>`,
    // more templates can be added here
};

export default templates;
