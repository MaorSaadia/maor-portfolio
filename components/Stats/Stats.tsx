import { useState, useEffect } from "react";
import StatsItem from "./StatsItem";

// interfaces for the GitHub API responses
interface GithubRepo {
  name: string;
  id: number;
}

interface ParticipationStats {
  all: number[];
}

const statsData = [
  {
    endCountNum: 3,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 4,
    endCountText: "+",
    text: "Website Built",
  },
  {
    endCountNum: 2,
    endCountText: "+",
    text: "App Built",
  },
];

const Stats = () => {
  const [githubStats, setGithubStats] = useState({
    repoCount: 0,
    commitCount: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const username = "MaorSaadia";
        const headers = {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        };

        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
          { headers }
        );
        const userData = await userResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`,
          { headers }
        );
        const reposData = (await reposResponse.json()) as GithubRepo[];

        const commitPromises = reposData.map((repo: GithubRepo) =>
          fetch(
            `https://api.github.com/repos/${username}/${repo.name}/stats/participation`,
            { headers }
          )
            .then((res) => res.json())
            .then((stats: ParticipationStats) => {
              return (
                stats?.all?.reduce(
                  (sum: number, week: number) => sum + week,
                  0
                ) || 0
              );
            })
            .catch(() => 0)
        );

        const commitCounts = await Promise.all(commitPromises);
        const totalCommits = commitCounts.reduce(
          (sum: number, count: number) => sum + count,
          0
        );

        setGithubStats({
          repoCount: userData.public_repos,
          commitCount: totalCommits,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setGithubStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGithubStats();
  }, []);

  const allStats = [
    ...statsData,
    {
      endCountNum: githubStats.repoCount,
      endCountText: "",
      text: "GitHub Repos",
    },
    {
      endCountNum: githubStats.commitCount,
      endCountText: "",
      text: "Total Commits",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[480px] gap-4 xl:gap-2 dark:text-white/90">
      {allStats.map((item, index) => {
        return (
          <StatsItem
            key={index}
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
          />
        );
      })}
    </section>
  );
};

export default Stats;
