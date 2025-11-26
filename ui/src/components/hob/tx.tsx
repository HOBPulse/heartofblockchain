// import {Button} from "@/components/ui/button"
// import {Card, CardContent} from "@/components/ui/card"
// import {Input} from "@/components/ui/input"
// import {Heart, Shield, TrendingUp, Users} from "lucide-react"
// import Image from "next/image"
// import Navbar from "@/components/navbar";

// export default function Home() {
//   return (
    //     <section className="container mx-auto px-4 py-16">
    //         <div className="grid lg:grid-cols-2 gap-12 items-center">
    //             <div className="space-y-6">
    //                 <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
    //                     Built in Trust, Powered by Blockchain
    //                 </div>
    //                 <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
    //                     Help Save Lives With Just One Click
    //                 </h1>
    //                 <p className="text-lg text-gray-600 leading-relaxed">
    //                     Connect patients with life-saving treatments through secure and transparent
    //                     blockchain-powered donations.
    //                 </p>
    //                 <div className="flex flex-col sm:flex-row gap-4">
    //                     <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">Create
    //                         Campaign</Button>
    //                     <Button variant="outline" className="px-8 py-3">
    //                         Explore Cases
    //                     </Button>
    //                 </div>
    //             </div>
    //             <div className="relative">
    //                 <Image
    //                     src="/hero-image.png"
    //                     alt="Medical professionals helping patients"
    //                     width={600}
    //                     height={400}
    //                     className="rounded-lg shadow-lg"
    //                 />
    //             </div>
    //         </div>
    //     </section>

    //     {/* Stats Section */}
    //     <section className="bg-gray-50 py-16">
    //         <div className="container mx-auto px-4">
    //             <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">Real Impact, Real People</h2>
    //             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    //                 <div className="text-center">
    //                     <div className="text-3xl font-bold text-gray-900">6+</div>
    //                     <div className="text-gray-600 mt-2">patients global impact</div>
    //                 </div>
    //                 <div className="text-center">
    //                     <div className="text-3xl font-bold text-gray-900">127+</div>
    //                     <div className="text-gray-600 mt-2">patients treated</div>
    //                 </div>
    //                 <div className="text-center">
    //                     <div className="text-3xl font-bold text-gray-900">$2.3M+</div>
    //                     <div className="text-gray-600 mt-2">raised</div>
    //                 </div>
    //                 <div className="text-center">
    //                     <div className="text-3xl font-bold text-gray-900">23+</div>
    //                     <div className="text-gray-600 mt-2">countries reached</div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>

    //     {/* How It Works */}
    //     <section className="py-16">
    //         <div className="container mx-auto px-4">
    //             <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
    //             <div className="grid md:grid-cols-3 gap-8">
    //                 <div className="text-center space-y-4">
    //                     <div
    //                         className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
    //                         <Users className="h-8 w-8 text-blue-600"/>
    //                     </div>
    //                     <h3 className="text-xl font-semibold text-gray-900">Explore Patient Cases</h3>
    //                     <p className="text-gray-600">Browse verified patient stories and find cases that resonate
    //                         with you.</p>
    //                 </div>
    //                 <div className="text-center space-y-4">
    //                     <div
    //                         className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
    //                         <Shield className="h-8 w-8 text-blue-600"/>
    //                     </div>
    //                     <h3 className="text-xl font-semibold text-gray-900">Donate Securely</h3>
    //                     <p className="text-gray-600">
    //                         Make your donation through our secure blockchain platform with total transparency.
    //                     </p>
    //                 </div>
    //                 <div className="text-center space-y-4">
    //                     <div
    //                         className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
    //                         <TrendingUp className="h-8 w-8 text-yellow-600"/>
    //                     </div>
    //                     <h3 className="text-xl font-semibold text-gray-900">Track the Impact</h3>
    //                     <p className="text-gray-600">Follow updates and see how your contribution helps save
    //                         lives.</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>

    //     {/* Urgent Cases */}
    //     <section className="bg-gray-50 py-16">
    //         <div className="container mx-auto px-4">
    //             <div className="flex justify-between items-center mb-12">
    //                 <h2 className="text-3xl font-bold text-gray-900">Urgent Cases You Can Help</h2>
    //                 <a href="#" className="text-red-600 hover:text-red-700 font-medium">
    //                     See All
    //                 </a>
    //             </div>
    //             <div className="grid md:grid-cols-3 gap-8">
    //                 {/* Case 1 */}
    //                 <Card className="overflow-hidden">
    //                     <div className="aspect-video bg-gray-200">
    //                         <Image
    //                             src="/placeholder.svg?height=200&width=300"
    //                             alt="Amal & Romana"
    //                             width={300}
    //                             height={200}
    //                             className="w-full h-full object-cover"
    //                         />
    //                     </div>
    //                     <CardContent className="p-6">
    //                         <h3 className="font-semibold text-gray-900 mb-2">Amal & Romana</h3>
    //                         <p className="text-sm text-gray-600 mb-4">
    //                             Amal and Romana are conjoined twins who need life-saving surgery to be separated and
    //                             live their lives.
    //                         </p>
    //                         <div className="space-y-2 mb-4">
    //                             <div className="flex justify-between text-sm">
    //                                 <span className="text-gray-600">$87 of 200.5K raised</span>
    //                                 <span className="text-gray-600">0% Complete</span>
    //                             </div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2">
    //                                 <div className="bg-red-600 h-2 rounded-full" style={{width: "0.4%"}}></div>
    //                             </div>
    //                         </div>
    //                         <div className="flex gap-2">
    //                             <Button className="bg-red-600 hover:bg-red-700 text-white flex-1">Donate</Button>
    //                             <Button variant="outline" className="flex-1">
    //                                 View Story
    //                             </Button>
    //                         </div>
    //                     </CardContent>
    //                 </Card>

    //                 {/* Case 2 */}
    //                 <Card className="overflow-hidden">
    //                     <div className="aspect-video bg-gray-200">
    //                         <Image
    //                             src="/placeholder.svg?height=200&width=300"
    //                             alt="Hassan, 42 - Turkey"
    //                             width={300}
    //                             height={200}
    //                             className="w-full h-full object-cover"
    //                         />
    //                     </div>
    //                     <CardContent className="p-6">
    //                         <h3 className="font-semibold text-gray-900 mb-2">Hassan, 42 - Turkey</h3>
    //                         <p className="text-sm text-gray-600 mb-4">
    //                             Hassan needs urgent heart surgery. His family needs financial help to support his
    //                             medical treatment.
    //                         </p>
    //                         <div className="space-y-2 mb-4">
    //                             <div className="flex justify-between text-sm">
    //                                 <span className="text-gray-600">$5,000 of 200.5K raised</span>
    //                                 <span className="text-gray-600">2% Complete</span>
    //                             </div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2">
    //                                 <div className="bg-red-600 h-2 rounded-full" style={{width: "2.5%"}}></div>
    //                             </div>
    //                         </div>
    //                         <div className="flex gap-2">
    //                             <Button className="bg-red-600 hover:bg-red-700 text-white flex-1">Donate</Button>
    //                             <Button variant="outline" className="flex-1">
    //                                 View Story
    //                             </Button>
    //                         </div>
    //                     </CardContent>
    //                 </Card>

    //                 {/* Case 3 */}
    //                 <Card className="overflow-hidden">
    //                     <div className="aspect-video bg-gray-200">
    //                         <Image
    //                             src="/placeholder.svg?height=200&width=300"
    //                             alt="Yusuf, 55 - Kenya"
    //                             width={300}
    //                             height={200}
    //                             className="w-full h-full object-cover"
    //                         />
    //                     </div>
    //                     <CardContent className="p-6">
    //                         <h3 className="font-semibold text-gray-900 mb-2">Yusuf, 55 - Kenya</h3>
    //                         <p className="text-sm text-gray-600 mb-4">
    //                             Yusuf has emergency heart failure surgery. While his family is struggling to pay for
    //                             his treatment.
    //                         </p>
    //                         <div className="space-y-2 mb-4">
    //                             <div className="flex justify-between text-sm">
    //                                 <span className="text-gray-600">$500 of 200.5K raised</span>
    //                                 <span className="text-gray-600">0% Complete</span>
    //                             </div>
    //                             <div className="w-full bg-gray-200 rounded-full h-2">
    //                                 <div className="bg-red-600 h-2 rounded-full" style={{width: "0.25%"}}></div>
    //                             </div>
    //                         </div>
    //                         <div className="flex gap-2">
    //                             <Button className="bg-red-600 hover:bg-red-700 text-white flex-1">Donate</Button>
    //                             <Button variant="outline" className="flex-1">
    //                                 View Story
    //                             </Button>
    //                         </div>
    //                     </CardContent>
    //                 </Card>
    //             </div>
    //         </div>
    //     </section>

    //     {/* Testimonials */}
    //     <section className="py-16">
    //         <div className="container mx-auto px-4">
    //             <div className="flex justify-between items-center mb-12">
    //                 <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
    //                 <a href="#" className="text-red-600 hover:text-red-700 font-medium">
    //                     See all
    //                 </a>
    //             </div>
    //             <div className="grid md:grid-cols-2 gap-8">
    //                 <Card className="p-6">
    //                     <div className="flex items-start space-x-4">
    //                         <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
    //                         <div>
    //                             <p className="text-gray-700 mb-4">
    //                                 "I love how transparent this platform is. I can see the real impact of my
    //                                 donations."
    //                             </p>
    //                             <div className="flex items-center space-x-2">
    //                                 <span className="font-medium text-gray-900">Joan Anderson</span>
    //                                 <div className="flex text-yellow-400">{"★".repeat(5)}</div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Card>
    //                 <Card className="p-6">
    //                     <div className="flex items-start space-x-4">
    //                         <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
    //                         <div>
    //                             <p className="text-gray-700 mb-4">
    //                                 "It feels amazing to know my money is making a difference in someone's life."
    //                             </p>
    //                             <div className="flex items-center space-x-2">
    //                                 <span className="font-medium text-gray-900">Christian Lund</span>
    //                                 <div className="flex text-yellow-400">{"★".repeat(5)}</div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Card>
    //             </div>
    //             <div className="text-center mt-8">
    //                 <Button variant="outline">Share your Review</Button>
    //             </div>
    //         </div>
    //     </section>

    //     {/* Bottom CTA */}
    //     <section className="bg-gray-50 py-16">
    //         <div className="container mx-auto px-4">
    //             <div className="grid lg:grid-cols-2 gap-12 items-center">
    //                 <div className="space-y-6">
    //                     <h2 className="text-4xl font-bold text-gray-900">Your next click could save a life.</h2>
    //                     <p className="text-lg text-gray-600">Explore verified patients or connect your wallet to get
    //                         started</p>
    //                     <div className="flex flex-col sm:flex-row gap-4">
    //                         <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">Explore
    //                             Campaigns</Button>
    //                         <Button variant="outline" className="px-8 py-3">
    //                             Connect Wallet
    //                         </Button>
    //                     </div>
    //                 </div>
    //                 <div className="relative">
    //                     <Image
    //                         src="/placeholder.svg?height=400&width=500"
    //                         alt="Woman pointing"
    //                         width={500}
    //                         height={400}
    //                         className="rounded-lg"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </section>

    //     {/* Footer */}
    //     <footer className="bg-gray-900 text-white py-12">
    //         <div className="container mx-auto px-4">
    //             <div className="grid md:grid-cols-4 gap-8">
    //                 <div>
    //                     <div className="flex items-center space-x-2 mb-4">
    //                         <Heart className="h-6 w-6 text-blue-400"/>
    //                         <span className="text-xl font-bold">New Life</span>
    //                     </div>
    //                     <div className="flex space-x-4 mt-4">
    //                         <div className="w-8 h-8 bg-gray-700 rounded"></div>
    //                         <div className="w-8 h-8 bg-gray-700 rounded"></div>
    //                         <div className="w-8 h-8 bg-gray-700 rounded"></div>
    //                         <div className="w-8 h-8 bg-gray-700 rounded"></div>
    //                     </div>
    //                     <p className="text-gray-400 text-sm mt-4">© New Life 2024</p>
    //                 </div>
    //                 <div>
    //                     <h3 className="font-semibold mb-4">Company</h3>
    //                     <ul className="space-y-2 text-gray-400">
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 About
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 Careers
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 News & Press
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 Privacy Policy
    //                             </a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //                 <div>
    //                     <h3 className="font-semibold mb-4">Support</h3>
    //                     <ul className="space-y-2 text-gray-400">
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 Help Center
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 Contact Us
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 Privacy Policy
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#" className="hover:text-white">
    //                                 Terms of Service
    //                             </a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //                 <div>
    //                     <h3 className="font-semibold mb-4">Stay Updated</h3>
    //                     <p className="text-gray-400 mb-4">Get our latest news and updates</p>
    //                     <div className="flex">
    //                         <Input placeholder="Enter your email"
    //                                className="bg-gray-800 border-gray-700 text-white"/>
    //                         <Button className="bg-red-600 hover:bg-red-700 ml-2">Subscribe</Button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </footer>
    // </div>
    
//   );
// }
