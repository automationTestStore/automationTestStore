# Automation Test Store - E2E Test Suite

Playwright and Cucumber BDD-based end-to-end test automation for the Automation Test Store application.

## Project Overview

This project contains automated test scenarios for various e-commerce workflows including:

- User login and registration
- Product search and filtering
- Add to cart functionality
- Checkout process (guest and logged-in users)
- Invoice printing
- Cart updates

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher)

## Installation

1. Navigate to the project directory:

```bash
cd AutomationTestStore
```

2. Install dependencies:

```bash
npm install
```

This will install:

- `@playwright/test` - Browser automation library
- `@cucumber/cucumber` - BDD test framework
- `playwright-bdd` - Integration layer between Playwright and Cucumber

## Project Structure

```
tests/
├── features/              # Gherkin feature files (.feature)
│   ├── login.feature
│   ├── register.feature
│   ├── searchAddToCart.feature
│   ├── searchFilterAdToCart.feature
│   ├── checkout-as-login.feature
│   ├── checkoutAsGuest.feature
│   ├── invoice.feature
│   └── updateCartE2E.feature
├── steps/                 # Step implementation files (.js)
│   ├── login.js
│   ├── register.js
│   ├── searchAdToCart.js
│   ├── searchFilterAdToCart.js
│   ├── checkout.js
│   ├── checkoutAsGuest.js
│   ├── printInvoice.js
│   └── updateCartE2E.js
├── pages/                 # Page Object Model files
│   ├── loginpage.js
│   ├── registerpage.js
│   ├── searchAdToCartPage.js
│   ├── searchFilterAdToCartPage.js
│   ├── checkoutAsLoginPage.js
│   ├── checkoutAsGuestpage.js
│   ├── printingInvoice.js
│   └── updateCartE2Epage.js
└── fixtures.js            # Shared test fixtures and setup

playwright.config.js       # Playwright configuration
cucumber.json             # Cucumber configuration
package.json              # Project dependencies
```

## Running Tests

**Note:** This project uses Playwright with BDD integration. All tests are run through Playwright, not Cucumber directly.

### Run All Tests

```bash
npx cucumber-js tests/features
```
