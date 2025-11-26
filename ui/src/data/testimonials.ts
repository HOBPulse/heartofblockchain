export interface Testimonial {
  id: string
  quote: string
  name: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "I love how transparent this platform is. I can see the real impact of my donations.",
    name: "Joan Anderson",
    image: "/jo.png"
  },
  {
    id: "2",
    quote: "It feels amazing to know my money is making a difference in someone's life.",
    name: "Christian Luke",
    image: "/luke.png"
  }
]

