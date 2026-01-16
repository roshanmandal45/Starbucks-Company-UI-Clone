import React from "react";

const Services = () => {
  const menuItems = [
    { id: 1, category: "Fan Favourites", name: "Caffè Latte", image: "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww", alt: "Caffè Latte" },
    { id: 2, name: "Caramel Macchiato", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Caramel Macchiato" },
    { id: 3, name: "Pumpkin Spice Latte", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Pumpkin Spice Latte" },
    { id: 4, name: "Vanilla Sweet Cream", image: "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D", alt: "Vanilla Sweet Cream Cold Brew" },
    { id: 5, category: "Drinks", name: "Cappuccino", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtzfGVufDB8fDB8fHww", alt: "Cappuccino" },
    { id: 6, name: "Flat White", image: "https://plus.unsplash.com/premium_vector-1709211714977-a2f4a7f021b2?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", alt: "Flat White" },
    { id: 7, name: "Pike Place Roast", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmtzfGVufDB8fDB8fHww", alt: "Pike Place Roast" },
    { id: 8, name: "Iced Caffè Americano", image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbmtzfGVufDB8fDB8fHww", alt: "Iced Caffè Americano" },
    { id: 9, name: "Cold Brew", image: "https://images.unsplash.com/photo-1592858167090-2473780d894d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpbmtzfGVufDB8fDB8fHww", alt: "Cold Brew" },
    { id: 10, name: "Nitro Cold Brew", image: "https://plus.unsplash.com/premium_photo-1669680785172-919af9458e37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpbmtzfGVufDB8fDB8fHww", alt: "Nitro Cold Brew" },
    { id: 11, category: "Food", name: "Egg Bites (Sous Vide)", image: "https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D", alt: "Egg Bites" },
    { id: 12, name: "Bacon, Gouda & Egg Sandwich", image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D", alt: "Bacon, Gouda & Egg Sandwich" },
    { id: 13, name: "Butter Croissant", image: "https://plus.unsplash.com/premium_photo-1668095398227-c943ddb69d89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D", alt: "Butter Croissant" },
    { id: 14, name: "Oatmeal", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHN8ZW58MHx8MHx8fDA%3D", alt: "Oatmeal" },
    { id: 15, category: "At Home Coffee", name: "House Blend", image: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhcmJ1Y2t8ZW58MHx8MHx8fDA%3D", alt: "House Blend" },
    { id: 16, name: "Pike Place Roast", image: "https://images.unsplash.com/photo-1589476993333-f55b84301219?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhcmJ1Y2t8ZW58MHx8MHx8fDA%3D", alt: "Pike Place Roast (bag)" },
    { id: 17, name: "Veranda Blend", image: "https://images.unsplash.com/photo-1522039906375-50d8e4d9550a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0YXJidWNrfGVufDB8fDB8fHww", alt: "Veranda Blend" },
    { id: 18, name: "Espresso Roast", image: "https://plus.unsplash.com/premium_photo-1681711651128-11bb40474ab6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHN0YXJidWNrfGVufDB8fDB8fHww", alt: "Espresso Roast" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-3xl mb-6">Menu</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
            <a href="https://www.starbucks.com/menu/product/28775/iced">
          <div key={item.id} className="flex flex-col items-center  rounded-lg shadow p-4">
            <img src={item.image} alt={item.alt} className="w-40 h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 object-cover rounded-full mb-4" />
            <h2 className="text-xl text-gray-900 font-semibold">{item.name}</h2>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
