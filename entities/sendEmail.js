
import { createTransport } from 'nodemailer';
// Create a transporter using ProtonMail SMTP settings
const transporter = createTransport({
  service: 'yahoo',
  auth: {
    user: 'guramieliza@yahoo.com',
    pass: 'yzwaglqfomgryexp',
  }
});

export const mailOptions = {
  from: 'guramieliza@yahoo.com',
  to: ['g_elizbarashvili@cu.edu.ge', 'elizbarashvili.guram18@gmail.com'],
  subject: '!!!! ALERT !!!!',
  text: 'satestoo !!!!!!!!',
  html: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirm Button</title>
  
      <style>
          * {
              margin: 0;
              padding: 0;
          }
  
          body {
              width: 100vw;
              display: flex;
              justify-content: center;
          }
  
          .confirm-button {
              background-color: #4CAF50;
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin: 4px 2px;
              cursor: pointer;
              border-radius: 5px;
              transition: background-color 0.3s ease;
          }
  
          /* Change background color of button on hover */
          .confirm-button:hover {
              background-color: #45a049;
          }
      </style>
  </head>
  
  <body>
  
      <!-- <a href="  https://ea13-5-178-245-46.ngrok-free.app/company/FromMail"><button onclick="confirmation()" class="confirm-button">Confirm</button></a> -->
  
      <button onclick="confirmation()" class="confirm-button">Confirm</button>
  
      <script>
          function confirmation() {
              let path = "https://f93f-5-178-245-46.ngrok-free.app/company/FromMail"
              let data = {
                  email: "zuramagalashvili0@gmail.com",
              };
  
              fetch(path, {
                  method: 'POST',
                  body: JSON.stringify(data), // Convert data to JSON string
  
                  headers: {
                      'Content-Type': 'application/json' // Set content type
                  },
                  mode: "no-cors",
                  referrerPolicy: "no-referrer"
              }).then((res) => {
                  console.log(res, 'loggggg')
                  return res?.json?.();
              }).catch((err) => console.log(err, 'error'))
          }
      </script>
  </body>
  
  </html>`,
};

export async function senMailAboutKungFuPanda$(options = mailOptions) {
  return await (new Promise((resolve) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        console.error('Error:', error.message);
        console.error('Error Details:', error);
        resolve(null);
      } else {
        resolve({})
        console.log('Email sent:', info.response);
      }
    });
  })).then((status) => status ?? senMailAboutKungFuPanda$(options))
} 