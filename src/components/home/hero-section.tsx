import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  return (
    <section>
        <div className="">
            <div className="flex">
                <Badge className="relative hover:cursor-pointer px-4 py-1 border-2 border-rose-600 bg-white overflow-hidden rounded-full transition-colors duration-200 hover:bg-rose-600 hover:text-white group">
                    <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse group-hover:text-white" />
                    <p className="text-base text-rose-600 group-hover:text-white">Powered by AI</p>
                </Badge>
            </div>
            <h1>Transform PDFs into concise summaries</h1>
            <h2>Get a beautiful summary reel of the documents in seconds</h2>
            <Button>Try Sommaire</Button>
        </div>
    </section>
  )
}

export default HeroSection