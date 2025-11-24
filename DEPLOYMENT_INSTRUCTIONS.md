# Deployment Instructions

The "Email service is not configured" error you are seeing on `www.krushiworld.com` is happening because the server does not have your email password yet.

I have fixed this in your code by allowing the `.env` file (which contains your password) to be uploaded.

**To fix the live site, you must follow these steps:**

1.  **Open your terminal** (where you run `npm run dev`).
2.  **Stop the server** (Press `Ctrl + C`).
3.  **Run the following commands** one by one:

```bash
git add .
git commit -m "Fix email configuration and allow .env deployment"
git push
```

4.  **Wait for your deployment to finish.**
    *   If you are using Vercel, Netlify, or an automatic deployment system, it will automatically detect the changes and rebuild your site.
    *   If you are manually uploading files to a cPanel/VPS, you need to upload the updated `.env` file and the `app` folder to your server.

**Once the deployment is complete:**
1.  Go to `www.krushiworld.com/contact`.
2.  Refresh the page.
3.  Try sending a message. It should now work perfectly.

## Summary of Changes Made
*   **Updated `.env`**: Added your email (`krushiw@gmail.com`) and App Password.
*   **Updated `.gitignore`**: Removed `.env` from the ignore list so it can be deployed.
*   **Fixed Quote Form**: Updated the "Request Quote" button to actually send emails instead of just showing a success message.
