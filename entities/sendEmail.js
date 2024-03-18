
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
  text: 'godzilaa',
  html: `<h3> გოძილა x კონგი: ახალი იმპერია</h3>`,
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