import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Rating from '@mui/material/Rating';
import { Badge } from "@/components/ui/badge";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

import { cn } from "@/lib/utils";
import Header from "./components/header";
import Footer from "./components/footer";

import { CgGym } from "react-icons/cg";
import { GiBilledCap, GiUnderwearShorts } from "react-icons/gi";
import { FaCartFlatbedSuitcase, FaShirt } from "react-icons/fa6";

import Pagehome from "./img/pagehome.png"
import Blusa from "./img/blusa.png"
import Tshirt from "./img/t-shirt.png"
import Cap from "./img/bone.png"
import Gym from "./img/gym.png"
import Short from "./img/short.png"
import Acessory from "./img/acessory.png"
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const cardsData = [
    {
        id: 1,
        imgSrc: Blusa,
        title: "T-shirt with Tape Details",
        rating: 4.5,
        price: "$120",
        originalPrice: "$260",
        discount: 60,
    },
    {
        id: 2,
        imgSrc: Blusa,
        title: "Casual Shirt",
        rating: 4,
        price: "$90",
        discount: 0,
    },
    {
        id: 3,
        imgSrc: Blusa,
        title: "T-shirt with Tape Details",
        rating: 4.5,
        price: "$120",
        originalPrice: "$260",
        discount: 20,
    },
    {
        id: 4,
        imgSrc: Blusa,
        title: "Casual Shirt",
        rating: 4,
        price: "$90",
        discount: 0,
    },
];


const features = [
    {
        Icon: FaShirt,
        name: "T-Shirt",
        description: "We automatically save your files as you type.",
        href: "/catalog",
        cta: "View All",
        background: <img src={Tshirt} className="absolute -right-20 top-40 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: GiUnderwearShorts,
        name: "Short",
        description: "Search through all your files in one place.",
        href: "/catalog",
        cta: "View All",
        background: <img src={Short} className="absolute -right-20 -top-0 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: GiBilledCap,
        name: "Hat",
        description: "Supports 100+ languages and counting.",
        href: "/catalog",
        cta: "View All",
        background: <img src={Cap} className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: FaCartFlatbedSuitcase,
        name: "Accessory",
        description: "Use the calendar to filter your files by date.",
        href: "/catalog",
        cta: "View All",
        background: <img src={Acessory} className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: CgGym,
        name: "Gym",
        description:
            "Get notified when someone shares a file or mentions you in a comment.",
        href: "/catalog",
        cta: "View All",
        background: <img src={Gym} className="absolute -right-20 top-10 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

const reviews = [
    {
        name: "Sarah M.",
        body: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
        rating: 3.5,
    },
    {
        name: "Alex K.",
        body: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        rating: 4.5,
    },
    {
        name: "James L.",
        body: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 3.5,
    },
    {
        name: "Jhons",
        body: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 3.5,
    },
    {
        name: "Jack",
        body: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 1.5,
    },
    {
        name: "Jhons",
        body: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 3.5,
    },
    {
        name: "Jack",
        body: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 1.5,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    body,
    rating,
}: {
    name: string;
    rating: number;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    <figcaption className="text-sm font-semibold dark:text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export default function Shoppage() {
    const { setTheme } = useTheme();
    useEffect(() => {
      setTheme("light");
    }, [setTheme]);
    return (
        <div>
            <Header />
            {/* Home */}
            <div>
                <div className="w-full h-[855px] flex flex-row items-center pl-24 pr-24 relative bg-[#F2F0F1] dark:bg-[#141414]">
                    <div className="space-y-8 ml-40">
                        <h1 className="text-7xl font-bold w-[577px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="w-[545px] text-base font-light">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <Link to="/catalog"><Button className="w-48 rounded-2xl h-10 font-semibold">Shop Now</Button></Link>
                        <div className="flex flex-row h-14 space-x-8 items-center">

                            <div>
                                <h1 className="text-4xl font-extrabold">200+</h1>
                                <p className="text-base font-light opacity-70">International Brands</p>
                            </div>
                            <Separator className="w-[1px] bg-primary/40 h-4/5" />
                            <div>
                                <h1 className="text-4xl font-extrabold">2,000+</h1>
                                <p className="text-base font-light opacity-70">High-Quality Products</p>
                            </div>
                            <Separator className="w-[1px] bg-primary/40 h-4/5" />
                            <div>
                                <h1 className="text-4xl font-extrabold">30,000+</h1>
                                <p className="text-base font-light opacity-70">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <svg className="fill-primary" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z" fill="" />
                        </svg>
                        <img className="ml-40 absolute bottom-0" src={Pagehome} alt="" />
                        <svg className="absolute fill-primary right-20 top-20" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="" />
                        </svg>
                    </div>
                </div>
                <div className="w-full pl-24 pr-24 h-28 bg-primary flex justify-center items-center gap-28">
                    <svg className="fill-background" width="167" height="34" viewBox="0 0 167 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M150.179 0.655656H166.482V3.25336C166.008 3.09436 165.512 3.0124 165.013 3.01061H155.642V15.1491H164.758C165.413 15.1491 165.996 15.0772 166.481 14.9548V17.5411C166.068 17.4443 165.499 17.3952 164.794 17.3952H155.642V29.9466H164.733C165.232 29.9466 165.826 29.874 166.481 29.7159V32.508H150.203C150.333 32.017 150.399 31.511 150.398 31.003V2.19691C150.398 1.56617 150.325 1.04435 150.179 0.655656ZM146.405 8.92219L141.695 8.88659C141.464 6.23976 139.947 3.67765 136.609 3.20567C129.459 2.56211 127.444 10.415 127.626 16.1572C127.809 21.6922 128.694 30.2015 136.075 30.2015C139.171 30.2015 142.144 27.0207 142.047 24.3383L146.405 24.3027C146.089 29.8377 139.741 33.0419 136.718 33.1516C126.389 33.5039 122.066 26.6206 121.848 16.7993C121.654 7.90346 125.296 0 135.504 0C144.244 0.121734 145.931 5.29294 146.405 8.92219ZM72.9408 28.8901L76.0611 26.2803C77.687 28.9635 79.0225 30.1886 82.2517 30.1886C85.5286 30.1886 88.285 28.1982 88.285 24.6786C88.285 22.9423 87.5802 21.522 86.1849 20.4542C85.5528 19.9559 83.951 19.0945 81.4259 17.8928C77.6507 16.0846 73.9731 13.7289 73.9731 8.99551C73.9731 3.02271 79.0467 0.388695 84.3995 0.193636C87.5681 0.0726133 91.5014 1.82174 93.091 3.78728L89.9231 6.22695C89.3581 5.17255 88.5181 4.29083 87.4923 3.6754C86.4665 3.05998 85.2932 2.73381 84.0969 2.73154C80.0541 2.73154 76.8498 7.41724 80.2 10.6464C81.0493 11.4715 82.7863 12.4909 85.4324 13.7047C89.6561 15.6838 93.2612 18.0501 93.2612 23.2825C93.2612 25.0908 92.7878 26.7779 91.853 28.3199C89.9722 31.4273 86.8278 32.9814 82.4339 32.9814C77.3838 32.9814 76.3892 31.8281 72.9408 28.8901ZM28.4893 0.655656H44.7782V3.25336C44.3051 3.09442 43.8094 3.01246 43.3103 3.01061H33.9396V15.1491H43.0554C43.7111 15.1491 44.2941 15.0772 44.7789 14.9548V17.5411C44.366 17.4443 43.7958 17.3952 43.1046 17.3952H33.9396V29.9466H43.0312C43.5289 29.9466 44.124 29.874 44.7789 29.7159V32.508H28.5143C28.6332 32.0151 28.6941 31.5101 28.6958 31.003V2.19691C28.6958 1.56617 28.6225 1.04435 28.4893 0.655656ZM0 0.655656H5.92368V0.947533C5.92368 1.21449 6.0084 1.56617 6.15434 2.01538L14.5049 27.1545L23.0754 1.90574C23.2085 1.48145 23.2818 1.06856 23.2818 0.655656H26.1586C25.8674 1.16537 25.6489 1.61529 25.515 2.01538L15.7308 31.2095C15.6339 31.4886 15.5492 31.9257 15.4766 32.5087H10.6208C10.5474 32.0674 10.4379 31.6329 10.2933 31.2095L0.704065 2.24603C0.482555 1.71187 0.251627 1.18166 0.0113903 0.655656H0ZM62.9145 17.262C66.7986 16.4968 69.7729 13.5232 69.7729 9.27457C69.7729 3.70186 65.1114 0.654944 59.8918 0.654944H50.3509C50.4841 1.14117 50.5574 1.65089 50.5574 2.18481V30.9774C50.5574 31.5968 50.4841 32.1186 50.3509 32.5073H56.0319C55.8929 32.0093 55.8235 31.4944 55.8254 30.9774V17.7476L57.6457 17.9419L67.1631 32.5073H72.8803L62.9145 17.262ZM61.9314 14.8345C60.8998 15.562 59.6611 15.9258 58.2409 15.9258H55.8133V2.97572H57.986C59.8441 2.97572 61.2878 3.43632 62.32 4.35822C63.7282 5.63394 64.4443 7.35744 64.4443 9.51804C64.4443 11.8488 63.6064 13.6214 61.9314 14.8352M120.901 31.1853L110.293 1.71211C110.175 1.37134 110.105 1.01572 110.086 0.655656H105.497C105.497 1.03225 105.436 1.43233 105.29 1.83313L95.0096 31.1853C94.875 31.6089 94.6572 32.0467 94.366 32.508H97.3275C97.3161 32.0225 97.3766 31.5733 97.5105 31.1853L100.556 22.5294H112.27L115.281 31.186C115.439 31.658 115.511 32.0951 115.511 32.508H121.654C121.301 32.0104 121.047 31.5612 120.901 31.1853ZM101.358 20.1865L106.31 5.80266L111.397 20.1865H101.358Z" fill="" />
                    </svg>
                    <svg className="fill-background" width="92" height="38" viewBox="0 0 92 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_22_363)">
                            <path d="M86.8141 36.8682L73.3318 0.0322557L73.3226 0.00787354H73.0566L70.2802 7.57753L65.2258 21.3583L65.214 21.3474C63.4622 19.8135 60.9908 18.8546 57.8782 18.4976L56.9289 18.4003L57.8707 18.2805C63.0036 17.3652 66.454 14.1482 66.454 10.2723C66.454 4.95736 61.4165 1.24757 54.2006 1.24757H39.1869V1.51668H43.5494V28.98L32.9544 0.0321654L32.9448 0.00787354H32.6788L29.9024 7.57753L19.194 36.7734L19.1281 36.781C18.9451 36.8034 18.7641 36.8212 18.585 36.8346C18.3157 36.8556 18.0479 36.8681 17.7792 36.8681H6.95934L27.5265 1.51659L27.6794 1.25091H2.52491V12.1867H2.79182C2.83914 6.86007 5.96517 1.51659 12.8719 1.51659H21.2043L0.481689 37.133H28.399V26.6557H28.1321C28.0957 31.2985 25.4436 35.7082 19.6764 36.7039L19.493 36.7349L23.8853 24.7547H36.1892L40.6227 36.8682H36.2492V37.1331H53.415V36.8682H49.0228V18.5956H54.0908C59.2482 18.5956 62.2062 20.8821 62.2062 24.8669V28.1082C62.2062 28.4653 62.2306 28.9875 62.2577 29.4242V29.4401L59.5337 36.8665H55.9751V37.1314H63.3413V36.8665H59.821L62.3016 30.104C62.3067 30.1694 62.3093 30.2088 62.3093 30.2088L62.3777 30.8181L62.4436 31.2212C62.8575 33.7149 63.8186 35.548 65.2993 36.6695L65.5122 36.8229C66.6372 37.5991 68.0352 37.9922 69.6695 37.9922C71.8344 37.9922 73.2779 37.4566 74.4697 36.196L74.3134 36.0501C73.2153 37.0559 72.2939 37.4633 71.1393 37.4633C69.172 37.4633 68.1425 35.0954 68.1425 32.7602V28.2188C68.1529 27.092 67.9751 25.9712 67.6162 24.9021L67.5673 24.7613V24.7563H76.5668L81.0003 36.8699H76.6268V37.1347H91.4817V36.8699L86.8141 36.8682ZM23.9832 24.4898L30.0444 7.96485L36.0921 24.4898H23.9832ZM49.0255 18.3299V1.51659H52.8939C58.0615 1.51659 60.7897 4.56507 60.7897 10.3294C60.7897 16.4599 59.2236 18.3299 54.0908 18.3299H49.0255ZM67.4624 24.4898L67.4362 24.4244C67.0363 23.4578 66.454 22.5759 65.7207 21.826L65.4673 21.5745L65.4403 21.5494L70.4186 7.96485L76.4663 24.4898H67.4624Z" fill="" />
                        </g>
                        <defs>
                            <clipPath id="clip0_22_363">
                                <rect width="91" height="38" fill="white" transform="translate(0.481689)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className="fill-background" width="157" height="34" viewBox="0 0 157 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M141.794 10.2934L141.502 10.3855C140.369 8.04204 138.749 6.17651 136.644 4.78893C134.571 3.40133 131.964 2.70752 128.822 2.70752C127.073 2.70752 125.405 3.06211 123.818 3.77129C122.231 4.44972 120.838 5.42104 119.64 6.68525C118.474 7.91865 117.534 9.41416 116.822 11.1718C116.109 12.9294 115.753 14.872 115.753 16.9997C115.753 19.1273 116.109 21.0699 116.822 22.8275C117.534 24.5851 118.474 26.096 119.64 27.3603C120.838 28.5937 122.231 29.5496 123.818 30.228C125.405 30.9063 127.073 31.2455 128.822 31.2455C131.931 31.2455 134.458 30.783 136.401 29.8579C138.377 28.9021 140.045 27.4528 141.405 25.5102L141.697 25.6024L141.6 28.5626C140.855 29.3026 139.997 29.9656 139.025 30.5514C138.053 31.1065 137.001 31.5844 135.867 31.9853C134.766 32.3553 133.616 32.6328 132.418 32.8178C131.219 33.0339 130.021 33.1419 128.822 33.1419C126.328 33.1419 123.948 32.7564 121.681 31.9855C119.413 31.2146 117.421 30.1354 115.705 28.7478C113.988 27.3294 112.628 25.6335 111.624 23.66C110.62 21.6558 110.117 19.4356 110.117 16.9996C110.117 14.5636 110.62 12.3589 111.624 10.3855C112.628 8.38116 113.988 6.6698 115.705 5.25142C117.421 3.83298 119.413 2.75374 121.681 2.01369C123.948 1.24279 126.328 0.85734 128.822 0.85734C130.021 0.85734 131.219 0.949845 132.418 1.13486C133.616 1.31987 134.766 1.61281 135.867 2.01369C137.001 2.38372 138.053 2.86167 139.025 3.44757C139.997 4.0026 140.855 4.65013 141.6 5.39017L141.794 10.2934ZM34.7337 19.1277C34.3776 19.2817 34.0375 19.4822 33.7134 19.7293C33.3893 19.9758 33.2273 20.315 33.2273 20.7469V26.4359C31.6726 28.5636 29.6807 30.2133 27.2515 31.385C24.8223 32.5568 22.1339 33.1427 19.1865 33.1427C16.6925 33.1427 14.3119 32.7572 12.0447 31.9863C9.77742 31.2154 7.78547 30.1362 6.06882 28.7486C4.3522 27.3302 2.99183 25.6343 1.98774 23.6608C0.983707 21.6566 0.481689 19.4364 0.481689 17.0004C0.481689 14.5644 0.983707 12.3597 1.98774 10.3863C2.99183 8.38192 4.3522 6.67056 6.06882 5.25218C7.78547 3.83374 9.77742 2.75451 12.0447 2.01449C14.3119 1.24356 16.6925 0.858098 19.1865 0.858098C20.3849 0.858098 21.5833 0.950603 22.7818 1.13561C23.9801 1.32062 25.1299 1.61357 26.2312 2.01445C27.3648 2.38447 28.4175 2.86243 29.3891 3.44832C30.3608 4.00335 31.2192 4.65089 31.9642 5.39093L32.1588 10.2937L31.8673 10.3859C30.7337 8.04238 29.1142 6.17683 27.0089 4.78925C24.936 3.40165 22.3286 2.70784 19.1868 2.70784C17.4378 2.70784 15.7698 3.06245 14.1828 3.77165C12.5957 4.45005 11.2029 5.42136 10.0045 6.68557C8.83844 7.919 7.89917 9.41452 7.18667 11.1721C6.47405 12.9297 6.11774 14.8724 6.11774 17C6.11774 19.0968 6.45784 21.024 7.13804 22.7816C7.85063 24.5392 8.78993 26.0501 9.95594 27.3144C11.1543 28.5478 12.547 29.5191 14.1341 30.2283C15.7212 30.9067 17.4055 31.2459 19.1868 31.2459C22.5554 31.2459 25.438 30.6292 27.8348 29.3958V20.7465C27.8348 20.315 27.6568 19.9758 27.3007 19.7289C26.9766 19.4824 26.6527 19.2819 26.329 19.1273L26.3734 18.8963C26.5351 18.9245 26.8267 18.9553 27.2479 18.9885C27.6692 19.0167 28.1064 19.0475 28.5597 19.0807H32.7381C33.1268 19.0525 33.4993 19.0218 33.8556 18.9885C34.2117 18.9603 34.4869 18.9296 34.6813 18.8963L34.7337 19.1277ZM69.9237 1.82908C69.5996 1.98307 69.2757 2.18359 68.952 2.43065C68.6279 2.67714 68.4499 3.13967 68.4179 3.81822C68.3883 4.55827 68.356 5.49875 68.321 6.63967C68.321 7.74976 68.3062 9.01399 68.2766 10.4323C68.2766 11.8508 68.2618 13.3926 68.2321 15.0577V20.2381C68.2025 22.2423 67.9433 23.9537 67.4545 25.3721C66.9687 26.7905 66.3209 27.9776 65.5112 28.9335C64.7339 29.8895 63.8593 30.6449 62.8876 31.2C61.9483 31.755 61.009 32.1713 60.0697 32.4488C59.1628 32.7573 58.3045 32.9423 57.4949 33.0038C56.6851 33.0963 56.0535 33.1426 55.6 33.1426C53.7539 33.1426 51.9724 32.9113 50.2557 32.4488C48.5391 32.0173 47.033 31.3081 45.7375 30.3211C44.4419 29.3344 43.4055 28.0547 42.6281 26.4822C41.8508 24.9096 41.4621 22.9978 41.4621 20.7468V15.5203V10.7099C41.4621 9.22975 41.4473 7.90384 41.4177 6.73214C41.4177 5.52954 41.4028 4.55823 41.3732 3.81818C41.3436 3.13979 41.1656 2.67726 40.8391 2.43061C40.515 2.18411 40.1911 1.98359 39.8674 1.82904L39.9119 1.59806C40.0736 1.62626 40.3329 1.65699 40.6895 1.69025C41.0782 1.71845 41.4669 1.74918 41.8555 1.78243C42.2768 1.78243 42.6817 1.79653 43.0702 1.82473H44.8192C45.2079 1.79653 45.6127 1.78243 46.0337 1.78243C46.455 1.75423 46.8437 1.7235 47.1998 1.69025C47.5884 1.66204 47.8636 1.63132 48.0254 1.59806L48.0698 1.82904C47.7137 1.98303 47.3736 2.18355 47.0496 2.43061C46.7581 2.6771 46.596 3.13963 46.5634 3.81818C46.5338 4.55823 46.5015 5.52954 46.4666 6.73214V20.7468C46.4666 24.1078 47.2925 26.59 48.9443 28.1935C50.5962 29.7969 53.0416 30.5986 56.2806 30.5986C57.2198 30.5986 58.2887 30.4906 59.4871 30.2746C60.6856 30.0281 61.803 29.5347 62.8394 28.7945C63.9082 28.0544 64.799 27.0061 65.5115 25.6493C66.2565 24.2925 66.629 22.4887 66.629 20.2377C66.629 17.8017 66.6142 15.7204 66.5845 13.9936C66.5845 12.236 66.5697 10.7405 66.5401 9.50706C66.5401 8.24282 66.5253 7.16358 66.4957 6.26933C66.466 5.37514 66.4337 4.55801 66.3988 3.81795C66.3691 3.13955 66.1911 2.67702 65.8646 2.43037C65.5405 2.18387 65.2167 1.98334 64.893 1.82876L64.9374 1.59782C65.2935 1.65928 65.6984 1.72104 66.152 1.78311C66.6052 1.81131 67.0263 1.82541 67.4152 1.82541C67.7713 1.82541 68.1761 1.81131 68.6298 1.78311C69.1156 1.72165 69.5367 1.65989 69.893 1.59782L69.9237 1.82908ZM105.178 10.2934L104.886 10.3855C103.753 8.04204 102.133 6.17651 100.028 4.78893C97.955 3.40133 95.3476 2.70752 92.2059 2.70752C90.4569 2.70752 88.7888 3.06211 87.2017 3.77129C85.6146 4.44972 84.2219 5.42104 83.0235 6.68525C81.8575 7.91865 80.9182 9.41416 80.2056 11.1718C79.4931 12.9294 79.1368 14.8721 79.1368 16.9997C79.1368 19.1273 79.4931 21.0699 80.2056 22.8275C80.9183 24.5851 81.8576 26.096 83.0235 27.3603C84.2219 28.5937 85.6146 29.5496 87.2017 30.228C88.7888 30.9063 90.4569 31.2455 92.2059 31.2455C95.3153 31.2455 97.8417 30.783 99.785 29.8579C101.761 28.9021 103.429 27.4528 104.789 25.5102L105.081 25.6024L104.984 28.5626C104.239 29.3026 103.38 29.9656 102.409 30.5514C101.437 31.1064 100.384 31.5844 99.2508 31.9853C98.1496 32.3553 96.9998 32.6328 95.8013 32.8178C94.6029 33.0338 93.4045 33.1419 92.2062 33.1419C89.7121 33.1419 87.3315 32.7564 85.0643 31.9855C82.797 31.2146 80.8051 30.1354 79.0885 28.7478C77.3718 27.3294 76.0114 25.6335 75.0074 23.66C74.0033 21.6557 73.5013 19.4356 73.5013 16.9996C73.5013 14.5636 74.0033 12.3589 75.0074 10.3855C76.0114 8.38112 77.3718 6.66976 79.0885 5.25138C80.8051 3.83294 82.797 2.7537 85.0643 2.01365C87.3315 1.24275 89.7122 0.8573 92.2062 0.8573C93.4045 0.8573 94.6029 0.949805 95.8013 1.13482C96.9998 1.31983 98.1496 1.61277 99.2508 2.01365C100.384 2.38368 101.437 2.86163 102.409 3.44753C103.38 4.00256 104.239 4.65009 104.984 5.39013L105.178 10.2934ZM156.437 32.356C156.275 32.3278 156 32.297 155.612 32.2638C155.256 32.2638 154.867 32.2497 154.446 32.2215C154.024 32.2215 153.619 32.2074 153.231 32.1792H150.316C149.928 32.2074 149.539 32.2381 149.15 32.2714C148.794 32.2996 148.519 32.3303 148.325 32.3635L148.28 32.1782C148.604 32.0242 148.928 31.8237 149.252 31.5766C149.576 31.3302 149.754 30.8676 149.786 30.1891C149.816 29.449 149.83 28.6782 149.83 27.8764C149.86 27.0747 149.875 26.165 149.875 25.1475V21.6785V17.007V12.3355V8.82025C149.875 7.80269 149.86 6.90846 149.83 6.13756C149.83 5.33585 149.816 4.56497 149.786 3.82493C149.756 3.14653 149.578 2.68401 149.252 2.43735C148.928 2.15984 148.604 1.94407 148.28 1.79005L148.325 1.6048C148.519 1.66626 148.794 1.71251 149.15 1.74356C149.539 1.74356 149.928 1.75766 150.316 1.78586C150.737 1.81406 151.142 1.82817 151.531 1.82817H153.231C153.62 1.79996 154.025 1.78586 154.446 1.78586C154.867 1.75766 155.256 1.72693 155.612 1.69368C156 1.66548 156.275 1.63475 156.437 1.60149L156.482 1.78682C156.126 1.94081 155.786 2.15656 155.461 2.43408C155.17 2.68057 155.008 3.1431 154.975 3.82166C154.946 4.5617 154.913 5.33257 154.878 6.13429V27.8732C154.908 28.6749 154.94 29.4458 154.975 30.1858C155.005 30.8642 155.167 31.3267 155.461 31.5734C155.786 31.8199 156.126 32.0204 156.482 32.1749L156.437 32.356Z" fill="" />
                    </svg>
                    <svg className="fill-background" width="195" height="32" viewBox="0 0 195 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_22_367)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.481689 0.90175L3.41386 4.20848V28.4106L1.24066 31.5774L14.5501 31.5978L12.1512 28.6839L11.9021 19.9679L24.7353 20.0375C28.6251 18.7425 32.6238 15.9815 32.8159 10.3996C32.7545 4.99032 29.452 1.52086 25.6177 0.830605L0.481689 0.90175ZM11.4265 2.44953V17.9977L21.2728 18.0689C23.5131 16.2623 25.2115 14.8787 25.1436 10.5411C25.1115 7.00433 24.3649 3.92011 21.0689 2.45029L11.4265 2.44953ZM38.9753 0.725402L41.9075 4.03289V28.2351L39.7343 31.4033L53.043 31.4222L50.6441 28.5083L50.395 19.7923H50.4483L64.1982 31.5206L75.6091 31.4275L65.1946 22.4193H56.5004L53.436 19.8089L63.2282 19.8619C67.118 18.5669 71.1159 15.8059 71.3088 10.224C71.2482 4.81548 67.9456 1.34527 64.1106 0.65577L38.9753 0.725402ZM49.9194 2.27318V17.8214L59.7657 17.8925C62.0068 16.0859 63.7044 14.7024 63.6365 10.364C63.6044 6.82798 62.8578 3.74301 59.5619 2.27318H49.9194ZM86.5949 0.690586H98.0708L113.009 28.4106C113.656 30.551 115.589 30.2869 116.88 31.2254H102.416L104.59 30.5457L104.454 28.4818L100.719 22.5011L88.0208 22.5722L85.3049 28.3418C85.2143 28.998 84.5123 29.496 85.0331 30.3111L86.0522 31.2958L79.805 31.155L82.5217 30.3111L92.7741 8.71181V7.23365L88.4423 1.45502L86.5949 0.690586ZM88.8236 20.5976L94.0977 10.6123L99.5888 20.5416L88.8236 20.5976ZM164.197 0.751135H175.672L190.611 28.4712C191.257 30.6116 193.191 30.3475 194.482 31.286H180.017L182.191 30.6048L182.055 28.5408L178.32 22.5616L165.622 22.6328L162.906 28.4008C162.815 29.0585 162.114 29.5565 162.634 30.3717L163.653 31.3563L157.407 31.2156L160.123 30.3717L170.376 8.77235V7.29345L166.044 1.51557L164.197 0.751135ZM166.425 20.6589L171.699 10.6736L177.191 20.6013L166.425 20.6589ZM120.849 0.402222L141.292 0.514994C147.875 2.05672 152.064 6.07868 153.363 13.0948L153.308 18.5669C152.108 24.8186 148.175 29.1319 141.238 31.3155L120.74 31.373L120.737 30.7107C123.853 30.4754 124.102 30.1196 124.11 28.2699V3.33506C124.075 1.96741 123.802 1.11594 120.794 1.02209L120.849 0.402222ZM132.469 2.53581L132.45 29.5134C135.146 29.5225 137.485 29.7753 138.806 29.1009C141.801 27.7333 143.191 25.633 143.319 23.6598L143.247 7.73016C143.248 5.1818 140.482 3.38274 138.885 2.91425C137.743 2.49116 135.465 2.47375 132.469 2.53581Z" fill="" stroke="" stroke-width="1.02419" stroke-miterlimit="2.613" />
                        </g>
                        <defs>
                            <clipPath id="clip0_22_367">
                                <rect width="194" height="32" fill="white" transform="translate(0.481689)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className="fill-background" width="208" height="34" viewBox="0 0 208 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1298 30.4522C9.89114 30.4522 3.71249 23.8867 3.71249 16.7255C3.71249 9.59072 9.76182 2.89479 17.0778 2.89479C21.887 2.89479 25.3499 5.22146 28.1684 8.86674H31.7098C30.6498 6.95346 29.5125 5.19603 27.7805 3.82545C24.8072 1.42142 20.9552 0 17.1298 0C7.95243 0 0.481689 7.57464 0.481689 16.7C0.481689 25.8508 8.05633 33.3481 17.1817 33.3481C20.9044 33.3481 24.5497 31.9786 27.471 29.6774C29.3069 28.204 30.599 26.2907 31.8402 24.3255H28.2989C25.5058 27.9708 21.9389 30.4522 17.1298 30.4522ZM53.8391 13.0028C51.6163 10.1334 48.5911 8.32404 44.843 8.32404C38.1217 8.32404 32.5896 13.7798 32.5896 20.5012C32.5896 27.2214 38.1482 32.728 44.843 32.728C48.747 32.728 51.4605 31.0988 53.8391 28.1001V32.1842H56.7604V8.89216H53.8391V13.0028ZM44.6883 30.0388C39.5431 30.0388 35.4844 25.5668 35.4844 20.5266C35.4844 15.5107 39.5177 11.0132 44.6883 11.0132C49.8324 11.0132 53.8391 15.5118 53.8391 20.5266C53.8391 25.5668 49.8059 30.0388 44.6883 30.0388ZM60.3018 32.1842H63.4309V0.670921H60.3018V32.1842ZM75.2444 28.487L67.3337 8.89216H64.2312L73.7191 32.1842H76.8725L86.335 8.89216H83.2844L75.2444 28.487ZM87.6271 32.1842H90.7551V8.89216H87.6271V32.1842ZM87.6271 5.89348H90.7551V0.670921H87.6271V5.89348ZM104.224 8.32293C101.277 8.32293 99.1831 9.87478 97.2444 11.9428V8.89216H94.3485V32.1842H97.4245V17.991C97.3991 14.2429 100.501 11.0121 104.275 11.0121C109.005 11.0121 111.383 15.1228 111.383 19.3627V32.1853H114.278V19.3627C114.279 13.3134 110.739 8.32293 104.224 8.32293ZM143.311 0.670921L129.093 18.7415V0.670921H126.017V32.1842H129.093V23.5242L133.126 18.5094L143.389 32.1842H147.294L135.09 16.0269L147.294 0.670921H143.311ZM148.43 32.1842H151.482V0.670921H148.43V32.1842ZM176.738 14.7602C174.618 10.8043 170.378 8.32293 165.905 8.32293C159.236 8.32293 153.599 13.8815 153.599 20.5509C153.599 27.2711 159.287 32.7269 165.959 32.7269C169.137 32.7269 172.267 31.4602 174.566 29.2629C175.963 27.9443 176.79 26.2896 177.538 24.5576H174.256C172.601 27.7895 169.679 30.0377 165.904 30.0377C163.605 30.0377 161.355 29.107 159.65 27.5298C157.89 25.9282 157.115 23.9619 156.778 21.6363H178.263C178.264 19.2068 177.927 16.8802 176.738 14.7602ZM156.883 18.9482C157.816 14.5801 161.252 11.0121 165.959 11.0121C169.914 11.0121 174.154 13.4427 175.084 18.9482H156.883ZM180.539 32.1842H183.614V8.89216H180.539V32.1842ZM180.539 5.99738H183.614V0.670921H180.539V5.99738ZM197.136 8.32293C194.135 8.32293 192.042 9.87478 190.077 11.9428V8.89216H187.13V32.1842H190.232V17.991C190.207 14.2175 193.387 11.0121 197.186 11.0121C201.892 11.0121 204.375 15.1228 204.375 19.3627V32.1853H207.27V19.3627C207.27 13.3134 203.675 8.32293 197.136 8.32293Z" fill="" />
                    </svg>
                </div>
            </div>
            {/* New Arrivals */}
            <div className="w-full pl-24 pr-24 flex flex-col items-center">
                <div className="mt-20">
                    <h1 className="text-5xl font-bold">NEW ARRIVALS</h1>
                </div>
                <div className="mt-14 grid grid-cols-4 gap-5">
                    {cardsData.map((card) => (
                        <div key={card.id} className="cursor-pointer">
                            <div className="bg-[#F2F0F1] flex rounded-xl justify-center items-center w-[295px] h-[298px]">
                                <img src={card.imgSrc} alt={card.title} />
                            </div>
                            <div className="mt-4 space-y-1">
                                <h2 className="text-lg font-bold">{card.title}</h2>
                                <div className="flex items-center">
                                    <Rating name="half-rating-read" defaultValue={card.rating} precision={0.5} readOnly />
                                    <h5 className="text-sm font-medium">{card.rating}/5</h5>
                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-2xl font-bold">{card.price}</h1>
                                    {card.discount > 0 && (
                                        <div className="flex items-center">
                                            <h2 className="ml-2 line-through">{card.originalPrice}</h2>
                                            <Badge className="rounded-full ml-2 bg-[#ff33331f] text-[#FF3333] hover:bg-[#ff33331f]">-{card.discount}%</Badge>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/catalog"><Button variant="outline" className="w-[218px] mt-12 h-[52px] rounded-3xl">View All</Button></Link>
            </div>
            {/* top selling */}
            <div className="pl-24 mt-16 pr-24 flex flex-col items-center">
                <Separator />
                <div>
                    <h1 className="text-5xl font-bold mt-16">top selling</h1>
                </div>
                <div className="mt-14 grid grid-cols-4 gap-5">
                    {cardsData.map((card) => (
                        <div key={card.id} className="cursor-pointer">
                            <div className="bg-[#F2F0F1] flex rounded-xl justify-center items-center w-[295px] h-[298px]">
                                <img src={card.imgSrc} alt={card.title} />
                            </div>
                            <div className="mt-4 space-y-1">
                                <h2 className="text-lg font-bold">{card.title}</h2>
                                <div className="flex items-center">
                                    <Rating name="half-rating-read" defaultValue={card.rating} precision={0.5} readOnly />
                                    <h5 className="text-sm font-medium">{card.rating}/5</h5>
                                </div>
                                <div className="flex items-center">
                                    <h1 className="text-2xl font-bold">{card.price}</h1>
                                    {card.discount > 0 && (
                                        <div className="flex items-center">
                                            <h2 className="ml-2 line-through">{card.originalPrice}</h2>
                                            <Badge className="rounded-full ml-2 bg-[#ff33331f] text-[#FF3333] hover:bg-[#ff33331f]">-{card.discount}%</Badge>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/catalog"><Button variant="outline" className="w-[218px] mt-12 h-[52px] rounded-3xl">View All</Button></Link>
            </div>
            {/* Categories */}
            <div className="flex justify-center mt-16">
                <BentoGrid className="lg:grid-rows-3 max-w-[1239px]">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
            {/* Client */}
            <div className="mt-24">
                <div>
                    <h1 className="text-4xl ml-[330px] font-bold">OUR HAPPY CUSTOMERS</h1>
                </div>
                <div className="relative flex w-full mt-20 flex-col items-center justify-center overflow-hidden rounded-lg">
                    <Marquee pauseOnHover className="[--duration:50s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:50s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}