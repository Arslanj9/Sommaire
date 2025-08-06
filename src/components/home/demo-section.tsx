import { Pizza } from "lucide-react"

const DemoSection = () => {
  return (
    <section className="relative">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col items-center text-center space-y-4 ">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-gray-100/80">
                    <Pizza className="w-6 h-6 text-rose-500" />
                </div>
                <div className="text-center mb-16 ">
                    <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">Watch how Sommaire transforms this <span className="text-rose-500">Next.js course PDF </span> into an easy-to-read summary</h3>
                </div>

                <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                    {/* Summary Viewer */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default DemoSection