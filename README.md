# iremmGokcen.github.io
# Midterm Project: Responsive Web Form with Sticky Ads

## Overview
This project is a responsive web-based registration form designed as part of a midterm assignment. The project includes dynamic data fetching, form validation, and additional features such as sticky advertisements and responsive design for different screen sizes.

## Features
### 1. **Responsive Registration Form**
- A fully responsive form where users can enter:
  - First and Last Name
  - Company
  - Email
  - Phone (with area code dropdown)
  - Subject
  - Beginner status (Yes/No)

### 2. **Dynamic Data Fetching**
- **Company, Subject, and Area Codes**: Options are dynamically fetched using a mock API provided via [Mocky.io](https://mocky.io).

### 3. **Sticky Advertisements**
- Left and right sticky ads are displayed on larger screens, with functionality to close ads when the close button is clicked.
- Ads disappear automatically on mobile devices for a better user experience.

### 4. **Form Validation**
- Client-side validation implemented with JavaScript to ensure all required fields are filled and valid.
- Email and phone number are validated:
  - Email must be in a proper format (e.g., `example@domain.com`).
  - Phone number must be a Turkish phone number.

### 5. **Responsive Design**
- Optimized for desktops, tablets, and mobile devices.
- Sticky ads are hidden on smaller screens to enhance usability.

### 6. **Submitted Page**
- On successful form submission, the user is redirected to a `submitted.html` page with a success message.
