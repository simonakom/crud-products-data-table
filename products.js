const products = [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://images.macrumors.com/t/e0o2RzHJ5cPlD4FgyKQ5jCdSGko=/1600x/article-new/2016/05/iphone8gold.jpg"
      },
      {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_new_glass_full.jpg.og.jpg"
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.png?height=474&width=711&fit=bounds"
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://www.notebookcheck.org/uploads/tx_nbc2/OppoF19Pro.JPG"
      },
      {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://m.media-amazon.com/images/I/51zoW2V0QtL._AC_UF894,1000_QL80_.jpg"
      },
      {
        id: 6,
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://files.refurbed.com/ii/apple-macbook-pro-2018-15-4-touc-1653048875.jpg?t=fitdesign&h=600&w=800"
      },
      {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://www.notebookcheck.org/uploads/tx_nbc2/SamsungGalaxyBookS__1_.jpg"
      },
      {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://m.media-amazon.com/images/I/71A1fFf1vOL.jpg"
      },
      {
        id: 9,
        title: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://rukminim2.flixcart.com/image/850/1000/kw3v0cw0/computer/y/n/g/inbook-x1-thin-and-light-laptop-infinix-original-imag8vfsgxqzw99a.jpeg?q=90&crop=false"
      },
      {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_653693-MLA48623916867_122021-O.webp"
      },
      {
        id: 11,
        title: "perfume Oil",
        description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        stock: 65,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        thumbnail: "https://www.lodoro.cl/cdn/shop/files/1BEILISHN2100M_3.png?v=1705414778"
      },
      {
        id: 12,
        title: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        discountPercentage: 15.66,
        rating: 4,
        stock: 52,
        brand: "Royal_Mirage",
        category: "fragrances",
        thumbnail: "https://i.ebayimg.com/images/g/sMoAAOSwOWNkR6vl/s-l1600.jpg"
      },
      {
        id: 13,
        title: "Fog Scent Xpressio Perfume",
        description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        price: 13,
        discountPercentage: 8.14,
        rating: 4.59,
        stock: 61,
        brand: "Fog Scent Xpressio",
        category: "fragrances",
        thumbnail: "https://m.media-amazon.com/images/I/51JrMNz6MXL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 14,
        title: "Non-Alcoholic Concentrated Perfume Oil",
        description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        price: 120,
        discountPercentage: 15.6,
        rating: 4.21,
        stock: 114,
        brand: "Al Munakh",
        category: "fragrances",
        thumbnail: "https://static-01.daraz.pk/p/ba614f81bdd43a9a3335ac9879020a31.jpg"
      },
      {
        id: 15,
        title: "Eau De Perfume Spray",
        description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        price: 30,
        discountPercentage: 10.99,
        rating: 4.7,
        stock: 105,
        brand: "Lord - Al-Rehab",
        category: "fragrances",
        thumbnail: "https://i5.walmartimages.com/seo/Lord-Al-Rehab-Eau-De-Natural-Perfume-Spray-50-ml-1-65-fl-oz_227a5d50-36c6-42d1-8d86-b969d9c70a6b.04945c8aec66478cdd40ace195283140.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      },
      {
        id: 16,
        title: "Hyaluronic Acid Serum",
        description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 19,
        discountPercentage: 13.31,
        rating: 4.83,
        stock: 110,
        brand: "L'Oreal Paris",
        category: "skincare",
        thumbnail: "https://static.thcdn.com/images/large/original//productimg/1600/1600/13205087-1714887617452869.jpg"
      },
      {
        id: 17,
        title: "Tree Oil 30ml",
        description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria",
        price: 12,
        discountPercentage: 4.09,
        rating: 4.52,
        stock: 78,
        brand: "Hemani Tea",
        category: "skincare",
        thumbnail: "https://nutravit.co.uk/wp-content/uploads/2023/11/tea-tree-oil.webp"
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        price: 40,
        discountPercentage: 13.1,
        rating: 4.56,
        stock: 88,
        brand: "Dermive",
        category: "skincare",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2nhCj__hU6yKNanctvRn-2B-jhCvnX6wIjWHfs4sBg&s"
      },
      {
        id: 19,
        title: "Skin Beauty Serum.",
        description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        price: 46,
        discountPercentage: 10.68,
        rating: 4.42,
        stock: 54,
        brand: "ROREC White Rice",
        category: "skincare",
        thumbnail: "https://image.made-in-china.com/202f0j00VmNhUJMRAfrl/15ml-Anti-Aging-Collagen-Hyaluronic-Acid-White-Rice-Serum.webp"
      },
      {
        id: 20,
        title: "Freckle Treatment Cream- 15gm",
        description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 70,
        discountPercentage: 16.99,
        rating: 4.06,
        stock: 140,
        brand: "Fair & Clear",
        category: "skincare",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSq-wyEiwgo_UQq2jPZOFlZaDRteKknj-qRv_ePnVgg&s"
      },
      {
        id: 21,
        title: "- Daal Masoor 500 grams",
        description: "Fine quality Branded Product Keep in a cool and dry place",
        price: 20,
        discountPercentage: 4.81,
        rating: 4.44,
        stock: 133,
        brand: "Saaf & Khaas",
        category: "groceries",
        thumbnail: "https://m.media-amazon.com/images/I/61klSHiQ7HL._AC_UF894,1000_QL80_.jpg"
      },
      {
        id: 22,
        title: "Elbow Macaroni - 400 gm",
        description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        price: 14,
        discountPercentage: 15.58,
        rating: 4.57,
        stock: 146,
        brand: "Bake Parlor Big",
        category: "groceries",
        thumbnail: "https://nazarjanssupermarket.com/cdn/shop/products/BAKE-PARLOR-BIG-ELBOW-MACARONI-400GM.jpg?v=1680437678"
      },
      {
        id: 23,
        title: "Orange Essence Food Flavour",
        description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        price: 14,
        discountPercentage: 8.04,
        rating: 4.85,
        stock: 26,
        brand: "Baking Food Items",
        category: "groceries",
        thumbnail: "https://5.imimg.com/data5/SELLER/Default/2021/11/FT/XU/VT/135046750/orange-food-500x500.jpg"
      },
      {
        id: 24,
        title: "cereals muesli fruit nuts",
        description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        price: 46,
        discountPercentage: 16.8,
        rating: 4.94,
        stock: 113,
        brand: "fauji",
        category: "groceries",
        thumbnail: "https://images.kglobalservices.com/www.kelloggs.in/en_in/product/product_2501764/prod_img-940291_en_in_08901499010452_2311221300_p_1.png"
      },
      {
        id: 25,
        title: "Gulab Powder 50 Gram",
        description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
        price: 70,
        discountPercentage: 13.58,
        rating: 4.87,
        stock: 47,
        brand: "Dry Rose",
        category: "groceries",
        thumbnail: "https://m.media-amazon.com/images/I/71EEkrB1mrL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        id: 26,
        title: "Plant Hanger For Home",
        description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: "Boho Decor",
        category: "home-decoration",
        thumbnail: "https://m.media-amazon.com/images/I/61Dnb36XmgL._AC_UF894,1000_QL80_.jpg"
      },
      {
        id: 27,
        title: "Flying Wooden Bird",
        description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: "Flying Wooden",
        category: "home-decoration",
        thumbnail: "https://static-01.daraz.pk/p/0609fb6ae6035c83312a34bb193a4147.jpg_750x750.jpg_.webp"
      },
      {
        id: 28,
        title: "3D Embellishment Art Lamp",
        description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: "LED Lights",
        category: "home-decoration",
        thumbnail: "https://static-01.daraz.pk/p/3a8fab51307e6bb4982ab3d0f094dcc0.jpg_750x750.jpg_.webp"
      },
      {
        id: 29,
        title: "Handcraft Chinese style",
        description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: "luxury palace",
        category: "home-decoration",
        thumbnail: "https://komarofff-ksenchik-online-store.netlify.app/products/29/1.jpg"
      },
      {
        id: 30,
        title: "Key Holder",
        description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: "home-decoration",
        thumbnail: "https://static-01.daraz.pk/p/66758b63f71b931696020d9d0604725a.jpg_750x750.jpg_.webp"
      }
    ]
