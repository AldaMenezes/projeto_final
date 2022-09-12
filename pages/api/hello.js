// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const tokenId = req.query.tokenId;
  const image_url = "https://{your-nickname}.vercel.app/images/";
  res.status(200).json({
    name: "Cripto Space #" + tokenId,
    description: "Cripto Space é uma Coleção NFT para nossos Apoiadores",
    image: image_url + tokenId + ".jpg",
  });
}
