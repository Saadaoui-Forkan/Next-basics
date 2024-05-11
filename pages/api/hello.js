import cookies from "@/utils/cookies";

const handler = (req, res) => {
  res.cookie('Next.js', 'API-Middleware')
  res.status(200).json({ name: "John Doe" });
}

export default cookies(handler)
