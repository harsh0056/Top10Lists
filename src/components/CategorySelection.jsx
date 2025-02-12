
import { useState } from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = [
    { name: "Bizarre", subcategories: ["Weird News", "Mysteries", "Strange Events"] },
    { name: "Entertainment", subcategories: ["Music", "TV Shows", "Celebrities"] },
    { name: "Movies", subcategories: ["Hollywood", "Bollywood", "Reviews"] },
    { name: "General Knowledge", subcategories: ["Science", "History", "Geography"] },
    { name: "Startups", subcategories: ["Tech Startups", "Funding", "Success Stories"] },
    { name: "Security", subcategories: ["Cybersecurity", "Data Privacy", "Ethical Hacking"] },
    { name: "AI", subcategories: ["Machine Learning", "Deep Learning", "AI Trends"] },
    { name: "Apps", subcategories: ["Mobile Apps", "Web Apps", "App Development"] },
    { name: "Tech", subcategories: ["Gadgets", "Software", "Innovations"] }
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="px-4 mb-8 border-b py-5 text-gray-900 font-semibold">
      <div className="w-full">
        <div className="flex flex-wrap gap-6">
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2 flex-shrink-0 ${activeCategory ? '' : 'active-button'}`}
          >
            All
          </button>
  
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button
                className={`px-4 py-2 flex-shrink-0 ${
                  activeCategory === category.name ? 'active-button' : ''
                }`}
                onClick={() => onSelectCategory(category.name)}
              >
                {category.name}
              </button>
  
              {hoveredCategory === category.name && (
                <div className="fixed mt-2 w-48 bg-white shadow-lg border rounded-lg z-50">
                  {category.subcategories.map((sub) => (
                    <div
                      key={sub}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => onSelectCategory(sub)}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
