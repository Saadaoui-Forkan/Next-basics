import posts from './posts-data.json'

export default function handler(req, res) {
    res.json(posts)
} 