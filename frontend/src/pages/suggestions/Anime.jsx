import { useState, useEffect } from "react";

const Anime = () => {
  // Centralized movie data - just update this object to change all content
  const [moviesData] = useState({
    trending: [
      {
        id: 1,
        title: "Demon Slayer: Hashira Training Arc",
        year: 2024,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Action, Fantasy",
        image: "demon-slayer-hashira.jpg",
      },
      {
        id: 2,
        title: "Jujutsu Kaisen Season 3",
        year: 2025,
        rating: null,
        platform: "Crunchyroll",
        genre: "Action, Supernatural",
        image: "jujutsu-kaisen-s3.jpg",
      },
      {
        id: 3,
        title: "My Hero Academia Season 7",
        year: 2024,
        rating: null,
        platform: "Crunchyroll",
        genre: "Superhero, Action",
        image: "mha-s7.jpg",
      },
      {
        id: 4,
        title: "One Piece: Egghead Arc",
        year: 2024,
        rating: 4.8,
        platform: "Crunchyroll",
        genre: "Adventure, Action",
        image: "one-piece-egghead.jpg",
      },
      {
        id: 5,
        title: "Chainsaw Man: Reze Arc",
        year: 2024,
        rating: null,
        platform: "Crunchyroll",
        genre: "Action, Horror",
        image: "chainsaw-man-reze.jpg",
      },
      {
        id: 6,
        title: "Attack on Titan: Final Chapters Part 3",
        year: 2023,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Action, Drama",
        image: "aot-final.jpg",
      },
      {
        id: 7,
        title: "Blue Lock Season 2",
        year: 2025,
        rating: null,
        platform: "Crunchyroll",
        genre: "Sports, Psychological",
        image: "blue-lock-s2.jpg",
      },
      {
        id: 8,
        title: "Solo Leveling",
        year: 2024,
        rating: 4.7,
        platform: "Crunchyroll",
        genre: "Action, Fantasy",
        image: "solo-leveling.jpg",
      },
    ],

    recommended: [
      {
        id: 1,
        title: "Death Note",
        year: 2006,
        rating: 4.9,
        platform: "Netflix",
        genre: "Psychological, Thriller",
        image: "death-note.jpg",
      },
      {
        id: 2,
        title: "Fullmetal Alchemist: Brotherhood",
        year: 2009,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Adventure, Fantasy",
        image: "fmab.jpg",
      },
      {
        id: 3,
        title: "Naruto Shippuden",
        year: 2007,
        rating: 4.8,
        platform: "Crunchyroll",
        genre: "Action, Adventure",
        image: "naruto-shippuden.jpg",
      },
      {
        id: 4,
        title: "Attack on Titan",
        year: 2013,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Action, Drama",
        image: "attack-on-titan.jpg",
      },
      {
        id: 5,
        title: "Hunter x Hunter",
        year: 2011,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Adventure, Action",
        image: "hunterxhunter.jpg",
      },
      {
        id: 6,
        title: "Steins;Gate",
        year: 2011,
        rating: 4.8,
        platform: "Crunchyroll",
        genre: "Sci-Fi, Thriller",
        image: "steins-gate.jpg",
      },
      {
        id: 7,
        title: "Vinland Saga",
        year: 2019,
        rating: 4.7,
        platform: "Netflix",
        genre: "Historical, Action",
        image: "vinland-saga.jpg",
      },
      {
        id: 8,
        title: "Neon Genesis Evangelion",
        year: 1995,
        rating: 4.6,
        platform: "Netflix",
        genre: "Mecha, Psychological",
        image: "evangelion.jpg",
      },
    ],

    allTimeGold: [
      {
        id: 1,
        title: "Cowboy Bebop",
        year: 1998,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Sci-Fi, Action",
        image: "cowboy-bebop.jpg",
      },
      {
        id: 2,
        title: "Spirited Away",
        year: 2001,
        rating: 4.9,
        platform: "HBO Max",
        genre: "Fantasy, Adventure",
        image: "spirited-away.jpg",
      },
      {
        id: 3,
        title: "Ghost in the Shell",
        year: 1995,
        rating: 4.8,
        platform: "Prime Video",
        genre: "Cyberpunk, Sci-Fi",
        image: "ghost-shell.jpg",
      },
      {
        id: 4,
        title: "Akira",
        year: 1988,
        rating: 4.8,
        platform: "Hulu",
        genre: "Cyberpunk, Action",
        image: "akira.jpg",
      },
      {
        id: 5,
        title: "Your Name",
        year: 2016,
        rating: 4.9,
        platform: "Crunchyroll",
        genre: "Romance, Fantasy",
        image: "your-name.jpg",
      },
      {
        id: 6,
        title: "Berserk",
        year: 1997,
        rating: 4.7,
        platform: "Crunchyroll",
        genre: "Dark Fantasy, Horror",
        image: "berserk.jpg",
      },
      {
        id: 7,
        title: "Code Geass",
        year: 2006,
        rating: 4.8,
        platform: "Netflix",
        genre: "Mecha, Psychological",
        image: "code-geass.jpg",
      },
      {
        id: 8,
        title: "Dragon Ball Z",
        year: 1989,
        rating: 4.7,
        platform: "Crunchyroll",
        genre: "Action, Adventure",
        image: "dbz.jpg",
      },
      {
        id: 9,
        title: "Studio Ghibli Collection",
        year: 1984,
        rating: 4.9,
        platform: "HBO Max",
        genre: "Fantasy, Adventure",
        image: "ghibli-collection.jpg",
      },
    ],

    comingSoon: [
      {
        id: 1,
        title: "Delicious in Dungeon Season 2",
        year: 2024,
        release: "Fall 2024",
        platform: "Crunchyroll",
        genre: "Fantasy, Comedy",
        image: "delicious-dungeon-s2.jpg",
      },
      {
        id: 2,
        title: "Uzumaki",
        year: 2024,
        release: "October 2024",
        platform: "Adult Swim",
        genre: "Horror, Psychological",
        image: "uzumaki.jpg",
      },
      {
        id: 3,
        title: "Kaiju No. 8",
        year: 2024,
        release: "April 2024",
        platform: "Crunchyroll",
        genre: "Action, Sci-Fi",
        image: "kaiju-no8.jpg",
      },
      {
        id: 4,
        title: "Oshi no Ko Season 2",
        year: 2024,
        release: "July 2024",
        platform: "Crunchyroll",
        genre: "Drama, Psychological",
        image: "oshi-no-ko-s2.jpg",
      },
      {
        id: 5,
        title: "The Elusive Samurai",
        year: 2024,
        release: "July 2024",
        platform: "Crunchyroll",
        genre: "Historical, Action",
        image: "elusive-samurai.jpg",
      },
      {
        id: 6,
        title: "Tower of God Season 2",
        year: 2024,
        release: "July 2024",
        platform: "Crunchyroll",
        genre: "Fantasy, Adventure",
        image: "tower-god-s2.jpg",
      },
      {
        id: 7,
        title: "Dandadan",
        year: 2024,
        release: "October 2024",
        platform: "Crunchyroll",
        genre: "Action, Supernatural",
        image: "dandadan.jpg",
      },
      {
        id: 8,
        title: "Zom 100: Bucket List of the Dead Part 2",
        year: 2024,
        release: "July 2024",
        platform: "Netflix",
        genre: "Zombie, Comedy",
        image: "zom100-part2.jpg",
      },
    ],
  });

  const [scrollPositions, setScrollPositions] = useState({
    trending: 0,
    recommended: 0,
    allTimeGold: 0,
    comingSoon: 0,
  });

  // New state for animation and hover effects
  const [activeSection, setActiveSection] = useState(null);
  const [animating, setAnimating] = useState({
    trending: false,
    recommended: false,
    allTimeGold: false,
    comingSoon: false,
  });

  const getPlatformStyle = (platform) => {
    const styles = {
      Netflix: "bg-red-500/20 text-red-400 border-red-500/30",
      "Prime Video": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Amazon Prime Video": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "HBO Max": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Max: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Disney+": "bg-blue-400/20 text-blue-300 border-blue-400/30",
      "Disney+ Hotstar": "bg-blue-400/20 text-blue-300 border-blue-400/30",
      "Apple TV+": "bg-gray-500/20 text-gray-300 border-gray-500/30",
      "Apple TV": "bg-gray-500/20 text-gray-300 border-gray-500/30",
      ZEE5: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      JioCinema: "bg-green-500/20 text-green-400 border-green-500/30",
      MUBI: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "Theatrical Release":
        "bg-amber-500/20 text-amber-400 border-amber-500/30",
      "Sony Pictures Release":
        "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      "Paramount+": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Not yet on OTT": "bg-gray-600/20 text-gray-400 border-gray-600/30",
      default: "bg-gray-600/20 text-gray-400 border-gray-600/30",
    };
    return styles[platform] || styles.default;
  };

  const scrollSection = (section, direction) => {
    const container = document.getElementById(section);
    const scrollAmount = direction === "left" ? -300 : 300;

    // Set animating state for this section
    setAnimating((prev) => ({ ...prev, [section]: true }));

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setScrollPositions((prev) => ({
      ...prev,
      [section]: container.scrollLeft + scrollAmount,
    }));

    // Reset animation state after animation completes
    setTimeout(() => {
      setAnimating((prev) => ({ ...prev, [section]: false }));
    }, 500);
  };

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  // Effect to handle scroll snap after scroll animation completes
  useEffect(() => {
    const handleScrollEnd = (section) => {
      const container = document.getElementById(section);
      if (!container) return;

      // Calculate which item should be snapped to
      const cardWidth = 270; // approximate width of card + gap
      const targetPosition =
        Math.round(container.scrollLeft / cardWidth) * cardWidth;

      if (Math.abs(container.scrollLeft - targetPosition) > 10) {
        container.scrollTo({ left: targetPosition, behavior: "smooth" });
      }
    };

    // Set up scroll end detection for each section
    Object.keys(scrollPositions).forEach((section) => {
      const container = document.getElementById(section);
      if (container) {
        const handleScroll = () => {
          if (!animating[section]) {
            clearTimeout(container.scrollTimeout);
            container.scrollTimeout = setTimeout(
              () => handleScrollEnd(section),
              150
            );
          }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
      }
    });
  }, [animating, scrollPositions]);

  const renderMovieCard = (movie, sectionName) => {
    return (
      <div
        key={movie.id}
        className="flex-none w-48 sm:w-56 md:w-64 bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-[1.03] group transform-gpu"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={`/movies/${movie.image}`}
            alt={movie.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-movie.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="font-bold text-sm md:text-base mb-1">
              {movie.title}
            </h3>
            <p className="text-xs text-gray-300">{movie.genre}</p>
            <div className="flex items-center mt-2 gap-2">
              <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full py-1 px-3 text-xs font-medium transition-colors">
                Watch Now
              </button>
              <button className="bg-gray-700/80 hover:bg-gray-600 text-white rounded-full p-1 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cinematic effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70"></div>

          {/* Rating badge */}
          {movie.rating && (
            <div className="absolute top-2 right-2 flex items-center gap-1 text-yellow-400 bg-gray-900/80 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              <span>★</span>
              <span>{movie.rating}</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-sm md:text-base truncate w-3/4">
              {movie.title}
            </h3>
            <span className="text-xs text-gray-400">{movie.year}</span>
          </div>

          <div className="flex justify-between items-center">
            <span
              className={`text-xs px-2 py-1 rounded-full border ${getPlatformStyle(
                movie.platform
              )}`}
            >
              {movie.platform.includes("Theatrical")
                ? "In Theaters"
                : movie.platform.split(" ")[0]}
            </span>
            {movie.release && (
              <span className="text-xs text-gray-400">
                {movie.release.split(",")[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSection = (title, section, color, emoji) => {
    const isActive = activeSection === section;
    const isAnimating = animating[section];

    return (
      <div
        className="mb-12 relative"
        onMouseEnter={() => handleMouseEnter(section)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-8 rounded-full bg-gradient-to-b ${color} transition-all duration-300 ${
                isActive ? "w-3" : ""
              }`}
            ></div>
            <h2 className="font-bold text-xl md:text-2xl flex items-center">
              <span
                className={`mr-2 transition-all duration-300 ${
                  isActive ? "scale-110" : ""
                }`}
              >
                {emoji}
              </span>
              {title}
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scrollSection(section, "left")}
              className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${
                isActive ? "opacity-100 scale-100" : "opacity-75 scale-95"
              } ${isAnimating ? "animate-pulse" : ""}`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollSection(section, "right")}
              className={`p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${
                isActive ? "opacity-100 scale-100" : "opacity-75 scale-95"
              } ${isAnimating ? "animate-pulse" : ""}`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          {/* Scroll indicators/shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

          <div
            id={section}
            className={`flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x scroll-smooth transition-all duration-300 ${
              isAnimating ? "scroll-animation" : ""
            }`}
            style={{
              scrollSnapType: "x mandatory",
              scrollPadding: "0 1rem",
            }}
          >
            {moviesData[section].map((movie, index) => (
              <div
                key={movie.id}
                className="snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                {renderMovieCard(movie, section)}
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                color.replace("from-", "bg-").split(" ")[0]
              } transition-all duration-300`}
              style={{
                width: `${
                  document.getElementById(section)
                    ? Math.min(
                        100,
                        (scrollPositions[section] /
                          (document.getElementById(section).scrollWidth -
                            document.getElementById(section).clientWidth)) *
                          100
                      )
                    : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-[4_4_0] min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white p-6 overflow-y-auto">
      {/* Ambient background effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-800/5 via-blue-900/5 to-purple-800/5 pointer-events-none"></div>

      {/* Movie particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh)
              translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes scroll-animation {
          0% {
            transform: translateX(0);
          }
          10% {
            transform: translateX(-5px);
          }
          20% {
            transform: translateX(5px);
          }
          30% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Header with animated gradient */}
      <div className="mb-12 relative">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-xl animate-pulse"></div>
        <h1 className="text-4xl font-bold mb-2 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x">
            Anime
          </span>
          <span className="absolute -top-2 -right-2 text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
            2025
          </span>
        </h1>
        <p className="text-gray-400 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Curated picks based on your taste
        </p>
      </div>

      {/* Sections */}
      {renderSection(
        "Trending Anime (2025)",
        "trending",
        "from-yellow-400 to-red-500",
        "🎌"
      )}
      {renderSection(
        "Recommended Anime",
        "recommended",
        "from-purple-500 to-blue-500",
        "👍"
      )}
      {renderSection(
        "All-Time Gold Anime",
        "allTimeGold",
        "from-amber-400 to-yellow-500",
        "🏆"
      )}
      {renderSection(
        "Upcoming Anime (2025)",
        "comingSoon",
        "from-green-400 to-teal-500",
        "🔮"
      )}

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2025 Anime • Curated with 💜</p>
      </div>
    </div>
  );
};

export default Anime;