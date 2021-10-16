// REMOVE!!!

import { dummyData } from '../../../../dummyData'

export default function handler({ query: { id } }, res) {
  const filtered = dummyData.filter((bounty) => bounty.id === parseInt(id));

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404).json({
        message: `Bounty with the id of ${id} is not found`
      })
  }
}

// SSG FOR SINGLE BOUNTY !!!
// export const getStaticProps = async (context) => {
//   const res = await fetch(`${bountiesUrl}/${context.params.id}`)

//   const bounty = await res.json()

//   return {
//     props: {
//       bounty,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${bountiesUrl}`)

//   const bounties = await res.json()

//   const ids = bounties.map((bounty) => bounty.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//   return {
//     paths,
//     fallback: false,
//   }
// }