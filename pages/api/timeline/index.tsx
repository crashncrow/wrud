import Twitter from 'twitter-lite';
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    var client = new Twitter({
        consumer_key: process.env.TW_CONSUMER_KEY,
        consumer_secret: process.env.TW_CONSUMER_SECRET,
        access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET
    });

    return new Promise((resolve, reject) => {

        client.get('statuses/user_timeline', {
            screen_name: 'wrudnow',
            count: 30,
            exclude_replies: true
        })
        .then(json => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            res.end(JSON.stringify(json))
            resolve()
        })
        .catch(error => {
            res.json(error);
            res.status(405).end();
            reject()
        })
    })
}