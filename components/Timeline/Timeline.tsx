import useSWR from 'swr'
import fetcher from "../../libs/fetcher"
// import Link from 'next/link'
import styles from './Timeline.module.css'

const Timeline  = () => {
    const { data, error } = useSWR('/api/timeline', fetcher)

    if (error) return <div>failed to load</div>

    if (!data) return <div>loading...</div>

    console.log(data)

    return (
        <div>
            {data.map((tw) => (
                <div className={styles.tweet_container}>
                    {tw.text} 
                    <br />
                    {new Date(tw.created_at).toLocaleDateString()}
                </div>
            ))}
        </div>
    )
}

export default Timeline
