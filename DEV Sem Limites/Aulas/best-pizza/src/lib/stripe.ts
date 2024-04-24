import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await stripe.products.list({
    active: true,
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: price.unit_amount ? price.unit_amount : 0,
    };
  });

  return products;
}
