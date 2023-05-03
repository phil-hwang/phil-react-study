import {useCallback, useEffect, useState} from "react";

interface ISessionEvent<T> {
    key: string,
    value: T | null
}

const eventTarget = new EventTarget();

const getCustomEvent = <T = any>(eventType: string, key: string, val: T | null) => {
    return new CustomEvent<ISessionEvent<T>>(eventType, {
        detail: {
            key: key,
            value: val
        }
    })
}

function useSessionStorage<T = any>(key: string, eventType = "change-session-value") {
    const raw = sessionStorage.getItem(key);
    const [value, setValue] = useState<T>(raw ? JSON.parse(raw) : null);

    const update = useCallback((val: T) => {
        sessionStorage.setItem(key, JSON.stringify(val));
        eventTarget.dispatchEvent(getCustomEvent(eventType, key, val));
    }, [key]);

    const clear = () => {
        sessionStorage.removeItem(key);
        eventTarget.dispatchEvent(getCustomEvent(eventType, key, null));
    }

    useEffect(() => {
        const listener = (e: Event) => {
            const sessionEvent = e as CustomEvent<ISessionEvent<T>>;
            if(sessionEvent.detail.key === key) {
                const valStr = sessionStorage.getItem(key);
                setValue(valStr ? JSON.parse(valStr) : null);
            }
        };

        eventTarget.addEventListener(eventType, listener);

        return () => {
            eventTarget.removeEventListener(eventType, listener);
        }
    });

    return {
        sessionValue: value,
        updateSession: update,
        clearSession: clear
    };
}

export default useSessionStorage;