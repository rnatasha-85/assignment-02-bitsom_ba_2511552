// OP1: insertMany() — insert all 3 documents from sample_documents.json

db.ecommerce.insertMany([
{
  "electronics": [
    {
      "product_id": "E2001",
      "product_name": "Portable Bluetooth Speaker SRS-XB13",
      "brand": "Sony",
      "category": "Electronics",
      "sub_category": "Bluetooth Speakers",
      "price": 3490,
      "currency": "INR",
      "specifications": {
        "audio": {
          "output_power_watts": 5,
          "frequency_response": "20Hz-20kHz",
          "driver_size_mm": 46
        },
        "connectivity": {
          "bluetooth_version": "5.0",
          "range_meters": 10,
          "supported_profiles": ["A2DP", "AVRCP", "HFP"]
        },
        "battery": {
          "capacity_mah": 1500,
          "playback_time_hours": 16,
          "charging_time_hours": 4.5,
          "charging_port": "USB Type-C"
        },
        "build": {
          "water_resistance": "IP67",
          "material": ["Plastic", "Rubber"],
          "color_options": ["Black", "Blue", "Red"]
        }
      },
      "warranty": {
        "period_months": 12,
        "type": "Manufacturer"
      },
      "inventory": {
        "stock_quantity": 120,
        "warehouses": [
          {
            "location": "Bangalore",
            "quantity": 70
          },
          {
            "location": "Delhi",
            "quantity": 50
          }
        ]
      }
    }
  ]
},
{
  "clothing": [
    {
      "product_id": "C3001",
      "product_name": "Women's Cotton Printed Salwar Suit Set",
      "brand": "Biba",
      "category": "Clothing",
      "sub_category": "Salwar Suit",
      "gender": "Women",
      "price": 2499,
      "currency": "INR",
      "set_components": [
        "Kurta",
        "Salwar",
        "Dupatta"
      ],
      "variants": [
        {
          "sku": "C3001-PNK-M",
          "size": "M",
          "color": "Pink",
          "stock_quantity": 25,
          "dimensions_cm": {
            "chest": 96,
            "waist": 88,
            "hip": 102,
            "length": 120
          }
        },
        {
          "sku": "C3001-PNK-L",
          "size": "L",
          "color": "Pink",
          "stock_quantity": 30,
          "dimensions_cm": {
            "chest": 102,
            "waist": 94,
            "hip": 108,
            "length": 122
          }
        }
      ],
      "attributes": {
        "fabric": {
          "kurta": "Cotton",
          "salwar": "Cotton Blend",
          "dupatta": "Chiffon"
        },
        "pattern": "Floral Print",
        "fit": "Regular",
        "occasion": [
          "Casual",
          "Festive"
        ],
        "work_type": "Block Print",
        "neck_style": "Round Neck",
        "sleeve_type": "3/4 Sleeve",
        "transparency": "Opaque"
      },
      "pricing_details": {
        "mrp": 2999,
        "selling_price": 2499,
        "discount_percent": 16.7
      },
      "inventory": {
        "total_stock": 55,
        "warehouses": [
          {
            "location": "Bangalore",
            "quantity": 30
          },
          {
            "location": "Delhi",
            "quantity": 25
          }
        ]
      }
    }
  ]
},
{
  "groceries": [
    {
      "product_id": "G4001",
      "product_name": "Tata Sampann Almonds (Badam)",
      "brand": "Tata Sampann",
      "category": "Groceries",
      "sub_category": "Dry Fruits",
      "price": 750,
      "currency": "INR",
      "packaging": {
        "type": "Pouch",
        "net_weight": {
          "value": 500,
          "unit": "g"
        },
        "resealable": true
      },
      "quality_attributes": {
        "origin": "California",
        "grade": "Premium",
        "is_organic": false,
        "is_gluten_free": true
      },
      "nutritional_info_per_100g": {
        "energy_kcal": 579,
        "protein_g": 21.2,
        "fat_g": 49.9,
        "carbohydrates_g": 21.6,
        "fiber_g": 12.5
      },
      "ingredients": [
        "Almonds"
      ],
      "allergen_info": [
        "Contains tree nuts"
      ],
      "certifications": [
        "FSSAI Certified"
      ],
      "shelf_life": {
        "manufacturing_date": "2026-01-15",
        "expiry_date": "2026-07-14",
        "best_before_months": 6,
        "storage_instructions": [
          "Store in a cool and dry place",
          "Keep airtight after opening"
        ]
      },
      "pricing_details": {
        "mrp": 850,
        "selling_price": 750,
        "discount_percent": 11.76
      },
      "supplier": {
        "supplier_id": "S1201",
        "name": "Tata Consumer Products Distributor",
        "location": "Bangalore"
      },
      "inventory": {
        "total_stock": 300,
        "batches": [
          {
            "batch_id": "ALM001",
            "quantity": 180,
            "expiry_date": "2026-07-14"
          },
          {
            "batch_id": "ALM002",
            "quantity": 120,
            "expiry_date": "2026-08-01"
          }
        ],
        "warehouses": [
          {
            "location": "Bangalore",
            "quantity": 180
          },
          {
            "location": "Mumbai",
            "quantity": 120
          }
        ]
      }
    }
  ]
}
]
)




// OP2: find() — retrieve all Electronics products with price > 20000
db.ecommerce.find(
  {
    "electronics.price": { $gt: 20000 }
  }
)




// OP3: find() — retrieve all Groceries expiring before 2025-01-01

db.ecommerce.find(
  {
    "groceries.shelf_life.expiry_date": { $lt: "2025-01-01" }
  }
)




// OP4: updateOne() — add a "discount_percent" field to a specific product
db.ecommerce.updateOne(
  {
    "electronics.product_id": "E2001"
  },
  {
    $set: {
      "electronics.$.discount_percent": 10
    }
  }
)




// OP5: createIndex() — create an index on category field and explain why
db.ecommerce.createIndex({ "clothing.category": 1 })

//Why Create an Index?
//Without index:MongoDB scans every document i.e. collection scan
//With index: MongoDB directly jumps to matching records
//Index makes this much faster, especially with large data.
//Index avoids extra sorting in memory.
