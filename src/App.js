import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/imageCard";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [images, setImages] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.React_APP_API_KEY}&q=${searchWord}&image_type=photo&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })

      .catch((err) => console.log(err));
  }, [searchWord]);

  return (
    <div>
      <NavBar />
      <SearchBox searchText={(text) => setSearchWord(text)} />
      {!isLoading && !images.length && (
        <h1 className="text-5xl text-center mx-auto">Nothing Found</h1>
      )}
      <div className="container mx-auto ">
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
//https://source.unsplash.com/random
