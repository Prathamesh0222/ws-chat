import axios from "axios";
import { useEffect, useState } from "react";

type Conversation = {
  _id: string;
  conversations: string;
};

const useGetConversation = ():{loading:boolean, conversations:Conversation[]} => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        const { data } = response;
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data.filteredUsers);
      } catch (err: any) {
        console.error("Error fetching conversations:", err);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
