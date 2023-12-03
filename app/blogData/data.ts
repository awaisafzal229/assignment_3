import PhoneImg from "../../public/smart phone.jpg";
import CameraImg from "@/public/camera.jpg";
import HeadsetImg from "@/public/headset.jpg";
import GraphicCardImg from "@/public/graphic card.jpg";
import { StaticImageData } from "next/image";

interface blogType {
  img: StaticImageData;
  title: string;
  slug: string;
  description: string;
}

export const BlogData: blogType[] = [
  {
    img:PhoneImg,
    title: "Smart Phone",
    slug: "SmartPhone",
    description:
      "One of the leading smart phone in the entire world for sale just for 5k$.",
  },
  {
    img:CameraImg,
    title: "Camera",
    slug: "Camera",
    description:
      "One of the leading Camera in the entire world for sale just for 10k$",
  },
  {
    img:HeadsetImg,
    title: "Headset",
    slug: "Headset",
    description:
      "One of the leading Headset in the entire world for sale just for 1k$",
  },
  {
    img:GraphicCardImg,
    title: "Graphic Card",
    slug: "GraphicCard",
    description:
      "One of the leading Graphic Card in the entire world for sale just for 3k$",
  },
];
