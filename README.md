
# Exhibitor Registration Form

## Overview
The Exhibitor Registration Form is an Angular application that allows exhibitors to register their colleagues while onsite at an event. The form features a dynamic registration process, API integrations, validation requirements, and additional functionalities for user convenience.

---

## Features
- **Dynamic Event and Company Selection**: Populate the Company dropdown list based on the selected event.
- **Multi-Exhibitor Registration**:
  - Add multiple Exhibitor cards dynamically.
  - Remove existing Exhibitor cards.
- **API Integration**:
  - Fetch company lists using `/exhibitor-company-list` API.
  - Register each exhibitor using `/add-exhibitor` API.
- **Validation**:
  - Ensure all fields are mandatory.
  - Validate email addresses.
  - Ensure at least one Exhibitor card is filled to complete registration.
- **Error Handling**:
  - Display API errors for invalid `S_company` entries in the corresponding Exhibitor card.
- **Bonus Feature**:
  - Save the modal as an image using a **Save as Image** button, including the generated unique five-letter code.

---

## Development Requirements

### Prerequisites
1. **Angular Version**: 19.0.0
2. **TypeScript**: Used throughout the application.
3. **API Base URL**: `https://staging-fha-2024.occamlab.com.sg/api/`
   - **CORS Protection**: API requests are restricted to `localhost:4200` origins.

### API Endpoints
1. **Fetch Company List**: `/exhibitor-company-list`
   - Retrieves the list of companies for the dropdown.
   - Note: Replace with mock data if connection is forbidden.
2. **Register Exhibitor**: `/add-exhibitor`
   - Accepts payload for individual exhibitor registration.
   - Example Payload:
     ```json
     {
       "S_event": "event_key",
       "S_company": "company_key",
       "name": "John Doe",
       "email": "john.doe@example.com"
     }
     ```
3. **Country List**: `https://staging-fha-2024.occamlab.com.sg/public/provinces.json`

### Validation Requirements
- **Mandatory Fields**: All fields in each Exhibitor card are required.
- **Email Validation**: Only valid email addresses are accepted.
- **Minimum Requirement**: At least one Exhibitor card must be present to proceed with registration.
- **Error Handling**: Display API error messages directly in the affected Exhibitor card.

---

## Development Instructions

### Installation
1. Clone the repository.
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory.
   ```bash
   cd exhibitor-registration-form
   ```
3. Install dependencies.
   ```bash
   npm install
   ```

### Run the Application
1. Start the development server.
   ```bash
   npm start
   ```
2. Access the application at `http://localhost:4200`.

### Testing
To test the program, mock API responses may be required if the API connection is restricted.

---

## Resources
- **Figma Mockup**: [View the Mockup](http://stg.occamlab.com.sg/interview/exhibitor-reg-form_interview.fig)
- **API Documentation**: Available via the provided endpoints.
- **Country List**: [Download Here](https://staging-fha-2024.occamlab.com.sg/public/provinces.json)

---

## Limitations
- **CORS Restrictions**: API requests are only accepted from `localhost:4200`. Use mock data during development if needed.
- **API Connectivity**: If `/exhibitor-company-list` API is inaccessible, the company list can be mocked locally for development purposes.
- **Error Handling**: Errors are only triggered for invalid `S_company` values and displayed inline.

---

## Bonus Feature Implementation
- The **Save as Image** button enables users to save the modal as an image with the unique five-letter code.
- This feature relies on client-side libraries for image generation (e.g., `html2canvas`).

---
