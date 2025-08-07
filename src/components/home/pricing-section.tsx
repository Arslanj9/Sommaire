import Link from "next/link";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

type PriceType = {
    name: string;
    price: number;
    description: string;
    items: string[];
    id: string;
    paymentLink: string;
    priceId: string;
};

const plans = [
    {
        id: "basic",
        name: "Basic",
        price: 9,
        description: "Perfect for occasional use",
        items: [
            "5 PDF summaries per month",
            "Standard processing speed",
            "Email support",
        ],
        paymentLink: "",
        priceId: "",
    },
    {
        id: "pro",
        name: "Pro",
        price: 19,
        description: "For professionals and teams",
        items: [
            "Unlimited PDF summaries",
            "Priority processing",
            "24/7 priority support",
            "Markdown Export",
        ],
        paymentLink: "",
        priceId: "",
    },
];

const PricingCard = ({
    name,
    price,
    description,
    items,
    id,
    paymentLink,
}: PriceType) => {
    return (
        <div className="relative w-full max-w-lg">
            <div
                className={cn(
                    "relative flex flex-col h-full gap-4 lg:gap-8 z-10 rounded-xl border-[1px] border-gray-200",
                    id === "pro" && "border-rose-500 gap-5 border-2"
                )}
            >
                <div className="p-8 flex gap-4 flex-col mb-10">
                    <div className="flex justify-between items-center gap-4">
                        <p className="text-lg lg:text-xl font-bold capitalize">
                            {name}
                        </p>
                        <p className="text-base mt-2">{description}</p>
                    </div>

                    <div className="flex items-center mb-2">
                        <span className="text-6xl font-extrabold text-rose-600">
                            ${price}
                        </span>
                        <span className="flex flex-col ml-2">
                            <span className="text-xs font-bold text-gray-500 leading-tight">
                                USD
                            </span>
                            <span className="text-xs font-bold text-gray-500 leading-tight">
                                /per month
                            </span>
                        </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-2 text-gray-700"
                            >
                                {/* <span className="inline-block w-2 h-2 bg-rose-500 rounded-full"></span> */}
                                <CheckIcon size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="absolute bottom-0 flex justify-center mb-4 w-full">
                    <Link
                        href={paymentLink}
                        className="w-full mx-4 px-6 py-2 bg-rose-600 text-white font-semibold rounded-lg shadow hover:bg-rose-700 transition-colors text-center"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

const PricingSection = () => {
    return (
        <section>
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div>
                    <h2>Pricing</h2>
                </div>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
