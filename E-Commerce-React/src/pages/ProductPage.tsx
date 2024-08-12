/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HeartIcon, StarIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import products from "../constants/Prodcuts.json";
import NotFoundPage from "./NotFoundPage";
import AddToCartButton from "@/components/cart/AddToCartButton";
import AddToWishlistButton from "@/components/wishlist/AddToWishlistButton";
import { useRef } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const AddToCartRef = useRef<HTMLButtonElement | undefined>();
  const AddToWishlistRef = useRef<HTMLButtonElement | undefined>();
  const productToFind = products.find((product: any) => product.id == id!);
  if (!productToFind) {
    return <NotFoundPage />;
  }

  return (
    <div className="container">
      <div className=" grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-10 items-start">
          <Carousel className="w-full rounded-lg overflow-hidden">
            <CarouselContent className="md:mt-20">
              <CarouselItem>
                <img
                  src={productToFind.imageSrc}
                  alt="Product Image"
                  className="object-contain size-[300px] mx-auto"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-5 md:gap-3">
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={productToFind.imageSrc}
                alt="Preview thumbnail"
                width={100}
                height={150}
                className="aspect-[5/6] object-contain "
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={productToFind.imageSrc}
                alt="Preview thumbnail"
                width={100}
                height={150}
                className="aspect-[5/6] object-contain "
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={productToFind.imageSrc}
                alt="Preview thumbnail"
                width={100}
                height={150}
                className="aspect-[5/6] object-contain "
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={productToFind.imageSrc}
                alt="Preview thumbnail"
                width={100}
                height={150}
                className="aspect-[5/6] object-contain "
              />
              <span className="sr-only">View Image 4</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src={productToFind.imageSrc}
                alt="Preview thumbnail"
                width={100}
                height={150}
                className="aspect-[5/6] object-contain "
              />
              <span className="sr-only">View Image 5</span>
            </button>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {productToFind.productName}
            </h1>
            <div>
              <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">
                (12 reviews)
              </span>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <Label htmlFor="color" className="text-base">
                Color
              </Label>
              <RadioGroup
                id="color"
                defaultValue="black"
                className="flex items-center gap-2"
              >
                <Label
                  htmlFor="color-black"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  Black
                </Label>
                <Label
                  htmlFor="color-white"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-white" value="white" />
                  White
                </Label>
                <Label
                  htmlFor="color-blue"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="color-blue" value="blue" />
                  Blue
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="size" className="text-base">
                Size
              </Label>
              <RadioGroup
                id="size"
                defaultValue="m"
                className="flex items-center gap-2"
              >
                <Label
                  htmlFor="size-xs"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  htmlFor="size-s"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-s" value="s" />S
                </Label>
                <Label
                  htmlFor="size-m"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-m" value="m" />M
                </Label>
                <Label
                  htmlFor="size-l"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-l" value="l" />L
                </Label>
                <Label
                  htmlFor="size-xl"
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity" className="text-base">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                type="button"
                onClick={() => AddToCartRef?.current?.click()}
              >
                Add To Cart
                <div className="hidden">
                  <AddToCartButton
                    productId={productToFind.id}
                    AddToCartRef={AddToCartRef}
                  />
                </div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                type="button"
                onClick={() => AddToWishlistRef?.current?.click()}
              >
                <HeartIcon className="w-4 h-4 mr-2" />
                <div className="hidden">
                  <AddToWishlistButton
                    id={productToFind.id}
                    AddToWishlistRef={AddToWishlistRef}
                  />
                </div>
                Add to wishlist
              </Button>
            </div>
          </form>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and
              comfort for the modern individual. This tee is crafted with a
              meticulous composition of 60% combed ringspun cotton and 40%
              polyester jersey, ensuring a soft and breathable fabric that feels
              gentle against the skin.
            </p>
            <p>
              The design of the Acme Prism T-Shirt is as striking as it is
              comfortable. The shirt features a unique prism-inspired pattern
              that adds a modern and eye-catching touch to your ensemble.
            </p>
          </div>
          <div className="grid gap-4">
            <h2 className="font-bold text-lg">Customer Reviews</h2>
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <time className="text-sm text-muted-foreground">
                      2 days ago
                    </time>
                  </div>
                  <div className="flex items-center gap-0.5 ml-auto">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    I&apos;ve been experimenting with my Acme Prism T-Shirt for
                    a few weeks now, and it&apos;s been a versatile addition to
                    my wardrobe. The unique prism pattern is eye-catching and
                    the fabric is incredibly soft and comfortable.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Alex Smith</h3>
                    <time className="text-sm text-muted-foreground">
                      3 weeks ago
                    </time>
                  </div>
                  <div className="flex items-center gap-0.5 ml-auto">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    The Acme Prism T-Shirt is a great addition to my wardrobe.
                    The fabric is high-quality and the prism pattern is unique
                    and eye-catching. I&apos;ve received a lot of compliments on
                    it. The only downside is that it can be a bit tricky to keep
                    the pattern looking crisp after washing, but overall
                    I&apos;m very happy with my purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
