import products from "../../../../models/products";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === "POST") {

        for (let i = 0; i < req.body.length; i++) {
            let p = new products({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                imgs: req.body[i].imgs,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                quantity: req.body[i].quantity
            })
            await p.save();
        }
        res.status(200).json({ message: "products Added Successfully" });
    }
    else {
        res.status(400).json({ message: "This method is not Allowed" });
    }
}


export default connectDb(handler);