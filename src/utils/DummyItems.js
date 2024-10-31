const groceryItems = [
  {
    id: 1,
    title: "Organic Apple",
    brand: "Nature's Best",
    quantities: [
      { amount: "500g", price: 3.49 },
      { amount: "1kg", price: 6.49 },
    ],
    tags: ["fruit", "organic", "healthy"],
    image:
      "https://freshindiaorganics.com/cdn/shop/files/Untitleddesign_16.png?v=1686739530",
  },
  {
    id: 2,
    title: "Red Apple",
    brand: "Apple Farms",
    quantities: [
      { amount: "250g", price: 1.99 },
      { amount: "500g", price: 3.49 },
    ],
    tags: ["fruit", "fresh", "snack"],
    image:
      "https://fruityland.co/wp-content/uploads/2021/02/Red-Delicious-FL.jpg",
  },
  {
    id: 3,
    title: "Whole Wheat Bread",
    brand: "Healthy Grains",
    quantities: [
      { amount: "500g", price: 2.29 },
      { amount: "1kg", price: 4.49 },
    ],
    tags: ["bread", "whole wheat", "fiber"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAy-WKJg5FtbwLbWZOycjV_tz9LOxGJNsGbg&s",
  },
  {
    id: 4,
    title: "Multigrain Bread",
    brand: "Bread Masters",
    quantities: [
      { amount: "250g", price: 1.99 },
      { amount: "500g", price: 3.29 },
    ],
    tags: ["bread", "multigrain", "healthy"],
    image:
      "https://sallysbakingaddiction.com/wp-content/uploads/2021/01/multigrain-bread-loaf-2.jpg",
  },
  {
    id: 5,
    title: "Almond Milk",
    brand: "Nutty Bliss",
    quantities: [
      { amount: "1L", price: 4.49 },
      { amount: "500ml", price: 2.49 },
    ],
    tags: ["dairy-free", "vegan", "healthy"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIe6Tj3Ctg1LbUaQ8gFuqwh0enLtrMf-bsw&s",
  },
  {
    id: 6,
    title: "Soy Milk",
    brand: "Soy Fresh",
    quantities: [
      { amount: "1L", price: 3.99 },
      { amount: "2L", price: 7.49 },
    ],
    tags: ["dairy-free", "plant-based", "healthy"],
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/04/soy-milk-bottle-1296-728-header.jpg?w=1155&h=1528",
  },
  {
    id: 7,
    title: "Brown Rice",
    brand: "Golden Harvest",
    quantities: [
      { amount: "1kg", price: 2.49 },
      { amount: "2kg", price: 4.49 },
    ],
    tags: ["grain", "fiber", "healthy"],
    image:
      "https://www.roopmahalrice.com/wp-content/uploads/2023/06/Everything-About-Brown-Rice-by-Roop-mahal-Rice-Brown-Rice-Nutrition-value-and-More.jpg",
  },
  {
    id: 8,
    title: "White Rice",
    brand: "Rice Delight",
    quantities: [
      { amount: "1kg", price: 3.49 },
      { amount: "5kg", price: 14.99 },
    ],
    tags: ["grain", "staple", "cooking"],
    image:
      "https://www.health.com/thmb/a8GxwWgmB5KpQW8SfW6VA7UFwaI=/722x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg",
  },
  {
    id: 9,
    title: "Olive Oil",
    brand: "Mediterranean Gold",
    quantities: [
      { amount: "500ml", price: 5.49 },
      { amount: "1L", price: 9.99 },
    ],
    tags: ["oil", "healthy fats", "cooking"],
    image:
      "https://www.womansworld.com/wp-content/uploads/2021/02/oil.jpg?quality=86&strip=all",
  },
  {
    id: 10,
    title: "Canola Oil",
    brand: "Pure Harvest",
    quantities: [
      { amount: "1L", price: 6.49 },
      { amount: "2L", price: 11.49 },
    ],
    tags: ["oil", "cooking", "low-fat"],
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/is-canola-oil-healthy-1296x728-feature.jpg?w=1155&h=1528",
  },
  {
    id: 11,
    title: "Peanut Butter",
    brand: "Nutty Goodness",
    quantities: [
      { amount: "250g", price: 3.49 },
      { amount: "500g", price: 5.99 },
    ],
    tags: ["spread", "high protein", "snack"],
    image:
      "https://www.luvele.com/cdn/shop/articles/peanut_butter_01_1024x.png?v=1565171917",
  },
  {
    id: 12,
    title: "Almond Butter",
    brand: "NutriSpread",
    quantities: [
      { amount: "250g", price: 4.49 },
      { amount: "300g", price: 5.49 },
    ],
    tags: ["spread", "vegan", "healthy fats"],
    image:
      "https://detoxinista.com/wp-content/uploads/2019/02/stirred-homemade-almond-butter.jpg",
  },
  {
    id: 13,
    title: "Chia Seeds",
    brand: "SuperFoods",
    quantities: [
      { amount: "200g", price: 4.99 },
      { amount: "500g", price: 8.99 },
    ],
    tags: ["seeds", "high fiber", "superfood"],
    image:
      "https://www.naatigrains.com/image/cache/catalog/products/NG280/Chia-Seeds_Organic-naatigrains-1000x1000.jpg",
  },
  {
    id: 14,
    title: "Flax Seeds",
    brand: "Nutri Seeds",
    quantities: [
      { amount: "150g", price: 3.99 },
      { amount: "500g", price: 6.99 },
    ],
    tags: ["seeds", "high fiber", "healthy"],
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/z/r/q/100-flax-seeds-alsi-alasi-linseed-avisa-ginjalu-agase-beeja-original-imagmzvhhanvzyem.jpeg?q=90&crop=false",
  },
  {
    id: 15,
    title: "Greek Yogurt",
    brand: "Yogurt Bliss",
    quantities: [
      { amount: "250g", price: 2.99 },
      { amount: "500g", price: 4.99 },
    ],
    tags: ["yogurt", "probiotic", "snack"],
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323169/greek-yoghurt-in-bowl.jpg",
  },
  {
    id: 16,
    title: "Low-Fat Yogurt",
    brand: "Dairy Delight",
    quantities: [
      { amount: "200g", price: 2.49 },
      { amount: "400g", price: 3.99 },
    ],
    tags: ["yogurt", "low-fat", "snack"],
    image:
      "https://cdn.shopify.com/s/files/1/1380/4099/files/Low-Fat-Yogurt_large.jpg?v=1535096816",
  },
  {
    id: 17,
    title: "Spinach",
    brand: "Fresh Farm",
    quantities: [
      { amount: "250g", price: 1.99 },
      { amount: "500g", price: 3.49 },
    ],
    tags: ["vegetable", "organic", "green"],
    image: "https://freshji.in/wp-content/uploads/2020/09/Spinach-1.jpg",
  },
  {
    id: 18,
    title: "Kale",
    brand: "Green Leaf",
    quantities: [
      { amount: "250g", price: 2.49 },
      { amount: "500g", price: 4.49 },
    ],
    tags: ["vegetable", "superfood", "fiber"],
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/7/YH/NC/JZ/9835370/kale-500x500.jpeg",
  },
  {
    id: 19,
    title: "Eggs",
    brand: "Farm Fresh",
    quantities: [
      { amount: "12 pack", price: 3.49 },
      { amount: "6 pack", price: 2.49 },
    ],
    tags: ["protein", "dairy", "organic"],
    image:
      "https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216369366.jpeg",
  },
  {
    id: 20,
    title: "Free-Range Eggs",
    brand: "Happy Hens",
    quantities: [
      { amount: "12 pack", price: 4.49 },
      { amount: "6 pack", price: 3.49 },
    ],
    tags: ["protein", "dairy", "free-range"],
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/8/WS/EK/EO/96513334/product-jpeg-500x500.jpg",
  },
  {
    id: 21,
    title: "Tomato Ketchup",
    brand: "Tomato Delight",
    quantities: [
      { amount: "500ml", price: 2.49 },
      { amount: "1L", price: 4.49 },
    ],
    tags: ["condiment", "sauce", "snack"],
    image:
      "https://www.allrecipes.com/thmb/xL_49kh1as-oMjV-MzLOc0W6bZ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/232397-homemade-ketchup-ddmfs-28-4x339-2x1-f7eec99de30547a68f0874309605a916.jpg",
  },
  {
    id: 22,
    title: "Chili Sauce",
    brand: "Spicy Delight",
    quantities: [
      { amount: "250ml", price: 2.49 },
      { amount: "500ml", price: 4.49 },
    ],
    tags: ["condiment", "sauce", "spicy"],
    image:
      "https://cdn.sanity.io/images/2r0kdewr/production/2036ef5110ea590940a18dc9b07ce862d2fed24d-500x500.jpg",
  },
  {
    id: 23,
    title: "Oregano",
    brand: "Herb Garden",
    quantities: [
      { amount: "50g", price: 1.99 },
      { amount: "100g", price: 3.49 },
    ],
    tags: ["spice", "herb", "cooking"],
    image:
      "https://www.meviveinternational.com/data/storage/app/images/product/dried-oregano-leaves-3719.webp",
  },
  {
    id: 24,
    title: "Basil",
    brand: "Herb Master",
    quantities: [
      { amount: "50g", price: 1.99 },
      { amount: "100g", price: 3.49 },
    ],
    tags: ["spice", "herb", "cooking"],
    image:
      "https://www.veggycation.com.au/siteassets/veggycationvegetable/basil.jpg",
  },
  {
    id: 25,
    title: "Black Pepper",
    brand: "Spice World",
    quantities: [
      { amount: "100g", price: 1.99 },
      { amount: "250g", price: 3.49 },
    ],
    tags: ["spice", "flavor", "cooking"],
    image:
      "https://organicmandya.com/cdn/shop/files/Blackpepperpowder_f2dc63da-da83-48be-ac0a-da243fd2ad3a.jpg?v=1718778111&width=1024",
  },
  {
    id: 26,
    title: "Green Tea",
    brand: "Tea Time",
    quantities: [
      { amount: "20 bags", price: 2.49 },
      { amount: "40 bags", price: 4.49 },
    ],
    tags: ["tea", "herbal", "healthy"],
    image:
      "https://static.wixstatic.com/media/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/64b42c_8f336462892749bf9b4b5ae0becd4905~mv2.jpg",
  },
  {
    id: 27,
    title: "Coffee",
    brand: "Café Aroma",
    quantities: [
      { amount: "250g", price: 4.99 },
      { amount: "500g", price: 8.99 },
    ],
    tags: ["coffee", "beverage", "energy"],
    image:
      "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg?w=360",
  },
  {
    id: 28,
    title: "Dark Chocolate",
    brand: "Sweet Indulgence",
    quantities: [
      { amount: "100g", price: 2.49 },
      { amount: "200g", price: 4.49 },
    ],
    tags: ["snack", "chocolate", "sweet"],
    image:
      "https://www.alphafoodie.com/wp-content/uploads/2020/06/dark-chocolate-bar-square.jpeg",
  },
  {
    id: 29,
    title: "Granola Bar",
    brand: "Healthy Snack",
    quantities: [
      { amount: "6 pack", price: 3.99 },
      { amount: "12 pack", price: 6.99 },
    ],
    tags: ["snack", "healthy", "energy"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNW0OiThc0ITVgmYBcfXY_43t5pHgOxpjvA&s",
  },
  {
    id: 30,
    title: "Protein Powder",
    brand: "Fitness Fuel",
    quantities: [
      { amount: "500g", price: 29.99 },
      { amount: "1kg", price: 49.99 },
    ],
    tags: ["protein", "supplement", "fitness"],
    image:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/10073/protein-powders.jpg",
  },
  {
    id: 31,
    title: "Vegan Protein Powder",
    brand: "Plant Power",
    quantities: [
      { amount: "500g", price: 34.99 },
      { amount: "1kg", price: 59.99 },
    ],
    tags: ["protein", "vegan", "supplement"],
    image:
      "https://www.health.com/thmb/3-NqQK3PRMjMO0oNdgU_Jj0WYxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hlt-detail-natural-force-organic-whey-protein-powder-jjuliao-8270-be6dcbb1c7f34e10b8098438a65881f9.jpeg",
  },
  {
    id: 32,
    title: "Coconut Water",
    brand: "Tropical Fresh",
    quantities: [
      { amount: "500ml", price: 2.99 },
      { amount: "1L", price: 4.99 },
    ],
    tags: ["beverage", "healthy", "refreshing"],
    image:
      "https://www.health.com/thmb/j1-xeUoRgeKYaI5s5Zl_S-dQIJY=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1491537674-6372fe5629dc4a25b08caf82605293de.jpg",
  },
  {
    id: 33,
    title: "Energy Drink",
    brand: "Boost Up",
    quantities: [
      { amount: "250ml", price: 1.49 },
      { amount: "500ml", price: 2.49 },
    ],
    tags: ["beverage", "energy", "refreshing"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKdLR7ETxANxiJd78kmqYM7aqgg6o5P2KyA&s",
  },
  {
    id: 34,
    title: "Bottled Water",
    brand: "sky splash",
    quantities: [
      { amount: "500ml", price: 0.99 },
      { amount: "1L", price: 1.49 },
    ],
    tags: ["beverage", "hydration", "refreshing"],
    image: "https://skysplash.in/assets/bottle-wave-CgxtzYyq.png",
  },
  {
    id: 35,
    title: "Frozen Vegetables",
    brand: "Green Freezer",
    quantities: [
      { amount: "500g", price: 2.99 },
      { amount: "1kg", price: 4.99 },
    ],
    tags: ["vegetable", "frozen", "healthy"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1hLCVcE1S1jVrOkUi3dUtFRkborMv3Kbpg&s",
  },
  {
    id: 36,
    title: "Frozen Fruits",
    brand: "Tropical Freezer",
    quantities: [
      { amount: "500g", price: 3.49 },
      { amount: "1kg", price: 5.49 },
    ],
    tags: ["fruit", "frozen", "healthy"],
    image:
      "https://www.eatingwell.com/thmb/CkYmSevtdSZsJg8tfjLj1PlqTZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Frozen-Fruit-You-Should-be-Eating-for-Weight-Loss-According-to-a-Dietitian-5e51addd46014e559ddc27c546e0f2b8.jpg",
  },
  {
    id: 37,
    title: "Snack Chips",
    brand: "Crispy Treats",
    quantities: [
      { amount: "200g", price: 1.99 },
      { amount: "500g", price: 3.49 },
    ],
    tags: ["snack", "crispy", "savory"],
    image:
      "https://ganguram.com/cdn/shop/files/plain-potato-chips.png?v=1709113575",
  },
  {
    id: 38,
    title: "Rice Crackers",
    brand: "Crunchy Bites",
    quantities: [
      { amount: "100g", price: 2.49 },
      { amount: "200g", price: 3.49 },
    ],
    tags: ["snack", "gluten-free", "healthy"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YwvPbmqhkz76ZDugJbfxoVanl6lbPwYyIQ&s",
  },
  {
    id: 39,
    title: "Soda",
    brand: "Fizzy Drink",
    quantities: [
      { amount: "500ml", price: 1.49 },
      { amount: "1L", price: 2.49 },
    ],
    tags: ["beverage", "refreshing", "sweet"],
    image:
      "https://bv-04.bubblevault.com/3014f7e3-1662-45ba-8468-6fc29ba8b08c/81814e2b-b2b0-ea11-aa80-0686039f5a82/81814e2b-b2b0-ea11-aa80-0686039f5a82.jpg?w=720&h=480&bgcolor=black",
  },
  {
    id: 40,
    title: "Fruit Juice",
    brand: "Juice World",
    quantities: [
      { amount: "500ml", price: 2.49 },
      { amount: "1L", price: 3.99 },
    ],
    tags: ["beverage", "fruit", "refreshing"],
    image:
      "https://www.healthyfood.com/wp-content/uploads/2017/03/How-to-choose-fruit-juices-and-drinks.jpg",
  },
];

export default groceryItems;
