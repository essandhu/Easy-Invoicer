# Easy Invoicer

Allows a user to create, modify, and send invoices to an email of their choice<br/><br/>
Try it out [here!]()

## Features

- [x] **Clerk Authentication:** Login with your existing Google account or create a new account on the website itself
- [x] **Create Invoices:** Create a new invoice by specifying the recipient, invoice title, and monetary details for each invoice item
- [x] **View Invoice History:** See a list of all previous created invoices with options to send or download them
- [x] **Customer List:** Manage customers by providing their name, email, and billing address
- [x] **Bank Information:** Update your bank accounts with account name, account number, bank name, and desired currency (purely informational on each invoice, this application does not directly manage funds nor connect to an online bank account)
<br/><br/>
All invoices can be either downloaded locally or sent via email to the desired recipient.

## Tech Stack

- Next.js
- React
    - react-email
    - react-to-print
- Resend
- Drizzle
- Typescript
- Neon Postgres
- Clerk

## Acknowledgements

Thank you to the developers of each of the listed tools/frameworks used to create this project.