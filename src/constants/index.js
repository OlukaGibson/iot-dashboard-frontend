import ProductImage1 from "../laptops/brand/product1.png";
import ProductImage2 from "../laptops/brand/product2.png";
import ProductImage3 from "../laptops/brand/product3.png";
import ProductImage4 from "../laptops/gaming/gamingpc4.jpeg";
import ProductImage5 from "../laptops/lightweight/lightweightPc1.jpeg"
import ProductImage6 from "../laptops/brand/dellpc1.jpeg"
import ProductImage7 from "../laptops/brand/microsoftpc1.jpeg"
import ProductImage8 from "../laptops/brand/lenovopc1.png"
import ProductImage9 from "../laptops/lowbudget/lowbudgetpc1.jpeg"
import ProductImage10 from "../laptops/brand/asuspc1.png"
import ProductImage11 from "../laptops/highbudget/highbudgetpc1.jpeg"
import ProductImage12 from "../laptops/engineering/engineeringpc1.jpeg"
import ProductImage13 from "../laptops/brand/acerpc1.jpeg"

export const WELCOME_MESSAGE = "The definition of latest technology for property monitoring and management. Get the latest technology in market today.";

export const NEW_PRODUCTS_INTRO = "Series of products intergratable with day to day operations for effecient property management.";

export const BRANDS = ["Microsoft", "Hewlett-Packard HP", "Apple", "Lenovo", "Dell", "Asus", "Samsung", "Toshiba", "Acer"];
export const SERIES = ["Surface Pro", "EliteBook", "MacBook Pro", "ThinkPad", "Latitude", "Swift", "Galaxy", "Satellite", "ZenBook"];
export const USAGE = ["Office", "Graphics Design", "Low budget", "Light Weight", "Gaming", "High budget", "Engineering"];
export const TYPE = ["Laptop", "Desktop", "Server"];
export const CONDITION = ["Brand new", "Refurbished", "Used"];
export const RAM = [4, 8, 16, 32, 64, 128, 256];
export const PROCESSOR = ["Dual core", "i3", "i5", "i7", "i9", "Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9", "M1", "M2", "M3"];
export const STORAGE = [128, 256, 500, 512, 1, 2,];
export const SCREEN_SIZE = [12, 13, 14, 15, 16, 17];
export const STORAGE_TYPE = ["SSD", "HDD", "Hybrid"];
export const OPERATING_SYSTEM = ["Windows 10", "Windows 11", "Mac OS", "Linux"];
export const GRAPHICS_CARD_AVAILABLE = ["Yes", "No"];
export const GRAPHICS_CARD = ["Nvidia", "AMD", "Intel"];
export const GRAPHICS_CARD_SIZE = [2, 4, 6, 8, 12, 16];
export const GENERATION = ["5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];
export const DESCRIPTION = [
    "Unleash your potential with HP. Sleek design, blazing speed, immersive displays for work and entertainment", //HP description
    "Dominate the game with ultimate power. Immerse yourself in stunning visuals, with unmacthed speed.", //Gaming description
    "Think different. Experience seamless elegance. Apple. Innovation that inspires. Elevate your world.", //Apple description
    "Unleash your potential on the go. Lightweight, powerful, and portable. Work, play, or create anywhere.", //Lightweight description
    "Experience the best of both Dell worlds. Power and performance. Unleash your potential.", //Dell description
    "Create magic today! Our design computers are your playground. Powerful, fun, and perfect for turning imagination into reality.", //Graphics design description
    "Power meets style. Sleek designs, lightning-fast speeds. Experience the future of computing. Upgrade your world.", //Lenovo description
    "Experience quality without the hefty price tag. Our low-budget computers deliver performance without compromise.", //Low budget description
    "Power meets style. Sleek designs, lightning-fast speeds. Experience the future of computing. Upgrade your world.", //Asus description
    "Indulge in ultimate performance. Our high-end computers redefine speed and power. Experience computing excellence without compromise.", //High budget description
    "Designed for the minds that shape tomorrow. Our computers are built for brilliance. Tackle complex problems with speed and precision. Engineer your future.", //Engineering description
    "Precision meets power. Sleek designs, lightning-fast performance. Elevate your productivity. Experience the future of computing.", //Acer description
];

export const COMPUTERDETAILS = [
    {
        id : 1,
        brand : BRANDS[0],
        series : SERIES[0],
        deviceName : "Surface Pro 7",
        usage : USAGE[0],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage1,
        description : DESCRIPTION[0]
    },
    {
        id : 2,
        brand : BRANDS[1],
        series : SERIES[1],
        deviceName : "HP EliteBook X360 1030",
        usage : USAGE[1],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage2,
        description : DESCRIPTION[1]
    },
    {
        id : 3,
        brand : BRANDS[2],
        series : SERIES[2],
        deviceName : "MacBook Pro 13",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[2],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage3,
        description : DESCRIPTION[2]
    },
    {
        id : 4,
        brand : BRANDS[3],
        series : SERIES[3],
        deviceName : "ThinkPad X1 Carbon",
        usage : USAGE[3],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage4,
        description : DESCRIPTION[0]
    },
    {
        id : 5,
        brand : BRANDS[4],
        series : SERIES[4],
        deviceName : "Latitude 9510",
        usage : USAGE[0],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage5,
        description : DESCRIPTION[1]
    },
    {
        id : 6,
        brand : BRANDS[5],
        series : SERIES[5],
        deviceName : "Swift 3",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage6,
        description : DESCRIPTION[2]
    },
    {
        id : 7,
        brand : BRANDS[6],
        series : SERIES[6],
        deviceName : "Galaxy Book Flex 2",
        usage : USAGE[3],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage7,
        description : DESCRIPTION[0]
    },
    {
        id : 8,
        brand : BRANDS[7],
        series : SERIES[7],
        deviceName : "Satellite Pro C50",
        usage : USAGE[0],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage8,
        description : DESCRIPTION[1]
    },
    {
        id : 9,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 10,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 11,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 12,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 13,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 14,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 15,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
    {
        id : 16,
        brand : BRANDS[8],
        series : SERIES[8],
        deviceName : "ZenBook 14",
        usage : USAGE[2],
        type : TYPE[0],
        condition : CONDITION[0],
        ram : RAM[2],
        processor : PROCESSOR[3],
        storage : STORAGE[1],
        screenSize : SCREEN_SIZE[0],
        storageType : STORAGE_TYPE[0],
        operatingSystem : OPERATING_SYSTEM[0],
        graphicsCardAvailable : GRAPHICS_CARD_AVAILABLE[0],
        graphicsCard : GRAPHICS_CARD[0],
        graphicsCardSize : GRAPHICS_CARD_SIZE[1],
        generation : GENERATION[6],
        price : 1500000,
        image: ProductImage9,
        description : DESCRIPTION[2]
    },
]

export const CATEGORIES = [
    {
      id: 1,
      usage : BRANDS[1],
      description : DESCRIPTION[0],
      image: ProductImage3,
    },
    {
      id: 2,
      usage : USAGE[4],
      description : DESCRIPTION[1],
      image: ProductImage4,
    },
    {
      id: 3,
      usage : BRANDS[2],
      description : DESCRIPTION[2],
      image: ProductImage1,
    },
    {
      id: 4,
      usage : USAGE[3],
      description : DESCRIPTION[3],
      image: ProductImage5,
    },
    {
      id: 5,
      usage : BRANDS[4],
      description : DESCRIPTION[4],
      image: ProductImage6,
    },
    {
      id: 6,
      usage : USAGE[1],
      description : DESCRIPTION[5],
      image: ProductImage7,
    },
    {
      id: 7,
      usage : BRANDS[3],
      description : DESCRIPTION[6],
      image: ProductImage8,
    },
    {
      id: 8,
      usage : USAGE[2],
      description : DESCRIPTION[7],
      image: ProductImage9,
    },
    {
      id: 9,
      usage : BRANDS[5],
      description : DESCRIPTION[8],
      image: ProductImage10,
    },
    {
      id: 10,
      usage : USAGE[5],
      description : DESCRIPTION[9],
      image: ProductImage11,
    },
    {
      id: 11,
      usage : USAGE[6],
      description : DESCRIPTION[10],
      image: ProductImage12,
    }
  ];