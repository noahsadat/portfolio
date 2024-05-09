// templates/dropdowns.js
const templates = {
    dropdown1: `<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>`,
    dropdown2: `<div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown link
    </a>
  
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>`,
    dropdown3: `<!-- Example split danger button -->
    <div class="btn-group">
      <button type="button" class="btn btn-primary">Action</button>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>`,
    dropdown4: `<!-- Large button groups (default and split) -->
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Large button
      </button>
      <ul class="dropdown-menu">
        ...
      </ul>
    </div>`,
    dropdown5: `<div class="btn-group">
    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Small button
    </button>
    <ul class="dropdown-menu">
      ...
    </ul>
  </div>`,
    dropdown6: `<div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
      Dropdown form
    </button>
    <form class="dropdown-menu p-4">
      <div class="mb-3">
        <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
      </div>
      <div class="mb-3">
        <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck2">
          <label class="form-check-label" for="dropdownCheck2">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>`,
    // more templates can be added here
};

export default templates;
