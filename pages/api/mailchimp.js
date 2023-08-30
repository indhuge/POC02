const mailChimp = require("@mailchimp/mailchimp_marketing");

mailChimp.setConfig({
  apiKey: "40a4d81f26479b06f7e09f1f11256e97-us21",
  server: "us21",
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