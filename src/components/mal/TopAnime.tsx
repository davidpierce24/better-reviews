import React from 'react'
import ChartCard from '../common/ChartCard';

interface Anime {
    rank: number;
    title: string;
    images: {
        webp: {
            image_url: string;
        }
    }
    score: number;

}

async function TopAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=1`);
    const json = await response.json();
    const TopAnime : Anime[] = json.data;

    return (
        <div className=''>
            {TopAnime.map((anime: Anime) => 
                <div key={anime.rank}>
                    <ChartCard 
                        rank={anime.rank}
                        title={anime.title}
                        imageUrl={anime.images.webp.image_url}
                        score={anime.score}
                    />
                </div>
            )}
        </div>
    )
}

export default TopAnime