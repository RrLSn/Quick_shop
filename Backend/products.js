import express from "express";
// import path from "path";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

let Products = [
  {
    product_id: "1895888000104236047",
    product_title: "Nike PS Dunk Low - White / Black 11.5C",
    product_description:
      "The Nike Dunk Low Retro White Black (PS) sneakers combine iconic style with modern comfort. With its timeless white and black colorway, these sneakers are versatile and perfect for any occasion. The retro design pays homage to the original Nike Dunk, while the low-top silhouette offers a contemporary vibe. Crafted with premium materials, these sneakers provide durability and support. Whether you're hitting the skate park or strolling the streets, the Nike Dunk Low Retro White Black (PS) sneakers will elevate your footwear game.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGbBDh7NR-L0w9qBciZE0Z2KMVZyabHhdUsLqNoFSd-IW0VMU2CaSLl1lBRUzY4PiOr_buTYk362FafTtW0Nda2N3xZ2Pd&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZZn2-w-DfKNBSSrtVwvSPeklf-JVDRBlttQ52m3PIXub0406cUbTQzwWFrYgfDjn8D5vRgnxLkPT6JnXpGEHvqJOlpsMV8g&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDaVHvbOqfHt3in6-G7S2OUfeAwM3sXbXgjNVQ1IU7bp1rN5JZjT-CYx45xu1Z5O4rV_ADpbIBbBKFcmeBGXnHDCJALErvNg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqJZHreIQ_8SIzV04stBW_9-_Cbs_TVyhiJJjjpibxYj1K6Eqv-nTd-SvcDglx6rai9BMev-iOjuQCpsVerxkyWZcVl_1UqQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpIPxEy6GxyL7Z3vKo4_O_R7DNYZsIt37adn6PkaXsfnsFWIo_wZZ6t7uN6XbPJMhX1Q7Xtppj67jA3OxPYLQmnF0n47ZT&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTxQEui_wSwP7FSrWmBQx8fzNdPppw6njj-Lvv-I7_fDO89vdtu1HURSZH8Gvqca06nvLLyVBWDLBkCz_asUiit0xQnWA2k&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrdThOaKFTZXZUf5ghhVrfWs0i5xOZhVleajga9ToMajOnQsGQnpPuC6N62CdNWBvGGNajlh0tSf1eqK_LPfTUO_jsDWpD7A&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-REhDKYTA1xhPy2nP7CD4IQL98m5nH4mDlRMmKFMUa8ZnYOkc3_PgX6B-RPS5vi2OiG7c6aqzJksOqFZ2Q3QWyKaqrqgV&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQrFQdBPbiomR0bO6QfoE7zf_ssLHNEQtfU5gUoVsBmqvXT9Yn9tMuTuGAYD_jfoXe1OiNMVanSYQC72sJIi7RuRuWUMMteDQ&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD5q4IJ3LaJAYd9vaaLy17Ms-JTlQBDU-Jol0bFf2F3dESNVQbMWqacuG4KCkQV5I87CmAhxei_6igoWANtFij6vXJMuB-mw&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids'",
      Size: "11½",
      Material: "Canvas, Genuine Leather, Mesh, Nylon, Polyester, Rubber",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/1895888000104236047?gl=us&hl=en&prds=pid%3A17750431743876774496",
    product_offers_page_url:
      "https://google.com/shopping/product/1895888000104236047/offers?gl=us&hl=en&prds=pid%3A17750431743876774496",
    product_specs_page_url:
      "https://google.com/shopping/product/1895888000104236047/specs?gl=us&hl=en&prds=pid%3A17750431743876774496",
    product_reviews_page_url:
      "https://google.com/shopping/product/1895888000104236047/reviews?gl=us&hl=en&prds=pid%3A17750431743876774496",
    product_num_reviews: 274,
    product_num_offers: "10+",
    typical_price_range: ["$70.00", "$89.00"],
    offer: {
      store_name: "Nike",
      store_rating: 4.5,
      offer_page_url:
        "https://www.nike.com/t/dunk-low-little-kids-shoes-tSk2Ms/CW1588-100?nikemt=true&srsltid=AfmBOopiX2LbmdSN0TztzxCoXcdZEfT8fLNbWgebJ6Se_tnYqWnO8yw0dws",
      store_review_count: 1092,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=nike.com&c=US&v=19&hl=en",
      price: "$70.00",
      shipping: "$8.00 delivery by Tue, Jan 23",
      tax: "+$8.00 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "16474445837437288542",
    product_title:
      "Nike Court Borough Low Recraft White/Pink Foam Grade School Girls' Shoes, Size: 6.5",
    product_description:
      "Run (don't walk) to your new favourite neighbourhood. Built to last, this redesigned legend uses a combination of recycled materials in the upper and outsole for a revamped classic look. A redesigned toe cap and midfoot give your feet extra room to run, jump and play longer.Synthetic leather upper made from a combination of recycled materials.Pivot point in the pattern and grooved channels in the sole to provide strategic flexibility for growing feet.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcn4Q3P4EbbTKENwnnslZQdMutqKFB5em8RtZat8zW5nFXVWuqMRmbSAxeReTFXL-cuMAvaRBSDE7xA02GOimcbDMsxiOaBg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgwD9OjWU_SigSijE7K3PbB2ZM1crRiDRNFxh1toQGK7GmDVbmd-VEeJlSNOPfhJZbpTHWK13eq1vU5-ZgwDBxrNi_Eeg8&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwZdJTIo4xn7_ywyOKnLatta68wPI2cDGmkxsIfIM19rJNOIIgTOdkmVoctIUsV-HuqwemfjD7S3VqHmdzVy7Wye3biCvO&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvNH-4oA63IWfQ7SkGLr_1Ww3N3MI7Wg9txzblPGRXJifCRkUbEILMn8QMKrHFeayhZ6np-79EeL4CqAnVEPaXhrIbr_7mCg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8YFGNtvRT12il68EPSOVUPXxVE-uMLUahBqFQBUALUzqHbEZpgbP9RVEK1Vmx5m3R3oyM-Z-giBJCuKvxwVksHd5QXstc_A&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAtU_UJgppu7m6LoGa-NJt0JzlHWsItvf3wZJgZSIuFN4buZVW58xnwKqOh-KB7b8YSFGTwtbYbZyahj4TJlwN96FAmGDskg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRn-pA1R3O84b7D9Hfgb3siAJ2UZeT4aAkHf2F3YvBbXZ1-VIpBows_cOu1Ij3CmIqCbKOz5xintlwp26BMGeIEX4sFFJAG&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSsileUBPexBxa5H_Uw4TeIdpL1qTUyN16T6DdnLYelnbBpGrThslRgKxc7sI8rYSAIRoIxtZta6PEVGot66b744ijXRq1N8w&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids', Girls'",
      Size: "6½",
      Material: "Genuine Leather, Rubber",
      Color: "White/Pink Foam",
      Features: "Recycled Materials, Fashion Sneaker",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/16474445837437288542?gl=us&hl=en&prds=pid%3A10863833567065188839",
    product_offers_page_url:
      "https://google.com/shopping/product/16474445837437288542/offers?gl=us&hl=en&prds=pid%3A10863833567065188839",
    product_specs_page_url:
      "https://google.com/shopping/product/16474445837437288542/specs?gl=us&hl=en&prds=pid%3A10863833567065188839",
    product_reviews_page_url:
      "https://google.com/shopping/product/16474445837437288542/reviews?gl=us&hl=en&prds=pid%3A10863833567065188839",
    product_num_reviews: 468,
    product_num_offers: "10+",
    typical_price_range: ["$50.00", "$67.00"],
    offer: {
      store_name: "Macy's",
      store_rating: 4.4,
      offer_page_url:
        "https://www.macys.com/shop/product/nike-big-girls-court-borough-low-recraft-casual-sneakers-from-finish-line?ID=17354952&pla_country=US&CAGPSPN=pla",
      store_review_count: 222,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=macys.com&c=US&v=19&hl=en",
      price: "$67.00",
      shipping: "Free delivery by Fri, Jan 26",
      tax: "+$6.87 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "2060730182710679218",
    product_title:
      "Nike Court Vision Low Next Nature White/Pink Women's Shoes, Size: 7",
    product_description:
      "The timeless past meets the fast-paced present with the Nike Court Vision Low. Inspired by ‘80s basketball shoes, these sneakers feature an upper made with leather, synthetic leather, and rubber that offers a retro look to your sporty rotation. Sporting old-school basketball construction and embossed Swoosh design, the Nike Court Vision Low adds a timeless touch to your on-court look. Rubber cupsole provides durability and traction.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeYP6TN3bRtwg59SGyxjMsT9Wpkk2-pz5E5aBgjO1TEoXmvVE&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzJNc-gCG6sq8YZ5ey_Va1CxWIciQKDesaH-Ns8n19nIM8ZGg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTO-C3q2p5MKbPfcUN-ZTw-wUoz261o7O_R-8n1YJjDGKC6VnlloK9GcLbA1DHUuhQn2mDVoIxxTkdhZZ7rVop3IlxOxwqZcQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuGmCTkif_1q6rMFEab1gdOS67440d-USy_6kq27J6GcQiyayXd-4anfxhD9gtxRvpSpN4SLA_LygySP55m7hNGTbEBJ6c&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzH7bFIgugDVnM8gQ6649q13PVoxNFr_ghwNrfs7GIVWQIlts&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrRMAzwGRRdqwg7gLmoVfH9_uu52UYvO9PtWfop-Z9d2b2c37w&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSo7JoheKLp5Q-H9_qSxdPcSMFCSk3TMvzOmeL7KnDo_R23V7g&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTor-1szoqcwEXgzTzbUq3cXUJ0xU0HkuL9ORO4xMhci0pdQEoS_Y49tjGvvHuJzaDu4sfY3HfMBPlpyiWnhSvW-milNwLktQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRYu2kyWxtwk_dSu7XBkqc4-OGOSVsOS4A-nsWf9WV-4BLU5MD9mlQxrvup8KBXiiVSqBFVfnciLiX_9ORvFOmNNa2Qmic_kQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTok2q0J1rmN6uniklZW0pjah6lamT5KIKuRf3ig3XfgPiYwzGqEss9YeOLYEmNlXpzzdJvniDTtRphdeyPJiDdVMo2uWTWcg&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "7",
      Material: "Genuine Leather, Rubber",
      Color: "White",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/2060730182710679218?gl=us&hl=en&prds=pid%3A14675771320048715639",
    product_offers_page_url:
      "https://google.com/shopping/product/2060730182710679218/offers?gl=us&hl=en&prds=pid%3A14675771320048715639",
    product_specs_page_url:
      "https://google.com/shopping/product/2060730182710679218/specs?gl=us&hl=en&prds=pid%3A14675771320048715639",
    product_reviews_page_url:
      "https://google.com/shopping/product/2060730182710679218/reviews?gl=us&hl=en&prds=pid%3A14675771320048715639",
    product_num_reviews: 2327,
    product_num_offers: "10+",
    typical_price_range: ["$74.99", "$87.00"],
    offer: {
      store_name: "ShopWSS",
      store_rating: null,
      offer_page_url:
        "https://www.shopwss.com/products/dh3158_102?variant=39480054677559&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqRenM05klodjcOX8au3V2iGffNclysWseaQbK1MxuqAl6rqTQaNXM&com_cvv=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$74.99",
      shipping: "Free delivery by Tue, Jan 23",
      tax: "+$7.69 est. tax",
      on_sale: true,
      original_price: "$79.99",
      product_condition: "NEW",
      buy_now_url:
        "https://www.shopwss.com/cart/39480054677559:1?srsltid=AfmBOoqRenM05klodjcOX8au3V2iGffNclysWseaQbK1MxuqAl6rqTQaNXM&com_cvv=02097201fee3ff3387b656d0f50b02952b90397e363f8d1fb7b8d0955d8bed51",
    },
  },
  {
    product_id: "9068457195677879257",
    product_title:
      "Nike Women's Court Legacy Lift Shoes, Size 10, White/Black/Orange",
    product_description:
      "The Nike Women’s Court Legacy Lift ‘White Hemp’ pairs vintage style with modern platform tooling. White tumbled leather is utilized on the upper, accented with tonal stitching and a black retro Swoosh. The low-cut collar is built with padded textile, while a strip of beige canvas wraps around the base of the upper. Anchoring the sneaker is an elevated white rubber midsole, marked with a black pinstripe and a debossed Swoosh at the heel. Underfoot, the rubber outsole features a modified herringbone tread.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsQRGKE0VHG1nK6qxMOoG_yPqP3ZcBk2OSr_Er6hcQT1XdSwH2IK92oAPbeQcFq34BEChKiwnABjOwWHpqYVCVnTcKgPaXwg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRg7R43XCfPpLRGntVG5xy2EH3K3z97FjzY2XPo_5D_xjmOFTDTziTHXrNHjwsbLB9EoDH3IclNKcTZsZSVqnPib97evQk4Lg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWy5ec2INt5T9UQVJnRuo6Z87yPdjFDGoB4ZKrNJVvOmZEn8xeg57O_8yS7XdtJt6MJjQMy5MnEi2br0v8XHn5cO2VtBUt&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQHWGT7CLPaVycgsITujYyy2BhhQzQO3rNn8wS8HpRGTwv5mPxLijSCvn30ZFnkoaIS8-FljTxeqxXB4aB7I7BkGGWqvkfe3g&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_eBFN6oQZyGm6VlgNILENp_0r6EvR9DL2x-OizHKMAQuEDRda1jEjKgIHY3zt6nlo2ghmW4A66Y3z8mC3xf3GgHy_Jm0SLA&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "10",
      Material: "Canvas, Faux Leather, Genuine Leather, Rubber",
      Features: "Platform, Slip Resistant, Fashion Sneaker",
      Color: "White",
    },
    product_rating: 4.5,
    product_page_url:
      "https://google.com/shopping/product/9068457195677879257?gl=us&hl=en&prds=pid%3A7461445708727103631",
    product_offers_page_url:
      "https://google.com/shopping/product/9068457195677879257/offers?gl=us&hl=en&prds=pid%3A7461445708727103631",
    product_specs_page_url:
      "https://google.com/shopping/product/9068457195677879257/specs?gl=us&hl=en&prds=pid%3A7461445708727103631",
    product_reviews_page_url:
      "https://google.com/shopping/product/9068457195677879257/reviews?gl=us&hl=en&prds=pid%3A7461445708727103631",
    product_num_reviews: 1223,
    product_num_offers: "10+",
    typical_price_range: ["$89.99", "$91.00"],
    offer: {
      store_name: "DICK'S Sporting Goods",
      store_rating: 4.6,
      offer_page_url:
        "https://www.dickssportinggoods.com/p/nike-womens-court-legacy-lift-shoes-22nikwcrtlgcylftbftw/22nikwcrtlgcylftbftw?sku=23000216&srsltid=AfmBOoqKaAhSg1kZb_c8TIqk38a6xyVdMV1veQXpek5VGKPOPaihitjuT7U",
      store_review_count: 107,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=dickssportinggoods.com&c=US&v=19&hl=en",
      price: "$89.99",
      shipping: "Free delivery",
      tax: "+$9.22 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "2334515098854897626",
    product_title: "Jordan 4 Retro Travis Scott Cactus Jack (F&F)",
    product_description:
      "Friends and Family release of the Travis Scott Cactus Jack Jordan 4, with Nike Air replacing the Jumpman found on the heel of the general release.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd2PuBmYHO0dq5wc2ALg89yhfim5bsGHg9O-2SZ2wqoKAPs00&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "10½",
      Style: "Casual",
    },
    product_rating: 4.4,
    product_page_url:
      "https://google.com/shopping/product/2334515098854897626?gl=us&hl=en&prds=pid%3A10863697589427933569",
    product_offers_page_url:
      "https://google.com/shopping/product/2334515098854897626/offers?gl=us&hl=en&prds=pid%3A10863697589427933569",
    product_specs_page_url:
      "https://google.com/shopping/product/2334515098854897626/specs?gl=us&hl=en&prds=pid%3A10863697589427933569",
    product_reviews_page_url:
      "https://google.com/shopping/product/2334515098854897626/reviews?gl=us&hl=en&prds=pid%3A10863697589427933569",
    product_num_reviews: 58,
    product_num_offers: null,
    typical_price_range: ["$12,095", "$12,141"],
    offer: {
      store_name: "StockX",
      store_rating: 4.1,
      offer_page_url:
        "https://stockx.com/air-jordan-4-retro-travis-scott-cactus-jack-friends-and-family?country=US&currencyCode=USD&size=10.5&srsltid=AfmBOopZUw5iQ2lnz8LlX13VC4NkN2fx2buJN_TjgIvAZLvyF3PhSxGZmOk",
      store_review_count: 41029,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=stockx.com&c=US&v=19&hl=en",
      price: "$12,182.00",
      shipping: "$114.90 delivery",
      tax: "+$1,583.66 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "11518126772533919413",
    product_title: "Nike Dunk Low GS White Black Blue",
    product_description:
      "Made for big kids, the Nike Dunk Low GS ‘Industrial Blue’ merges a traditional leather build with refreshed colors. The upper features a crisp white base with a forefoot overlay in black. Contrasting blue accents land on the signature Swoosh, heel overlay and Nike-branded back tab. Perforated detailing on the toe box offers improved breathability, while a padded low-cut collar delivers a comfortable fit. Underpinning the sneaker is a sturdy cupsole, highlighted by white sidewalls and a grippy black rubber outsole.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDAo0YILbEWJOYZpwvzt2QXKtUaLOn_YwHZio1qblfjXFre7KlLMjS0Vghd9FQp54-TVQ-8EAnsgjwud2DmmOpeUiJo7WmEQ&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsRNY1l2AWpW9AUwlz8r_sPWbeaXlzYMaH8Ckx94b5Rgx3zi_edicEKi3mp44EB9fzyzxl5tg6sW5IcUHkndPxRw68f1KLGg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlnWgSWhJlSdRnz8cckW5C7MHsLZ4v5ARrHoBG4iZN8a1mVThdgdw8eiWAErmb4XqPME8kV7xWyGzqNiUYs_lxHQIoTulRIA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcQIZusQJd8j_awq3yKba2aaTsRzZDPx9wq-lsZtSUFofwM0nhvhsZsVeMlRJHRTbbCqIES8yTbqGzzF0PRZJ7L4ecVoNbLw&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmA9HaZZ6KvZLfuTofjcOmNXnc6YXMVog9_5ELa4_QNZeN-y5UG5H-O-CsUDRAHg3GNysFrt-ABvUXdazCRlcqZBQZ9fvK&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0mdGXwdPbtyDmpwwAWRZnr35zlIlI-D_c0MNd7GxSooX3WmDoVqoA_LB0CcNka808kfZiUprxY72RnIv3P41xbEQBqnk1&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRe1Snpka19eHE9ZFB3kGUwCPIX-G5PI0Xeu7yP6Du9yj4TQRZulrWOrMnCk7igp7xIpNS_5fEugKc50iuNLTyWoW_1L96A&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS5_rlrD2z0rHM5ZZGR9eNEdjKbtmix0Rs-6HZmmxQ_WpkZZzJvx-Qe8gQRuMERkLH5pmvY5hluWgLKYQx2EK4-klw9S5YaGA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpv3RWFlTo5pk8Z7Im3MUb1JNf_wycwIJemw-J2fvaOFo_3hbK30J8eNL1wmmO7BG63JvUUNeORifmy9GgaREB57F55A7n&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6vHoosB4zMNguSEIeQ5VSR7IQdLl5Srln49WsGiVuSc3Z1S3FPiokaqWBHEe-jv8hDBYZqc9xEXjfd9HJRLLb8jGUIW3Duw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTn6cXt3itNAv7viDRDpAVYlSaRBMBplhYDHZjYiLnuqaGUH5ecMLcw-yipMPdu_IJrRY2kqkODQmdaEP8UhiX8rjymEB0o&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTyECF7eBMF-3JxfISXTynyIvw__DgYzAsd_l6asAzGrHjrFP-xHkck42yq3AYhtDfKH0ngiUTKGrUlLxA_mVkmTcfSUknwOA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMZ6queCSf1BEH82LCoFIXEVfTsn56c4b-iX9upZ4Dm6EyyZR3QLit72l6z4b9xThh-KeMCpO8jSoZbXdT8cxHTr9WoeK8&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_qyI6P7NLDpkFe8quz5fm-kv8UArCuWM7V6eS7wLr-FwvTnmLNd2-x8WUJ0vptD7yWnLf0ijcTkQaOhDrKST3SVoTK46i&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRP-jSYB7ZHwdtq2A26eeU7QJc7mrrhR8RkR_0oKILWn6f7P9BKAnhHBt9RHGfC7eFDH4UQvp7WLGgt_MmqNrWQZDwrPHbjFg&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids'",
      Size: "4½",
      Material: "Genuine Leather, Genuine Suede, Mesh, Nylon, Rubber",
      "Toe Style": "Round Toe",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/11518126772533919413?gl=us&hl=en&prds=pid%3A615175255557518607",
    product_offers_page_url:
      "https://google.com/shopping/product/11518126772533919413/offers?gl=us&hl=en&prds=pid%3A615175255557518607",
    product_specs_page_url:
      "https://google.com/shopping/product/11518126772533919413/specs?gl=us&hl=en&prds=pid%3A615175255557518607",
    product_reviews_page_url:
      "https://google.com/shopping/product/11518126772533919413/reviews?gl=us&hl=en&prds=pid%3A615175255557518607",
    product_num_reviews: 57,
    product_num_offers: "10+",
    typical_price_range: ["$77", "$90"],
    offer: {
      store_name: "GOAT",
      store_rating: 4.1,
      offer_page_url:
        "https://www.goat.com/sneakers/dunk-low-gs-industrial-blue-dh9765-104?srsltid=AfmBOoo8ng5P--hcIX7KxjKzYkx72hF04J9_YCww1vAO_X2HJsj4M7UEPZ0",
      store_review_count: 438,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=goat.com&c=US&v=19&hl=en",
      price: "$79.00",
      shipping: "$14.50 delivery by Thu, Jan 18",
      tax: "+$10.76 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "8428728454735826802",
    product_title: "Nike Wmns Dunk Low 'Black White'",
    product_description:
      "The Nike women's Dunk Low 'Black White' highlights classic color blocking on a vintage silhouette originally released in 1985. The all-leather upper features a crisp white base with contrasting black overlays and a matching black Swoosh. Nike branding lands on the heel tab and woven tongue tag in keeping with the sneaker's OG aesthetic. The low-top is supported by a durable rubber cupsole, equipped underfoot with a basketball-specific traction pattern.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSzaKWF3bL8rlUjCYa05bMX9wUikkm1wAJlw8perADTcKj_MufDCT_cD3PF1sHpSOxD8mEcuV-NBWpOdZybwKXq6fqo18-&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTIRiIPAmdAVAVo4U3Bxg6qKuZ3QLPE4b4bXG-ZqCVHfG4XugPRn2tYU4mChP0pcIJeFijKyGtcqFlXkzI43WAMDYTHHb8nVg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQj4kt0eA0kAAC65MDDoUu1FOofnWKNT1sjx23uEiksQfEaWL8s8Q0MGGLJwXUKxmtxb-NmDFbCD3oI8li93m9u53g313NL&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqY-WuvcxxJedhiU4jZ9HsqDNlVm7jFAY7J0G102koO8uL8oUufKRbHEyuX-LMUxhuRaLbVQlPFybmkB2ydHHYybsfGSbtRw&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "6½",
      Material: "Genuine Leather, Rubber",
      Color: "White/Black",
      Style: "Casual",
    },
    product_rating: 4.4,
    product_page_url:
      "https://google.com/shopping/product/8428728454735826802?gl=us&hl=en&prds=pid%3A2583994295507566604",
    product_offers_page_url:
      "https://google.com/shopping/product/8428728454735826802/offers?gl=us&hl=en&prds=pid%3A2583994295507566604",
    product_specs_page_url:
      "https://google.com/shopping/product/8428728454735826802/specs?gl=us&hl=en&prds=pid%3A2583994295507566604",
    product_reviews_page_url:
      "https://google.com/shopping/product/8428728454735826802/reviews?gl=us&hl=en&prds=pid%3A2583994295507566604",
    product_num_reviews: 3326,
    product_num_offers: "10+",
    typical_price_range: ["$115", "$134"],
    offer: {
      store_name: "Shiekh",
      store_rating: 4.3,
      offer_page_url:
        "https://www.shiekh.com/nike-dunk-low-white-black-white.html?srsltid=AfmBOopf32DbcAWQhlH7E58dm6ujMYepKKe1s6DfPRamvhBFoBVvNjPamm4",
      store_review_count: 1617,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=shiekh.com&c=US&v=19&hl=en",
      price: "$119.99",
      shipping: "$18.67 delivery by Tue, Jan 23",
      tax: "+$7.50 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "16818359053462442918",
    product_title: "Air Jordan 1 Mid White/Gym Red-Black",
    product_description:
      "Men's Nike Air 1 Mid 'gym Red Black Toe' - Hi-top sneakers Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity. Leather, synthetic leather and textile upper for a supportive feel. Foam midsole and Nike Air cushioning provide lightweight comfort. Rubber outsole with pivot circle gives you durable traction.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcjB97ciAMfY7kpX5x8j0u121TYzvvvpUPmhvl5HJnUek9qE7sDFutNjeZzOVZ2cd1PwOJRF-bazn1Ml2Akh8FJO7tpQetQA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDm1KI_tbHTOcNXj5Ea6U2ruuI8liT6Aj6vJWMX_DfVI-z0AcL-UIo6-JE4PahRd3O1ageHmuctrXs_GQK2KBXr_pvOR344Q&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu1BIvVB3UMKrUXEHe3rlP0TcYyJuzE5UFXXQtooPlM4cmfP4OBLiasbIoViZ7-fgaarO2GyJbBjBkLlyOfyB9N5wLA_u_&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmDBUxEsaxlcF_rTdy6h3mi1uPSee85L5tomjqci0LxitERRGd2u8feBYB4VNwqdkgtehSumD3TCV5WrBaoliDLtQ2I-_k&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpsV47OpNnMbVmJ-fP2e3nE_BnXmW-KvegRc2O-nbg7lQn3eeDL1JhrAEtwjyZ3NAldGmEWxiI9lJjtujd1rJZDMw-7mjr&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDyrKfGIJci12mvLbwqw5HvH0wGu5kOq6wbC_mYAlx-hjVeU1dS98H8cETazGG053Zt1Ilj020OnVWZIXanrfuFomO7M81&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP2L3etvKBQXJdOZa4Ga2SYDoSbuGnihKUnKl2MhfYyHCD7KfQbe8-jqhyLowbiqXxbMEHKRiFRww3FxJ5Rd8SHrp4zvekyQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxnKP6yPUrUwxOBVnXvv4fHQeOkKlcGQU7G0NsW5iBvI9Oh5POjK_XNors57KrVwo-iSg8XB3LTsC4LS4Jgfduc7JtEkAg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgN8YqVtkRkxQVCqkyt9uQYqmWhg0Yr5khuC-fDUILsuv1PM3n0BPBnMifN-Mrtpk_--sXgDpar2e9JkfD1sJ1PgY3DXZU&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzrhS0Byn_m2R6Rxo_k37KaGWArAHyGhm5UTFajBmSn2ScPjOjuelcoJ4NO6DmZn3HFquPH9wkSVyQOqu0SutwEKsOLrye&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9cts2yn-JFsj0oYMe9n-DJ7zNOjLqvaSr-lEVOQ-3mVNcwuW240VrKOzxuRMeXcbUk4ohjHX3svMGhuYjxcR4S9FAFxrfAA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDNePEFyjDFyyPs5DgQgIKj1RZensuDa2YBQKJS7JTCa5yhdPRNY_5QdItCVsvNI0Vuw8EOZ0V9o8D4xOgdFdAsBbY7VY6&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "9",
      Material: "Genuine Leather, Genuine Suede, Mesh, Rubber",
      "Toe Style": "Round Toe",
      Color: "Black",
      "Closure Style": "Lace-up",
      Features: "High-top",
    },
    product_rating: 4.8,
    product_page_url:
      "https://google.com/shopping/product/16818359053462442918?gl=us&hl=en&prds=pid%3A15003574408461550634",
    product_offers_page_url:
      "https://google.com/shopping/product/16818359053462442918/offers?gl=us&hl=en&prds=pid%3A15003574408461550634",
    product_specs_page_url:
      "https://google.com/shopping/product/16818359053462442918/specs?gl=us&hl=en&prds=pid%3A15003574408461550634",
    product_reviews_page_url:
      "https://google.com/shopping/product/16818359053462442918/reviews?gl=us&hl=en&prds=pid%3A15003574408461550634",
    product_num_reviews: 2236,
    product_num_offers: "10+",
    typical_price_range: ["$100", "$125"],
    offer: {
      store_name: "eBay",
      store_rating: null,
      offer_page_url:
        "https://www.ebay.com/itm/134874320535?chn=ps&mkevt=1&mkcid=28&com_cvv=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$93.00",
      shipping: "$14.95 delivery",
      tax: "+$9.53 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      buy_now_url:
        "https://pay.ebay.com/rgxo?action=create&rypsvc=true&pagename=ryp&item=134874320535&TransactionId=-1&quantity=1&com_cvv=02097201fee3ff3387b656d0f50b02952b90397e363f8d1fb7b8d0955d8bed51",
    },
  },
  {
    product_id: "10485781931923148067",
    product_title: "Nike Air Max 90 Black White (PS)",
    product_description:
      "The Nike Air Max 90 takes the original look to a new level with more comfort and flexibility, while keeping the classic Max Air cushioning you know and love. Classic Looks The '90s look has leather and synthetic leather to make it durable and easy to clean. Classic Air A Max Air unit provides the same lightweight cushioning as the original. Cushioned Comfort Padding around the ankle and soft foam cushioning combine for comfort that lasts.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJOZRW_lcjwkoJiPE80kuCpl383eBN08DjgkcBnhAbSqLKcCwjrLbWBNTpD8J76iSVehdqxLp7QS8_K8iLd3i6Ha5432uX&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTxs0rP7iM9qieJSOJy6IKbQedaz0yPdrlTdWd1KbpIx8M4degZYo5NQRsI0QD0aYOllXPvdczmzE_7AThWcLVE7vBnWYw6&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4HeCQEyPTGmhQ4iv5coP5gD_xvyemPmUX-dNxfJDDT0kPaxfE7KYx2awc_BlIsleEIlD8Jy22S10hQYX4tLvSV8Cwd6McgQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_9boPcgU6bEhD7il-xiLkpk7obOxeZK4nvV0ucO8Q5f1RJ4sK5Fj6tciqlhNw9ONDWzbmM1Yfzsq6ow-fFIq-hsSi8N8L&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZJiG_HQTzPuiXpOwLoKjFZDouwQn_wUivumM4mARFQrBubOswd5-VspE2-PUltjtkNdcxctXHsWbPE6PLan7dMyH_qghv&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT0imeSuKS_cPhDJNtdWINMOF1zDUqkGoT_43_PZ7smKQ_AkgDqT_TjlGbnD3o00eNqfrAM8OhSbmqHs7bD3CDqZLuKFO2E&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuu1715YyHvkpeOaoo0_nYObQQVSUId2LI42D-r5V8k9aadNCj1PMYN1PNpnjNWeFzUQrbZIlHooujsbdhwmTdEEbf-0HX&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6jYzcVHXxoA3bs0zFXlTth7I4rkTXHWJeEoYoR75Q6aum6fGmsjPWtbdWph69VA4y-4q7MfFlVBFCBkStb_6VjWPspTDj2g&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7tRqhzjkcDSCtuadPWyDAHjJ18ryP-Jx2hk4V5pjBgl1pAcCVr9wZJKO36_LQYUmS4n9FnHhEEyyF9cW2gaW68A5aKegA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgE4TA_k8JYtnbWD9OYvTzNHXi78wLesPfXzV1VmO57wPmNmNpanHWB-sAmCF45A8CWpYgo2ZQji6LsmGat6di8gXD2axu&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYUGEYA_4ZxHl0rDHn6W6ddpSl4ssAmDXnRzUqkKf4iYi6T1_p-Cq0l1O_JUfXc7byh6MVgo_Fg8lRhYwSwcSuN4fOzL9v&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlPiVwgDIPfwYmWIiBzxM2vhsBLOhv24RuDngfEISyKdjrRo01z0A3HxwZV3APqE3VCoK6iBzO6rpzwsWLdBt7OS4SU-co2w&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSoQ9B7Hj637vsesb6e6vUdn1SXrteAKHpfdn70jgsvpHG06-6i-sDgIStn0SwDJ0Mn0xPJ7D4rOqKJQrTbvpxnXMuNSQST&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaO44na6aVUAFw2guPgr5O0uAnabUtsgxFGtcw1TmJlCnnJpg138eZx7ZjYsUFyzXe2EdFWuXQnUDBNCwn3ZAbNWeszdim&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3fln_oSth_N-iKvza3Z_hkcGV6pEGte5gPdF8jogX_M0fUdyGAZD9kjSFvvifgy70XfJR7hlgSMSVvtoqSkL_-htiM2pK_Q&usqp=CAE",
    ],
    product_attributes: {
      "Toddler Department": "Toddler Boys'",
      Department: "Toddler",
      Size: "2½",
      Material: "Genuine Leather, Rubber",
      Color: "Black/Black/White",
      Features: "Fashion Sneaker, High-top",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/10485781931923148067?gl=us&hl=en&prds=pid%3A13078218584584146505",
    product_offers_page_url:
      "https://google.com/shopping/product/10485781931923148067/offers?gl=us&hl=en&prds=pid%3A13078218584584146505",
    product_specs_page_url:
      "https://google.com/shopping/product/10485781931923148067/specs?gl=us&hl=en&prds=pid%3A13078218584584146505",
    product_reviews_page_url:
      "https://google.com/shopping/product/10485781931923148067/reviews?gl=us&hl=en&prds=pid%3A13078218584584146505",
    product_num_reviews: 956,
    product_num_offers: "10+",
    typical_price_range: ["$79.99", "$86.00"],
    offer: {
      store_name: "Finish Line",
      store_rating: null,
      offer_page_url:
        "https://www.finishline.com/store/browse/productDetail.jsp?productId=prod2795102&brand_name=NIKE&styleId=CD6867&colorId=010",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$80.00",
      shipping: "Free delivery by Tue, Jan 16",
      tax: "+$8.20 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "17626891599282847819",
    product_title:
      "Nike Court Borough Low Recraft White/Pink Foam Preschool Girls' Shoes, Size: 1.5, Elastic",
    product_description:
      'Rubber sole Flex grooves on the outsole Made for the long haul, this "recrafted" legend uses a combination of durable materials on the upper and outsole to achieve a classic look made in a whole new way A redesigned toe box and midfoot give feet a little extra room so littles can run jump and play just a bit longer and harder in comfort. Court Borough. Made for the long haul, this "recrafted" legend uses a combination of durable materials on the upper and outsole to achieve a classic look made in a whole new way. A redesigned toe box and midfoot give feet a little extra room so littles can run, jump and play just a bit longer and harder in comfort.',
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ18r7qXKBJsJMAPh0hF0JM6BdBxIWhLpjn_AvDc135n1mrOMs7rR2Jt-eY0SBTweZKw7olwtDYBcYjTc8pn5k0bEbTTGx-&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1zVX3d7GA1Wea2jYm2t3S_8U4w4VTdKy2EMG-y2S8AzUY1vprVNfTOOa6KknFKQI_vEiX26HR4LV6MXYAtBCvDbfdk_xmoA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6OYh0Xmbyk7sHs16m9SQUoSxQK2X3pzkBFKLL92xc7vJKZlNRq918fE1bbVLaUGScumIkS9epyOnTJOGxdY6ujzrNEUZV&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTatagWhves55n-q1wSB-wbynlSWn8WDaf4vSCoYP4mwTEEQh5KI2mkyrodViJ7KDxjRY276A1aigiRu98prawrsQjvp6kb5g&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpsk44NPB8rpaYQ2tyvwbjhZ_9XXgYruNu0OflCXgKoVUyzOZ42UT0gsEHLa8KIOGK-9rn0N4kJLOtywFt8v2DN3czCkP-2A&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGZgEZbHH6Cj3RakZ5wP-w-YuuB9ImxP_FqY6DfpjLT3DQso5fYV2N1giWBenDP2xGCpAY59Tzha6xyv_vmyykbOWWUEKY&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRt5PattySR4gbY10cuHR9ijYKOR4XZiRlev5nOiKAlmyeYsmP-FmUHbBe8id63BoxaUKLFCs-FIsV0RuiNLV2yH_l74nOxtQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVTnjaECn1-MbXwknv42Fca21brkQ8XvECXF7mjNPYhqgPzG3EdZj47R3dKGHqU3bDZHvEOqSzLDR3cJcaHPTFv1lvugsIDg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJx3GFTnzGszDYhEA7koh7sbRoGN7WAS45oLWQTxqp0Wo9PJuFhfyzFE_WVCSANqFfaSKeYRZPGRVXakxAinivsncaMcSdHQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3YfdnsXunYmjBh3My-xnFpmU0qnu32ztXBw73kGFtT440OKTLJG8TyCqqTmhrktHQMUsNy57BIf4ro5tgIqRcECJ80Ccv&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKDmePc_lh-iQnuPh5gEc3MHd78QcN0Q3A5DQu-GsVaPpHTCakevCwi3XAqUp6KtYMAv9XH1nE5kKoA6zhkdnW0ZYsmkvA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRK5FNF4nM_c-QBvssoItt8WgjMH487gCjZ2-cqKN11bifBJjapoKytSADTZ47TnDvFV7iiRkFDSh7g9kc46rbontKk8OdgNw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREfsj_0wzyRQ5En2LdYTJBUh43WWTvg6NLi4bADqd1tVlpQyxEP3zzEPycGUrTe11v89v0VGYJbpcj-N7CYOkbdWFrPHzx&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAGTZeSI43P9fyqb6Z68r6giuRGd4r4-kgMCKP4oQWrEzuUXvuP96GdLtsjshhD4AtqfbgakDgrWKE3CWEN0XyTokS0u9kgQ&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids', Girls'",
      Size: "1½",
      Material: "Genuine Leather, Rubber",
      Color: "White/Pink Foam",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up, Hook and Loop",
      Style: "Casual",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/17626891599282847819?gl=us&hl=en&prds=pid%3A15826081612015079987",
    product_offers_page_url:
      "https://google.com/shopping/product/17626891599282847819/offers?gl=us&hl=en&prds=pid%3A15826081612015079987",
    product_specs_page_url:
      "https://google.com/shopping/product/17626891599282847819/specs?gl=us&hl=en&prds=pid%3A15826081612015079987",
    product_reviews_page_url:
      "https://google.com/shopping/product/17626891599282847819/reviews?gl=us&hl=en&prds=pid%3A15826081612015079987",
    product_num_reviews: 727,
    product_num_offers: "10+",
    typical_price_range: ["$57.00", "$57.00"],
    offer: {
      store_name: "Rack Room Shoes",
      store_rating: 4.6,
      offer_page_url:
        "https://www.rackroomshoes.com/p/little-kid-court-borough-low-recraft-sneaker/808482?utm_source=google&utm_medium=organicshopping&utm_campaign=nike",
      store_review_count: 0,
      store_reviews_page_url: "rackroomshoes.com",
      price: "$56.99",
      shipping: "Delivery by Fri, Jan 26",
      tax: "+$6.76 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "13218791026085855802",
    product_title: "Air Jordan 11 Retro PS 'Gratitude'",
    product_description:
      "Offered in pre-school sizing, the Air Jordan 11 Retro PS ‘Gratitude / Defining Moments’ takes its design cues from the model’s OG ‘Concord’ colorway. The classic silhouette carries a white leather upper, bolstered with a black patent leather overlay and secured with laces that feed through tonal webbing eyelets. Branding elements, highlighted by a stylized ‘23’ on the back tab and a Jumpman logo on the lateral collar, shine in a metallic gold finish. The sneaker rests on a white Phylon midsole, supported underfoot by a semi-translucent rubber outsole.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQMwRB7Xqy1ckD99M2jcdVbEnPPRqbKJ4bGu-xbDXl3UWARWJyVz0p1Rhhf4igUnEIld7HDkaowtxpUf1DDX_tQ-_G41Ba&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYtO5SpnBcOI93zIsRfUQsGv4bMk47mSOMbHEKMKxdbHNH6lmxmADACC0z2l_GhEI8wqqOKFsSQ45gPmJTawxhQweh_vhO4g&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVoBvEhKQ74EoUrc1HeVfa2jqBgyqLmBlcp9lAf9qhMpj2vuVvlb5n6EPRW64w7CSSMEZBSelJ4ynIaYtMo-_mZK-rMMu-sw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThP6Wo4Kf_hmn7dmcTQP3CUucX5gwhLV-Xv2LQN5JQQPvU97gOsWtIRnNKvKjnnOeh_WK6RL_66c0kF_jrJpcmcZIXZiwf&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8vRJuQZQ17kZj4KgIx_95MiNXtj5XZLAa8GJKZiMYc7RuSjYeHppon0Lpk68rfOp-oaECWGAxL4wDlBM_-AinLN-8neQ3wQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrQVy_EbX5kZAu87dVmem1awQf0YiIrzqFOdwyZOM3EpCqZORd9nENzzCn0q1ls-5J6grfo6l7jRKE-832oVvA0qHTjYfxVg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqanuhR4HrX3aKe2Ik37MBOLt3z-Iy6btUE-7ggovrtNu75DU8vLqkuthoRoSNwJgXabZgaVY45OmzxqT4fup67m3bKLJv&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvujmw5gAfwk8yDbTlQQg3c19ZDxYLzOZYfB6yt0-ATJHy5jlgzmk5mPH31qDmslcbqPQ7LBQCNOlnVoZf4HZFGm5rNWQa&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuaWQPH4gyd17a49iXf8Mzm8YQkwdQvk1gWb3a6DMCDAlyWmZzqQDGG4DsXH-V7KZbuoRDnQ--Z_6SW9foOPJjsm7n2bUw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSp2jFh7fPk4HTmchdLFKPQGXPVSEwvj35vJvllsL7loh8oDizQHRNuff7Pu1LOllSAAgCNWeYLCb_rfPg1lDEfwRSE-yVn&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids'",
      Size: "10½",
      Material: "Genuine Leather, Mesh, Nylon, Rubber",
      Color: "Black",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/13218791026085855802?gl=us&hl=en&prds=pid%3A5781171118656425216",
    product_offers_page_url:
      "https://google.com/shopping/product/13218791026085855802/offers?gl=us&hl=en&prds=pid%3A5781171118656425216",
    product_specs_page_url:
      "https://google.com/shopping/product/13218791026085855802/specs?gl=us&hl=en&prds=pid%3A5781171118656425216",
    product_reviews_page_url:
      "https://google.com/shopping/product/13218791026085855802/reviews?gl=us&hl=en&prds=pid%3A5781171118656425216",
    product_num_reviews: 605,
    product_num_offers: "5+",
    typical_price_range: ["$112", "$160"],
    offer: {
      store_name: "Flight Club",
      store_rating: 3.9,
      offer_page_url:
        "https://www.flightclub.com/air-jordan-11-retro-ps-gratitude-378039-170?srsltid=AfmBOopQCbaYO4CI85GuKcszSMBPDPm3PSwt89L7l7EBL_jH4T7OO9rriTE",
      store_review_count: 85,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=flightclub.com&c=US&v=19&hl=en",
      price: "$138.00",
      shipping: "$14.50 delivery by Tue, Jan 23",
      tax: "+$15.63 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "10769386332137714764",
    product_title:
      "Travis Scott x Air Jordan 1 Low OG PS 'Olive' DZ5909-106,13C",
    product_description:
      "The Travis Scott x Air Jordan 1 Low OG PS 'Olive' is a shoe tailored for young children, showcasing a blend of muted hues and the rapper's personal style. The olive green cropped reverse Swoosh is the standout feature on the lateral side of the shoe, contrasting against the two-toned black suede and off-white leather upper. The woven Nike tongue tags and back tabs that showcase Cactus Jack and Jordan Wings branding have bright crimson accents. The long-lasting rubber cupsole is equipped with an olive green outsole and aged sidewalls, providing sturdy support underfoot.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQt4vhnJwfVkqeyYnLyAlpGsuZcrFgI2U_Fg0PKZdSeZCVNtt28SYuPoPQN5Igy1NGn3NZN3IidxHNkLVPCpiJBSZAFU4hb&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcREFvUdUN8QCmT9GLKkWztuDI8dw_gRj3wAQ9IRP8iRzXNzEg-WWgsEPB3FCOvfN5n3ur3NTpJipEdQw_31GqowBzLIeEUX&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRr5gxV54RnGOWMFg0Yn2rSN2CmG-pxa6y5ST8VCKXpScPlo5UFMO4WWoEl3HCAtVsCai-xgQwOE1GDpTKi9HkhjW7RE-Obew&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNoGaAXnk7t2H1D5W5cXpKT79ztx6Lyw5Gz-tzB1m-cu0s4S5vtdM0qcLB7t71zHBRCm_72pXeg753FsP53ou4XO2D-RzY3g&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6TPuiQ0Pjttvh4HwhetSmO8rcc_yIHNrcILvj68pWxCflVDOv8rRz_N11tXCZrWUeWKJQ579l0w94D16H3rji23lUwnE-&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1mqFlMkCkQL9LDDIy0eLlVMorxD2alzBtr00TVTpcCFuuHZhnWFEQpauV_n74KVD8sW84VIv1R4fmyroGFFzh_ag6jlzg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7B0ODdP1G0MDw8qJvlkmiGS7oCEclRQX0ENDzNI74VLa90r_A7m-iR7rM4dDX4ScHy11oUL29JNqxZJ0Thy7GSCqVyh-IzQ&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7epVFy-YghBfiKAH5Sa5q4lpYG-QFeOpX1nUR1Vwdw7JYPtubcmtZpMUFto-51BV7ObRi_5KtYtJ9nj2UMi1kalgINuAHXg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTc3lLREFj-iV67K-SztFlAua3KVQmwZK2wjiRZSS7xYAjxWu7WMvBsWOWPeWInPa5QMldUeORJECopShCx13_Y7L8kZAshcg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQN2kvBxskKKhQn2VTsNuC-EV1s59R4eK_m4F76i06mz1YmvttABl8-ICLinAVbTrpF0wGVJZrbdYCi0kOYWaUzjHf_RqqM&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQO_UHR_svfdjmOOKFHE37k2ijFFBvB0dq1JuaGkN7RUw3GgxXqegygjPf4eoLpm2UAwMpP_56gVgfuKU89iaZcN6wkHKn8rg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSib-DcUv1ZpjnEnSQYekelh0VzPTLPIdJPnyXaEdmnZmpRcvmq5eHfJOtjas6UtdUMOqYYpxtEktEd34dKRUZ1nrPeu6ql6Q&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRdHrOJ7Di3sIgVtG0brWxWvwOi9wiQNxYTRlQx2Yk9t5e0tTrLVDSfZC8OUk9f2f0e9ko2RCUTeQXARlI9ivaoH9uUFrFvA&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids'",
      Size: "13",
      Material: "Genuine Leather, Genuine Suede, Nylon, Rubber",
      Color: "Sail/University Red/Black/Medium Olive",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.2,
    product_page_url:
      "https://google.com/shopping/product/10769386332137714764?gl=us&hl=en&prds=pid%3A15415599207245608826",
    product_offers_page_url:
      "https://google.com/shopping/product/10769386332137714764/offers?gl=us&hl=en&prds=pid%3A15415599207245608826",
    product_specs_page_url:
      "https://google.com/shopping/product/10769386332137714764/specs?gl=us&hl=en&prds=pid%3A15415599207245608826",
    product_reviews_page_url:
      "https://google.com/shopping/product/10769386332137714764/reviews?gl=us&hl=en&prds=pid%3A15415599207245608826",
    product_num_reviews: 25,
    product_num_offers: "5+",
    typical_price_range: ["$188", "$203"],
    offer: {
      store_name: "Bpuopn",
      store_rating: null,
      offer_page_url:
        "https://bpuopn.myshopify.com/products/travis-scott-x-air-jordan-1-low-og-ps-olive-dz5909-106/?variant=5&srsltid=AfmBOoqAmeoKvAVFtp2ZKe4Wrn9h0VA_exwJPhw86m9UCYYP9XErWSZeeDI&com_cvv=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$117.66",
      shipping: "Free delivery",
      tax: "+$12.06 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      buy_now_url:
        "https://bpuopn.myshopify.com/cart/shopify_US_8072277033172-4159143-5:1?srsltid=AfmBOoqAmeoKvAVFtp2ZKe4Wrn9h0VA_exwJPhw86m9UCYYP9XErWSZeeDI&com_cvv=02097201fee3ff3387b656d0f50b02952b90397e363f8d1fb7b8d0955d8bed51",
    },
  },
  {
    product_id: "15978141933865155995",
    product_title: "Nike Court Borough Mid 2 Big Kids' Shoes",
    product_description:
      "All day and every day, the Nike Court Borough Mid 2 is brilliantly designed to keep up with your girls' action-filled lifestyle. Enhanced with padding around the tongue and ankle, these shoes bring extra comfort for your extra-energetic kids who never say no to any adventure. Featuring leather material, the Nike Court Borough Mid 2 is durable, stylish, and easy to clean, which means it's all a win-win situation for you and your girls. Nike Court Borough Mid 2 features: Traditional laces provide a secure fit. Cupsole construction offers a classic look and feel. Grooves in the sole deliver flexibility.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyEjh0fbU6FqiGS6ePdwrY_4rwUDEq0gEwYS2LrLSe_UFCpAOwAKZoz2ATd6R23PwnNNdRsBEeI2wvvAkDQC_tkb6_KRLtHA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7f3wDi_gjYd6GxZTh-CCimptfY32Myv4xA9eHeuhJfIuseyKKVQ2qrwvsDlVw49C_qzjeNIvhWpyM3DGzojbB798Ry4vl&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmXJI-kcpnJTHRcIQQc9peN0QdWXF_7xZJ-rTge-vVLaqfCl5nyg_hS6jZukfSUxwnyx69ZKgaGDFv9sRtTu64uyVvCfEygQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQVEoYYxRy6IOiZdzpXqE8pgcmxA5RBwITee-LaI4J_IX3n853dUFT_EWGX9Vay7cAO8cYMo99oVbNiJ5yV5B2Z9X0K5ig&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSlvILSgtX85ROXCGKxUrWqh2P3MXnZ5e5yFrqIYgP1eFUqVCStogePGFIc0qMEDHwagGwqTD0se9TWNWJvkonK0Gg1Nus1rg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbjoe92lZ4_lj0nI-ypH_e4KIrf-CTuUDIr2W6Cjq2G_JBTV6ts3EiUYc3r64Km-pTIp9rcICEKEtZiFnISl-lxvu6lXqPAQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST75SSjwAgUVUqDjReEioTGUx3uvz0cJTqA3j1b-V2occk4BXvLKH1VQJze0S-MflJsynNfIQ-M1ZSkGzbCSVw49HXg-VTmA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYLzbyAhFQ6Or6NxsG7rn_CtWsPcYRcI-0i1CYzaAgfdcbourOlEd3oP-qoxhd-ggD8lIvPU_Z6W5BI61OcCrwTxfjDeLpUg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDs6wkEI3wEolHMTOsXJ5BRm-R6X1fWn_7FuMPSioohBWlAcelojCOxLpofZMjlqexmO4DjqcdoYab4arvxOzSe-E4gEWE&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzhfO1qb8g1JCfeIFUfIwGClsDzC8WXPh_349XosGoyYJo0Gvh7gE6Z_sF8SJr8BYPb8X2lyezqxNcLhYe-nBC2p3ZmNui6g&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRI_RgexPXohsKo8YqnxFB1_OXP6XUtcOpfb05m3XjuVtmZenPQedM90XsYsZ5AyIKhv-cwDGaqDyYXawLdFe9LparGv2q_Vw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQgxbKQAMbBeEwDsYm0mZAnFDY3xShRV3ffxyoD3_MQut31T2WgDvGXJ6WgqXQX05ESC1JEYI3OgEZCYt2jAbQi9AXirzSfg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAq2RcGJ9sYQLsNg3QlBlpbWrmPWlGKMtMiR599xv12SZSjaSZYYd0rNP-cjWtG6JRYi3DsHBZ0mV5wqZW6R71qNn9q-AmYQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmaHgJYqpes7U47_WcXf1mkaTRteLfae_3f-feDHp9HtwDB2M-8RlYSHZZ6OWh_7MSG6fNsWbTI5EhmuyH50Bzkweip2nK&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGPDIdIloMDWZSlc9lQeCn4SzHq10sMtE6mG-seWwdTl50OTMJzH4hDDNFD7ZdUVASP-sj4TfSc6-FjND3AjSYZamAr8MD&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids', Girls'",
      Size: "6½",
      Material: "Genuine Leather, Rubber",
      Color: "Emerald Rise/White",
      Features: "Fashion Sneaker, High-top",
      "Closure Style": "Lace-up, Hook and Loop",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/15978141933865155995?gl=us&hl=en&prds=pid%3A1558318595805828843",
    product_offers_page_url:
      "https://google.com/shopping/product/15978141933865155995/offers?gl=us&hl=en&prds=pid%3A1558318595805828843",
    product_specs_page_url:
      "https://google.com/shopping/product/15978141933865155995/specs?gl=us&hl=en&prds=pid%3A1558318595805828843",
    product_reviews_page_url:
      "https://google.com/shopping/product/15978141933865155995/reviews?gl=us&hl=en&prds=pid%3A1558318595805828843",
    product_num_reviews: 213,
    product_num_offers: "10+",
    typical_price_range: ["$53", "$75"],
    offer: {
      store_name: "Foot Locker",
      store_rating: 4.4,
      offer_page_url:
        "https://www.footlocker.com/product/~/D7782300.html?source=shoppingads&locale=en-US&SID=6936&inceptor=1&cm_mmc=paid%20search-_-google-_-g-_-PLA-_-DPA-_--_-P-_-Prospecting-_--_-na-_--_-na-_-PLA-_-na-_--_--_-",
      store_review_count: 0,
      store_reviews_page_url: "footlocker.com",
      price: "$59.99",
      shipping: "Free delivery",
      tax: "+$15.00 est. tax",
      on_sale: true,
      original_price: "$75.00",
      product_condition: "NEW",
    },
  },
  {
    product_id: "17799445152914124380",
    product_title: "Nike Court Borough Low 2 Big Kids' Shoes",
    product_description:
      "Nike court borough low 2 big kids' shoe all-star look for greater comfort during all day. Comfort and style come together in the nike court borough low 2, with a structured and firm fit with a retro basketball design so that you look like a whole star off the court. Retro look the leather material gives these shoes that retro basketball look. Flexible feeling rubber sole with flexible grooves that folds with the foot.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQDGauozznUC74vo_RTtIvHQ65G_gKwCofCI-M11lAqNy0reCEVkxebAML_W0qcxB0QdQk5Qc_hG-kJuDF-uumKB1dUoY4&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXo_jQQxW5j8s9Auuh53j9AWzw4wtW1cn4zY5YlMkSXXxza0riK3fUJf_7UCXgVlf4boapWozxdL8yX2GA-4_YZM83NFXbdA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKdxWxibdT33ROrQ0cMhSR_X-nxSwlZFjpCcqeYdx7Kahd6FBLdxAGr91D2_EFRHZd60GkX08Ax8oPETrzepv-YeCSuB3F1A&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-EsTp31kuncTg9DHqPtMwQYBLMeVnQvPTNFVCqvKD1L3fcDN-9KGeMIF0IqT8LhmBBFjzeLvRdWyrOmSJC8IO342b-MgVpw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxT6CC4Fuf_jt2l2p5fvhf3ZwnRRD0J2Bco_U8KRRe1qLMYeViYAyO2ymn3ifsQjf0cXhDiW2RHnoRvVuUfGjQ0fNnM9dOdw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBAd87-Iuu5jrFK9wEeddvq8ZFx4WxfkJgULnLXmlcuHKn2HewTo1HFmD-X3Gk-WzIEQfDdf3v9RNiBIBEA0J4zU9c84N9SQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6uIY79n4fiqaNqFAGMhA_e-Ze9sgxksVQJYxgIlhNe7WKbHkMsz2b_eZd7wKmuQ1HP4WGmrpPfEht5RkNm94INBtDnbMC&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvDt0XOUb1AhsOzJEONXAsRdXQSgFaqsbVrPwdl2szsPsGelfLzfwg5oAIz2J1HKEmzlMO07y_ryzP_6yZeOVOdwBMDpeq&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0sHm6czRWBRcp-g-oHVEmhcrv2PiUVWDU6iW7fd7zofEcUJchQPKuh0saBKuqlXOaNzDZwZc0ytiPeZPbOYLfeMzRPMaT&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcZdS8Y7LDb8YyJAtNQmDpbsWceWo3nORAaNx_cIV449SUpN1EIO7YxyMErHFs3XEfPS_ltHSyts1JZpxLXHWeR4KcQK3Y&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPuEEaaDRSVHNpAkUYMyUaBmOT9skn1nAId3kiiu4UMtGoXx3kTfqdk-Fly_a5Lz4dXtw6BZWbJAcjM3E9Lu6N6oDUd-fP&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwOwjjp2SRb8bnZLAGw4wqGWlqFTyxfTk-12uDuz407rreBhVm-HMRX3B_ZHKgIVQ2STS5v1EKMv7V9qUrHfSpMkjNwxONOA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8uCMeHNAJ1cVBAGl-g-IrDnJqxawkJ_C1hLDUJmH4BCJHXRX1cnQuXDwgg4phwRPwDjbz0v1e1fnLbliXlPPXZwai126Kqw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpDeoVIdEqV5Knoz5X9cHUOyUCgSEwALyZkiOE96D-lIoBhtu5nf3orawKVJv0aT-lMp_WvkNlPFkC_11OyI_lbAmjSS1l2w&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids', Girls'",
      Size: "6",
      Material: "Faux Leather, Genuine Leather, Mesh, Rubber",
      Features: "Slip Resistant, Fashion Sneaker",
      Color: "Grey",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/17799445152914124380?gl=us&hl=en&prds=pid%3A17136686242393846415",
    product_offers_page_url:
      "https://google.com/shopping/product/17799445152914124380/offers?gl=us&hl=en&prds=pid%3A17136686242393846415",
    product_specs_page_url:
      "https://google.com/shopping/product/17799445152914124380/specs?gl=us&hl=en&prds=pid%3A17136686242393846415",
    product_reviews_page_url:
      "https://google.com/shopping/product/17799445152914124380/reviews?gl=us&hl=en&prds=pid%3A17136686242393846415",
    product_num_reviews: 63,
    product_num_offers: "4",
    typical_price_range: ["$65", "$84"],
    offer: {
      store_name: "kickscrew.com",
      store_rating: 3.9,
      offer_page_url:
        "https://www.kickscrew.com/products/nike-court-borough-low-2-gs-photon-dust-off-noir-photon-dust-off-noir-bq5448-005?variant=40866213789891&currency=USD&srsltid=AfmBOooqx_8Je2EOy32qARs9e8p2itqUTPQjOO6s87t10qxwPPorhLTIP5I",
      store_review_count: 4043,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=kickscrew.com&c=US&v=19&hl=en",
      price: "$102.00",
      shipping: "$35.00 delivery",
      tax: "+$20.40 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "12699222943598452480",
    product_title: "Nike Court Borough Low 2 (GS) (Black / Red)",
    product_description:
      "Made for big kids, the Nike Court Borough Low 2 GS ‘Bred’ applies an iconic color scheme to a low-top silhouette inspired by vintage hoops shoes from the ‘80s. The all-leather upper features a black base with contrasting red hits on the Swoosh, perforated toe box and webbing pull tab at the heel. Classic Nike branding adorns the heel overlay and woven tongue tag. A final pop of University Red finishes the durable rubber outsole.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBaJUPBhL5hUjRqfPlA5mKCOu9E8Y5hRuKNfR-EcuUaR72vAIoqhBuwfITgSWs8EfPEEOdLnbC2MVaumRZHw-6KjiFK9_tww&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXeOkyrJIz1cgOFThTdTe4Nglo_a9_TyyPs8cOpNyNpmlDxnciuGsRE3Fq8Xyi0VsN5x4a4E9sJErc-Q7--ZrXzf4TnG352w&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlDfxR8DZs0Ky2J9L_ZXdcUG1xCcPRpcxeMejy4C2chNOv9VbNcl8nOA2tfzIB_3J0VhgY60iHmz1C7P5k-5ax-AcLq9_t&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQHZi1G8xrUTWjQsNen0mxSx60g7P1mRmL3mmLSxde1s2XdiqNqh5DBV_VWf4jJiE8ZsybPVUxFz10mIkYyb5Pe9pm13I-TEg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdVKmqwkzDQGFO1eFWaAuBqmsQm62Yuigczr-Kt6pGhxJliSWXJBXqWJe431bqZkzGhKWYI9RTITuJG_FmxAtCJrPG0DLv&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSKdPbNBlq5GqONYPuOBaE8FLAls_bpK-x_5WjUa3HaYDVPiMcns-aJUgJyJmCq1ikKDgmJyLwsb94Pb_ynmqGd5XjzA9H1g&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFEwg5W4e2_DvkWpFz4RpaQcBuFIAUt0DBoj0kkpErY7UDP9Uijbq6REsBdEZ56pGMB120lMcQhQtFgsvicUONlfXp-ZwjTw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqgkhv5wDxXOOTB4N7AsUvDnuRIweIxs6QAtV8GC1X8x5XtJUinpqKLGcAS7cMcgTKOJSvPzwdYvfYor2TTP3vZXG4CagHjQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcToH5P0qNQYYxcExOmbyK0yNY893XBTOMfEs_a3rorWeiueLNCsUHoJZBheBb-AdT89CdAOpmzmynqM6vn4caDk2J_20KPS&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQocd_2MJsyQN9Jto9ZK4-508AIF_BBz4rNqFHlsDT1kou-XiX3fHAAyP2lLLL2mcUVdPnZ4GDLToEKPVxEOL8oKODb4gKm2g&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLP7NSicIFyAdu-p4MA5XgrDR2I5d8F4ZfahAjGRPiTubUIFTCGX8oZbc8OfG06cY1eeGrU2yMJC7ywsZI_XCcHkPO07DK&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids', Boys'",
      Size: "3½",
      Material: "Genuine Leather, Mesh, Rubber",
      Color: "Black/Red",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up, Hook and Loop",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/12699222943598452480?gl=us&hl=en&prds=pid%3A16031385263745478578",
    product_offers_page_url:
      "https://google.com/shopping/product/12699222943598452480/offers?gl=us&hl=en&prds=pid%3A16031385263745478578",
    product_specs_page_url:
      "https://google.com/shopping/product/12699222943598452480/specs?gl=us&hl=en&prds=pid%3A16031385263745478578",
    product_reviews_page_url:
      "https://google.com/shopping/product/12699222943598452480/reviews?gl=us&hl=en&prds=pid%3A16031385263745478578",
    product_num_reviews: 961,
    product_num_offers: "10+",
    typical_price_range: ["$65", "$74"],
    offer: {
      store_name: "Amazon.com - Seller",
      store_rating: null,
      offer_page_url:
        "https://www.amazon.com/Nike-Court-Borough-University-BQ5448/dp/B087RR58QT?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A4KQ66F8W9T59",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$94.99",
      shipping: "Free delivery",
      tax: "+$9.74 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "8875013599540291206",
    product_title:
      "Jordan Girls AJ 1 Mid - Basketball Shoes White/Pink/Purple Size 04.5",
    product_description:
      "Pink is the new spotlight! Let your future MVPs unleash their inner fashionistas with the Jordan AJ 1 Mid. Designed to let your girls shine whether on or off the court, these silhouettes flaunt a playful pink and fuchsia colorway that is sure to turn many heads. These sneakers are not only a fashion statement but also a ‘comfort statement' and feature all the classic Jordan essentials, including the Air cushioning and rubber cupsole. Finished with a Jumpman Air design on the tongue, the Jordan AJ 1 Mid lets your girls steal the spotlight whether they go. Jordan AJ 1 Mid features: Leather offers durability and structure. Encapsulated Air-Sole unit lends premium cushioning. Wings logo stamped on the collar adds a statement detail. Stitched-down Swoosh logo reps the brand in style. Solid rubber outsole ensures excellent traction on a variety of surfaces.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_5vWQpVYxk8Wf-wEiiwmnAaIS9YbOGRaAl-cro0CuUzD-gtMO5_FlgIW5EkgYZugrlDefw8NOr5puv7NzuWKSXRfHOA4_&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVJ9kyHeWYl4e5G-2w1-PmSt0--J6cq796KhDeF7-R2TgDE0YwbVcbpJEW4RiUE--ug4zPiHg5FXjC6nBdvMiV1TQt32C-&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbbGyULfAN7DfxJ59SS5T_n6QcFTYJDdv7xOvR2__wRrHqVA-8jXknvI754wUSliYlAqq5E-eZFPMB9l71GMOzObAvMV2P&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcQr0eWQS2TC9ZRpvLsRN49vCAadf5YGLLbdT60khImZnqEhh-gjZ0JyAwInh5R1hOXE1aqJ8BF-pERoxPLSNIrSOjMMGBoA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpRZLnDC9f3k5yfQNJohvmPqXohdntTO59HcgBuqaWkaBZ_rXa_C6BOsrq-GTAloKNU7PhJR29wEotsVzZpCYnjYvf7du9AA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkaT1iLbe4Fp7xA0IW_LPppFSTO8monnui5kJU7MGaC6rKfKgZH28Dk2qm88KSdfOoGRTIIL9Ihy9-s821YvZmYbEv4QGAmQ&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS5rhH4rtEXhGwIjmdso5YkpmOSWY9WVvGZH0q-y6tOts8oCzjZSCQpf4RTKNuqieD6bRi158rL5TDahCyUhsam11_Hes9y9Q&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsyLWqbaDAwUAIW9YivpXmgouuv7G0JGqq5fY_ihNwdSIuHRki1GSG0EnnE1W6wfGOq8k5tQb4bbs5xq60MI1bo4xZf8Qo&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHgHK9byjXFXM3PKJ6Eyl-PBulkzTVxItq2r1m6jYwYE-ehuHCzYJp0CfWWvPe3Pc352hZZxT2pYpizJqg2dtQBDMw-utepA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuidM9mtxErlGVDfAcZIHPc8SzN6QKeozyzZGVOkoN1chkHndVg8Jj2yzB8Jt1HspLZ7ldotwakR23r-ejbpzq703WbQyq&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTRmiBXzh5WUJipfKoaO4s-UWAPu-E5HiFzbQcWqQDN4f6C74ssFLzL6TttdKK3HO9lFgpi1KKVCULdvGy_fXRbL_glpMDag&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuyDLodm_Iz2o5MiAtzAC3Spj_9cAh72WORakyJ1z81K3bxqueBYa4oZXrCn_-nn2olssw0b07AzrvbA91tVPQQ1n44PFx&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvo711TiTbP7xTRc4aDp-lbdP8Uqgst58x5BGb30MqRLCO00uhyQFJ_dHcBg3TiltAvpDDmElGxP1uVsNYN_hwkcV_Fa6U&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfrkx7SNC-a5I9Z1bPqsAkfXRqTaFw1SabR8VLu-04YBfa6Tm76saJDz7TDmUb1n4SQ4NmKzVupBW1WE2u3w4WIhux-BH5&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids', Girls'",
      Size: "4½",
      Material: "Genuine Leather, Rubber",
      Color: "Pink Frost/Violet Wash/White",
      "Athletic Style": "Basketball",
      "Closure Style": "Lace-up",
      Style: "Casual",
      Features: "For Athletics",
    },
    product_rating: null,
    product_page_url:
      "https://google.com/shopping/product/8875013599540291206?gl=us&hl=en&prds=pid%3A12342668659091185601",
    product_offers_page_url:
      "https://google.com/shopping/product/8875013599540291206/offers?gl=us&hl=en&prds=pid%3A12342668659091185601",
    product_specs_page_url:
      "https://google.com/shopping/product/8875013599540291206/specs?gl=us&hl=en&prds=pid%3A12342668659091185601",
    product_reviews_page_url:
      "https://google.com/shopping/product/8875013599540291206/reviews?gl=us&hl=en&prds=pid%3A12342668659091185601",
    product_num_reviews: 0,
    product_num_offers: "10+",
    typical_price_range: ["$109.99", "$117.00"],
    offer: {
      store_name: "Hibbett Sports",
      store_rating: 4.5,
      offer_page_url:
        "https://www.hibbett.com/jordan-1-mid-pink-wash-violet-frost-white-grade-school-girls-shoe/50478916.html?utm_source=google&utm_medium=organic&utm_campaign=surfaces",
      store_review_count: 6493,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=hibbett.com&c=US&v=19&hl=en",
      price: "$110.00",
      shipping: "$7.99 delivery by Tue, Jan 16",
      tax: "+$12.09 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "7553741840468211156",
    product_title: "Nike SB Dunk Low 'Fog'",
    product_description:
      "The Nike SB Dunk Low Fog channels an ultra-modern vibe with its sleek, low-top silhouette and captivating fog-like colorway. Crafted with premium leather and suede overlays, these sneakers offer durability and a touch of luxury. Featuring a foam midsole and a grippy rubber outsole, they guarantee exceptional comfort and superior traction. The Nike SB Dunk Low Fog caters to both style-conscious sneakerheads and skateboarders alike, making it a must-have addition to any sneaker collection. Step into the fog and step up your sneaker game!",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0Be3aNuvHYexWVsppcXej_fCkkYIcgNin0xJ0BtRx02exEDUy6qheBeMzhnpcevIDWwJAYwH0LTh0JZH8AcaPgrRHCJKF&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmXf4ijta46vUixdmdA_XCnmeQYSbk6ma6iS723M949xI3Q3GKV4tG3IrU-WXbCydDNExC6Iy_6W99hH26gYb7qmVSji-v&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5PoJ9BxKMFe8MZ7AWHqwjNt2QJd7kpOiIb3sBmlkfg2n_uhEhipCfvaSBXqK9Vfp3jAEWa-Ag4OmcOYkbUNDv_okB3k-paA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRmR7Dk8Yluapn-0BIOWoMqjcFj9g3GtP0ZAbIsZ39y8n4NF8E11__lOZFvfuh4FRAQMEjtgunWFppSBIcCEWA8R0MCnY10&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBWiId7YxWs5Iz6F9v_8dntTUrB6DuFCKsuJIeId4Qzd1xI9QoBiETXet5FfIKwEBq6VVmujJZsZTJXqFh5JpWhUuCIk-h&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCYjIMT5T8v48gv4bKFF9HnUrjhjPClN1Rs9w3DCyBNEypurRaXcSVO81-P1iQ4x5DbFqbPVPBZ1eGQI9zFBxJrnw7gHQ9-Q&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRCZfvfMhTZeVRCENFsRr1wZG-BgvuC4RO4Hdlpz579WWK0FJrcAD90IUtvUHhDUABE4CCm6QgOJ8N1xQFPbLnaiNhEEEGMg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHsZxAJkxnW67o72X-vfXQWNr8AMn8aH2jPLs0XFuyM2WyUorGCkjz4949ZV1CIFArmkiNyfbeI7AVYqoujc3MAm5YcG2Y&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3PPKpHNp72OOdiln0PjNEU2tPqmS4wSMP6dWgSXWELiUTwlYa3MSr-SXr670AofgDWvQ3T7woMosToYCPJQ9sKSJD57Zs&usqp=CAE",
    ],
    product_attributes: {
      Size: "6",
      Material: "Denim, Genuine Leather, Genuine Suede, Mesh, Nylon, Rubber",
      Color: "Black/Gum/Light Grey",
      "Closure Style": "Lace-up",
      Features: "High-top",
    },
    product_rating: 4.9,
    product_page_url:
      "https://google.com/shopping/product/7553741840468211156?gl=us&hl=en&prds=pid%3A14272635256282134581",
    product_offers_page_url:
      "https://google.com/shopping/product/7553741840468211156/offers?gl=us&hl=en&prds=pid%3A14272635256282134581",
    product_specs_page_url:
      "https://google.com/shopping/product/7553741840468211156/specs?gl=us&hl=en&prds=pid%3A14272635256282134581",
    product_reviews_page_url:
      "https://google.com/shopping/product/7553741840468211156/reviews?gl=us&hl=en&prds=pid%3A14272635256282134581",
    product_num_reviews: 1816,
    product_num_offers: "10+",
    typical_price_range: ["$144", "$156"],
    offer: {
      store_name: "Richard Gonzalez",
      store_rating: null,
      offer_page_url:
        "https://wolf-turkey-awjc.squarespace.com/imported-products-1/p/sneakers-products-bq6817-010",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$99.95",
      shipping: "Free delivery by Thu, Jan 18",
      tax: "+$0.00 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "13589411624323570972",
    product_title: "Nike SB Dunk Low Sandy Bodecker - 10.5",
    product_description:
      "Released in 2019, the Nike Dunk Low SB 'Sandy Bodecker' is a tribute sneaker named after Sandy Bodecker, a former Nike executive. It features a combination of grey, black, and white tones on the upper, constructed with a mix of suede and leather materials. The sneaker also includes Nike SB branding, a white midsole, and a gum rubber outsole. It represents a special release in honor of Sandy Bodecker's contributions to Nike SB.",
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlFQPf-iuQDorigPRcQ94a3XU8aYd4zdoaX5kc3SGr0U3WfzsofST_SlxqxAkA22cW-fWBLCNCwy5yrRzq1_IGOHcknQ2y9Q&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXPgaNR67vbFvHfhKb2L8n4md5CwrtvB2KOpAhfv4dXuNH9I4EkjS52oYPLX5vjdvSwb-eTri4biAQo2D6e69dZSg3ndhc&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQiEgubR5Az8KCXEzBbgwE-C5uItPpkXL9GJyy1EPVOUqeyJ8200bPIP3_Dczp-KhE5pbwH-VQbiayG1AyvrcivAQhuoCmQ&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShaxDhZHYIN_8X-HNi3rwup03fqlkSSdeBHvMq7FKxtDXFlVFo3P1jXeIIsebe-ay-pVWoTKzh-fWlGXvD-9lgpDDinelv&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQA_kBlc9VGFV60eORdJC5PtfnYseTpUFB5CHMzTb1-qgpRxDl8I9zjJYnpvv6GMtGKMR5UybW5cJ6_JWs1xcOtnKIpgED&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtIcpN72Q8Er0UyM-fWTf3BikgnxS-keUP3c1XsOanL_vgV8P0QKLb5Fl6zIcuKqDbH41tAzw299OEzjMW_N815JKo2mfv&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAlsWwZl6ajMyGgBXiXzIpQKcyChM9_vmt-MV3OX7GDdaGVJhNmg1eNGE5eIF73_SgBmK7uQAeHcZUT8SgI4Ux2_xNzJPD&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-wuCSiKhHENfDdTBGyLD6WTlCEKRsHXCxd8PDOan2DGe8_asXkUi_XOkjn4OkSNYvnNLPZPxtCPXirJm0__CrMHExGSfB&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4rydCyd99xnlrPn8OuS3HfJaZvXTeG2NPFer4AiW1Lc0NVxA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqXY32TBDJt9OVpNXARd60craqblxvjA3XjmJfxqio8Yo6DIwH&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHmGoNnawT0L6X1TEULdUdS9Qc_V-3AHzhJJjxsMpEe1I9aDRP2rufHG8NPf2Qsgvxlj27cNPqfng3fZxFIG6ECelUApev&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRD_tsaJNa1G-sTVGkPE7CYqU7yP6gOeG11AQMzPsVOZuE0xAnz00PkbXT7sn26ItfXEEAh0fpxLkd7qWij8suOnK_wNIP&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "10½",
      Material: "Denim, Genuine Leather, Genuine Suede, Rubber",
      "Toe Style": "Round Toe",
      Features: "Slip Resistant",
      Color: "White/Hyper Royal/Mean Green",
      "Closure Style": "Lace-up",
    },
    product_rating: 4.4,
    product_page_url:
      "https://google.com/shopping/product/13589411624323570972?gl=us&hl=en&prds=pid%3A3076066983683645237",
    product_offers_page_url:
      "https://google.com/shopping/product/13589411624323570972/offers?gl=us&hl=en&prds=pid%3A3076066983683645237",
    product_specs_page_url:
      "https://google.com/shopping/product/13589411624323570972/specs?gl=us&hl=en&prds=pid%3A3076066983683645237",
    product_reviews_page_url:
      "https://google.com/shopping/product/13589411624323570972/reviews?gl=us&hl=en&prds=pid%3A3076066983683645237",
    product_num_reviews: 93,
    product_num_offers: "10+",
    typical_price_range: ["$184", "$214"],
    offer: {
      store_name: "farfetch.com",
      store_rating: 4.7,
      offer_page_url:
        "https://www.farfetch.com/shopping/men/nike-x-ebay-sb-dunk-low-sandy-bodecker-sneakers-item-19418462.aspx?lang=en-US&fsb=1&size=36&storeid=11218",
      store_review_count: 56,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=farfetch.com&c=US&v=19&hl=en",
      price: "$281.00",
      shipping: "Free delivery by Wed, Jan 24",
      tax: "+$30.91 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "4817978692593593391",
    product_title: "Nike Kobe 6 Protro Reverse Grinch",
    product_description:
      "Step into the future while honoring a legend with the Nike Kobe 6 Protro Reverse Grinch. This long-awaited sneaker, flips the script on the iconic Grinch colorway. Boasting a Bright Crimson upper that mirrors the intensity of Kobe's game, this shoe is a standout piece in any collection. The snakeskin-textured upper, a nod to the Black Mamba himself, is complemented by black Swooshes and electrifying Electric Green accents. The Reverse Grinch doesn't just turn heads with its colorway; it pays homage to Kobe Bryant's enduring legacy. Electric Green laces and Kobe branding on the tongues and heels add to its unique charm. The midsole and heel counter, wrapped in Bright Crimson, maintain the shoe’s bold and cohesive look, ensuring it stands out on the court and in the streets. Set to release on December 16, 2023, for $190, the Nike Kobe 6 Protro Reverse Grinch is more than a sneaker—it's a tribute to a basketball icon. With its vivid colors and sleek design, it's a must-have for sneakerheads and basketball fans alike.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhhYdVjbvHxXKpvJOD60-SPRpOv_FxrgMEcszkfgnHy8cPv5o__e5U7zn5saH8Rv0X4ZpP70dtB5ia5T9y0UYm43ynscgo&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCYOhR4oxkFL-9nbHo-hm1FYTEmBhNpPHJapv3BStMuFabTeyEke5UdssUFZvRqtEs6rfGqI76Nh0ldf7WBRIH9kQjpHt3&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_4b5GSHTggIkC85cEnZ15JN8SLCeFTNAdQwBq71XAkgiz_avdEu5BCGpycpFH0qqnkUf9EOFVcdT3f4slzbnMHqCytviqlQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvNAI9d8iVevAQEbNGMgZKWXb1YRjHjVo432G0OB7ah9tVxVEhxQMSFgUoXXGMRN1p8yxJwv0G8GsHnnVyr61LolThO-Hcgg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTAA7hChwknDaFkTb1nXwS0eZ_kp4ANFCUQzctYR5MpvXNJTEKXXrgacAY8W8gnfBr1EBmehk7sSJg2OE6_7AwRu-odgnkUSg&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcStE2yGFt_Uk7s-fJe95uCXOPJip3h8o2skPtAnV7l167yQGbwtT_ZX-ZogAWwSI4Lzb16Qrl77El2zKZDA2czXRXjd9N9N&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEZR7a0rvl7WhQwoNf9GOHdLjJRjzRxIxycjFlJ6AMXDwy9akXe_Jf9KCoJeDvbinMFQRCdDwbSW9ndWuelmlFUs9L0MUN&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "6½",
      Material: "Mesh, Rubber",
      "Athletic Style": "Basketball",
      "Closure Style": "Lace-up",
      Style: "Casual",
      Features: "For Athletics",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/4817978692593593391?gl=us&hl=en&prds=pid%3A2380440692512860777",
    product_offers_page_url:
      "https://google.com/shopping/product/4817978692593593391/offers?gl=us&hl=en&prds=pid%3A2380440692512860777",
    product_specs_page_url:
      "https://google.com/shopping/product/4817978692593593391/specs?gl=us&hl=en&prds=pid%3A2380440692512860777",
    product_reviews_page_url:
      "https://google.com/shopping/product/4817978692593593391/reviews?gl=us&hl=en&prds=pid%3A2380440692512860777",
    product_num_reviews: 230,
    product_num_offers: "10+",
    typical_price_range: ["$310", "$324"],
    offer: {
      store_name: "Stadium Goods",
      store_rating: null,
      offer_page_url:
        "https://www.stadiumgoods.com/en-us/shopping/kobe-6-protro-reverse-grinch-20608930?size=28",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$579.00",
      shipping: "$15.00 delivery by Fri, Jan 19",
      tax: "+$59.35 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "15972175017694619941",
    product_title:
      "Nike Men's Waffle Debut Shoes in Brown, Size: 10 | FJ4195-200",
    product_description:
      "Retro gets modernized with these sleek sneaks inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colors, and the updated wedge midsole gives you an extra lift. Style, comfort, iconic Waffle outsole—this is a perfect new addition to your daily rotation. Benefits: Lifted foam midsoles give you an elevated look and all-day comfort. Soft suede overlays nod to vintage materials while textile underlays add durability. Rubber Waffle outsole adds durable traction and heritage style. Product Details: Padded collar. Exposed foam tongue. Traditional lacing. Perforations on heel.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0Y-uZ68plZKH8e7jZbrZ3xts2XL-y4ip5bYCvnQN5HNgKSO6GO3wvXYIvdooSK0h82RwjnNtZWsurgwEKqaOgkftfsGi_mw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOp2Yvt36c7H_PIueGPuMSazSW3p1nkygY2AFv441z4ZsTkktGiiXpvrQlIBpUMT8wK9VGUT7jpGHCDV8dV9UGCDQ1jL1CNg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS2nXVMlqnBg_dYUaAXcLPIe-edhq123X4YOeSSQdTUEiXVeVEY&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2v8ZCgcRC-XYw4JcygQVfc3OR9GVKYft1o931xNa0xFcAVAU&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyzh383q-5sUH1odAKW9dvPC_20woQb1RmsIdVkvmqUUjpHsZNFQCfrNCTiHVbKS-09U_4BRScwgwRUrqdsXKFnq5EcpEA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROzln5W9zq5OKhhSlO73uxJCWfE46686OO3_hj6eaGa5hzPMU&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS1OB_ish_lNq1z5UObOcseCjkHglVkj9wARSi8du0HW8SU6bDX&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAY0TRwlRIPNDHosojStnk0gMbGvgxuUyDraQQxyK438E23mY1&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "10",
      Material: "Canvas, Genuine Leather, Genuine Suede, Mesh, Nylon, Rubber",
      Color: "Brown",
      Features: "Fashion Sneaker",
    },
    product_rating: 4.5,
    product_page_url:
      "https://google.com/shopping/product/15972175017694619941?gl=us&hl=en&prds=pid%3A14745070781450971125",
    product_offers_page_url:
      "https://google.com/shopping/product/15972175017694619941/offers?gl=us&hl=en&prds=pid%3A14745070781450971125",
    product_specs_page_url:
      "https://google.com/shopping/product/15972175017694619941/specs?gl=us&hl=en&prds=pid%3A14745070781450971125",
    product_reviews_page_url:
      "https://google.com/shopping/product/15972175017694619941/reviews?gl=us&hl=en&prds=pid%3A14745070781450971125",
    product_num_reviews: 198,
    product_num_offers: "4",
    typical_price_range: ["$80.00", "$80.00"],
    offer: {
      store_name: "Nordstrom",
      store_rating: 4.6,
      offer_page_url:
        "https://www.nordstrom.com/s/7508059?color=HEMP%2F+ORANGE%2F+SAND+DRIFT&size=10&country=US&currency=USD&utm_source=google&utm_medium=organic&utm_campaign=seo_shopping&utm_channel=low_nd_seo_shopping&srsltid=AfmBOorFmFijZnIl4Y8UVMYP7pOT504xm5jw0AWHEb-ftOsjiSyN-th9m8w",
      store_review_count: 172,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=nordstrom.com&c=US&v=19&hl=en",
      price: "$80.00",
      shipping: "Free delivery by Fri, Jan 19",
      tax: "+$8.20 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "8270293482036918029",
    product_title:
      "Nike Court Vision Low Next Nature White/Black Men's Shoes, Size: 11.5",
    product_description:
      "In love with the classic look of '80s basketball but have a thing for the fast-paced culture of today's game? Then the Nike Court Vision Low is the sneaker for you. A classic remixed with at least 20% recycled materials by weight, its crisp upper and stitched overlays keep the soul of the original style. The plush, low-cut collar keeps it sleek and comfortable for your world.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQD-2OcH4wtzgfKYmJV_5p02OqQ9gSYcTTAM7-Sx31DIi4Azk4&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_1acisAg8JdIb2MfF5s9b6YHbJWPg-VnCQK7mKjZdSMVFKkGf5ZTpJkqFrQBFauwqd9EN_NlVN6dKZAaeCwo4WBHxSZvp&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnRLkMZoqV43-KlS2phbwPWyr4k_ceLveY6aGBgQkXbFWj6Cs3ZpImQmFHcAcUmTpZPM6tD6NVWTu3EYcWU_ljUrACKH4U&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmWM-VZUEW8HaBuvMZDrG5LyFH3lLNbnDqb5TM8WZmYGeuj8KyD0kQg-ZKO91glOb2ZboIyjcJE8x0To_5yCNkeSyCScOS&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTUX5Zy3adUJoYwM7puZTUwQmWaUQEeCVYGvF6BECzTmNEjk5oZxNDaVgzm2HzGWY1urjerrWBygWmYtx_9HMNog4HjTN0e&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRs-KQVRQD6X_y-c3KBXe_A4bl9C2x7NJynJWONyINZKn8EMGuHR3U7zdAe26sTkHB93ED8S5dPhw18Y96nMKTW5pnlnbvP&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToQCSFZl7JHfeUiRRtGl0viHuFepHsyLidQHtHBPQ-JKs44M4xr8HCRAoA_ffelfqb-0JrF9coeb2L2O27Dg_kQUbjK4ny&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRI2t1dbWinL8tEGT7zJVRdnGFRpmAedtNkeeHDqkG5gCAMFq_7LRZgHhfhcTWF15Y-52xUtmrtLYavE2UUx_90Qen95gphJA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTV9bNpCOofg-acjSWxjNOtXwKwjBM8Yg3yLKTjyLr_prjZ2wPWQzvfT6iI9i-SnswAUJ0A25dK5BEE_pbSy3GOvTqvrISHPA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTN7wXfquzxgwACH5tr_X1uVpvjVq7ArT8iuZvYoFcmoDTQx08KOIxCPAHhFBXjAsKmuhS1lHF9pJVizJhYp7LSC3VAHY-3&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXLgVHdytaE8gxkoVzMizevVDrv8H2MzNvyip_fy5Q-4nZSsi9raeTYdxN_yVSkKFBOyutfRyp3JiomZRRwXzGHD2NAJin-A&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "11½",
      Material: "Genuine Leather, Rubber",
      Color: "White",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/8270293482036918029?gl=us&hl=en&prds=pid%3A1270847884745533864",
    product_offers_page_url:
      "https://google.com/shopping/product/8270293482036918029/offers?gl=us&hl=en&prds=pid%3A1270847884745533864",
    product_specs_page_url:
      "https://google.com/shopping/product/8270293482036918029/specs?gl=us&hl=en&prds=pid%3A1270847884745533864",
    product_reviews_page_url:
      "https://google.com/shopping/product/8270293482036918029/reviews?gl=us&hl=en&prds=pid%3A1270847884745533864",
    product_num_reviews: 4011,
    product_num_offers: "10+",
    typical_price_range: ["$60.00", "$80.00"],
    offer: {
      store_name: "DSW",
      store_rating: 4.7,
      offer_page_url:
        "https://www.dsw.com/en/us/product/nike-court-vision-low-next-nature-sneaker---mens/561559?activeColor=101&cm_mmc=CSE-_-SAG",
      store_review_count: 39,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=dsw.com&c=US&v=19&hl=en",
      price: "$79.96",
      shipping: "Free delivery by Wed, Jan 24",
      tax: "+$8.20 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "17150428759418938747",
    product_title:
      "Men's Air Jordan 1 Mid Shoes in Yellow, Size: 18 | DQ8426-701",
    product_description:
      "Air Jordan 1 Mid Men's Shoes Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity. Leather, synthetic leather and textile upper for a supportive feel. Foam midsole and Nike Air cushioning provide lightweight comfort.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5tcUldTmOG2Rruep6KEpoOIfmh6VdmRejvAz47G8b7Iw6YjVkqKXUOqKyhSWqm8veXtqwf3tjk7ApsB2iZUi_igQA_5f2&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQjwxd5U4mRdy6ataVdRbJ1GsCSlm1qIzA0an9BZwZIQW0ZxKeeVtJxl1NodpCMjZtOR1tcDcXoLndsIorf2Bn7-4vBtya&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTTWM9jvXrE6WQmjTg15RBvAzhH9IQ6RsEskNMOwq6_TygpymimR6kGRP4xsWJIHE-d39hg8xqfxguJGBfpMGvpgmk4di8v&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRH-k0mmpc7OfjEF5Rc-ijNOWaqA6lIQhIe05Iihk-2VHKwwSYll7PuxRRsFbQu4vKZoryQ_GHMuRtzQl5DpZgtWD2SBqj0hw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyVzjaw2ZirXO3C7B0ZbEP1pg4aE_UQq8i1aRVUuXV8TpjoWUYVBO2w5l8GHnKyUz1cPMi7XIwlZku6M5a1Oa9zzUNAt6W-w&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_J6OKZzWJxExhcBHBhmNf6NRgAfkAXpvS8bdnh08hGzyuQuCPIfyFW429uIsXh0CLl4kwATVTfj34Kb2TxRPFQ6KK_Mc2Mw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbOaH9gnz_009LiM25cvuhM2cYRIZonm5Yt6DKo8EnKlpljrQ3Jd0JKYyzAsSxNwIkUd7JyOqx6nZbEdKoUIU4EqBdmJhrrg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKnR8T_E1wAfdg4vjTJ5IiVJ2jHENuacM5EnmY3-_H_F1L1GEUSvdJnu4gKoIxMrgKUvVImrM5rd23DFmguozcDEQKVdXbFw&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRS4nGDS4_ZZw4sa09Ccag8OGXolVLoT2YKD2nIMhGYmRXz7FwyLmf5Buc2PSVGOAuu52ITl1NxgXMQRUmMSD7__LoD2K6Zg&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "18",
      Material: "Genuine Leather, Rubber",
      Color: "Yellow",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.8,
    product_page_url:
      "https://google.com/shopping/product/17150428759418938747?gl=us&hl=en&prds=pid%3A16358030302078613410",
    product_offers_page_url:
      "https://google.com/shopping/product/17150428759418938747/offers?gl=us&hl=en&prds=pid%3A16358030302078613410",
    product_specs_page_url:
      "https://google.com/shopping/product/17150428759418938747/specs?gl=us&hl=en&prds=pid%3A16358030302078613410",
    product_reviews_page_url:
      "https://google.com/shopping/product/17150428759418938747/reviews?gl=us&hl=en&prds=pid%3A16358030302078613410",
    product_num_reviews: 937,
    product_num_offers: null,
    typical_price_range: ["$125.00", "$268.99"],
    offer: {
      store_name: "Nike",
      store_rating: 4.5,
      offer_page_url:
        "https://www.nike.com/t/air-jordan-1-mid-mens-shoes-tXSJ73/DQ8426-701?nikemt=true&srsltid=AfmBOorIUxbNNdS2sEVRTMSGa3SLYU1-H36jZSdmt4cWeZ2S6KzQRNsKcto",
      store_review_count: 1092,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=nike.com&c=US&v=19&hl=en",
      price: "$125.00",
      shipping: "$8.00 delivery by Tue, Jan 23",
      tax: "+$13.63 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "16275412122222456462",
    product_title: "Jumpman MVP Black/University Red / 7",
    product_description:
      "With leather, textile and nubuck details, these sneakers honor one legacy while encouraging you to cement your own. Upper is a mix of AJ6 and AJ7 elements: the tongue top and modified overlay reference the AJ6 while the semi-bootie lining homages the AJ7. Embroidered Nike Air heel logo references the AJ6 and the molded heel detail comes from the AJ8. Outsole design is a nod to the AJ6. Encapsulated Nike Air-Sole unit provide lightweight cushioning.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREISV0QHRC2vKCWxhCgh_8ghqLxRuSMl-yRhPijRVPFUWsC_6W0rYwj_JQi3_kYaJXeUMgQ5LxGsDTWbYbuJirH1USRJh3&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTh6hyMVhwrPii-r9i2YileztAOgLmLn7eMB6g5oF3pZX6wLRlwgVrIzJwuCdCnGBHFGzoeQ64kU-avHc7I7LbkFu6f27MgbA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_OJoYfTqhctuXkh9oT-dBmZI8xlsYCSTrZEOD_OBe9Yjj8IF3Fe-0nsHOhgQY8nYOZ-H4Xxpz9r16VmAlYJCNH4Y0seJNlw&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdPXYjmuN6utKD5FM9jC3z9Fa7d--M0Zf-EUzQOmLoCenFWyQF&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9brEgXgFVAyBZXhKDeYR-iT1Luq4sVQ7AwSB16KatpIpJXi8iBJpHVpBVZvpRlCBtbeg-yrOI7jQCghqdni2EHwkgAibYqQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtJJdTyCzNSFDvo57nHz1-gVc0JEGs8_Arr3rO5YDLxghR1LSBCBL_GUIeXGtQVC4yEaFappFOWCQrYYyI59WL_b4kWN25tA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxk-0uIDnCD6jZpjZ6za9KpuJKi5PPv7wW5cUjx-TlNt6luN6c&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdcjy-55iS8MAMfmzvB-VF9_zVQ9nJZnA2D239lKXCdseoprTuZOnB6OyW23R-9GKHTxv6k4-8_Civy2mhNijucc8Bjm0pSw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTShb-k2A8Qm7a8IZqJteyX-kM4az4CtKjGeW5xu3KrkJUmAnRY2cxy26ROLQl7jvJz5YA7TqNzjPCDFde7G24vikiv2c13CA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrpQ_uUpgDoDbpA_W7giYnrbgOEOxbUhzPCDxfU3ToQ7vsMFtdt701D4XGgMTRZP8HKd6lb2f0cW2IfHMjWow11DtEkwf9&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtewKXxuH-NsqsTJf_nbILvXBPVzYV4aCNJCWnZ64VAj-uaw4&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGXSGU30Fx-pW-7Vkz6Pd_b3qw9wMBGlH1EsdYUWmbi8KvgWPocBnfnHoBBVfCF68e-JXzOV3dUtzdFUptLcbehzR_iBb1lg&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRachCsId6BRML9whUTlmuJMJBERpCgXeUfN7O87udn5AYKS4rwslujydJNcyfdlgFGU2nNXXYVmMex3fIclZdjL-1xLdEW&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThkCVjaMnrj_oYc7wner8w8tsZSgPCKtvrGa-satwr63djl8NAcN1Wi9LS-_egiuTnlP0bso7XP_nEvUCJ04_rABvxZK9TMg&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "7",
      Material: "Genuine Leather, Rubber",
      Color: "Black",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/16275412122222456462?gl=us&hl=en&prds=pid%3A13609850231222038426",
    product_offers_page_url:
      "https://google.com/shopping/product/16275412122222456462/offers?gl=us&hl=en&prds=pid%3A13609850231222038426",
    product_specs_page_url:
      "https://google.com/shopping/product/16275412122222456462/specs?gl=us&hl=en&prds=pid%3A13609850231222038426",
    product_reviews_page_url:
      "https://google.com/shopping/product/16275412122222456462/reviews?gl=us&hl=en&prds=pid%3A13609850231222038426",
    product_num_reviews: 251,
    product_num_offers: "5+",
    typical_price_range: ["$165.00", "$165.00"],
    offer: {
      store_name: "Lyst.com",
      store_rating: 4.4,
      offer_page_url:
        "https://www.lyst.com/shoes/nike-jumpman-mvp-black-varsity-red/?product=CVKGBLU&_country=US&size=7&atc_medium=cpc&atc_campaign=USA-PLA-FL",
      store_review_count: 71,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=lyst.com&c=US&v=19&hl=en",
      price: "$165.00",
      shipping: "$15.00 delivery",
      tax: "+$20.70 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "8880045850899232104",
    product_title:
      "Nike Dunk Low Little Kids' Shoes in Grey, Size: 13C | FB9108-002",
    product_description:
      "Start your little one's sneaker collection off with an icon. Designed for basketball but adopted by skaters, the Nike Dunk Low helped define sneakerhead culture. With plush ankle padding and durable rubber traction, this '80s icon is an easy win for playtime and beyond. Made to Last Real and synthetic leather is durable and brings a classic feel. Heritage Look Collar and tongue pair with perforations on the toe area to give these sneakers an iconic look rooted in the original Dunk. All-Day Traction Full-length rubber outsole provides durable traction and features a pattern similar to the original. Product Details Classic laces Cupsole construction Nike Dunk Born from a series of mash-ups, hacks and tight deadlines, the Nike Dunk landed on college basketball courts during the '85–'86 season. While the original College Colors designs helped you stay true to your school, the Dunk didn't prove to be popular. But it was this humble sneaker's lack of popularity—and flat, grippy soles—that helped it jump the rails to captivate skateboarders. Decades later, this everyday favorite continues to be snatched up in countless colorways, proving its influence is undeniable.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_PyLWPqIW28-IZypXy_gU0wU75bls-4ZBsrY7AaVGSrMZ_dfUvqt0MkWE4TDB2q5N9IHaXAZiL1oMk5rw8YKNR5sFxmJaXw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSED2grgw_hCEm2YFt1t3n5PlS3xyUcGz3U9GtL0jI_nt3ppHih2OoTqJC-XtR-KJzzXKizQwXNlefLnxfZyDmcddk1qeek&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQ-RZwiGHObz_lqbaaTXwQLMiWah6rIr5abh09jtBLgMAOJzCVnobfLUY5xdUsn0WwvEaAUHKIcfxHsGlxG_IT2lj9xxQE&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ62gdrynsK-1n-xKKmXd3t_t1yYqP5rxc0Hd57Xt3lntkNJ8smJUkyawnNFV857m6JFeLohC64kKvesThU4p-1XCNy1XVc8A&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7aNLMuSYpmbX4CX1E4X7HTe2qk2SSz_yEMpbjaTq9VZ35t6fGch6EfwZmqncaVhA32ChRg_W7E9dgrc3k-0SymTwGQT_W&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSw5HBXdYchud2NsY9edRE_UhuL54PhPiAGiMslpWx9BVnEF6e22asxdJYWkZzZ7jO9_pRumJreFUtVvaiV42BM24rt6mr7OA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPz9KlLwnhVoomzVwLmMTry7oLfpgz4HVlf0IMoJegLKd89FR5tuhhSAtb_JKtad7OxDY0woBq6uemJNKh77oeB1N-7N9H&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7WJ3WXMUWHnKyNFz2mu2ccN8CXWXHElg8AEeRf-cgpITd4iDi2PKbWsUPZf2cIdSjNle2_03vAhM0fJ9MptCSmb2OqEwHMA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUozZShMihYIGg43fWTPJAq-9Bi0_pi74nTJyDaFgW-jAzScab9C_6O3yR4UoGFGltyWrD4b4YpdAahTCpJkeZprTq_62I&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids'",
      Size: "13",
      Material: "Genuine Leather, Rubber",
      Color: "{color:Grey}",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.4,
    product_page_url:
      "https://google.com/shopping/product/8880045850899232104?gl=us&hl=en&prds=pid%3A1107893326139598856",
    product_offers_page_url:
      "https://google.com/shopping/product/8880045850899232104/offers?gl=us&hl=en&prds=pid%3A1107893326139598856",
    product_specs_page_url:
      "https://google.com/shopping/product/8880045850899232104/specs?gl=us&hl=en&prds=pid%3A1107893326139598856",
    product_reviews_page_url:
      "https://google.com/shopping/product/8880045850899232104/reviews?gl=us&hl=en&prds=pid%3A1107893326139598856",
    product_num_reviews: 31,
    product_num_offers: "2",
    typical_price_range: ["$70.00", "$70.00"],
    offer: {
      store_name: "SNIPES USA",
      store_rating: null,
      offer_page_url:
        "https://www.snipesusa.com/pre-school-dunk-low-nike-football-grey---summit-white---midnight-navy-fb9108-002-14685000017.html",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$70.00",
      shipping: "Delivery by Tue, Jan 23",
      tax: "+$7.18 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "15968133478356963200",
    product_title: "Nike Air Force 1 Mid Off-White Black",
    product_description:
      'Men\'s NIKE X OFF-WHITE Air Force 1 Mid "off-white - Black - Low-top sneakers The Off-White x Nike Air Force 1 Mid "Black" is a collaboration between Virgil Abloh\'s popular clothing brand and Nike on a modernized version of the classic mid-top shoe. The Air Force 1 Mid by Off-White and Nike succeeds the brands\' previous Air Force 1 Low projects that were released from 2017 through 2022. One of two colorways released at the same time, the "Black" makeup features a black woven textile upper with unique patterns incorporated into the fabric. A tonal leather Swoosh resides on either side of the shoe. The black canvas ankle strap is consistent with the look of the strap found on the original Air Force 1 Mid. Off-White\'s signature dual lacing system appears on the design. Graffiti-style "AIR" branding is found on the top of the tongue. An additional branding effort includes Off-White\'s industrial-style detailing on the medial side of the shoe. Orange tabs, zip-tie tags, and sole units with multicolor spikes complete the look. Release date: June 23, 2022. Rubber/Fabric.',
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8SElA3LjBbo35ykvkaRJzKoKFz3Xqqxn8FMExP_-3ldTmV_SE6anRalm28g8wF_3XMc5NXsOlvBQ7V35q1zZTuFs0I0mF&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbrv_l7OBfM6RuBeF40jGiQ7QhHFCOdjr_rfjASma2QeR08BrLNHgKrX3xdHB2XYPRlZTLxCGYXGUxpR-KsXJsUZBhT7T9&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7Sh1n1ZLnmusa9EU7uCCSEh-lst5Xwthy59WOO4erkyjm2PJC&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9BhCy7aEEqZ_2yjKQs07ugAKlzWyb7wnYhq1HBD5cB6_5Za3DHlzmh9U4YS5NMN8vjJYb1pK3pibRauWlVyoxxiYz7dJ2&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcST9-WXejQFTTgWhwQSHQsN1ET3VoYNmdw76X_V2BIgmQLJiGFRugTsC4b9EkniKis8eyat14hHi0ibH7jSeLFCnUTC6yEa&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKErLaM2iANCQCyJIU_Y6wtCaVVWwNEhOcJ1kLVW5kjHOQczNSbFwCjpoQxXhsftsP7V4CZ9H0UdmB0CKIlTfKwMmLPBs3gw&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "10",
      Material: "Canvas, Genuine Leather, Genuine Suede, Mesh, Rubber",
      Color: "Black",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/15968133478356963200?gl=us&hl=en&prds=pid%3A2297667731891946962",
    product_offers_page_url:
      "https://google.com/shopping/product/15968133478356963200/offers?gl=us&hl=en&prds=pid%3A2297667731891946962",
    product_specs_page_url:
      "https://google.com/shopping/product/15968133478356963200/specs?gl=us&hl=en&prds=pid%3A2297667731891946962",
    product_reviews_page_url:
      "https://google.com/shopping/product/15968133478356963200/reviews?gl=us&hl=en&prds=pid%3A2297667731891946962",
    product_num_reviews: 107,
    product_num_offers: "10+",
    typical_price_range: ["$146", "$160"],
    offer: {
      store_name: "Kixify",
      store_rating: null,
      offer_page_url:
        "https://www.kixify.com/off-white-x-nike-air-force-1-mid-black?srsltid=AfmBOorUVOlnQLlw0a7amW3n0eTkL-V3TOsdDMEw6U1loZLRYM_tUR-oQDo",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$419.99",
      shipping: "Free delivery",
      tax: "+$43.05 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "1:5371263770029198550",
    product_title: "Jordan 4 Retro Black Cat (2020)",
    product_description:
      "Jordan Brand brings back a mid-2000’s classic with the Jordan 4 Black Cat (2020), now available on StockX. Originally debuting in 2006, this is the first time the Black Cat colorway has seen a retro. The fourteen year Black Cat drought has officially ended. This Jordan 4 is composed of a black nubuck suede upper with matching detailing. Black hardware, netting, and outsoles complete the design. These sneakers released in January of 2020 and retailed for $190.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvdGk9QpvB30eUgTl1EnfwAgSSslfPeUvjOSQehYHcFZNxjAx5oJyKisqc1nX90npwLBAfV4K3pNonDgNK36-GRaCfBmNy&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "12",
      Material: "Genuine Suede",
      Style: "Casual",
    },
    product_rating: 4.3,
    product_page_url:
      "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A5371263770029198550",
    product_offers_page_url:
      "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A5371263770029198550",
    product_specs_page_url:
      "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A5371263770029198550",
    product_reviews_page_url:
      "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A5371263770029198550",
    product_num_reviews: 12,
    product_num_offers: null,
    typical_price_range: null,
    offer: {
      store_name: "StockX",
      store_rating: 4.1,
      offer_page_url:
        "https://stockx.com/air-jordan-4-retro-black-cat-2020?country=US&currencyCode=USD&size=12&srsltid=AfmBOooDAzQ7ILd86pczlmpT_qWq6rR5ScIlcXL8g3N7tcPPT7rcO9PMifc",
      store_review_count: 41029,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=stockx.com&c=US&v=19&hl=en",
      price: "$1,000.00",
      shipping: "$94.95 delivery",
      tax: "+$130.00 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "3821339852897462813",
    product_title: "Nike G.T. Cut 2 x Arike Ogunbowale Basketball Shoes",
    product_description:
      'The Arike Ogunbowale inspired Nike Air Zoom GT Cut 2xao basketball shoe enhances speed and confidence on the court while paying tribute to her hometown roots. React technology and Zoom Air units provide responsiveness support and comfort in a lightweight upper designed for fast cuts and starts like a butterfly in flight. The Milwaukee skyline family names on the insoles and "just a kid from Milwaukee" hangtag honour where Arike came from while catering to all players who want to rise to the apex of the game.',
    product_photos: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJm-an0xZmLtY45iZfluMUZyrosMaA58QJfnxhjSfL1oOF_5QI9klkRnZmA4bpvDDZurLx0etBJq3mb6C0IIuckGcaQP7W&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiTa4VqVTjEgfJXxBLaXjgbenBxRCBNTJAgR35Cnb8KlguoXoGAqsic81JRcaccb9CnOgiR-XDbNtKzqElXXutWaM-0YgW&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOjI7OCTc_FggQqQYLmzLml5sx2ZoWkHKTcSr9Npt4FcUIMgFtsMJwDq7ojycE-bV3yYDYOLVJeuzP_KdkdVZDf9vXu6BgcQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSn-0mO7Zazh4XBhADKbdN8TR31S36gLGzui_a--BwtHQyhK98Y3WJFwLQVSLOaw3CsklCkSZja5TJEbpdl9f84COMOekWA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJ6b2OGf9vGuh_0Ef1Iof84JgPY6NIq5fU7A2OeeUkORSSRsrYmUZqPwUq92Ap3WLLHX_VikCJeHktW2jUarFsn4gcLNpEwA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFwftI7UPs56Yg5kos1S2YGoad8VV0GtE_bJRME_cZ2g4KNE-46lx-2TXOtkG0a5DUmZ02CBwpOAggBMRDk7hrPWfUeqdtTA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoosrSQlOpRYdgkWSMu4h_phsEj6GKRKTaLljpj5079t9Y4zHpKOEFBxz3pfjulHTq2Z2AY1FNS-bjq2d99uKK06-fzVZ5&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTr4YxcMBlh-NfOcUwmHa9sIhLUdNgzdncqPkurhqOEzWxx2Oqog6d67QZJN3dPXmj4yt2LjBGBPG4YsCngvZGQyg_OIhL9&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyzhutOFA-5t9KUZJ_vKpyWoOulTkhCMS-e_05fYMmWzK29EmN6gesZjgcWqH78XTQG-95KGGin9VEwhsQFiv7auD7eKYS&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRIsHP9l0USHvev4wjjrmfi0gkfttyxASqARuY6JN9vCK9RWE9PewrN2J9dlL-YxD_Emb7JpxGpyV6zVNJIbTILcVm7YaG&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRJZtLMvBnNdcsRgNo9AplrpDzHuCc_gzmywlOJfhDfToE0X-eXwUfSXbkxnZffnRsViGDtv9uzBEBCHHYxHVzAQuqxeTP5&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqEVi7fUq5vTnr5-hea3psYSRRABarjclfA0HPxtjumDwQR6Pb0gcRP8qbLKjaysVop1FOLZ_6dF7OYetzw8K16_ushgdrvQ&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDlKSKhVoF-qgyFC4zx4UkLo2vJEjKKz_gb8gnG9I0BNC9UV2U4yO4zLcT06pmiVtHAG8kZPzQCvsiHUUXVDrE6nSJpMUz&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZuB6FgqZbfDZzsmGBe1FQxnxShVO6CctfW9Vxh-XTI35gQ-U96JkHveIZSUYwou27a_LzumcLCW2v4Hs2nHwMAjMVkO5IcQ&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGKcyRS5JdUZZKU9Cvz_W798QBx3uX5QK4KYO70UcfTt-VwrLfgJKuSYexx-g6d7GRrGZlbxc_g3dspULVxV_0EcdrVGi2ag&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "6½",
      Color: "Lime Blast/ Orange",
      "Athletic Style": "Basketball",
      Style: "Casual",
      Features: "For Athletics",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/3821339852897462813?gl=us&hl=en&prds=pid%3A13200539906221645310",
    product_offers_page_url:
      "https://google.com/shopping/product/3821339852897462813/offers?gl=us&hl=en&prds=pid%3A13200539906221645310",
    product_specs_page_url:
      "https://google.com/shopping/product/3821339852897462813/specs?gl=us&hl=en&prds=pid%3A13200539906221645310",
    product_reviews_page_url:
      "https://google.com/shopping/product/3821339852897462813/reviews?gl=us&hl=en&prds=pid%3A13200539906221645310",
    product_num_reviews: 29,
    product_num_offers: "10+",
    typical_price_range: ["$99.00", "$169.99"],
    offer: {
      store_name: "Champs Sports",
      store_rating: 4.2,
      offer_page_url:
        "https://www.champssports.com/product/~/Q8704800.html?source=shoppingads&locale=en-US&SID=5510&inceptor=1&cm_mmc=paid%20search-_-google-_-g-_-PLA-_-DPA-_--_-P-_-Prospecting-_--_-na-_--_-na-_-PLA-_-na-_--_--_-",
      store_review_count: 0,
      store_reviews_page_url: "champssports.com",
      price: "$170.00",
      shipping: "Free delivery",
      tax: "+$17.43 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
  {
    product_id: "17462189274139492473",
    product_title: "Nike SB Chron 2 Canvas Shoes - Black/Black - 5.5",
    product_description:
      "Low profile, breathable canvas skate shoes with natural comfort and flexibility for a true boardfeel all session long. Much like its predecessor, the Chron 2 delivers one of the most flexible and natural feeling performances youd expect from a top-of-the-range skate shoe. The all-new revamped design includes a reshaped collar and heel for an improved fit while maintaining the comfort and performance youd expect from the iconic Nike SB.This latest addition to the Chron family has an upper constructed from Canvas that incredibly breathable yet hard-wearing and lets you skate all day in total comfort. The foam cushions provide next-level impact protection to keep you skateboarding all day and the classic vulcanised construction fuses the sole to the upper for a flexible feel and ultimate board control. The extended toe bumper looks impeccably stylish whilst also adding extra durability where its needed most.Whats more, Nike used recycled materials to create the shoes laces, linings, and iconic swoosh, adding increased sustainability to an already bloated list of practical and stylish features.",
    product_photos: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZZXvpfM74bRjMX2fzS0F_gu-i2S3DT3ReQC-eoLdi0Z9aDcDAYj4qVM_0-V054rNw27I1k4qGFR3e3ZmbdJiofclpjfKxfA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSxQMLO6mG0hT_tmkEAbQOJWmc96r7ScqrDX0cLWWtjcxGFLTPSCDw-YtkvWDa2ZwfmWiHHTHowzy_eOUGVKamDwAY1aIG&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROFNsBYfvs8UCSg_-_TTrWhAifF-N4tfgecNN7QHYmHIvjI_AgE9aWb6BXgUoRdJD6LyS2i8mUT91gyF9N_3iBLNwjrCyN&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCjbnFEJyuFRQkuzW9YG2pUvj1Pu-LehqYU1Gh-FSGl4y9pLqBl3XclAq8GSW8dqeGTCNMLydnGScfGu7r3Xj1TVqqc5CPcA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaxE32Eu580-Lnh11ZQft_ANm0zh1qBWjFpD9TUEZ4q3j_QbKrLS60i__cQ14kCbYLguaVpbAKOaHCTW6BIOtlA9bUq3iQHA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQl6uI6T_P-OUpeFaqiugf6fcEy5pVNbGSFGW3GZbg59mTV8JLygGem1my86-iA8SOHyzVljXk2O2SS4J0r19SGiQbcKmgQpA&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQC6ES3EohsuN8-7yw-TJH83aPzrUVLEItgutkR41ycy8Mb8OBUWKR5aueOzvocZtUD4z0EqqqxDWISlyHlhy1sRgqPWWEg&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3Ij2dFOtBQ92xxeKffKjArm18ydOLF2aqYkyRESh3AVzNBsLsBi7NPjh10jKyr1LzYP1QV61FDRFX2CqWZk3Wb_-6prcV&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqc8Ycqz7FToMb-I3BMHeEqbKw7e143dmZltg_TqNB2Z_OaoQYNCogSUClVjQDKAq8gPoFhvHRoYJu6vnGpsLslfILxsAg&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2VzKa_EdjhZ8Hw9t02MA7U0vhJT6oyG7IgY3ZPlAvG_TlE8vAjhnJlEU76pSfkrcZQteKxy6IsG3cjmHoo_JY2xdU-IuI&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTp5Ubt1_HHmgnmaMAHEIvOPO6ldV5IdAovIorKqjoMGsNyfPITZz5s0UwbdGw3_OU8ijSkluqGY0FXPU2EJilFN8Br5zbR&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS16UEvx0CjyZwZ32kStnZV3DUDyY3Qvn7i8LxBrl9LUl8eKEowrsPtLchH5nfbx7Px7hQf3igLOSY79ymtPMVlqY3E_2FEcw&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-UqJpQxn-WYFzISxq6g4MQyHP4WsqLfrwmfRYN2vIHTiX-lUr-rGIWMzuzSZm0lmLPqfHeCvdvSspEYJAUvx8AamNZmnobg&usqp=CAE",
    ],
    product_attributes: {
      Department: "Kids'",
      Size: "5½",
      Material: "Canvas, Mesh",
      Color: "Black",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.7,
    product_page_url:
      "https://google.com/shopping/product/17462189274139492473?gl=us&hl=en&prds=pid%3A13446384568095965732",
    product_offers_page_url:
      "https://google.com/shopping/product/17462189274139492473/offers?gl=us&hl=en&prds=pid%3A13446384568095965732",
    product_specs_page_url:
      "https://google.com/shopping/product/17462189274139492473/specs?gl=us&hl=en&prds=pid%3A13446384568095965732",
    product_reviews_page_url:
      "https://google.com/shopping/product/17462189274139492473/reviews?gl=us&hl=en&prds=pid%3A13446384568095965732",
    product_num_reviews: 743,
    product_num_offers: "5",
    typical_price_range: ["$64.95", "$65.00"],
    offer: {
      store_name: "Shop Mall Outlet",
      store_rating: null,
      offer_page_url:
        "https://shopmalloutlet.com/products/chron-2-canvas-youth?variant=46734501871901&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqEQ64t6Pqxnx0-WZ0I6Pw7U4LlAvdjV6l-5rC3VHKiyRjU0h5REmM&com_cvv=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e",
      store_review_count: 0,
      store_reviews_page_url: null,
      price: "$64.99",
      shipping: "Free delivery by Tue, Jan 30",
      tax: "+$6.66 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
      buy_now_url:
        "https://shopmalloutlet.com/cart/46734501871901:1?srsltid=AfmBOoqEQ64t6Pqxnx0-WZ0I6Pw7U4LlAvdjV6l-5rC3VHKiyRjU0h5REmM&com_cvv=02097201fee3ff3387b656d0f50b02952b90397e363f8d1fb7b8d0955d8bed51",
    },
  },
  {
    product_id: "6674998626714893345",
    product_title: "Nike Air Trainer 1 Valentine's Day 9 / Brown",
    product_description:
      "A classic Nike silhouette, the Air Trainer 1 was designed by Tinker Hatfield as all-purpose model in 1987. Since then, it's transitioned into a must-have lifestyle silhouette, and this iteration is an easy add to any rotation. Leather uppers are well perforated for a breathable fit, and fluffy suede overlays add rich texture to the pair. Branding throughout nods to Beaverton heritage, whilst Air cushioning adds a springy step and grippy rubber ensures traction underfoot. DM0522-201, Leather Upper/Synthetic Sole.",
    product_photos: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6Qxnx9Xo9aCIDp1gL7p8SMXDkABbYIiDn1UqQDZH-y3_7He5yXgSYlHy-7wALFUBO4v6iIf7V6IQ0NVLYleGga9umfnx1&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQswtJqx_kMpiTanB4VlE5HdUeeQNQAvJ0HTIHHWVBtsMUvSvdQdUVkpV7Zc4hNB-uACeF5pL8x5VAiy0ixSWvPQf28h2xn&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcTKPy6oYxeWoh8awK0ZsCc21t2zLeIYIA2QneE5PrS8QIzThHAhnSx2Nuy8iI4g4WUploJxy9bUgXzLLcmeOuewCAJiDCgw&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlS9dvawn1dvLN1kqsY14nhpxtPsdhJ5pLK6fi8wNDpluiYbludrORUEs2_Ecw8NPZbL51eMldmzIGKjcHt8EJPcx-lk3D0Q&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmRy6ay1QLlRiTbvsGJ75A6y403881zurTrCV9uLBDGPpYBiYJxXay4Dgr5y-oQ7gxNoKhX5grsVOty6-D-l32bbZCE4SwHA&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUJ5XtThcQ1E1NWdKpkButa6yW-rUfj9G9a5WBswvwqI-5bjmNe_bDKNdUkqsyzeMUZSvRI-NN_zeMCVhFkGDPNA9ODt8U5w&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZoWsP1Aw49672-8L0fUDcrKvQgOE8OvckHKOs9WLOf2v9lG84kbyZyp3RsfI8fnL6ZI-BXArKEk-sjt3_jvBM3dYEJuss&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaIzn20MBMY5xujQmpdRL1bRFMFbq8jcy661x7xzYpHyQlrIMZDvoB3_TtmAuRoJ44dPKsl0oyZ0aRFWA5chZpPAEKAv6olw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSOW-AOeXqC5kowhwYh_c9pdQQQtUiJILsjk8AkuO23q8kM0XwZU38WbFWOamkQaVacyDu7ENjIZgmOWYhOtyEGVeG_WuE3g&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRx51aSzWqxi0iqj7npkMHed5hllFH932O9okTRWwvQ6sC4iqIJ5R4bylEyEmqq36ubXd1SS9R6HqnEVRtTNo5mQ4_JrUvS&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSI8ESQOr_CEMSV0wJ0Cggac9lsnNwbnWIC5WZvmgFw0kba6jXWEjdlDQyqUxpe-nNadfHJdXMYINOEv4hdQKdEEIOtF69TBw&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQH1qYbS3pAtsbWIGAgq5yOfjrU-J4a2d5PzJt_uAl5hdRVpQr1RKauiMKCLRFD6vRF1Bv23jakP-Lvo1TP0LaG1XmU4buU&usqp=CAE",
    ],
    product_attributes: {
      Department: "Men's",
      Size: "9",
      Material: "Canvas, Genuine Leather, Genuine Suede, Mesh, Rubber",
      Color: "Brown",
      "Athletic Style": "Tennis",
      "Closure Style": "Lace-up",
    },
    product_rating: 4.6,
    product_page_url:
      "https://google.com/shopping/product/6674998626714893345?gl=us&hl=en&prds=pid%3A6478486444306377866",
    product_offers_page_url:
      "https://google.com/shopping/product/6674998626714893345/offers?gl=us&hl=en&prds=pid%3A6478486444306377866",
    product_specs_page_url:
      "https://google.com/shopping/product/6674998626714893345/specs?gl=us&hl=en&prds=pid%3A6478486444306377866",
    product_reviews_page_url:
      "https://google.com/shopping/product/6674998626714893345/reviews?gl=us&hl=en&prds=pid%3A6478486444306377866",
    product_num_reviews: 26,
    product_num_offers: "10+",
    typical_price_range: ["$48", "$69"],
    offer: {
      store_name: "Slam Jam",
      store_rating: 4.6,
      offer_page_url:
        "https://us.slamjam.com/products/nike-footwear-air-trainer-1-multicolor-j261237?srsltid=AfmBOooR45mT6RFHkFe80q7uuJznDHu_KtFNNknVNw-w2bOSWSmFD-LOaBY",
      store_review_count: 816,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=slamjam.com&c=US&v=19&hl=en",
      price: "$72.00",
      shipping: "Delivery by Wed, Jan 24",
      tax: "+$0.00 est. tax",
      on_sale: true,
      original_price: "$130.00",
      product_condition: "NEW",
    },
  },
  {
    product_id: "1592948492021925624",
    product_title:
      "Nike Court Legacy Next Nature Women's Shoes, Size: 6, White",
    product_description:
      "Serve up classic tennis style in the Women's Nike Court Legacy Leather Sneaker. Synthetic leather upper in a lifestyle sneaker style with a round toe. Lace-up closure with metal eyelets. Padded collar and tongue for increased comfort. Made from at least 20% recycled materials by weight. Soft lining with cushioned insole. Soft foam cushioning brings lightweight comfort. Durable rubber outsole with herringbone pattern. Made from at least 20% recycled materials by weight.",
    product_photos: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRI8akxsj2URkYTRzfbawbvazEepY2amveLPeIE1h3ThrEmpbt1Kg45PcdmjKapqA6GeRjCxYdv_KS8-gMbXmcUJGEJu-BrGw&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMQPb04ptgNLon3ZYntdIPSjIOlJhrCSqq3A3SRvfRIkp5ijpQ2j3Z5eHTeNpINQFbyoGwV7m5wtLTz6BRpOVdcgaw82708w&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8rTPVnYlMXU6ZAoIIgqaORXc_1CZGFSr3XQvSQFa0HPJKEDrB4A5XnDYA_Wha6vXwNribp8VJN7auA2onb03i3JjMLklL&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpKjLq7tAJNt1r0fyfJvFzHaaPtnqJ2ZiUhuXUwt60QTBgunSVxMAS70UlSHBBRP2TQfjlo38HkrSOvx-PWdT2et0QSPgeBA&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgUrQ1EnUumAqU9Y5ssy4fK6SscAGN3JeypIFOHrbDcMklGyHA_wBNf2hpnVtS0wbBTIBemWvCQpTNpQggnXyiUHhZi-_sUA&usqp=CAE",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxw5DuOvznOUn6V8yklz-4lvKHBd2yJdDcf7PYpRvyhYqbAjxCnZ54gYGVloJHnkkIqpRx5IfEFwNDBMaIjf4SSy45BhAQSQ&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXdTQiz6NNI-u5LrN13ekgcLNVEhqDzJ2ZlXxs3Cd8gVOYw82e&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSEYK8XOQzONtYMgo5mHSWCkqllRP83-70VdAw8MEeL0398U_0gGZYzbu37O-mRGMZoSnJcQdsSLmzThzesoPJDwzR9e_Xr&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAgmqUlMPU2W5WCl4Gjzp_Vk9KNgZ3CDXtuocgRh-orPf49LNp-G9hi6YdkwcHJBC-hv3nPklGHaexFy4PgjA34LxR1rjs&usqp=CAE",
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhSAkd1mt2cmf7ExokFFosbAIEs6J96qOR3SodLCd0y1DDYw3F&usqp=CAE",
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaxGzM01g2WYqtSEiITOi2mqiBz9GC3j4QfqA2DpkQ0pyNM_vIUgWkzqZNGzaYFJr9F5Swj0q7qgqHv6b1vrIBOGnlVdaXLw&usqp=CAE",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2Ms8WL_XEnK7_58mJxs1Zi6Dy6kbY5X64Ryp4gCoehZmGsSKQ3uUNZRWs9AcnQ2SJxM-EuXIjKMFZF3dIk9Ufq46uQO1ckg&usqp=CAE",
    ],
    product_attributes: {
      Department: "Women's",
      Size: "6",
      Material: "Canvas, Genuine Leather, Rubber",
      Color: "White",
      Features: "Fashion Sneaker",
      "Closure Style": "Lace-up",
      Style: "Casual",
    },
    product_rating: 4.4,
    product_page_url:
      "https://google.com/shopping/product/1592948492021925624?gl=us&hl=en&prds=pid%3A4540186666398083445",
    product_offers_page_url:
      "https://google.com/shopping/product/1592948492021925624/offers?gl=us&hl=en&prds=pid%3A4540186666398083445",
    product_specs_page_url:
      "https://google.com/shopping/product/1592948492021925624/specs?gl=us&hl=en&prds=pid%3A4540186666398083445",
    product_reviews_page_url:
      "https://google.com/shopping/product/1592948492021925624/reviews?gl=us&hl=en&prds=pid%3A4540186666398083445",
    product_num_reviews: 1273,
    product_num_offers: "10+",
    typical_price_range: ["$54.99", "$70.00"],
    offer: {
      store_name: "Academy Sports + Outdoors",
      store_rating: 4,
      offer_page_url:
        "https://www.academy.com/p/nike-womens-court-legacy-next-nature-shoes?sku=white-black-6-b&gmc_feed=t",
      store_review_count: 12845,
      store_reviews_page_url:
        "https://www.google.com/shopping/ratings/account/metrics?q=academy.com&c=US&v=19&hl=en",
      price: "$69.99",
      shipping: "Free delivery by Sat, Jan 20",
      tax: "+$7.17 est. tax",
      on_sale: false,
      original_price: null,
      product_condition: "NEW",
    },
  },
];

// Get all products
app.get("/api/products", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(Products.slice(0, limit));
  } else {
    res.json({ data: Products });
  }
});

//Get a single products
let searchedProduct;
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  searchedProduct = Products.find((product) => product.product_id === id);

  res.status(200).json(searchedProduct);

  //Get Feature Product
  // const searchedFeaturedProduct = products.find((product) => {
  //   product.product_attributes.Features ===
  //     searchedProduct.product_attributes.Features;
  // });
  Products.forEach((product) => {
    console.log(product.offer.store_name);
  });

  // const searchResult = searchedFeaturedProduct;
  // console.log(feature);
  // const featuredProducts = searchResult.filter((result) => {
  //   return (
  //     result.product_attributes.Features ===
  //       searchResult.product_attributes.Features &&
  //     result.id !== searchResult.id
  //   );
  // });
  // console.log(feature);
  // res.status(200).json({ message: "OK", data: featuredProducts });
});

// Search product
app.get("/api/search", (req, res) => {
  const { title } = req.query;

  if (!title || title.trim() === "") {
    res.status(400).json({ message: "Product name required for search" });
  } else {
    // try {
    const searchedProduct = Products.filter((product) => {
      const result = product.product_title.toLowerCase();
      return result.includes(title.toLowerCase());
    });
    return res.status(200).json({ message: "Ok", data: searchedProduct });
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).json({ error: "Internal server error" });
    // }
  }
});

// //Get Featured Products
// app.get("/api/search", (req, res) => {
//   const { title } = req.query;
//   // const featuredProducts = products.filter(
//   //   (product) => product.product_attributes.Features
//   // );
//   if (!featured || featured.trim()) {
//     res.status(404).json({ message: "Title query parameter is required" });
//   }
//   const searchedProduct = products.find((product) => {
//     product.product_attributes.Features.toLowerCase().includes(
//       featured.toLowerCase()
//     );

//     const { feature, categories } = searchedProduct;
//     if (!searchedProduct) {
//       res.status(404).json({ message: "Product not found" });
//     }

//     const relatedFeaturedProduct = products.filter((r_product) => {
//       r_product.offer.store_name === categories;
//     });
//   });
//   res.status(200).json({ message: "Ok", data: featuredProducts });
// });

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
