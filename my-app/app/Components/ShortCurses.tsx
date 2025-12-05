'use client'
import React, { useState, useMemo } from "react";

// FutureLearn-style Short Courses page (single-file React component)
// Tailwind CSS required in the project.
// Usage: place this file in your React or Next.js project and import into a page.

const sampleCourses = [
  {
    id: 1,
    title: "Becoming a Teacher",
    provider: "FutureLearn",
    type: "Short Course",
    level: "Beginner",
    length: "4 weeks",
    image: "/images/image14.webp",
    students: 12450,
    rating: 4.6,
    price: "Free",
    description:
      "Learn teaching fundamentals, classroom basics and develop your confidence to start teaching.",
  },
  {
    id: 2,
    title: "Digital Skills: Web Analytics",
    provider: "FutureLearn",
    type: "Short Course",
    level: "Intermediate",
    length: "2 weeks",
    image: "/images/image15.webp",
    students: 8650,
    rating: 4.4,
    price: "Free",
    description: "Understand web analytics, key metrics and how to measure website success.",
  },
  {
    id: 3,
    title: "Teaching English Online",
    provider: "FutureLearn",
    type: "Short Course",
    level: "Beginner",
    length: "3 weeks",
    image: "/images/image16.webp",
    students: 5400,
    rating: 4.7,
    price: "Paid",
    description: "Practical tips and tools for teaching English in the virtual classroom.",
  },
  {
    id: 4,
    title: "Mindfulness for Wellbeing",
    provider: "FutureLearn",
    type: "Short Course",
    level: "All levels",
    length: "2 weeks",
    image: "/images/image17.webp",
    students: 9300,
    rating: 4.5,
    price: "Free",
    description: "Build resilience and improve mental wellbeing with simple mindfulness practices.",
  },
  {
    id: 5,
    title: "Introduction to Cyber Security",
    provider: "FutureLearn",
    type: "Short Course",
    level: "Intermediate",
    length: "4 weeks",
    image: "/images/image18.webp",
    students: 11200,
    rating: 4.3,
    price: "Paid",
    description: "Get a practical introduction to cyber security essentials.",
  },
  {
    id: 6,
    title: "Creative Writing: Start Writing Fiction",
    provider: "FutureLearn",
    type: "Short Course",
    level: "Beginner",
    length: "5 weeks",
    image: "/images/image19.webp",
    students: 4300,
    rating: 4.8,
    price: "Free",
    description: "Start your fiction journey: structure, characters and style.",
  },
];

export default function FutureLearnShortCoursePage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [view, setView] = useState("grid");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = sampleCourses.filter((c) => {
      const matchesQuery =
        !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      const matchesLevel = level === "All" || c.level === level;
      return matchesQuery && matchesLevel;
    });

    if (sortBy === "popular") {
      list = list.sort((a, b) => b.students - a.students);
    } else if (sortBy === "rating") {
      list = list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "new") {
      list = list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [query, level, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <div className="font-bold text-xl">FutureLearn — Short Courses</div>
              <span className="text-sm text-gray-500">Explore bite-sized learning</span>
            </div>
            <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Discover</a>
              <a href="#" className="hover:text-gray-900">Subject</a>
              <a href="#" className="hover:text-gray-900">Sign in</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Short courses to boost your skills — free and paid options
              </h1>
              <p className="mt-3 text-gray-600">
                Learn in a few weeks with expert educators. Choose courses by level, duration or
                topic.
              </p>

              <div className="mt-6 flex gap-3">
                <div className="flex items-center bg-white rounded-md shadow-sm px-3 py-2">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses, e.g. teaching, mindfulness..."
                    className="outline-none w-72 text-sm"
                  />
                  <button
                    onClick={() => setQuery("")}
                    className="ml-3 text-sm text-blue-600 hover:underline"
                  >
                    Clear
                  </button>
                </div>

                <div className="hidden sm:flex gap-2">
                  <button
                    onClick={() => setView("grid")}
                    className={`px-3 py-2 rounded-md text-sm ${
                      view === "grid" ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`px-3 py-2 rounded-md text-sm ${
                      view === "list" ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">Top picks</h3>
                <ul className="mt-3 text-sm text-gray-600 space-y-2">
                  <li>Becoming a Teacher</li>
                  <li>Digital Skills: Web Analytics</li>
                  <li>Mindfulness for Wellbeing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Filter</h4>

              <div className="mt-4">
                <label className="block text-sm text-gray-700 mb-2">Level</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full border rounded-md p-2 text-sm"
                >
                  <option>All</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>All levels</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-gray-700 mb-2">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border rounded-md p-2 text-sm"
                >
                  <option value="popular">Most popular</option>
                  <option value="rating">Top rated</option>
                  <option value="new">Newest</option>
                </select>
              </div>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Price</h5>
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1 border rounded text-sm">All</button>
                  <button className="px-3 py-1 border rounded text-sm">Free</button>
                  <button className="px-3 py-1 border rounded text-sm">Paid</button>
                </div>
              </div>
            </div>

            <div className="mt-4 hidden lg:block">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h5 className="font-semibold">Popular topics</h5>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 border rounded text-sm">Teaching</span>
                  <span className="px-3 py-1 border rounded text-sm">Digital skills</span>
                  <span className="px-3 py-1 border rounded text-sm">Wellbeing</span>
                  <span className="px-3 py-1 border rounded text-sm">Cyber security</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Course grid / list */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-600">{filtered.length} courses found</div>
              <div className="text-sm text-gray-600">Showing: <span className="font-medium">Short courses</span></div>
            </div>

            {view === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((c) => (
                  <article key={c.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                      <img src={c.image} alt={c.title} className="w-full h-44 object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{c.type}</span>
                        <span className="text-xs text-gray-500">{c.length}</span>
                      </div>
                      <h3 className="mt-2 font-semibold text-lg">{c.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{c.description}</p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-gray-500">{c.provider}</div>
                        <div className="text-sm font-semibold">{c.price}</div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-sm text-gray-600">⭐ {c.rating}</div>
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
                          View course
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((c) => (
                  <div key={c.id} className="bg-white p-4 rounded-md shadow-sm flex gap-4 items-start">
                    <img src={c.image} alt={c.title} className="w-36 h-24 object-cover rounded" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{c.title}</h3>
                        <div className="text-sm text-gray-500">{c.price}</div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{c.description}</p>
                      <div className="mt-2 text-xs text-gray-500">{c.length} • {c.level}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">⭐ {c.rating}</div>
                      <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">View</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination simple */}
            <div className="mt-6 flex justify-center">
              <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" className="px-3 py-2 rounded-l-md border bg-white text-sm">Prev</a>
                <a href="#" className="px-3 py-2 border bg-white text-sm">1</a>
                <a href="#" className="px-3 py-2 border bg-white text-sm">2</a>
                <a href="#" className="px-3 py-2 border bg-white text-sm">3</a>
                <a href="#" className="px-3 py-2 rounded-r-md border bg-white text-sm">Next</a>
              </nav>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} FutureLearn-style Demo — Built with React & Tailwind
        </div>
      </footer>
    </div>
  );
}
