import Guests from "@/components/Guests"
import Profile from "../components/Profile"


export default function App() {
  // 1) Define a array of members.
  //    You can add or remove objects here to change who’s displayed.
const members = [
  {
    name: 'John Wick',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.colliderimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2023%2F05%2Fjohn-wick-2x1.jpg&f=1&nofb=1&ipt=5164b7c47d87243655fd764f745a7eef0e3f31da01d94248ee2c6d02390cbe0a',
    imageSize: 150,
  },
  {
    name: 'Winston Scott',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.looper.com%2Fimg%2Fgallery%2Fwinston-scott-12-facts-only-john-wick-fans-know-about-the-continentals-owner%2Fwinston-has-a-long-history-with-the-high-table-1682011840.jpg&f=1&nofb=1&ipt=0c8cd73f33aca3bfd39c937d1f66421b1780d3e7ac968fa7609d68e4d6863aad',
    imageSize: 150,
  },
  {
    name: 'Caine',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.looper.com%2Fimg%2Fgallery%2Fjohn-wick-chapter-4-caine-is-a-refreshing-take-an-old-action-trope%2Fl-intro-1679619131.jpg&f=1&nofb=1&ipt=1e86eef17bbdba2821eab8b6ef703745a28c1d57c0eae6ff77ec6eacc852bbab',
    imageSize: 150

  }
]
  return (
    <div className="min-h-screen  flex flex-col items-center py-12 px-4 gap-5">
      <div>
        <h1 className="text-4xl font-extrabold text-black mb-8">
          Characters of the John Wick Series
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* =========== Map function iterates over the array, just like a for loop */}
          
          {members.map((user, index) => (
            <Profile key={index} user={user} />
          ))}
        </div>
      </div>
      <div>
        <Guests/>
      </div>
    </div>
  )
}
