import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div>
      <div class="max-w-sm m-2 rounded overflow-hidden shadow-lg">
        <img
          class=" w-full"
          src={image.previewURL}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Photos By {image.user}</div>
          <ul>
            <li>
              <strong> Views : </strong>
              {image.views}
            </li>
            <li>
              <strong> Downloads : </strong>
              {image.downloads}
            </li>
            <li>
              <strong> Likes : </strong>
              {image.likes}
            </li>
          </ul>
        </div>

        <div class="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
