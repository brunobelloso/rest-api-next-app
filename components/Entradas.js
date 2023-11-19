import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Entradas = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lógica para obtener datos de la API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://vitalvibe.net/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError(
          console.log(
            "Error al cargar los artículos. Por favor, inténtalo de nuevo más tarde."
          )
        );
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-extrabold mb-6">Últimos Artículos</h2>
      <ul className="list-none">
        {posts.map((post) => (
          <li
            key={post.id}
            className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <Link
              className="text-indigo-500 hover:underline"
              href="/entradas/[entrada]"
              as={`/entradas/${post.slug}`}
            >
              <h3 className="text-2xl font-semibold mb-2">
                {post.title.rendered}
              </h3>
            </Link>
            <div className="text-gray-700">
              <p className="text-sm mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p
                className="text-base leading-6"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entradas;
