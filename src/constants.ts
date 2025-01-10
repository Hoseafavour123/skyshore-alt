import {
  chemicals,
  petroleum,
  lpg,
  cng,
  bitumen,
  lubricants
} from './assets/images'

import {
  nnpc,
  lng,
  mobill,
  chevron,
  total,
  shell,
  lubric,
} from './assets/icons'

type Product = {
  id: number
  imageUrl: string
  title: string
  description?: string
  subProduct?: string[]
}

type ProductDetail = {
  productId: number
  items: Product[]
}

type Value = {
  title: string
  description: string
}

type Member = {
  name: string
  link: string
}

type Partner = {
  logo: string
  desc: string
}

export const members: Member[] = [
  {
    name: 'SkyShore Shipping & Energy Ltd',
    link: 'https://skyshoregroup.com/sse',
  },
  {
    name: 'SkyShore Mega Services Ltd',
    link: 'https://skyshoregroup.com',
  },
  {
    name: 'SkyShore Technical Services Ltd',
    link: 'https://skyshoregroup.com',
  },
]

export const products: Product[] = [
  {
    id: 1,
    imageUrl: petroleum,
    title: 'Petroleum Products',
    description:
      ' We leverage on the strength of our flagship company Skyshore Shipping & Energy Limited  (SSE) who is an importer of large volume of products within West Africa. ',
  },
  {
    id: 2,
    imageUrl: lubricants,
    title: 'Lubricants',
    description:
      'Skyshore Downstream & Marketing Limited is the authorised distributor of Eni  lubricants in Nigeria and West Coast of Africa. We import and refill mineral multigrade automotive oils. Our products and other services reaches our clients through our  Strategic Retail Partners (SRPs) and other multiple channels ',
    subProduct: [
      'Automotive Lubricants',
      'Marine Lubricants',
      'Industrial Lubricants',
    ],
  },
  {
    id: 3,
    imageUrl: lpg,
    title: 'LPG',
    description:
      'Whether you want to purchase Liquefied Petroleum Gas (LPG) and have it shipped to your storage facility in West Africa, our world-class team is built to help you close fast, safe, and profitable LPG transactions on time, every time!',
  },
  {
    id: 4,
    imageUrl: cng,
    title: 'CNG',
    description:
      "If you're looking to procure Compressed Natural Gas (CNG) and have it delivered to your storage facility in West Africa, our exceptional team is dedicated to ensuring swift, secure, and successful CNG transactions, reliably completed every time",
  },
  {
    id: 5,
    imageUrl: bitumen,
    title: 'Bitumen',
    description:
      ' SDM limited supply enough bitumen to help resurface roads every day. The  wide range of innovate bitumen products we supply is designed to help  meet the challenges of road, roofing and airport sectors, alongside specialty and industrial applications. ',
  },
  {
    id: 6,
    imageUrl: chemicals,
    title: 'Commodity Chemicals',
    description:
      'We partner with companies across the world to establish and maintain strong relationships that allows us to source the highest quality special chemical products available ',
  }
]

export const productDetails: ProductDetail[] = []

export const values: Value[] = [
  {
    title: 'Quality',
    description:
      'We operate under standardized technique with state of the art equipment in other to achieve excellence in all our products',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do.',
  },
  {
    title: 'Innovation',
    description: 'We foster innovation to drive growth and sustainability.',
  },
]

export const partners: Partner[] = [
  {
    logo: nnpc,
    desc: "The NNPC is Nigeria's state-owned oil corporation responsible for overseeing the country’s oil and gas resources, exploration, and production.  ",
  },
  {
    logo: lng,
    desc: 'Nigeria LNG is a joint venture focused on producing liquefied natural gas (LNG) to export globally, reducing gas flaring and promoting cleaner energy. ',
  },
  {
    logo: mobill,
    desc: 'ExxonMobil Nigeria is one of the largest international oil companies in the country, engaged in upstream operations',
  },
  {
    logo: chevron,
    desc: ' Chevron is a leading oil and gas company operating in Nigeria’s onshore and offshore energy sectors.',
  },
  {
    logo: total,
    desc: 'TotalEnergies is a global energy company with operations spanning oil, gas, and renewable energy in Nigeria.',
  },
  {
    logo: shell,
    desc: ' Shell is a prominent oil and gas company in Nigeria, recognized for its extensive upstream and downstream operations. ',
  },
  {
    logo: lubric,
    desc: ' SkyShore Lubricant is a leading supplier of high-quality lubricants designed to enhance the performance and longevity of industrial machinery and automotive engines',
  },
]
