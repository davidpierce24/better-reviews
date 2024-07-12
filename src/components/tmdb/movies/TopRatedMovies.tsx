import { ChartCardProps } from '@/components/common/ChartCard';
import SideScrollCharts from '@/components/common/SideScrollCharts';
import React from 'react'

interface TopRatedMovies {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

async function TopRatedMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated`,{
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
    
        const TopRatedMovies: TopRatedMovies[] = json.results;
    
        const itemList: ChartCardProps[] = TopRatedMovies.map((item) => ({
          rank: 1,
          title: item.title,
          imageUrl: 'http://image.tmdb.org/t/p/w500/' + item.poster_path,
          score: item.vote_average,
        }));
    
        return (
          <SideScrollCharts listTitle="Top Rated Movies" itemList={itemList} />
        );
      } catch (error) {
        console.error("Failed to fetch top anime:", error);
        return null; // Or some error state/component
      }
}

export default TopRatedMovies