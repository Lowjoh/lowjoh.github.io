document.addEventListener('DOMContentLoaded', function() {
  // Initialize the page
  populateCategories();
  populateCompanyFilter();
  populateProductFilter();
  displayCategories();
  displayCompanies();
  displayProducts();
  displayLayers();
  setupSearch();
  setupModalClose();
});

// Populate dropdown filters
function populateCategories() {
  const categories = database.categories;
  const companyFilter = document.getElementById('company-filter');
  const productFilter = document.getElementById('product-filter');
  
  categories.forEach(category => {
    const optionCompany = document.createElement('option');
    optionCompany.value = category.id;
    optionCompany.textContent = category.name;
    
    const optionProduct = document.createElement('option');
    optionProduct.value = category.id;
    optionProduct.textContent = category.name;
    
    companyFilter.appendChild(optionCompany);
    productFilter.appendChild(optionProduct);
  });
}

function populateCompanyFilter() {
  const companyFilter = document.getElementById('company-filter');
  
  companyFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    displayCompanies(selectedCategory);
  });
}

function populateProductFilter() {
  const productFilter = document.getElementById('product-filter');
  
  productFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    displayProducts(selectedCategory);
  });
}

// Display functions
function displayCategories() {
  const categoriesGrid = document.getElementById('categories-grid');
  categoriesGrid.innerHTML = '';
  
  database.categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'grid-item';
    categoryElement.setAttribute('data-id', category.id);
    categoryElement.setAttribute('data-type', 'category');
    
    categoryElement.innerHTML = `
      <div class="item-header">
        <h3 class="item-title">${category.name}</h3>
      </div>
      <p>${category.description}</p>
    `;
    
    categoryElement.addEventListener('click', function() {
      showDetailModal('category', category.id);
    });
    
    categoriesGrid.appendChild(categoryElement);
  });
}

function displayCompanies(categoryFilter = 'all') {
  const companiesGrid = document.getElementById('companies-grid');
  companiesGrid.innerHTML = '';
  
  let companies = database.companies;
  
  if (categoryFilter !== 'all') {
    companies = companies.filter(company => 
      company.categories && company.categories.includes(categoryFilter)
    );
  }
  
  companies.forEach(company => {
    const companyElement = document.createElement('div');
    companyElement.className = 'grid-item';
    companyElement.setAttribute('data-id', company.id);
    companyElement.setAttribute('data-type', 'company');
    
    // Get category names for badges
    const categoryBadges = company.categories.map(catId => {
      const category = database.categories.find(c => c.id === catId);
      return `<span class="badge badge-primary">${category ? category.name : catId}</span>`;
    }).join('');
    
    companyElement.innerHTML = `
      <div class="item-header">
        <h3 class="item-title">${company.name}</h3>
      </div>
      <p>${company.description}</p>
      <div class="item-meta">
        <div class="item-subtitle">Founded: ${company.founded}</div>
        <div class="item-subtitle">Funding: ${company.funding}</div>
      </div>
      <div class="item-categories">
        ${categoryBadges}
      </div>
    `;
    
    companyElement.addEventListener('click', function() {
      showDetailModal('company', company.id);
    });
    
    companiesGrid.appendChild(companyElement);
  });
}

function displayProducts(categoryFilter = 'all') {
  const productsGrid = document.getElementById('products-grid');
  productsGrid.innerHTML = '';
  
  let products = database.products;
  
  if (categoryFilter !== 'all') {
    products = products.filter(product => product.category === categoryFilter);
  }
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'grid-item';
    productElement.setAttribute('data-id', product.id);
    productElement.setAttribute('data-type', 'product');
    
    // Get company name
    const company = database.companies.find(c => c.id === product.company);
    const companyName = company ? company.name : 'Unknown Company';
    
    // Get features list
    const featuresList = product.features ? product.features.map(feature => 
      `<span class="badge">${feature}</span>`
    ).join('') : '';
    
    productElement.innerHTML = `
      <div class="item-header">
        <h3 class="item-title">${product.name}</h3>
      </div>
      <div class="item-subtitle">By ${companyName}</div>
      <p>${product.description}</p>
      <div class="item-features">
        ${featuresList}
      </div>
      <div class="item-pricing">
        <strong>Pricing:</strong> ${product.pricing}
      </div>
    `;
    
    productElement.addEventListener('click', function() {
      showDetailModal('product', product.id);
    });
    
    productsGrid.appendChild(productElement);
  });
}

function displayLayers() {
  const stackContainer = document.getElementById('stack-container');
  stackContainer.innerHTML = '';
  
  database.layers.forEach(layer => {
    const layerElement = document.createElement('div');
    layerElement.className = 'stack-layer';
    layerElement.setAttribute('data-id', layer.id);
    
    // Get components for this layer
    const componentBadges = layer.components.map(compId => {
      const category = database.categories.find(c => c.id === compId);
      return `<span class="badge badge-secondary">${category ? category.name : compId}</span>`;
    }).join('');
    
    layerElement.innerHTML = `
      <h3 class="layer-title">${layer.name}</h3>
      <p>${layer.description}</p>
      <div class="layer-components">
        ${componentBadges}
      </div>
    `;
    
    stackContainer.appendChild(layerElement);
  });
}

// Detail modal functionality
function showDetailModal(type, id) {
  const modal = document.getElementById('detail-modal');
  const modalContent = document.getElementById('modal-content');
  
  modalContent.innerHTML = '';
  
  let content = '';
  
  if (type === 'category') {
    const category = database.categories.find(c => c.id === id);
    if (!category) return;
    
    // Find companies in this category
    const companies = database.companies.filter(company => 
      company.categories && company.categories.includes(id)
    );
    
    // Find products in this category
    const products = database.products.filter(product => 
      product.category === id
    );
    
    content = `
      <h2>${category.name}</h2>
      <p>${category.description}</p>
      
      <h3>Companies in this category (${companies.length})</h3>
      <div class="modal-grid">
        ${companies.map(company => `
          <div class="modal-grid-item">
            <h4>${company.name}</h4>
            <p>${company.description}</p>
          </div>
        `).join('')}
      </div>
      
      <h3>Products in this category (${products.length})</h3>
      <div class="modal-grid">
        ${products.map(product => `
          <div class="modal-grid-item">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
          </div>
        `).join('')}
      </div>
    `;
  } 
  else if (type === 'company') {
    const company = database.companies.find(c => c.id === id);
    if (!company) return;
    
    // Find categories this company belongs to
    const categories = company.categories.map(catId => 
      database.categories.find(c => c.id === catId)
    ).filter(c => c); // Remove undefined
    
    // Find products from this company
    const products = database.products.filter(product => 
      product.company === id
    );
    
    content = `
      <h2>${company.name}</h2>
      <p>${company.description}</p>
      
      <div class="company-meta">
        <div><strong>Founded:</strong> ${company.founded}</div>
        <div><strong>Funding:</strong> ${company.funding}</div>
      </div>
      
      <h3>Categories</h3>
      <div class="tags-container">
        ${categories.map(category => `
          <span class="badge badge-primary">${category.name}</span>
        `).join('')}
      </div>
      
      <h3>Products (${products.length})</h3>
      <div class="modal-grid">
        ${products.map(product => `
          <div class="modal-grid-item">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div><strong>Pricing:</strong> ${product.pricing}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  else if (type === 'product') {
    const product = database.products.find(p => p.id === id);
    if (!product) return;
    
    // Find the company
    const company = database.companies.find(c => c.id === product.company);
    const companyName = company ? company.name : 'Unknown Company';
    
    // Find the category
    const category = database.categories.find(c => c.id === product.category);
    const categoryName = category ? category.name : product.category;
    
    content = `
      <h2>${product.name}</h2>
      <div><strong>By:</strong> ${companyName}</div>
      <div><strong>Category:</strong> ${categoryName}</div>
      
      <div class="product-description">
        <p>${product.description}</p>
      </div>
      
      <h3>Features</h3>
      <div class="tags-container">
        ${product.features ? product.features.map(feature => `
          <span class="badge">${feature}</span>
        `).join('') : 'No features listed'}
      </div>
      
      <div class="product-pricing">
        <h3>Pricing</h3>
        <p>${product.pricing}</p>
      </div>
    `;
  }
  
  modalContent.innerHTML = content;
  modal.style.display = 'block';
}

function setupModalClose() {
  const modal = document.getElementById('detail-modal');
  const closeBtn = document.querySelector('.close-modal');
  
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm.length < 2) {
      // Reset all displays if search is cleared
      displayCategories();
      displayCompanies();
      displayProducts();
      return;
    }
    
    // Search categories
    const filteredCategories = database.categories.filter(category => 
      category.name.toLowerCase().includes(searchTerm) || 
      category.description.toLowerCase().includes(searchTerm)
    );
    
    // Search companies
    const filteredCompanies = database.companies.filter(company => 
      company.name.toLowerCase().includes(searchTerm) || 
      company.description.toLowerCase().includes(searchTerm)
    );
    
    // Search products
    const filteredProducts = database.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm)
    );
    
    // Update displays with filtered results
    displayFilteredResults(filteredCategories, filteredCompanies, filteredProducts);
  });
}

function displayFilteredResults(categories, companies, products) {
  // Clear and update categories
  const categoriesGrid = document.getElementById('categories-grid');
  categoriesGrid.innerHTML = '';
  
  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'grid-item';
    categoryElement.setAttribute('data-id', category.id);
    categoryElement.setAttribute('data-type', 'category');
    
    categoryElement.innerHTML = `
      <div class="item-header">
        <h3 class="item-title">${category.name}</h3>
      </div>
      <p>${category.description}</p>
    `;
    
    categoryElement.addEventListener('click', function() {
      showDetailModal('category', category.id);
    });
    
    categoriesGrid.appendChild(categoryElement);
  });
  
  // Clear and update companies
  const companiesGrid = document.getElementById('companies-grid');
  companiesGrid.innerHTML = '';
  
  companies.forEach(company => {
    const companyElement = document.createElement('div');
    companyElement.className = 'grid-item';
    companyElement.setAttribute('data-id', company.id);
    companyElement.setAttribute('data-type', 'company');
    
    // Get category names for badges
    const categoryBadges = company.categories.map(catId => {
      const category = database.categories.find(c => c.id === catId);
      return `<span class="badge badge-primary">${category ? category.name : catId}</span>`;
    }).join('');
    
    companyElement.innerHTML = `
      <div class="item-header">
        <h3 class="item-title">${company.name}</h3>
      </div>
      <p>${company.description}</p>
      <div class="item-meta">
        <div class="item-subtitle">Founded: ${company.founded}</div>
        <div class="item-subtitle">Funding: ${company.funding}</div>
      </div>
      <div class="item-categories">
        ${categoryBadges}
      </div>
    `;
    
    companyElement.addEventListener('click', function() {
      showDetailModal('company', company.id);
    });
    
    companiesGrid.appendChild(companyElement);
  });
  
  // Clear and update products
  const productsGrid = document.getElementById('products-grid');
  productsGrid.innerHTML = '';
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'grid-item';
    productElement.setAttribute('data-id', product.id);
    productElement.setAttribute('data-type', 'product');
    
    // Get company name
    const company = database.companies.find(c => c.id === product.company);
    const companyName = company ? company.name : 'Unknown Company';
    
    // Get features list
    const featuresList = product.features ? product.features.map(feature => 
      `<span class="badge">${feature}</span>`
    ).join('') : '';
    
    productElement.innerHTML = `
      <div class="item-header">
        <h3 class="item-title">${product.name}</h3>
      </div>
      <div class="item-subtitle">By ${companyName}</div>
      <p>${product.description}</p>
      <div class="item-features">
        ${featuresList}
      </div>
      <div class="item-pricing">
        <strong>Pricing:</strong> ${product.pricing}
      </div>
    `;
    
    productElement.addEventListener('click', function() {
      showDetailModal('product', product.id);
    });
    
    productsGrid.appendChild(productElement);
  });
} 