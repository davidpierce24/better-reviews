import { ChartCardProps } from '@/components/common/ChartCard';
import SideScrollCharts from '@/components/common/SideScrollCharts';
import React from 'react'

interface TopRatedTV {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    Date;
    name:              string;
    vote_average:      number;
    vote_count:        number;
}

async function TopRatedTV() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated`,{
            headers: {
                'Authorization': `Bearer ${process.env.TMDBReadAccessToken}`
            }
        });
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const json = await response.json();
    
        if (!json.results || !Array.isArray(json.results)) {
          console.error("Expected data not found in response");
          return null; // Or some error state/component
        }
    
        const TopRatedTV: TopRatedTV[] = json.results;
    
        const itemList: ChartCardProps[] = TopRatedTV.map((item) => ({
          rank: 1,
          title: item.name,
          imageUrl: 'http://image.tmdb.org/t/p/w500/' + item.poster_path,
          score: item.vote_average,
        }));
    
        return (
          <SideScrollCharts listTitle="Top Rated TV" itemList={itemList} />
        );
      } catch (error) {
        console.error("Failed to fetch top anime:", error);
        return null; // Or some error state/component
      }
}

export default TopRatedTV