import ExploreHeader from "@/components/hob/explore-header"
import Footer from "@/components/hob/footer"
import { Filter, Search, SlidersHorizontal } from "lucide-react"
import CampaignCard from "@/components/campaign-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { campaigns } from "@/data/campaigns"

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-white">
            <ExploreHeader />

            {/* Search and Filter Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col justify-center items-center sm:flex-row gap-3 md:gap-4 mb-8">
                    <div className="relative flex justify-center items-center sm:w-auto">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 md:h-5 md:w-5 -translate-y-1/2 text-gray-500" />
                        <Input 
                            placeholder="Search cases" 
                            className="pl-9 md:pl-10 pr-4 py-2 md:py-3 w-100 text-sm md:text-base" 
                        />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10 md:h-12 md:w-12">
                        <SlidersHorizontal className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="sr-only">Sort</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10 md:h-12 md:w-12">
                        <Filter className="h-4 w-4 md:h-5 md:w-5" />
                        <span className="sr-only">Filter</span>
                    </Button>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                    Urgent Cases You Can Help
                </h2>

                {/* Campaign Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {campaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} {...campaign} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}
