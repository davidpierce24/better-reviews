import { ChartCardProps } from "@/components/common/ChartCard";
import SideScrollCharts from "@/components/common/SideScrollCharts";
import React from "react";

interface TrendingMovies {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function TrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDBReadAccessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const json = await response.json();

    if (!json.results || !Array.isArray(json.results)) {
      console.error("Expected data not found in response");
      return null; // Or some error state/component
    }

    const TrendingMovies: TrendingMovies[] = json.results;

    const itemList: ChartCardProps[] = TrendingMovies.map((item) => ({
      rank: 1,
      title: item.title,
      imageUrl: "http://image.tmdb.org/t/p/w500/" + item.poster_path,
      score: item.vote_average,
    }));

    return <SideScrollCharts listTitle="Trending Movies" itemList={itemList} />;
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return null; // Or some error state/component
  }
}

export default TrendingMovies;
