import { useState, useEffect } from "react";

/**
 * Hook générique pour gérer l'affichage retardé d'un élément.
 * @param {boolean} initialState - État initial (false par défaut).
 * @param {number} delay - Temps en millisecondes avant d'afficher (1000ms par défaut).
 * @returns {boolean} - État indiquant si l'élément doit être affiché.
 */
const useDelayedVisibility = (initialState = false, delay = 1000) => {
    const [isVisible, setIsVisible] = useState(initialState);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer); // Nettoyage du timer lors du démontage
    }, [delay]);

    return isVisible;
};

export default useDelayedVisibility;
