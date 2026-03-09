import { useState, useCallback, useEffect } from 'react';

export function useTTS() {
    // Stores the string of the text currently being spoken
    const [playingText, setPlayingText] = useState(null);

    const stop = useCallback(() => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            setPlayingText(null);
        }
    }, []);

    const speak = useCallback((text, lang = 'de-DE') => {
        if (!window.speechSynthesis) {
            console.warn("Text-to-Speech is not supported in this browser.");
            return;
        }

        stop();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9; // Slightly slower for language learning

        utterance.onstart = () => setPlayingText(text);
        utterance.onend = () => setPlayingText(null);
        utterance.onerror = () => setPlayingText(null);

        // Optional: Try to find a specific German voice
        const voices = window.speechSynthesis.getVoices();
        const deVoice = voices.find(v => v.lang.startsWith('de-'));
        if (deVoice) {
            utterance.voice = deVoice;
        }

        window.speechSynthesis.speak(utterance);
    }, [stop]);

    // Ensure we cancel if the component unmounts
    useEffect(() => {
        return () => stop();
    }, [stop]);

    return { speak, stop, playingText };
}
