import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const vocabCache = {};

export function useVocabulary(level) {
  const [vocab, setVocab] = useState(vocabCache[level] || []);
  const [loading, setLoading] = useState(!vocabCache[level]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!level) return;

    if (vocabCache[level]) {
      setVocab(vocabCache[level]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchVocab = async () => {
      const { data, error } = await supabase
        .from('vocabulary')
        .select('*')
        .eq('level', level);

      if (error) {
        console.error('Error fetching vocabulary:', error);
        setError(error);
        setLoading(false);
      } else {
        vocabCache[level] = data;
        setVocab(data);
        setLoading(false);
      }
    };

    fetchVocab();
  }, [level]);

  return { vocab, loading, error };
}
