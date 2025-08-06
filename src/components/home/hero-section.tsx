import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
        <div className="">
            <div className="flex justify-center">
                <Badge variant={'secondary'} className="relative hover:cursor-pointer px-4 py-1 border-2 border-rose-600 bg-white overflow-hidden rounded-full transition-colors duration-200 hover:bg-rose-600 hover:text-white group">
                    <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse group-hover:text-white" />
                    <p className="text-xs text-rose-600 group-hover:text-white">Powered by AI</p>
                </Badge>
            </div>
            <h1 className="text-3xl font-bold pt-6 pb-2 text-center">Transform PDFs into concise summaries</h1>
            <h2 className="text-sm sm:text-xs lg:text-sm text-center px-4 lg:px-0 lg:max-w-4xl text-gray-400 ">Get a beautiful summary reel of the documents in seconds</h2>
            <div className="flex justify-center">
                <Button variant={'link'} className="text-white bg-rose-600 rounded-full mt-6 text-xs sm:text-lg lg:text-xl">
                    <Link href={"/upload"} className="flex gap-2 text-xs items-center">
                        <span>Try Sommaire</span>
                        <ArrowRight className="animate-pulse" />
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection