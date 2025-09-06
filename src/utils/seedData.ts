// Sample data to demonstrate the application functionality
export const seedProducts = () => {
  const existingProducts = localStorage.getItem('vendor_products');
  if (existingProducts && JSON.parse(existingProducts).length > 0) {
    return; // Don't seed if products already exist
  }

  const sampleProducts = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      quantity: 150,
      price: 29.99,
      description: "High-quality over-ear wireless headphones with noise cancellation. Overstock from cancelled retail order. Brand new in original packaging.",
      vendorId: "vendor1",
      vendorName: "TechSurplus Co.",
      dateAdded: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: "2", 
      name: "Organic Cotton T-Shirts",
      category: "Clothing & Apparel",
      quantity: 200,
      price: 8.50,
      description: "Premium organic cotton t-shirts in various sizes (S-XL). Excess inventory from fashion brand. Multiple colors available including white, black, and navy.",
      vendorId: "vendor2",
      vendorName: "FashionPlus Wholesale",
      dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: "3",
      name: "LED Desk Lamps",
      category: "Home & Garden", 
      quantity: 75,
      price: 18.75,
      description: "Modern adjustable LED desk lamps with USB charging port. Energy efficient with 3 brightness levels. Perfect for home office or study space.",
      vendorId: "vendor3",
      vendorName: "HomeDecor Solutions",
      dateAdded: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: "4",
      name: "Fitness Resistance Bands Set",
      category: "Sports & Outdoors",
      quantity: 100,
      price: 12.99,
      description: "Complete resistance band workout set with 5 different resistance levels. Includes door anchor, handles, and ankle straps. Great for home fitness.",
      vendorId: "vendor4", 
      vendorName: "SportGear Surplus",
      dateAdded: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: "5",
      name: "Stainless Steel Water Bottles",
      category: "Home & Garden",
      quantity: 250,
      price: 9.99,
      description: "Insulated stainless steel water bottles (500ml). Keeps drinks cold for 24 hours, hot for 12 hours. BPA-free with leak-proof design.",
      vendorId: "vendor5",
      vendorName: "EcoProducts Ltd",
      dateAdded: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: "6",
      name: "Wireless Phone Chargers",
      category: "Electronics",
      quantity: 80,
      price: 15.50,
      description: "Fast wireless charging pads compatible with iPhone and Android. 10W fast charging with LED indicator. Includes USB-C cable.",
      vendorId: "vendor1",
      vendorName: "TechSurplus Co.",
      dateAdded: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];

  localStorage.setItem('vendor_products', JSON.stringify(sampleProducts));
};

export const seedUsers = () => {
  const existingUsers = localStorage.getItem('vendor_users');
  if (existingUsers && JSON.parse(existingUsers).length > 0) {
    return; // Don't seed if users already exist
  }

  const sampleUsers = [
    {
      id: "vendor1",
      name: "TechSurplus Co.",
      email: "demo@techsurplus.com",
      password: "demo123"
    },
    {
      id: "vendor2", 
      name: "FashionPlus Wholesale",
      email: "demo@fashionplus.com",
      password: "demo123"
    },
    {
      id: "vendor3",
      name: "HomeDecor Solutions", 
      email: "demo@homedecor.com",
      password: "demo123"
    }
  ];

  localStorage.setItem('vendor_users', JSON.stringify(sampleUsers));
};