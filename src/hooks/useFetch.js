import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../constants/base";
const instance = axios.create({
  baseURL: { BASE_URL },
  headers: {
    Authorization: { API_KEY },
    "Content-Type": "application/json",
  },
});

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) {
      instance
        .get("/api/v1/messages/")
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, data?.length]);

  const postMessage = (text) => {
    instance
      .post("/api/v1/messages/", { text: text })
      .then((_) => {
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  const deleteMessage = (messageId) => {
    instance
      .delete(`/api/v1/messages/${messageId}`)
      .then((_) => {
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  const deleteMessages = () => {
    const datamap = data?.map((ele) =>
      instance.delete(`/api/v1/messages/${ele?.id}`)
    );
    Promise?.all(datamap)
      .then((_) => {
        setLoading(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  return { data, loading, error, postMessage, deleteMessage, deleteMessages };
}

export default useFetch;
