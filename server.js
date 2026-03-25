import express from "express" // npm i express
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let listings = [
    {
        id: 1,
        name: "Marek párek",
        price: 9300,
        description: "Marek Párek sigma edice + bonus.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/marek_sigma.png?raw=true"
    },
    {
        id: 2,
        name: "Jirka Sirka",
        price: 11400,
        description: "Jirka Sirka bodygurad (Tri poloski edice)",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/image-removebg-preview.png?raw=true"
    },
    {
        id: 2,
        name: "Radek Zadek",
        price: 6700,
        description: "Radek Zadek veselá edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/1f61d2f3-7248-42e9-b937-a11af14291aa.jpg?raw=true"
    },
    {
        id: 2,
        name: "Kryštof Kacko896",
        price: 4600,
        description: "Kryštof Kacko896 usměvavá edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/5769480464539258059.jpg?raw=true"
    },
    {
        id: 2,
        name: "Kryštof Sneaky",
        price: 5900,
        description: "Kryštof Kacko896 sneaky scary edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/644244057_1583223589456776_3629360482997066314.png?raw=true"
    },
    {
        id: 2,
        name: "Kryštof Girl",
        price: 8600,
        description: "Kryštof Kacko896 dancing girl edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/ezgif-440294bb41ae5a74.gif?raw=true"
    },
    {
        id: 2,
        name: "Jirka Sirka Edit",
        price: 8600,
        description: "Jirka Sirka in edit edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/ezgif-7ca160c9209e73f9.gif?raw=true"
    },
    {
        id: 2,
        name: "Hopon CS2",
        price: 146800,
        description: "Hopon CS2 Kirill edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/Snimek_obrazovky_2026-01-29_2049081.png?raw=true"
    },
    {
        id: 2,
        name: "Krystof Babuška",
        price: 9,
        description: "Krystof Kacko896 babuška edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/638353584_1539286540475457_2549927676765281952_n.jpg?raw=true"
    },
    {
        id: 2,
        name: "CS2 Retardi - Full Video",
        price: 58000,
        description: "CS2 Retardi - Full Video. feat Kodytek.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/mS6sM3lSEF4-MQ.jpg?raw=true"
    },
    {
        id: 2,
        name: "Funny Snails",
        price: 190000,
        description: "Funny Snails + 1 zdarma.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/obr%C3%A1zek_2026-03-25_114003355.png?raw=true"
    },
]

let cart = [];

app.get("/api/listings", (req, res) => res.json(listings));
app.get("/api/cart", (req, res) => res.json(cart));

app.post("/api/cart", (req, res) => {
    const product = req.body;
    const itemWithId = { ...product, cartId: Date.now() };
    cart.push(itemWithId);
    res.status(201).json(itemWithId);
});

app.delete("/api/cart/:cartId", (req, res) => {
    const { cartId } = req.params;
    cart = cart.filter(item => item.cartId !== parseInt(cartId));
    res.json({ message: "Položka odebrána", cart });
});

app.listen("3002", () => console.log("Tovje máma běží na portu 3002"));
