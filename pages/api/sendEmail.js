import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {

    console.log("teste123",process.env.EMAIL)
    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });
    
    try {
        const message = await client.sendAsync({
            text: "teste123",
            from: 'testeapiemail2000@gmail.com',
            to: 'testeapiemail2000@gmail.com',
            subject: 'testing emailjs',
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }
    res.status(200).json({ name: 'Send Mail' })
  }