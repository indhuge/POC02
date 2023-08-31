const mailChimp = require("@mailchimp/mailchimp_marketing");

mailChimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});
export default async function addContact(req, res) {
  const { email } = req.body;
  try {
    const response = await mailChimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "pending",
      }
    );
    res.status(201).json({id: response.id})
  } catch (err) {
      res.status(500).json(JSON.parse(err.response.text));
  }
}