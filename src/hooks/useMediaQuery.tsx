import {useEffect, useState} from "react";

type IMediaType = 'small' | 'medium' | 'large';

type IQuery = {
  small: string,
  medium: string,
  large: string,
}

type IMatches = {
  isSmall: boolean,
  isMedium: boolean,
  isLarge: boolean,
}

function useMediaQuery(query: IQuery): IMatches {
  const [matches, setMatches] = useState<IMatches>({
    isSmall: false,
    isMedium: false,
    isLarge: false,
  });

  const handleChange = (e: MediaQueryListEvent, key?: IMediaType) => {
    if(e.matches) {
      // @ts-ignore
      matches[`is${key.charAt(0).toUpperCase() + key.slice(1)}`] = true;
      setMatches({
        ...matches,
      });
    }else {
      // @ts-ignore
      matches[`is${key.charAt(0).toUpperCase() + key.slice(1)}`] = false;
      setMatches({
        ...matches,
      });
    }
  };

  useEffect(() => {
    const queryKeys = Object.keys(query) as IMediaType[];
    const matchMedias = queryKeys.map((key) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      const matchMedia = window.matchMedia(query[key]);
      matchMedia.addEventListener('change', (e) => handleChange(e, key));
      return matchMedia;
    });

    return () => {
      matchMedias.map(matchMedia => {
        matchMedia.removeEventListener('change', handleChange);
      });
    };

  }, [query]);

  return matches;
}

export default useMediaQuery;