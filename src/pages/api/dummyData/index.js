import { dummyData } from '../../../../dummyData'

export default function handler(req, res) {
  res.status(200).json(dummyData)
}
