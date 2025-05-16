import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Film, User, Clapperboard } from "lucide-react";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const CinematicSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "drama",
    "action",
    "Christopher Nolan",
  ]);

  // Function to fetch search results from API
  const fetchSearchResults = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userQuery: searchQuery }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("API response:", data);

      // Extract users array from the response
      const usersArray = data.users || [];
      setResults(usersArray);

      // Add to recent searches if not already there
      if (!recentSearches.includes(searchQuery.trim())) {
        setRecentSearches((prev) => [searchQuery.trim(), ...prev.slice(0, 4)]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounce function to limit API calls
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.trim()) {
        fetchSearchResults(query);
      } else {
        setResults([]);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div className="flex-[4_4_0] min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-gray-900 to-gray-800/90 backdrop-blur-sm border-b border-yellow-500/20 p-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <Clapperboard
              className="text-yellow-400 h-6 w-6"
              strokeWidth={1.5}
            />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
              Chill - Search
            </h1>
          </div>

          {results.length > 0 && (
            <motion.button
              onClick={clearSearch}
              className="text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <X size={16} />
              <span className="text-sm">Clear</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-5xl mx-auto p-6">
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex gap-3 items-center">
            <div className="flex-1 group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-yellow-400 opacity-70 group-hover:opacity-100 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for movie fans, directors, critics..."
                  className="w-full py-3 pl-12 pr-12 bg-gray-800 border-2 border-gray-700 focus:border-yellow-400 rounded-xl outline-none placeholder-gray-500 transition-all duration-300"
                  autoFocus
                />
                {query && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-200 transition-colors" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {recentSearches.length > 0 && query === "" && (
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Film size={14} />
                <span>Recent Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <div className="mt-6 pb-8">
          <AnimatePresence>
            {loading && (
              <motion.div
                className="flex justify-center items-center h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LoadingSpinner size="lg" />
              </motion.div>
            )}

            {!loading && results.length === 0 && query.trim() !== "" && (
              <motion.div
                className="flex flex-col items-center justify-center py-16 text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Film
                  className="h-16 w-16 text-yellow-400 mb-4"
                  strokeWidth={1.5}
                />
                <p className="text-lg font-medium">No results found</p>
                <p className="text-sm mt-2 text-gray-500">
                  Try different search terms
                </p>
              </motion.div>
            )}

            {!loading && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-200">
                    Found{" "}
                    <span className="text-yellow-400">{results.length}</span>{" "}
                    results
                  </h2>
                </div>

                <div className="space-y-3">
                  {results.map((user, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={`/profile/${user.username}`}
                        className="block p-4 bg-gray-800/70 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all"
                      >
                        <div className="flex gap-4 items-center">
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400">
                              {user.Img ? (
                                <img
                                  src={user.Img}
                                  className="w-full h-full object-cover"
                                  alt={user.username}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <User className="h-8 w-8 text-gray-500" />
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-bold text-yellow-300 truncate">
                                @{user.username}
                              </h3>
                              {user.fullName && (
                                <span className="text-gray-400 text-sm">
                                  ({user.fullName})
                                </span>
                              )}
                            </div>
                          </div>

                          <motion.button
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View</span>
                            <Clapperboard className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CinematicSearch;
