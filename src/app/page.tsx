import Card from '@/components/ui/card'
import items from '../data/data.json'
import Cart from '@/components/cart'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-16 grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <h1 className="font-bold text-3xl">Desserts</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {items.map((item) => (
            <Card
              key={item.name}
              category={item.category}
              name={item.name}
              price={item.price}
              image={'/' + item.image.desktop.replace(/^\.?\//, '')}
            />
          ))}
        </div>
      </div>
      <Cart />
    </main>
  )
}
