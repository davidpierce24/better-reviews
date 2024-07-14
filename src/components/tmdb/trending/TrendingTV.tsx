import { ChartCardProps } from "@/components/common/ChartCard";
import { ChartModalProps } from "@/components/common/ChartModal";
import SideScrollCharts from "@/components/common/SideScrollCharts";
import React from "react";

interface TrendingTV {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: Date;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

async function TrendingTV() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDBReadAccessToken}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    const json = await response.json();

    if (!json.results || !Array.isArray(json.results)) {
      console.error("Expected data not found in response");
      return null; // Or some error state/component
    }

    const TrendingTV: TrendingTV[] = json.results;

    const itemList: ChartModalProps[] = TrendingTV.map((item) => ({
      id: item.id,
      rank: 1,
      title: item.name,
      imageUrl: "http://image.tmdb.org/t/p/w500/" + item.poster_path,
      score: item.vote_average,
      description: item.overview,
    }));

    return <SideScrollCharts listTitle="Trending TV" itemList={itemList} />;
  } catch (error) {
    console.error("Failed to fetch top anime:", error);
    return null; // Or some error state/component
  }
}

export default TrendingTV;
