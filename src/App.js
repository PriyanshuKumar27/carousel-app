import "./styles.css";
import { Slider } from "./components/Slider/Slider";

export default function App() {
  const images = [
    {
      image_url:
        "https://images.unsplash.com/photo-1696448442843-f1fd43dcb758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
      caption: "Image 1",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696275269170-59086c219607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      caption: "Image 2",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696343412041-9cd23133fe93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
      caption: "Image 3",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696321832508-ba1e671f4406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      caption: "Image 4",
    },
    {
      image_url:
        "https://plus.unsplash.com/premium_photo-1692641346419-1e8c011fbe77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      caption: "Image 5",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696229250077-bf5e4d7f7106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      caption: "Image 6",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1695765335016-312282ff22f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      caption: "Image 7",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1674231262658-9a98bc841270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      caption: "Image 8",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696085709531-81fba5dbcffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      caption: "Image 9",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696359031609-2ae30782b28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      caption: "Image 10",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1696247834326-b715766d49c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      caption: "Image 11",
    },
  ];
  return (
    <div className="App">
      <Slider images={images} />
    </div>
  );
}
