# MeroShare IPO Automation

This project automates the process of applying for Initial Public Offerings (IPOs) of stocks on the MeroShare web application using Cypress, a powerful automation framework. The automation is configured to run daily through GitHub Actions, checking for new IPOs and applying automatically if any are available.

## Features

- **Automated IPO Application:** Uses Cypress to automate the process of applying for IPOs on MeroShare.
- **Scheduled Execution:** Configured with GitHub Actions to run daily at 5:00 AM UTC and check for new IPOs, applying if any are found.
- **Secure Secrets Handling:** Utilizes GitHub Secrets to securely store sensitive information like login credentials.
- **Email Notifications:** Sends status updates and test videos directly to your email.
- **No-IPO Proof:** If no IPO is available, the run records `No IPO to apply` and sends a screenshot of the My ASBA/IPO page as proof.

## Setup

### Running Locally

### Prerequisites

- Node.js
- Cypress

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rajeet/meroshare_automation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup Environment Variables

   Create a `.env` file based on `.env.example` with the following variables:

   ```env
   USER_NAME="your_username"           # Your MeroShare Username
   PASSWORD="your_password"            # Your MeroShare Password
   DP="your_dp"                       # Your Depository Participants (DP) Name
   TRANSACTION_PIN=1234               # Your Transaction PIN
   CRN="your_crn"                     # Your CRN Number
   MAX_IPO_PRICE=150                  # Maximum IPO Price (Won't apply if price exceeds this)
   BANK_NAME="your_bank"              # Your Bank Name
   KITTA=10                          # Number of units to apply for (minimum 10)
   EMAIL_SERVER_ADDRESS="smtp.gmail.com"      # SMTP server host
   EMAIL_SERVER_PORT=465                        # SMTP port (465 SSL or 587 TLS)
   EMAIL_USERNAME="youremail@gmail.com"       # SMTP login username
   EMAIL_PASSWORD="your_app_password"         # SMTP password or app password
   EMAIL_FROM="youremail@gmail.com"           # Sender email
   EMAIL_TO="receiver@gmail.com"              # Recipient email (or comma-separated list)
   ```

4. Run Cypress:

   ```bash
   npm run cypress:open  # For interactive mode
   npm run cypress:run   # For headless mode
   ```

## GitHub Actions Setup

The automation is configured to run through GitHub Actions. It supports multiple user configurations and runs daily at 11:45 AM NPT.

### Configuration

1. In your GitHub repository settings, add your environment configurations as secrets:
   - Create a secret for each user's environment
   - Each secret should contain the complete environment configuration in the format shown above

2. The workflow will:
   - Run for each configured environment
   - Execute the Cypress tests
   - Upload test videos as artifacts
   - Send status notifications and videos by email

3. **Important:** If you modify or add environment variables, ensure you also update the [workflow file](.github/workflows/schedule-run.yaml) to properly handle them.

### Features of GitHub Actions Workflow

- **Multiple User Support:** Runs tests for multiple users in parallel
- **Manual Trigger:** Supports manual workflow runs through GitHub UI
- **Artifact Storage:** Stores test videos for 30 days
- **Email Integration:** Sends success/failure notifications, attaches Cypress run videos to each email, and includes run metadata (environment, repo, branch, actor, run URL).
- **Proof Attachments:** Email includes screenshots from `cypress/screenshots` and videos from `cypress/videos`.

### Automation in Action

![Demo]("./../demo.gif").
